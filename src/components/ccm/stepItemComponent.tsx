import { CcmListSectionProps } from "../../utils/type"

const StepItemComponent = ({item}: CcmListSectionProps) => {
    return (
        <div className={`${!item.direction ? 'md:flex-row' : 'md:flex-row-reverse'} flex md:items-center items-start md:mb-36 mb-14`}>
            <div className="md:w-1/2">
                <img src={item.image} alt="" className="rounded-[28px]" />
            </div>
            <div className="flex flex-col px-8 md:w-1/2">
                <img src={item.icon} alt="" className="md:w-[84px] w-[45px] mb-5" />
                <h1 className="text-[36px] font-bold mb-4">{item.title}</h1>
                <p className="text-[#727683] text-[18px] ">{item.text}</p>
            </div>
        </div>
    )
}

export default StepItemComponent