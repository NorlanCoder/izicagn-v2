import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/Logo-izicagn.svg";
import LoginLeft from "../../assets/auth/login_left.svg";
import { Eye, EyeClosed } from "lucide-react";
import { useCreateUserMutation, useEncryptMutation, useValidateOtpMutation } from "../../features/auth/mutations";

const Loading = () => {
  return (
    <div className="bg-[#91E5FA] w-[100vw] h-[100vh]">
    </div>
  );
};

const Signup = () => {
  const [pageLoading, setPageLoading] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(false);
  const [personId, setPersonId] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [otpError, setOtpError] = useState("");


  const {
    mutateAsync: createUser,
    isPending,
    error,
  } = useCreateUserMutation();

  const encryptMutation = useEncryptMutation();
  const validateOtpMutation = useValidateOtpMutation();

  const handleValidateOtp = async () => {
    setOtpError("");
    const code = otp.join("");
    if (code.length !== 6) {
      setOtpError("Veuillez entrer les 6 chiffres.");
      return;
    }
    try {
      const res = await validateOtpMutation.mutateAsync({ id: personId, otp: code });

      console.log(res);

      navigate("/login");

    } catch (err: any) {
      setOtpError(err.message || "Code OTP invalide.");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }







    const payload = {
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      birthDate: birthDate ? new Date(birthDate).toISOString() : null,
      encryptedPassword: password,
    };

    try {
      const encryptResult = await encryptMutation.mutateAsync({ data: password });
      const encryptedPassword = encryptResult;


      console.log('====================================');
      console.log(encryptedPassword);
      console.log('====================================');

      const payload = {
        firstName,
        lastName,
        email,
        countryCode,
        phone,
        birthDate: birthDate ? new Date(birthDate).toISOString() : null,
        encryptedPassord: encryptedPassword,
      };

      const res = await createUser(payload);
      setPersonId(res.id as string);

      setIsRegistered(true);
      // navigate("/login");
    } catch {
      console.log('Quelque chose s est mal passé');

    }



  };

  return (
    <>
      {pageLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-row md:h-[100vh]">
          <div className="md:w-7/12 w-full lg:px-20 md:px-10 px-10 pt-10 pb-16 h-full overflow-y-auto auth-scroll">
            <div className="">
              <a href="/"><img src={Logo} alt="" /></a>
            </div>
            {
              isRegistered ? (
                <div className="h-full md:max-w-[450px] m-auto gap-0 flex flex-col justify-center items-center xl:px-24">
                  <div className="w-full mb-8 md:mt-0 mt-10">
                    <h1 className="text-[32px] font-bold text-[#001829]">Vérification OTP</h1>
                    <p className="text-[#5C6F84] text-[16px]">Entrez le code à 6 chiffres envoyé à votre téléphone</p>
                  </div>

                  <div className="flex gap-3 w-full justify-center mb-6">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/, "");
                          const newOtp = [...otp];
                          newOtp[index] = val;
                          setOtp(newOtp);
                          if (val && index < 5) {
                            document.getElementById(`otp-${index + 1}`)?.focus();
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace" && !otp[index] && index > 0) {
                            document.getElementById(`otp-${index - 1}`)?.focus();
                          }
                        }}
                        onPaste={(e) => {
                          e.preventDefault();
                          const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
                          if (pasted.length > 0) {
                            const newOtp = Array(6).fill("");
                            pasted.split("").forEach((ch, i) => { newOtp[i] = ch; });
                            setOtp(newOtp);
                            const focusIdx = Math.min(pasted.length, 5);
                            document.getElementById(`otp-${focusIdx}`)?.focus();
                          }
                        }}
                        className="w-14 h-14 text-center text-2xl font-bold bg-[#F3F5F7] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#23C7ED]"
                      />
                    ))}
                  </div>

                  {otpError && (
                    <p className="text-red-500 text-sm mb-3 w-full">{otpError}</p>
                  )}

                  <button
                    onClick={handleValidateOtp}
                    disabled={validateOtpMutation.isPending}
                    className="bg-[#23C7ED] rounded-full w-full flex justify-center items-center py-[18px] text-black font-semibold disabled:opacity-50"
                  >
                    {validateOtpMutation.isPending ? "Vérification..." : "Valider le code"}
                  </button>
                </div>
              ) : (
                <div className="h-full flex flex-col justify-center items-center xl:px-24 mt-6 md:mt-12">
                  <div className="w-full mb-8">
                    <h1 className="text-[32px] font-bold text-[#001829] ">
                      Créez votre compte
                    </h1>
                    <p className="text-[#5C6F84] text-[16px]  ">
                      Inscrivez-vous pour commencer l&apos;aventure
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full space-y-3">
                    <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                      <div className="w-full bg-[#F3F5F7] rounded-[12px]">
                        <input
                          type="text"
                          placeholder="Prénom"
                          className="w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="w-full bg-[#F3F5F7] rounded-[12px]">
                        <input
                          type="text"
                          placeholder="Nom"
                          className="w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="w-full bg-[#F3F5F7] rounded-[12px]">
                      <input
                        type="email"
                        placeholder="john.doe@gmail.com"
                        className="w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                      <div className="md:w-4/12 w-full bg-[#F3F5F7] rounded-[12px]">
                        <select
                          className="w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0 bg-[#F3F5F7]"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                            Choisir un pays
                          </option>
                          <option value="229">🇧🇯  +229 BJ</option>
                          <option value="33">🇫🇷  +33 FR</option>
                          <option value="225">🇨🇮  +225 CI</option>
                          <option value="221">🇸🇳  +221 SN</option>
                          <option value="1">🇺🇸  +1 US</option>
                        </select>
                      </div>
                      <div className="md:w-8/12 w-full bg-[#F3F5F7] rounded-[12px]">
                        <input
                          type="tel"
                          placeholder="Numéro de téléphone"
                          className="w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="w-full bg-[#F3F5F7] rounded-[12px]">
                      <input
                        type="date"
                        className="w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0 text-[#5C6F84]"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                      />
                    </div>

                    <div className="w-full bg-[#F3F5F7] rounded-[12px] flex flex-row items-center space-x-1 pr-4">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Mot de passe"
                        className="w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      {showPassword ? (
                        <EyeClosed
                          className="cursor-pointer"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <Eye
                          className="cursor-pointer"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>

                    <div className="w-full bg-[#F3F5F7] rounded-[12px] flex flex-row items-center space-x-1 pr-4">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirmer le mot de passe"
                        className="w-full h-full font-semibold py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      {showConfirmPassword ? (
                        <EyeClosed
                          className="cursor-pointer"
                          onClick={() => setShowConfirmPassword(false)}
                        />
                      ) : (
                        <Eye
                          className="cursor-pointer"
                          onClick={() => setShowConfirmPassword(true)}
                        />
                      )}
                    </div>

                    {/* <div className="w-full">
                  <img src={Recaptcha} alt="reCaptcha" />
                </div> */}

                    {error && (
                      <div className="w-full mt-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-[12px] px-4 py-3">
                        {error.message}
                      </div>
                    )}

                    <div className="w-full mt-3">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="bg-[#23C7ED] disabled:opacity-60 disabled:cursor-not-allowed rounded-full w-full flex justify-center items-center py-[18px] text-white"
                      >
                        {isPending ? "Création du compte..." : "Créer mon compte"}
                      </button>
                    </div>


                    <div className="w-full mt-3">
                      <p className="text-center text-[13px] text-[#838C98] ">En vous connectant, vous reconnaissez avoir lu et compris <br className="hidden md:block" /> et accepté les <a href="" className="underline cursor-pointer text-[#1785C9] font-semibold">conditions d’utilisation</a> et la <a href="" className="underline cursor-pointer text-[#1785C9] font-semibold">politique de <br className="hidden md:block" /> confidentialité</a> de izicagn</p>
                    </div>
                  </form>
                </div>


              )
            }
          </div>
          <div className="w-5/12 md:flex hidden h-[100vh]">
            <img src={LoginLeft} alt="" className="h-full w-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
