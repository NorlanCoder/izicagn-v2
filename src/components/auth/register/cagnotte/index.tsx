import Logo from '../../../../assets/logo.png'
import IllustrationUser from '../../../../assets/auth/user_illustration_register.svg'
import { useState } from 'react'

import Level1 from './level1'
import Level2 from './level2'
import Level3 from './level3'
import Level4 from './level4'
import Level5 from './level5'
import Level6 from './level6'
import Level7 from './level7'
import Level8 from './level8'
import { Link } from 'react-router' 

const CagnoteRegister = () => {

    const [level, setLevel] = useState<number>(1)

    return (
        <div className="flex flex-row h-[100vh] ">
            <div className="md:w-[446px] md:flex hidden h-[95vh] overflow-hidden rounded-r-[48.38px] register_bg relative">
                <img src={IllustrationUser} alt="" className='absolute bottom-0 right-0' />
            </div>
            <div className="w-full lg:px-36 md:px-10 px-20 py-10 lg:h-[100vh] h-auto" style={{}}>
                <div><img src={Logo} alt="" /></div>

                <div className='h-full flex flex-col justify-start items-start lg:w-4/5 w-full relative'>
                    {level===1 && <Level1 changeLevel={()=>setLevel(level+1)} />}
                    {level===2 && <Level2 changeLevel={()=>setLevel(level+1)} previousLevel={()=>setLevel(level-1)} />}
                    {level===3 && <Level3 changeLevel={()=>setLevel(level+1)} previousLevel={()=>setLevel(level-1)} />}
                    {level===4 && <Level4 changeLevel={()=>setLevel(level+1)} previousLevel={()=>setLevel(level-1)} />}
                    {level===5 && <Level5 changeLevel={()=>setLevel(level+1)} previousLevel={()=>setLevel(level-1)} />}
                    {level===6 && <Level6 changeLevel={()=>setLevel(level+1)} previousLevel={()=>setLevel(level-1)} />}
                    {level===7 && <Level7 changeLevel={()=>setLevel(level+1)} previousLevel={()=>setLevel(level-1)} />}
                    {level===8 && <Level8 />}
                </div>
            </div>
        </div>
    )
}

export default CagnoteRegister