import { useRef, useState } from 'react'
import Plus from '../../assets/plus.png'

const FaqComponent = ({title, text}: {title:string, text: string}) => {

    const openRef = useRef<HTMLDivElement|null>(null)
    const [opened, setOpened] = useState<boolean>(false)

    const handleOpen = () => {
        setOpened(!opened)
    }

    return (
        <div className=' md:w-[843px] w-full bg-[#F8F9F9] rounded-[24px] px-[50px] py-[32px] mb-2 '>
            <div onClick={()=>handleOpen()} className="w-full flex flex-row justify-between items-center cursor-pointer mb-1" ref={openRef}>
                <h1>{title}</h1>
                {opened ? <span className='text-[#0E0E18] text-[24px]'>-</span> : <img src={Plus} alt="" className='w-4 h-4' /> }
            </div>
            <p className={` ${opened ? '': 'h-[21px]'} text-[14px] text-[#6F7886] w-11/12 overflow-clip text-clip`}>{text}</p>
        </div>
    )
}

export default FaqComponent