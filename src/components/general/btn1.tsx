
const Btn1 = ({item, active, setActive}: {item: {text: string, id: string}, active: string, setActive: (active: string)=> void}) => {
    return (
        <button onClick={()=>setActive(item.id)} className={` ${active==item.id ? 'bg-[#FFE6D5] text-[#EC320A]' : 'bg-[#EEF0F5] text-black'} rounded-full h-[48px] w-[164px] flex flex-row justify-center items-center font-bold cursor-pointer transition-all hover:bg-[#FFE6D5] hover:text-[#EC320A] `}>{item.text}</button>
    )
}

export default Btn1