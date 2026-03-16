import { useEffect, useState } from "react"
import Logo from "../../assets/Logo-izicagn.svg"
import LoginLeft from "../../assets/auth/login_left.svg"
import { Eye, EyeClosed } from "lucide-react"
import Recaptcha from '../../assets/auth/reCaptcha.png'
import { useEncryptMutation, useLoginMutation } from "../../features/auth/mutations"
import { useNavigate } from "react-router"

export const Loading = () => {
    return (
        <div className="bg-[#91E5FA] w-[100vw] h-[100vh] ">

        </div>
    )
}

const Login = () => {

    const [pageLoading, setPageLoading] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [countryCode, setCountryCode] = useState("229");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const encryptMutation = useEncryptMutation();
    const loginMutation = useLoginMutation();

    const isLoading = encryptMutation.isPending || loginMutation.isPending;

    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false)
        }, 2000)
    }, [])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!phone.trim() || !password.trim()) {
            setError("Veuillez remplir tous les champs.");
            return;
        }

        try {
            const encryptResult = await encryptMutation.mutateAsync({ data: password });
            const encryptedPassword = encryptResult;

            console.log(encryptedPassword);
            

            const loginResult = await loginMutation.mutateAsync({
                countryCode,
                phone,
                encryptedPassword,
            });

            if (loginResult.token) {
                localStorage.setItem("token", loginResult.token);
            }

            navigate("/dashboard");
        } catch (err: any) {
            setError(err.message || "Une erreur est survenue lors de la connexion.");
        }
    };

    return (
        <>
            {
                pageLoading ? (
                    <Loading />
                ) : (
                    <div className="flex flex-row h-screen">
                        <div className="md:w-7/12 w-full lg:px-20 md:px-10 px-10 py-10 h-full overflow-y-auto auth-scroll">
                            <a href="/"><img src={Logo} alt="" /></a>
                            

                            <div className="h-full md:max-w-[450px]  m-auto gap-0 flex flex-col justify-center items-center xl:px-24">

                                <div className="w-full mb-8 md:mt-0 mt-10">
                                    <h1 className="text-[32px] font-bold text-[#001829] ">Bienvenue sur izicagn</h1>
                                    <p className="text-[#5C6F84] text-[16px] ">Connectez-vous à votre compte</p>
                                </div>

                                <div className="w-full">
                                    <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3 flex flex-row items-center">
                                        <select
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            className="bg-transparent py-[22px] pl-[12px] pr-[4px] rounded-l-[12px] font-semibold focus:outline-0 text-[#5C6F84]"
                                        >
                                            <option value="292">+292</option>
                                            <option value="229">+229</option>
                                            <option value="228">+228</option>
                                            <option value="225">+225</option>
                                            <option value="33">+33</option>
                                            <option value="1">+1</option>
                                        </select>   
                                        <input
                                            type="tel"
                                            placeholder="Numéro de téléphone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full font-semibold h-full py-[22px] px-[10px] rounded-r-[12px] focus:border-none focus:outline-0"
                                        />
                                    </div>
                                    <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3 flex flex-row items-center space-x-1 pr-4">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Mot de passe"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className=" w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0"
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
                                </div>

                                <div className="w-full">
                                    <img src={Recaptcha} alt="" />
                                </div>

                                <div className="w-full my-3">
                                    <a href="/forgot-password" className="text-[14px] font-semibold text-[#1485B2] ">Mot de passe oublié ?</a>
                                </div>

                                <div className="w-full mt-3">
                                    {error && (
                                        <p className="text-red-500 text-sm mb-3">{error}</p>
                                    )}
                                    <button
                                        onClick={handleLogin}
                                        disabled={isLoading}
                                        className="bg-[#23C7ED] rounded-full w-full flex justify-center items-center py-[18px] text-black font-semibold disabled:opacity-50"
                                    >
                                        {isLoading ? "Connexion..." : "Se connecter"}
                                    </button>
                                </div>

                                <div className="w-full mt-3">
                                    <p className="text-center text-[13px] text-[#838C98] ">En vous connectant, vous reconnaissez avoir lu et compris <br className="hidden md:block" /> et accepté les <a href="" className="underline cursor-pointer text-[#1785C9] font-semibold">conditions d’utilisation</a> et la <a href="" className="underline cursor-pointer text-[#1785C9] font-semibold">politique de <br className="hidden md:block" /> confidentialité</a> de izicagn</p>
                                </div>

                            </div>

                        </div>
                        <div className="w-5/12 md:flex hidden h-full justify-start ">
                            <img src={LoginLeft} alt="" className="h-full w-full" />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Login