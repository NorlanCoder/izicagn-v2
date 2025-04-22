import { ChevronRightCircleIcon } from "lucide-react"
import StatutFrame from '../../assets/home/statutFrame.svg'

const HomeStatutCarousel = () => {
    return (
        <div className='md:w-2/5 w-full bg-[#FEA373] lg:h-[580px] rounded-[40px] overflow-hidden'>
            <div className="px-4 py-8 flex flex-row space-x-2">
                <div className="h-[5px] rounded-[20.95px] bg-[#F7F6F54D] w-1/2"></div>
                <div className="h-[5px] rounded-[20.95px] bg-[#F7F6F54D] w-1/2"></div>
            </div>

            <div className="md:px-10 px-5">
                <h1 className="text-[32px] font-bold leading-10 text-white md:flex md:flex-col flex-row"><span>Soutenir <span className="text-[#0A1243] ">les</span></span> <span className="text-[#0A1243] ">causes qui vous</span> <span>tiennent à cœur</span></h1>
                <div className="cursor-pointer lg:w-2/3 w-full bg-white py-[16px] flex flex-row justify-center items-center space-x-3 rounded-full mt-4"><span className="text-[#0A1243] font-bold text-[14.53px] ">Faire un don</span> <ChevronRightCircleIcon/> </div>
            </div>

            <div className="mt-5">
                <img src={StatutFrame} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}

export default HomeStatutCarousel