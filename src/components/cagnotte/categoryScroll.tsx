import { CategoryType } from "../../utils/type"

type CategoryScrollProps = {
    item: CategoryType,
    index: number,
    active: number,
    changeActive: (nb:number) => void
}

const CategoryScroll = ({item,index,changeActive,active}:CategoryScrollProps) => {

    return (
        <button title={item.name} onClick={()=>changeActive(index)} className={` ${active==index ? 'bg-[#FD8342] text-white' : 'bg-transparent text-[#A2A09A] ' } rounded-full text-[14px] py-[10px] px-[20px] font-[500] min-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer`} key={item.id}>{item.name}</button>
    )
}

export default CategoryScroll