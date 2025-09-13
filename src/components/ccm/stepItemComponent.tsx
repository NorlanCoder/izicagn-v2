import { CcmListSectionProps } from "../../utils/type"

const StepItemComponent = ({item}: CcmListSectionProps) => {
    return (
        <div className={`${!item.direction ? 'md:flex-row' : 'md:flex-row-reverse'} flex md:items-center items-start md:mb-36 mb-14 2xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px]`}>
            <div className="md:w-1/2 relative z-10">
                <img src={item.image} alt="" className="rounded-[28px]" />
            </div>
            <div className="flex flex-col px-8 relative md:w-1/2">
                {item.id =='CC001' && <div className="bg-[#E5F5FB] w-[703px] h-[703px]  rounded-full blur-3xl absolute z-0 -bottom-40 -left-[350px]"></div>}
                {item.id =='CC004' && <div className="bg-[#E5F5FB] w-[703px] h-[703px]  rounded-full blur-3xl absolute z-0 -bottom-40 -right-[350px]"></div>}
                {item.id =='CC002' && <div className="bg-[#FBEBE0] w-[703px] h-[703px]  rounded-full blur-3xl absolute z-0 -bottom-40 -right-[350px]"></div>}
                {item.id =='CC005' && <div className="bg-[#FBEBE0] w-[703px] h-[703px]  rounded-full blur-3xl absolute z-0 -bottom-40 -left-[350px]"></div>}
                {item.id =='CC003' && <div className="bg-[#EDF3E9] w-[703px] h-[703px]  rounded-full blur-3xl absolute z-0 -bottom-40 -left-[350px]"></div>}
                {item.id =='CC006' && <div className="bg-[#EDF3E9] w-[703px] h-[703px]  rounded-full blur-3xl absolute z-0 -bottom-40 -right-[350px]"></div>}
                <div className="relative z-10">
                    <img src={item.icon} alt="" className="md:w-[84px] w-[45px] mb-5" />
                    <h1 className="text-[36px] font-[700] mb-4">{item.title}</h1>
                    <p className="text-[#727683] text-[18px] tracking-[-0.36px] font-[500] ">{item.text}</p>
                </div>
            </div>
        </div>
    )
}

export default StepItemComponent