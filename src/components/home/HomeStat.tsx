import { ChevronRightCircleIcon } from 'lucide-react'
import Angel from '../../assets/home/deco/angel.svg'

const HomeStat = () => {
    return (
        <div className='lg:w-4/12 w-full home-block-stat lg:h-[453px] rounded-[40px] overflow-hidden lg:mb-0 mb-5'>

            <div className="md:px-10 p-4">
                
                <div className='flex flex-col items-center relative'>
                    <h1 className="text-[48px] font-bold leading-10 text-white md:flex md:flex-col flex-row text-center mt-5">30,000+</h1>
                    <p className='text-center text-white mt-2'>cagnottes et projets</p>
                    <img src={Angel} alt="" className='relative -top-3' />
                </div>

                <p className='text-white text-[20px] text-center mt-3 '>Participez à la chaîne de générosité, soyez vous aussi</p>

                <h1 className='mt-3 text-white text-center text-[35.38px] pacifico '>Un Hero</h1>

                <div className='flex flex-row justify-center px-4'>
                    <div className="cursor-pointer w-full bg-white py-[10px] flex flex-row justify-center items-center space-x-3 rounded-full mt-4"><span className="text-[#0A1243] font-bold text-[14.53px] ">Faire un don</span> <ChevronRightCircleIcon/> </div>
                </div>

            </div>
        </div>
    )
}

export default HomeStat