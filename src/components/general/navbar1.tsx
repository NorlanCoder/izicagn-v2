import { Link } from 'react-router'
import logo from "../../assets/Logo-izicagn.svg"
import { motion } from 'motion/react'

const Navbar1 = () => {
    return (
        <nav className="xl:px-20 lg:px-16 px-14 py-7 sticky z-40 top-0 w-full glass shadow-xl">
            <div className="flex flex-row items-center justify-between">
                   
                <Link to="/">
                    <motion.img
                        src={logo}
                        className="w-[135px]"
                        variants={{
                            hidden: { opacity: 1 },
                            hover: { opacity: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </Link>
                <Link to="/login" className='font-bold'>Se connecter</Link>
            </div>
        </nav>
    )
}

export default Navbar1