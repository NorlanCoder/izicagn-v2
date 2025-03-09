
import Footer from '../../components/general/footer'
import Share from "../../assets/cagnotte/ph_share-fat-light.png"
import ChevronBack from '../../assets/cagnotte/ion_chevron-back-outline.png'
import Navbar from '../../components/general/navbar'
import Profil from '../../assets/cagnotte/cagn2.png'

const SuccessPayment = () => {
    return (
        <div className="px-5 w-full">
            
            <Navbar />

            <div className='mt-8 flex justify-center'>
                <div className=' my-10 bg-white flex flex-col gap-6 items-center justify-center w-full md:w-[657px] md:h-[627px] p-4 rounded-[30px] drop-shadow-2xl'>
                    <div className='w-full sm:w-[290px] h-[103.68280029296875px] bg-[#FD835266] rounded-[18px] shadow'></div>
                    <h1 className=' font-bold text-[24px] text-center'>Merci pour votre générosité !</h1>
                    <p className=' text-center text-[13.55px] md:max-w-[532px]'>Votre don a été effectué avec succès ! Nous vous remercions pour votre 
                        contribution à la cause <span className=' font-bold'>Sauvons Rufus, le jeune de 9ans</span> de ONG Hands 
                        together
                    </p>
                    <div className='flex md:flex-row flex-col items-center md:space-x-4 border rounded-[30px] p-4 border-[#E6E8EF] w-full md:max-w-[532px]'>
                        <img src={Profil} alt="" className='w-[111.1132583618164px] h-[88.91244506835938] rounded-[15px]'/>
                        <div className='flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-3 md:mt-0 mt-4  md:items-center'>
                            <div>
                                <h2 className=' font-extrabold text-[18.63px] sm:text-left text-center '>Sauvons Rufus, le jeune de 9ans</h2>
                                <p className=' text-[11px] text-[#858585] font-bold sm:text-left text-center'>Cotonou, Bénin</p>
                            </div>
                            <button className='bg-[#EEF0F5] flex flex-row justify-center space-x-2 items-center rounded-[15px] py-[12px] px-[10px] md:w-[138px] w-full cursor-pointer '>
                                <p className=' font-bold text-[12.7px] '>Partager</p>
                                <img src={Share} alt="" className='w-5' />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <img src={ChevronBack} alt="" className='w-4' />
                        <p className='text-[16px] text-[#455276] '>Revenir aux cagnottes</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SuccessPayment