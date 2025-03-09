
import Footer from '../../components/general/footer'
import Share from "../../assets/cagnotte/ph_share-fat-light.png"
import Navbar from '../../components/general/navbar'
import Profil from '../../assets/cagnotte/cagn2.png'

const SuccessPayment = () => {
    return (
        <div className="px-5 w-full bg-[#F6FAFD]">
            
            <Navbar />

            <div className='mt-8 flex justify-center'>
                <div className=' my-10 bg-white flex flex-col gap-6 items-center justify-center w-full md:w-[657px] h-[627px] rounded-[30px] drop-shadow-2xl'>
                    <div className=' mt-20 w-[290px] h-[103.68280029296875px] bg-[#FD835266] rounded-[18px] shadow'></div>
                    <h1 className=' font-bold text-2xl'>Merci pour votre générosité !</h1>
                    <p className=' text-center max-w-[600px]'>Votre don a été effectué avec succès ! Nous vous remercions pour votre 
                        contribution à la cause <span className=' font-bold'>Sauvons Rufus, le jeune de 9ans</span> de ONG Hands 
                        together
                    </p>
                    <div className='flex items-center gap-8 border rounded-[30px] p-6 border-[#515151]'>
                        <img src={Profil} alt="" className='w-[111.1132583618164px] h-[88.91244506835938] rounded-[15px]'/>
                        <div>
                            <h2 className=' font-extrabold max-w-40'>Sauvons Rufus, le 
                                jeune de 9ans
                            </h2>
                            <p className=' text-[12px] text-[#515151] font-bold'>Cotonou,<br />Bénin</p>
                        </div>
                        <div className='bg-[#EFF4F9] flex items-center gap-3 rounded-[15px] p-4'>
                            <p className=' font-bold'>Partager</p>
                            <img src={Share} alt="" />
                        </div>
                    </div>
                    <div className='flex'>
                        <img src="" alt="" />
                        <p>Revenir aux cagnottes</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SuccessPayment