import { Link } from "react-router"
import logo from "/src/assets/Logo-izicagn.svg"
import SubMenuItem from "./subMenuItem"
import { SidebarItemData } from "../../utils/data"
import Illustration from '../../assets/sidebar/illustration_sidebar.svg';
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from "react";

const Navbar = () => {

    const subMenuRef = useRef<HTMLLIElement |null>(null)
    const [showSubMenu, setShowSubMenu] = useState(false)

    const toogleShowSubMenu = () => {
        setShowSubMenu(!showSubMenu)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (subMenuRef.current && !subMenuRef.current.contains(event.target as Node)) {
            setShowSubMenu(false);
            }
        };
        
        if (showSubMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSubMenu]);

    return (
        <nav className=" lg:px-[120px] md:px-[80px] px-[16px] fixed z-50 top-0 left-0 w-full bg-[#FBFBFB]/90 backdrop-blur-2xl">
            <div className="w-full flex flex-row items-center justify-between h-[78px] ">
                <Link to="/"><img src={logo} alt="Logo Izicagn" title="Logo Izicagn" className="w-[135px] " /></Link>
                <ul className="flex flex-row justify-end xl:space-x-10 lg:space-x-4">
                    <div className="lg:flex hidden flex-row xl:space-x-10 lg:space-x-4 font-bold">
                        <li className="relative" ref={subMenuRef}>
                            <p className="flex flex-row items-center space-x-2 cursor-pointer font-bold text-[15px] " onClick={()=>toogleShowSubMenu()}><span>Découvrir</span> <ChevronDown /></p>
                            
                            <AnimatePresence>
                                {showSubMenu && <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, ease: 'circInOut'}}} exit={{opacity: 0}} className="absolute w-3 h-3 bg-white z-0 top-[42px] rotate-45 left-[350px] shadow"></motion.div>}
                                {
                                    showSubMenu && (
                                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, ease: 'circInOut'}}} exit={{opacity: 0}} className="flex bg-white h-[422px] shadow rounded-[32px] absolute top-12 -left-3 z-10">
                                            
                                            <motion.div initial={{}} className="md:w-[432px] p-4 flex flex-col space-y-1">
                                                {
                                                    SidebarItemData.map((item)=>(
                                                        <SubMenuItem item={item} key={item.id} />
                                                    ))
                                                }
                                            </motion.div>
                                            
                                            <div className="submenu-block2 md:w-[326px] self-stretch rounded-r-[32px] overflow-hidden relative">
                                                <img src={Illustration} className="absolute bottom-0 left-0" alt="" />
                                            </div>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </li>
                        <li><Link to="/commentçamarche" className="text-[15px] font-bold">Comment ça marche ?</Link></li>
                        <li><Link to="/leverdesfonds" className="text-[15px] font-bold">Lever des fonds</Link></li>
                    </div>
                    <ul className="md:flex hidden flex-row items-center lg:space-x-2 space-x-4">
                        <li><Link to="/login" className="p-4 px-7 rounded-full border border-[#D9DFE7CC] font-bold text-[15px]">Mon espace</Link></li>
                        <li><Link to="/register" className="transition-all shadow bg-gradient-to-b from-[#07AED8] to-[#90E2F8] hover:to-[#07AED8] hover:shadow-none text-white p-4 px-7 rounded-full text-[15px] montserrat-bold">Démarrer</Link></li>
                    </ul>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar