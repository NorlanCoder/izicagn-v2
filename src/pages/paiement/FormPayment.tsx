import Footer from "../../components/general/footer"
import ImgDeco from '../../assets/imgdeco.png'
import WinIcon from '../../assets/goal.png'
import Navbar from "../../components/general/navbar"
import { DonAmountMin } from "../../utils/data"
import DonAmmount from "../../components/cagnotte/donAmmount"

const FormPayment = () => {
    return (
        <div className='px-5 w-full'>
            <Navbar />

            <section className="pt-8 mb-8 flex flex-col items-center gap-y-4">

                {/* Resume Block */}
                <div className="flex sm:flex-row flex-col items-center sm:space-y-0 space-y-5 sm:space-x-5 p-[20px] md:w-[699px] border border-[#EDEDF3] rounded-[17px] shadow shadow-[#1929470A] ">
                    <img src={ImgDeco} className="sm:w-[165px] w-1/2 h-[123px] rounded-[17px]" alt="Cagnotte Image Resume" />
                    <div className="flex flex-col space-y-2 justify-evenly">
                        <p className="text-[#858585] text-[13px] ">Vous allez soutenir <span className="text-black font-bold">ONG Hands together</span> dans la cause :</p>
                        <h1 className="text-[22px] font-bold">Sauvons Rufus, le jeune de 9ans</h1>
                        <p className="text-[#858585] text-[13px] ">Cotnou, Bénin</p>
                    </div>
                </div>

                {/* Form */}
                <div className="flex flex-col p-[20px] md:w-[699px] border border-[#EDEDF3] rounded-[17px] shadow shadow-[#1929470A] ">
                    {/* Montant */}
                    <div className="mb-5">
                        <h2 className="text-[18px] font-bold mb-2">Montant du don</h2>
                        <div className="my-5 bg-[#EEF7FD] rounded-[10px] py-[18px] px-[6px] flex flex-row items-start space-x-3 ">
                            <div className="w-[42px] h-[42px] rounded-[100px] bg-white flex flex-row justify-center items-center ">
                                <img src={WinIcon} alt="" />
                            </div>
                            <div className="">
                                <h2 className="text-[#0C2A8C] text-[14px] font-bold ">9 000 000 Fcfa restant pour atteindre l’objectif</h2>
                                <p className="text-[#4C545D] text-[12px] ">Montant visé 15 000 000 Fcfa</p>
                            </div>
                        </div>
                        <div className='flex flex-row flex-wrap gap-3 mb-4'>
                            {DonAmountMin.map((item) => (
                                <DonAmmount item={item} key={item.id.toString()} />
                            ))}
                        </div>

                        <div className='relative mt-10 mb-5'>
                            <div className='w-2/5 h-16 rounded-[18px] border border-[#DFE3E6CC] absolute z-0 left-0 -top-3 '></div>
                            <input type="number" className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0' placeholder='Autre montant' />
                        </div>
                    </div>

                    {/* Informations */}
                    <div className="mb-4">
                        <h2 className="text-[18px] font-bold mb-2">Vos informations personnelles</h2>
                        <div className='relative mt-5 mb-5 flex flex-row space-x-4 '>
                            <input type="text" className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-1/2 relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0' placeholder='Nom' />
                            <input type="text" className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-1/2 relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0' placeholder='Prénoms' />
                        </div>
                        <div className='relative mb-5 flex flex-row space-x-4 '>
                            <input type="email" className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0' placeholder='Email' />
                        </div>
                        <div className='relative mb-5 flex flex-row space-x-4 '>
                            <input type="tel" className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0' placeholder='Telephone' />
                        </div>
                        <div className='flex flex-row'>
                            <button className='bg-[#07AED8] text-white rounded-full w-full font-bold text-[20px] px-[30px] py-[12px] cursor-pointer'>Envoyer mon soutien</button>
                        </div>

                        <div className="flex flex-row justify-center mt-4">
                            <p className="md:w-4/5  text-[#37373A] text-center ">En confirmant, vous acceptez les <span className="underline">Conditions d'utilisation</span> de Izicagn et reconnaissez notre <span className="underline">Avis de confidentialité</span>.</p>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    )
}

export default FormPayment