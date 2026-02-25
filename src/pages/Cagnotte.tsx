import Footer from "../components/general/footer";
import Navbar from "../components/general/navbar";
import Search from "../assets/cagnotte/search.png";
import "../utils/style/cagnotte.css";
import { CagnotteMediumList, CategoryList } from "../utils/data";
import Category from "../components/cagnotte/category";
import CagnotteMediumComponent from "../components/cagnotte/cagnotteMediumComponent";
import { Link } from "react-router";
import Banniere from '../assets/cagnotte/banniere.svg'
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Cagnotte = () => {

  const [isOpenBanniere, setIsOpenBanniere] = useState("closed");

  return (
    <div>
      <Navbar />
    
      <div className="px-4 w-full">
        

        {/* Bannière code */}
        <motion.section 
          className="rounded-[42.51px] h-[573px] relative mb-8 mt-[100px] flex flex-col justify-center px-24 bg-[radial-gradient(circle,#78DFF5,#0BD1F4)] overflow-x-hidden"
          initial={{ height: 573 }}
          animate={isOpenBanniere}
          variants={{ open: { height: 224 }, closed: { height: 573 } }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_0%,_#000_100%)] mix-blend-overlay pointer-events-none"/>
          <AnimatePresence>
            {isOpenBanniere === "closed" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className="max-w-[740px] relative z-10">
                  <h1 className="text-[55px] leading-14 text-white font-[700] tracking-[-1px] mb-5">
                    Devenez le{" "}
                    <span className="text-[#0D304E]">héros de quelqu'un</span>{" "}
                    aujourd'hui
                  </h1>

                  <p className="text-[#0F6D8F] md:w-9/12 mb-12 text-[19.13px] font-[600] ">
                    Donnez de l'espoir à ceux qui en ont besoin, découvrez, soutenez, et
                    devenez acteur du changement
                  </p>

                  <div className="flex flex-row space-x-3">
                    <div className="border-2 border-[#07AED8] w-[339px] rounded-full p-[12px] px-[21px] bg-white flex flex-row space-x-2 items-center">
                      <img src={Search} alt="" title="" />
                      <input
                        type="text"
                        onClick={() => setIsOpenBanniere("open")}
                        placeholder="Rechercher"
                        className="text-[#D9D9D9] font-[500] w-full h-full focus:border-0 focus:outline-0"
                      />
                    </div>

                    <button onClick={() => setIsOpenBanniere("open")} className="bg-[#0D304E] text-white rounded-full text-[14px] py-[16px] px-[21.26px] cursor-pointer font-[700]">
                      Démarrer une cagnotte
                    </button>
                  </div>
                </div>

                <motion.img
                  src={Banniere} 
                  alt=""
                  loading="lazy"
                  className="absolute right-0 top-0  h-full z-0"
                />
              </motion.div>
            )}


            {isOpenBanniere === "open" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div className=' md:px-0 flex flex-row justify-center px-4 relative z-10'>
                  <div className='flex flex-row md:w-[730px] w-full space-x-3 p-1 pl-4 border-2 rounded-full bg-white border-[#07AED8]'>
                      <div className='bg-transparent grow-1 flex flex-row space-x-2 items-center'>
                          <img src={Search} alt='' title=''/>
                          <input type="text" placeholder='Rechercher' className='text-[#D9D9D9] w-full focus:border-0 focus:outline-0 font-[500]' />
                      </div>
                      <button className='bg-[#23C7ED] text-white grow-0 rounded-full text-[14px] p-[16px] font-[700]'>Rechercher</button>
                  </div>
                </motion.div>
              </motion.div>
            )}
            
          </AnimatePresence>

          
        </motion.section>

        

        {/* Liste catégorie */}

        <section
          id="categorylist"
          className="flex flex-row flex-nowrap overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth justify-center space-x-3 w-full pb-[50px] 2xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px]"
        >
          {CategoryList.map((item) => (
            <Category item={item} key={item.id} />
          ))}
        </section>

        {/* Liste Cagnotte */}
        <section className="mb-36 flex flex-col space-y-5 3xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px]">
          <div className="mt-8">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[#0A1243] text-[24px] font-bold mb-5 montserrat-bold">
                Évènements personnels
              </h1>
              <Link to="/cagnotte" className="text-[#585D5E] text-[14px] font-bold flex flex-row items-center space-x-2">
                <span>Afficher tout</span>
                <ChevronRight className="text-[#585D5E] w-5 font-bold" />
              </Link>
            </div>

            <div className="flex flex-row flex-wrap space-y-10">
              {CagnotteMediumList.map((item, index) => (
                <CagnotteMediumComponent item={item} key={index.toString()} />
              ))}
            </div>
          </div>

          <div className="mt-8">

            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[#0A1243] text-[24px] font-bold mb-5 montserrat-bold">
                Causes d’associations
              </h1>
              <Link to="/cagnotte" className="text-[#585D5E] text-[14px] font-bold flex flex-row items-center space-x-2">
                <span>Afficher tout</span>
                <ChevronRight className="text-[#585D5E] w-5 font-bold" />
              </Link>
            </div>

            <div className="flex flex-row flex-wrap space-y-10">
              {CagnotteMediumList.map((item, index) => (
                <CagnotteMediumComponent item={item} key={index.toString()} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Cagnotte;
