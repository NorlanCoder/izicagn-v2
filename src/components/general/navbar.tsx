import { Link } from "react-router"
import logo from "/src/assets/logo.png"
import SubMenuItem from "./subMenuItem"
import { SidebarItemData } from "../../utils/data"
import Illustration from '../../assets/sidebar/illustration_sidebar.svg';
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from "react";

const Navbar = () => {

    const subMenuRef = useRef<HTMLParagraphElement |null>(null)
    const [showSubMenu, setShowSubMenu] = useState(false)

    const toogleShowSubMenu = () => {
        setShowSubMenu(!showSubMenu)
    }

    return (
        <nav className="flex flex-row items-center justify-between lg:px-20 py-10 sticky z-50 top-0 w-full">
            <Link to="/"><img src={logo} alt="Logo Izicagn" title="Logo Izicagn" width={100} /></Link>
            <ul className="flex flex-row lg:space-x-10 font-bold">
                <li className="relative">
                    <p className="flex flex-row items-center space-x-2 cursor-pointer" onClick={()=>toogleShowSubMenu()} ref={subMenuRef}><span>Découvrir</span> <ChevronDown /></p>
                    
                    <AnimatePresence>
                        {showSubMenu && <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, ease: 'circInOut'}}} exit={{opacity: 0}} className="absolute w-5 h-5 bg-slate-50 z-0 top-10 rotate-45 left-20 shadow"></motion.div>}
                        {
                            showSubMenu && (
                                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, ease: 'circInOut'}}} exit={{opacity: 0}} className="flex bg-white w-[763px] shadow rounded-[32px] absolute top-12 -left-52 z-10">
                                    
                                    <motion.div initial={{}} className="md:w-[60%] p-4 flex flex-col space-y-1">
                                        {
                                            SidebarItemData.map((item)=>(
                                                <SubMenuItem item={item} key={item.id} />
                                            ))
                                        }
                                    </motion.div>
                                    
                                    <div className="submenu-block2 md:w-[40%] self-stretch rounded-r-[32px] overflow-hidden relative">
                                        <img src={Illustration} className="absolute bottom-0 left-0" alt="" />
                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </li>
                <li><Link to="/commentçamarche">Comment ça marche ?</Link></li>
                <li><Link to="/leverdesfonds">Lever des fonds</Link></li>
                <ul className="flex flex-row lg:space-x-3">
                    <li><Link to="/commentçamarche" className="p-4 px-7 rounded-full border border-[#D9DFE7CC] ">Mon espace</Link></li>
                    <li><Link to="/commentçamarche" className="menu_btn2 text-white p-4 px-7 rounded-full">Démarrer</Link></li>
                </ul>
            </ul>
        </nav>
    )
}

export default Navbar