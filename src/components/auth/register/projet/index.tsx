import Logo from '../../../../assets/logo.png'
import IllustrationUser from '../../../../assets/auth/user_illustration_register.svg'
// import { useState } from 'react'
// import Level6 from './level6'
import Level5 from './level5'

const ProjectRegister = () => {

    // const [level, setLevel] = useState<number>(1)

    return (
        <div className="flex flex-row h-[100vh] ">
            <div className="w-[446px] md:flex hidden h-[95vh] overflow-hidden rounded-r-[48.38px] register_bg relative">
                <img src={IllustrationUser} alt="" className='absolute bottom-0 right-0' />
            </div>
            <div className="w-full lg:px-36 md:px-10 px-20 py-10 lg:h-[100vh] h-auto" style={{}}>
                <div><img src={Logo} alt="" /></div>

                <div className='h-full flex flex-col justify-start items-start lg:w-4/5 w-full relative'>
                    <Level5 />
                </div>
            </div>
        </div>
    )
}

export default ProjectRegister