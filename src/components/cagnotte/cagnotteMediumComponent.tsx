import { CagnotteMediumType } from "../../utils/type"
import Group from '../../assets/cagnotte/Group.png'
import Donate from '../../assets/cagnotte/donate.png'
import { useNavigate } from "react-router"

type CagnotteMediumComponentProps = {
    item: CagnotteMediumType
} 

const CagnotteMediumComponent = ({item}:CagnotteMediumComponentProps) => {

    const navigate = useNavigate()

	const RedirectToDetailsPage = () => {
		navigate("/cagnotte/details", {replace: true})
	}

    return (
        <div onClick={()=>RedirectToDetailsPage()} id="CagnotteMediumComponent" className='lg:w-1/4 md:w-1/2 w-full h-[] rounded-[16px] px-[13px] pb-[28px] pt-[12px] border border-transparent transition-all hover:border-[#5F6364]/20'>
            <div className='w-full h-[216px] rounded-[16px] mb-4 relative'>
                <div id="CagnotteMediumComponentImage" className='h-full w-full absolute inset-0 top-0 left-0 rounded-[16px]' style={{backgroundImage: `url(${item.image})`}}></div>
            </div>
            <div>
                <h2 className='flex flex-row flex-nowrap text-black text-[18px] font-bold mb-3'>{item.title}</h2>
                <div className='bg-[#F3F5F6] h-[6px] rounded-full overflow-hidden mb-2'>
                    <div className='rounded-full bg-[#FD8342] h-full ' style={{width: `${(item.solde/item.besoin)*100}%`}}></div>
                </div>
                <h3 className="text-[14px] text-[#585D5E] mb-4"> <span className='text-[#0988B1] font-bold'>{item.solde} Fcfa</span> collectés</h3>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center space-x-[8px] '>
                        <img src={Group} className="w-5" alt="" />
                        <h4 className='text-[12px] text-[#5F6364] '><span>{item.participant}</span> participants</h4>
                    </div>
                    <div className='flex flex-row items-center space-x-[8px] '>
                        <img src={Donate} alt="" className="w-5" />
                        <h4 className='text-[12px] text-[#5F6364] '><span className='text-black font-bold'>{item.besoin-item.solde}</span> participants</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CagnotteMediumComponent