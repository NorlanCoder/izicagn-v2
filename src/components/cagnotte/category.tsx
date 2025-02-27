import { CategoryType } from "../../utils/type"

type CategoryProps = {
    item: CategoryType
}

const Category = ({item}: CategoryProps) => {
    return (
        <div className="bg-[#F6F8F9] rounded-[18px] min-w-[146px] w-[146px] p-[20px] flex flex-col items-center justify-center space-y-2 min-h-[140px] overflow-hidden hover:scale-105 hover:bg-white hover:shadow-xl transition-all cursor-pointer">
            <img src={item.image} alt="Icon Category" />
            <h1 className="text-center text-[14px] font-bold">{item.name}</h1>
        </div>
    )
}

export default Category