import { CategoryType } from "../../utils/type"

type CategoryScrollProps = {
    item: CategoryType,
    index: number,
    active: number,
    changeActive: (nb:number) => void
}

const CategoryScroll = ({item,index,changeActive,active}:CategoryScrollProps) => {

    return (
        <button onClick={()=>changeActive(index)} className={` ${active==index ? 'bg-[#F5F5F4] text-black' : 'bg-transparent text-[#A2A09A] ' } rounded-full text-[14px] py-[16px] px-[20px] font-bold w-auto cursor-pointer flex`} key={item.id}>{item.name}</button>
    )
}

export default CategoryScroll