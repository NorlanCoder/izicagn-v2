import { Link } from "react-router"
import { SideBarItemProps } from "../../utils/type"
import Motif from '../../assets/sidebar/motif1.svg';
import Soon from '../../assets/sidebar/soon.svg';

const SubMenuItem = ({item}:SideBarItemProps) => {
    return (
        <Link to={item.path} className={`${item.soon ? 'bg-[#F8FAFB] ' : ''} flex flex-row items-center space-x-3 p-4 rounded-[20px] transition-all hover:bg-[#E3F8FD] relative`}>
            <div className='bg-[#E3F8FD] w-[54px] h-[54px] rounded-[12px] flex flex-row justify-center items-center'>
                <img src={item.image} alt="" />
            </div>
            <div className="relative">
                <h1 className="text-[16px] font-bold">{item.title}</h1>
                <p className="text-[13px] text-[#789097] text-clip">{item.text}</p>
                
            </div>
            {item.soon && <img src={Motif} alt="" className="absolute top-0 right-0 z-0 m-0" />}
            {item.soon && <img src={Soon} alt="" className="absolute top-3 right-2 z-10" />}
        </Link>
    )
}

export default SubMenuItem