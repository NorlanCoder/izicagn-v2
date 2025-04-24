import { useEffect, useState } from "react"
import Logo from "../../assets/logo.png"
import LoginLeft from "../../assets/auth/login_left.svg"
import { EyeClosed } from "lucide-react"
import Recaptcha from  '../../assets/auth/reCaptcha.png'

export const Loading = () => {
    return(
        <div className="bg-[#91E5FA] w-[100vw] h-[100vh] ">

        </div>
    )
}

const Login = () => {

    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setPageLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {
                pageLoading ? (
                    <Loading />
                ) : (
                    <div className="flex flex-row">
                        <div className="md:w-7/12 w-full lg:px-20 md:px-10 px-20 py-10 lg:h-[100vh] h-auto">
                            <div><img src={Logo} alt="" /></div>
                            <div className="h-full flex flex-col justify-center items-center xl:px-24">
                                
                                <div className="w-full mb-8 md:mt-0 mt-10">
                                    <h1 className="text-[40px] text-[#001829] ">Bienvenue sur izicagn</h1>
                                    <p className="text-[#5C6F84] text-[18px] ">Connectez-vous à votre compte</p>
                                </div>

                                <div className="w-full">
                                    <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3">
                                        <input type="text" placeholder="john.doe@gmail.com" className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" />
                                    </div>
                                    <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3 flex flex-row items-center space-x-1 pr-4">
                                        <input type="password" placeholder="Mot de passe" className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" />
                                        <EyeClosed className="cursor-pointer" />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <img src={Recaptcha} alt="" />
                                </div>

                                <div className="w-full my-3">
                                    <p className="text-[16px] underline text-[#1078EF] ">Mot de passe oublié</p>
                                </div>

                                <div className="w-full mt-3">
                                    <button className="bg-[#23C7ED] rounded-full w-full flex justify-center items-center py-[18px] text-white ">Se connecter</button>
                                </div>

                                <div className="w-full mt-3">
                                    <p className="text-center text-[#838C98] ">En vous connectant, vous reconnaissez avoir lu et compris et accepté les <span className="underline cursor-pointer ">conditions d’utilisation</span> et la <span className="underline cursor-pointer ">politique de confidentialité</span> de izicagn</p>
                                </div>

                            </div>
                        </div>
                        <div className="w-5/12 md:flex hidden h-[100vh] ">
                            <img src={LoginLeft} alt="" className="h-full w-full " />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Login