import Footer from "../components/general/footer";
import Navbar from "../components/general/navbar";
import Search from "../assets/cagnotte/search.png";
import "../utils/style/cagnotte.css";
import { CagnotteMediumList, CategoryList } from "../utils/data";
import Category from "../components/cagnotte/category";
import CagnotteMediumComponent from "../components/cagnotte/cagnotteMediumComponent";
import { Link, useNavigate } from "react-router";
import Banniere from '../assets/cagnotte/banniere.svg'
import { ChevronRight } from "lucide-react";

const Cagnotte = () => {
  const navigate = useNavigate();

  const RedirectToSearchPage = () => {
    navigate("/cagnotte/search", { replace: true });
  };

  return (
    <div>
      <Navbar />
    
      <div className="px-4 w-full">
        

        {/* Bannière code */}
        <section className="rounded-[42.51px] h-[573px] relative mb-8 mt-[100px] flex flex-col justify-center px-24 bg-[radial-gradient(circle,#78DFF5,#0BD1F4)] overflow-x-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_0%,_#000_100%)] mix-blend-overlay pointer-events-none"></div>
          <div className="max-w-[740px] relative z-10">
            <h1 className="text-[55px] leading-14 text-white montserrat-bold mb-5">
              Devenez le{" "}
              <span className="text-[#0D304E] montserrat-bold">héros de quelqu'un</span>{" "}
              aujourd'hui
            </h1>

            <p className="text-[#0F6D8F] md:w-9/12 mb-12 text-[19.13px] font-bold ">
              Donnez de l'espoir à ceux qui en ont besoin, découvrez, soutenez, et
              devenez acteur du changement
            </p>

            <div className="flex flex-row space-x-3">
              <div className="border-2 border-[#07AED8] w-[339px] rounded-full p-[12px] px-[21px] bg-white flex flex-row space-x-2 items-center">
                <img src={Search} alt="" title="" />
                <input
                  type="text"
                  onClick={() => RedirectToSearchPage()}
                  placeholder="Rechercher"
                  className="text-[#D9D9D9] w-full h-full focus:border-0 focus:outline-0"
                />
              </div>

              <button className="bg-[#0D304E] text-white rounded-full text-[14px] py-[16px] px-[21.26px] cursor-pointer font-bold">
                Démarrer une cagnotte
              </button>
            </div>
          </div>

          {/* <div
            id="cagnottebanniere"
            className="absolute inset-0 bg-right bg-no-repeat w-full z-0"
          ></div> */}
          <img 
            src={Banniere} 
            alt=""
            loading="lazy"
            className="absolute right-0 top-0  h-full z-0"
          />
        </section>

        {/* Liste catégorie */}

        <section
          id="categorylist"
          className="flex flex-row flex-nowrap overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth justify-center space-x-3 w-full pb-[50px] 2xl:px[280px] lg:px-[120px] md:px-[80px] px-[16px]"
        >
          {CategoryList.map((item) => (
            <Category item={item} key={item.id} />
          ))}
        </section>

        {/* Liste Cagnotte */}
        <section className="mb-36 flex flex-col space-y-5 2xl:px[280px] lg:px-[120px] md:px-[80px] px-[16px]">
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
