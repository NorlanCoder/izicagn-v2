import { Link } from "react-router"

export interface ChoiceProps {
    item: {
        id: string,
        icon: string,
        title: string,
        text: string,
        setType: any
    }
} 

const Choice = ({item}: ChoiceProps) => {
    return (
        <Link to="" onClick={()=>item.setType(item.id)} className={` ${item.id=='cagnotte' ? 'bg-[#07AED8]' : 'bg-white '} md:w-[288px] md:h-[223px] border border-[#DFEAED] flex flex-col rounded-[26px] p-[24px] hover:scale-105 transition-all `}>
            <div className={` ${item.id=='cagnotte' ? 'bg-white' : 'bg-[#E3F8FD] '} rounded-[12px] w-[55px] h-[55px] flex justify-center items-center `}>
                <img src={item.icon} alt="" />
            </div>
            <h2 className={`${item.id=='cagnotte' ? 'text-white' : 'text-black '} font-bold text-[20px] mt-4`}>{item.title}</h2>
            <p className={`${item.id=='cagnotte' ? 'text-[#F3F5F6]' : 'text-[#6B7583] font-bold '} text-[15px] mt-1`}>{item.text} </p>
        </Link>
    )
}

export default Choice