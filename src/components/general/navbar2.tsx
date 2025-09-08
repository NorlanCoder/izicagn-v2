import { Link } from "react-router"
import logo from "/src/assets/Logo-izicagn.svg"
import logo2 from "../../assets/logo3.svg"
import SubMenuItem from "./subMenuItem"
import { SidebarItemData } from "../../utils/data"
import Illustration from '../../assets/sidebar/illustration_sidebar.svg';
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from "react";

const Navbar2 = () => {

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
        <nav className="3xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px] fixed z-50 top-[23px] w-full">
            <div className="flex flex-row items-center justify-between backdrop-blur-xl bg-[#F0F2F29E] h-[78px] p-[14px] rounded-[26px] border border-[#E9EBF2]">
                <motion.div
                    className='w-[158px] h-full flex flex-col justify-cente'
                    whileHover="hover"
                    initial="hidden"
                    animate="hidden"
                >
                    <Link to="/" className=" relative h-full r">
                        {/* Logo 1 */}
                        <motion.img
                            src={logo}
                            alt="Logo Izicagn" title="Logo Izicagn" className="w-[135px] absolute top-0 left-0 h-full"
                            variants={{
                                hidden: { display: 'block', opacity: 1, },
                                hover: { display: 'hidden', opacity: 0 },
                            }}
                            transition={{ duration: 0.5, ease: 'circInOut' }}
                        />

                        {/* Logo 2 */}
                        <motion.img
                            src={logo2}
                            alt="Logo Izicagn" title="Logo Izicagn" className="w-[135px] absolute top-0 left-0 h-full"
                            variants={{
                                hidden: { display: 'hidden', opacity: 0 },
                                hover: { display: 'block', opacity: 1 },
                            }}
                            transition={{ duration: 0.5, ease: 'circInOut' }}
                        />
                    </Link>
                </motion.div>
                <ul className="flex flex-row justify-end xl:space-x-10 lg:space-x-4">
                    <div className="lg:flex hidden flex-row xl:space-x-10 lg:space-x-4 font-bold">
                        <li className="relative" ref={subMenuRef}>
                            <p className="flex flex-row items-center space-x-2 cursor-pointer text-[15px] " onClick={()=>toogleShowSubMenu()}><span className="font-[600]">Découvrir</span> <ChevronDown /></p>
                            
                            <AnimatePresence>
                                {showSubMenu && <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, ease: 'circInOut'}}} exit={{opacity: 0, transition: {duration: 0.3, ease: 'circInOut'} }} className="absolute w-3 h-3 bg-white z-0 top-[42px] left-[50px] rotate-45 shadow"></motion.div>}
                                {
                                    showSubMenu && (
                                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, ease: 'circInOut'}}} exit={{opacity: 0}} className="flex bg-white h-[258px] shadow rounded-[32px] absolute top-12 -left-56 z-10">
                                            
                                            <motion.div initial={{}} className="md:w-[432px] p-4 flex flex-col space-y-1">
                                                {
                                                    SidebarItemData.map((item)=>(
                                                        <SubMenuItem item={item} key={item.id} />
                                                    ))
                                                }
                                            </motion.div>
                                            
                                            <div className="submenu-block2 md:w-[256px] self-stretch rounded-r-[32px] overflow-hidden relative">
                                                <img src={Illustration} className="absolute bottom-0 left-0 " alt="" />
                                            </div>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </li>
                        <li><Link to="/commentçamarche" className="text-[15px] font-[600]">Comment ça marche ?</Link></li>
                        <li><Link to="/leverdesfonds" className="text-[15px] font-[600]">Lever des fonds</Link></li>
                    </div>
                    <ul className="md:flex hidden flex-row items-center lg:space-x-2 space-x-4">
                        <li><Link to="/login" className="p-4 px-7 rounded-full border border-[#D9DFE7CC] text-[15px] font-[600]">Mon espace</Link></li>
                        <li><Link to="/register" className="transition-all shadow bg-gradient-to-b from-[#07AED8] to-[#90E2F8] hover:to-[#07AED8] hover:shadow-none text-white p-4 px-7 rounded-full text-[15px] leading-[24px] font-[600]">Démarrer</Link></li>
                    </ul>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar2