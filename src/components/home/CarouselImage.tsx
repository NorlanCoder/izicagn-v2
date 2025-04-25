import CarouselImg from '../../assets/home/011a47871a1.png'

const CarouselImage = () => {
    return (
        <div className='self-stretch h-[453px] lg:w-8/12 flex flex-col space-y-6 md:mt-0 mt-8'>
            <div className='h-[348px] bg-[#D6F5F9] grow rounded-[40px] overflow-hidden relative'>
                <img src={CarouselImg} className="w-full h-full rounded-[40px]" alt="" />
                <div className='flex flex-row justify-center w-full absolute bottom-5 left-0'>
                    <div className='w-[80px] h-[28px] glass p-2  border-r border-b border-white rounded-full flex justify-center items-center space-x-2 '>
                        <span className='w-[8px] h-[8px] rounded-full bg-[#FD8342] '></span>
                        <span className='w-[8px] h-[8px] rounded-full bg-white '></span>
                        <span className='w-[8px] h-[8px] rounded-full bg-white '></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselImage