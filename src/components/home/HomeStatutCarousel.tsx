import { ArrowRightIcon } from "lucide-react"
import StatutFrame from '../../assets/home/statutFrame.svg'

const HomeStatutCarousel = () => {
    return (
        <div className='md:w-2/5 w-full bg-[#FEA373] lg:h-[580px] rounded-[40px] overflow-hidden'>
            <div className="px-4 py-8 flex flex-row space-x-2">
                <div className="h-[5px] rounded-[20.95px] bg-[#F7F6F54D] w-1/2"></div>
                <div className="h-[5px] rounded-[20.95px] bg-[#F7F6F54D] w-1/2"></div>
            </div>

            <div className="md:px-10 px-5">
                <h1 className="text-[32px] font-bold leading-10 text-white md:flex md:flex-col flex-row"><span className="montserrat-bold">Soutenir <span className="text-[#440A06] montserrat-bold">les</span></span> <span className="montserrat-bold"><span className="text-[#440A06] montserrat-bold">causes </span> qui vous</span> <span className="montserrat-bold">tiennent à cœur</span></h1>
                <div className="cursor-pointer lg:w-1/2 w-full bg-white h-[52px] flex flex-row justify-center items-center space-x-3 rounded-full mt-5"><span className="text-[#0A1243] font-bold text-[14.53px] montserrat-bold ">Faire un don</span> <div className='bg-[#0A1243] rounded-full w-[19.87px] h-[19.87px] flex justify-center items-center'><ArrowRightIcon className='text-white' size={12}/></div> </div>
            </div>

            <div className="mt-5">
                <img src={StatutFrame} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}

export default HomeStatutCarousel