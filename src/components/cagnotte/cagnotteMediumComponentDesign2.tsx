import { CagnotteMediumType } from "../../utils/type"
import { useNavigate } from "react-router"

type CagnotteMediumComponentProps = {
    item: CagnotteMediumType
} 

const CagnotteMediumComponentDesign2 = ({item}:CagnotteMediumComponentProps) => {

    const navigate = useNavigate()

    const RedirectToDetailsPage = () => {
        navigate("/cagnotte/details", {replace: true})
    }

    return (
        <div onClick={()=>RedirectToDetailsPage()} id="CagnotteMediumComponent" className='lg:w-1/4 md:w-1/2 w-full h-[] rounded-[16px] px-[8px] pb-[28px] pt-[12px] border border-transparent transition-all'>
            <div className="border border-[#F3F4F6] rounded-[18px] pb-4 ">
                <div className='w-full h-[216px] rounded-[16px] mb-4 relative'>
                    <div id="CagnotteMediumComponentImage" className='h-full w-full absolute inset-0 top-0 left-0 rounded-[16px]' style={{backgroundImage: `url(${item.image})`}}></div>
                </div>
                <div className="px-3">
                    <div className="flex flex-row w-full mb-3 items-center relative">
                        <h2 className='flex flex-row flex-nowrap text-black w-[90%] text-[19.55px] montserrat-bold pr-2'>{item.title}</h2>
                        <h2 className="flex-1 self-baseline p-1 bg-[#EEEFF3] rounded-[697.52px] flex flex-row justify-center items-center text-[9.78px] text-[#435183] font-bold  absolute -right-2 top-1 ">28k dons</h2>
                    </div>
                    <div className='bg-[#F3F5F6] h-[6px] rounded-full overflow-hidden mb-2'>
                        <div className='rounded-full bg-[#07AED8] h-full ' style={{width: `${(item.solde/item.besoin)*100}%`}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CagnotteMediumComponentDesign2