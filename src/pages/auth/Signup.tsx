import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/Logo-izicagn.svg";
import LoginLeft from "../../assets/auth/login_left.svg";
import { Eye, EyeClosed } from "lucide-react";
import { useCreateUserMutation } from "../../features/auth/mutations";

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
  const {
    mutateAsync: createUser,
    isPending,
    error,
  } = useCreateUserMutation();

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
      encryptedPassord: password,
    };

    try {
      await createUser(payload);
      navigate("/login");
    } catch {
      // l'erreur est déjà exposée via `error` dans le hook
    }
  };

  return (
    <>
      {pageLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-row h-[100vh]">
          <div className="md:w-7/12 w-full lg:px-20 md:px-10 px-20 pt-10 pb-16 h-full overflow-y-auto auth-scroll">
            <div className="flex justify-between items-center">
              <img src={Logo} alt="Izicagn" className="h-10" />
            </div>
            <div className="h-full flex flex-col justify-center items-center xl:px-24 mt-24">
              <div className="w-full mb-8">
                <h1 className="text-[40px] text-[#001829] ">
                  Créez votre compte
                </h1>
                <p className="text-[#5C6F84] text-[18px] ">
                  Inscrivez-vous pour commencer l&apos;aventure
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full space-y-3">
                <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                  <div className="w-full bg-[#F3F5F7] rounded-[12px]">
                    <input
                      type="text"
                      placeholder="Prénom"
                      className="w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full bg-[#F3F5F7] rounded-[12px]">
                    <input
                      type="text"
                      placeholder="Nom"
                      className="w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"
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
                    className="w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                  <div className="md:w-4/12 w-full bg-[#F3F5F7] rounded-[12px]">
                    <select
                      className="w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0 bg-[#F3F5F7]"
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
                      className="w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="w-full bg-[#F3F5F7] rounded-[12px]">
                  <input
                    type="date"
                    className="w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0 text-[#5C6F84]"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                  />
                </div>

                <div className="w-full bg-[#F3F5F7] rounded-[12px] flex flex-row items-center space-x-1 pr-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
                    className="w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"
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
                    className="w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"
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
                  <p className="text-center text-[#838C98] ">
                    En vous inscrivant, vous reconnaissez avoir lu, compris et
                    accepté les{" "}
                    <span className="underline cursor-pointer">
                      conditions d&apos;utilisation
                    </span>{" "}
                    et la{" "}
                    <span className="underline cursor-pointer">
                      politique de confidentialité
                    </span>{" "}
                    de izicagn
                  </p>
                </div>
              </form>
            </div>
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

