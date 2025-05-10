import { useRef, useState } from 'react'
import {motion} from 'motion/react'
import { MinusIcon, PlusIcon } from 'lucide-react'

const FaqComponent = ({title, text}: {title:string, text: string}) => {

    const openRef = useRef<HTMLDivElement|null>(null)
    const [opened, setOpened] = useState<boolean>(false)

    const handleOpen = () => {
        setOpened(!opened)
    }

    return (
        <div className=' lg:w-[843px] w-full bg-[#F8F9F9] rounded-[24px] px-[50px] py-[32px] mb-2 '>
            <div onClick={()=>handleOpen()} className="w-full flex flex-row justify-between items-center cursor-pointer mb-1" ref={openRef}>
                <h1>{title}</h1>
                {opened ? <MinusIcon /> : <PlusIcon /> }
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: opened ? "auto" : 0, opacity: opened ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <p className="text-[14px] text-[#6F7886] w-11/12 mt-2">{text}</p>
            </motion.div>
        </div>
    )
}

export default FaqComponent