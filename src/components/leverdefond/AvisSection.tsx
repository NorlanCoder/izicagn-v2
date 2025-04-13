import Marquee from "react-fast-marquee";
import Avis from '/src/assets/leverdefond/Avis.png'
import Cote from '/src/assets/leverdefond/Cote.png'
import Ghana from '/src/assets/leverdefond/Ghana.png'
import France from '/src/assets/leverdefond/France.png'
import '../../utils/style/leverdefond.css'

const AvisSection = () => {
    return (
        <div>
            <div className=" pt-12">
                <h1 className="text-3xl md:text-[48px] text-center text-[#0A1243] font-black  leading-[100%] tracking-[-1%] pb-20">Ils ont réussi avec nous</h1>
                <Marquee
                    pauseOnHover={true} >
                    <div className="flex space-x-6">
                        <div className='flex justify-center relative rounded-[30px]' id='bg-avis1'>
                            <img src={Avis} alt="" className='rounded-[30px]' />
                            <div className="w-[352px] absolute bottom-6 flex justify-between items-center bg-white rounded-[14px] p-6">
                                <div className=" space-y-1">
                                    <h2 className="text-[18px] text-[#0E0E18] leading-[122%] font-bold">Yollande Sagboyan</h2>
                                    <p className="text-[16px] text-[#739BF0]">AfricaGrill, Côte d’ivoire</p>
                                </div>
                                <div><img src={Cote} alt="" /></div>
                            </div>
                        </div>
                        <div className='flex justify-center relative rounded-[30px]' id='bg-avis2'> 
                            <img src={Avis} alt="" className='rounded-[30px]' /> 
                            <div className="w-[352px] absolute bottom-6 flex justify-between items-center bg-white rounded-[14px] p-6">
                                <div className=" space-y-1">
                                    <h2 className="text-[18px] text-[#0E0E18] leading-[122%] font-bold">Malick Saar</h2>
                                    <p className="text-[16px] text-[#739BF0]">Sendrek Pay, Senegal</p>
                                </div>
                                <div><img src={Ghana} alt="" /></div>
                            </div>         
                        </div>
                        <div className='flex justify-center relative rounded-[30px]' id='bg-avis3'>
                            <img src={Avis} alt="" className='rounded-[30px]' />
                            <div className="w-[352px] absolute bottom-6 flex justify-between items-center bg-white rounded-[14px] p-6">
                                <div className=" space-y-1">
                                    <h2 className="text-[18px] text-[#0E0E18] leading-[122%] font-bold">Keren Da-Silva</h2>
                                    <p className="text-[16px] text-[#739BF0]">CityClean, France</p>
                                </div>
                                <div><img src={France} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default AvisSection