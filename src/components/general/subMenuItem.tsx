import { Link } from "react-router"
import { SideBarItemProps } from "../../utils/type"
import Motif from '../../assets/sidebar/motif1.svg';
import Soon from '../../assets/sidebar/soon.svg';

const SubMenuItem = ({item}:SideBarItemProps) => {
    return (
        <Link to={item.path} className={`${item.soon ? 'bg-[#F8FAFB] ' : ''} flex flex-row items-center space-x-3 h-[74px] rounded-[16px] transition-all p-[10px] group hover:bg-[#E3F8FD] relative border-transparent border hover:border-[#0c0c4418]`}>
            <div className='bg-[#E3F8FD] group-hover:bg-white w-[54px] h-[54px] rounded-[12px] flex flex-row justify-center items-center relative group-hover:bottom-1 transition-all'>
                <img src={item.image} alt="" />
            </div>
            <div className="relative">
                <h1 className="text-[16px] font-bold montserrat-bold">{item.title}</h1>
                <p className="text-[13px] text-[#789097] font-medium text-clip">{item.text}</p>
                
            </div>
            {item.soon && <img src={Motif} alt="" className="absolute top-0 right-0 z-0 m-0" />}
            {item.soon && <img src={Soon} alt="" className="absolute top-3 right-2 z-10" />}
        </Link>
    )
}

export default SubMenuItem