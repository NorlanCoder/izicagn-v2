import { ArrowRightIcon } from 'lucide-react'
import Angel from '../../assets/home/deco/angel.svg'
import Deco1 from '../../assets/home/g10.svg'

const HomeStat = () => {
    return (
        <div className='lg:w-[369px] w-full home-block-stat lg:h-[453px] rounded-[40px] overflow-hidden lg:mb-0 mb-5 relative'>

            <div className="md:px-10 p-4 relative z-10">
                
                <div className='flex flex-col items-center relative'>
                    <h1 className="text-[48px] font-bold leading-10 text-white md:flex md:flex-col flex-row text-center mt-[41px] montserrat-bold ">30,000+</h1>
                    <p className='text-center text-white mt-2 text-[16px] '>cagnottes et projets</p>
                    <img src={Angel} alt="" className='relative -top-3' />
                </div>

                <p className='text-white text-[20px] text-center mt-3 '>Participez à la chaîne de générosité, soyez vous aussi</p>

                <h1 className='mt-3 text-white text-center text-[35.38px] pacifico '>Un Hero</h1>

                <div className='flex flex-row justify-center md:px-0 px-4 w-full'>
                    <div className="cursor-pointer w-full bg-white h-[52px] flex flex-row justify-center items-center space-x-3 rounded-full mt-4"><span className="text-[#0A1243] font-bold text-[14.53px] montserrat-bold ">Faire un don</span> <div className='bg-[#0A1243] rounded-full w-[19.87px] h-[19.87px] flex justify-center items-center'><ArrowRightIcon className='text-white' size={12}/></div> </div>
                </div>

            </div>

            <img src={Deco1} alt="" className='absolute bottom-0 left-0 z-0' />

        </div>
    )
}

export default HomeStat