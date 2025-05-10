
const StepBlockComponent = ({children}: {children:any}) => {
    return (
        <div id='stepBlock' className='relative rounded-[40px] md:h-[452px] flex w-full md:flex-row lg:space-x-4 md:space-x-2 flex-col md:justify-center items-center md:py-0 py-10 md:px-0 px-10 md:space-y-0 space-y-10 '>
            {children}
        </div>
    )
}

export default StepBlockComponent