import li_frame from "../../assets/Lever de fond/li_frame.png";
import Subtract from "../../assets/Lever de fond/Subtract.png";
import Decor from "../../assets/Lever de fond/decor.svg";
import investissement_icon from "../../assets/Lever de fond/investissement_icon.png";
import arrow_up from "../../assets/Lever de fond/uil_arrow-up.png";
import rocket_icon from "../../assets/Lever de fond/rocket_icon.png";
import pieces_icon from "../../assets/Lever de fond/pieces_icon.png";
import piece_icon from "../../assets/Lever de fond/piece_icon.png";
import { Link } from "react-router";

// const categories = [
//   "Startups",
//   "Énergies renouvelables",
//   "Fintech",
//   "Art et culture",
//   "Entrepreneurs sociaux",
//   "Commerce",
//   "Industrie",
//   "Mode et design",
//   "Sport et loisirs",
//   "Immobilier et urbanisme",
//   "Distribution",
// ];

// const CategoryBadge = ({ text }: {text:string}) => (
//   <div className="px-6 py-2 rounded-full bg-[#ECFDFF] text-[#0F6D8F] font-semibold text-[14px] whitespace-nowrap mx-2">
//     {text}
//   </div>
// );

const EtapesSection = () => {
  return (
    <section className="w-full h-full ">
      <div className="w-full flex lg:flex-row flex-col justify-center items-start gap-4 mb-8">
        <div
          className="relative lg:w-auto w-[508px] md:h-[622px] h-auto rounded-[20px] md:rounded-[30px] overflow-hidden"
        >
          <img
            src={Decor}
            alt="Avatar"
            className="w-full h-full xl:object-contain lg:object-cover object-contain rounded-[20px] md:rounded-[30px] relative z-1"
          />
        </div>

        {/* Texte + liste */}
        <div
          style={{
            backgroundImage: `url(${Subtract})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full lg:w-[705px] md:h-[622px] h-auto bg-[#033C50] flex flex-col justify-center rounded-[20px] md:rounded-[30px] space-y-6 sm:space-y-8 py-8 px-14"
        >
          <h2 className="text-[22px] sm:text-[28px] lg:text-[38px] text-white font-bold leading-[130%] tracking-[-1px] mb-4 sm:mb-6 max-w-[473px]">
            Lever des fonds en quelques étapes simples
          </h2>

          {/* li_frame et liste côte à côte */}
          <div className="w-full flex flex-row items-center gap-4 sm:gap-6 overflow-x-auto">
            {/* Image */}
            <div className=" min-w-[20px] xl:flex flex-shrink-0">
              <img
                src={li_frame}
                alt="Li Frame"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Liste */}
            <ul className=" flex flex-col gap-7 text-white text-[15px] sm:text-[16px] md:text-[18px] leading-[1.5] p-4 uppercase">
              <li className="max-w-[333px]">Créez votre compte izicagn</li>

              <li className="max-w-[333px]">
                Présentez votre Projet aux investisseurs
              </li>

              <li className="max-w-[436px]">
                Lancez votre campagne et suivez vos progrès depuis votre espace
                personnel
              </li>

              <li className="max-w-[408px]">
                Accédez aux outils méthodologiques pour réussir votre objectif
              </li>
            </ul>
          </div>

          <button className="w-full sm:w-[247px] h-[50px] sm:h-[60px] text-[15px] sm:text-[16px] text-[#0F6D8F] font-bold bg-white transition-all duration-700 ease-in-out hover:bg-[#07AED8] rounded-full cursor-pointer">
            Démarrer un projet
          </button>
        </div>
      </div>

      <div className="w-full mb-8 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
        {/* Bloc 1 */}
        <div className="relative w-full lg:max-w-[608px] py-5 px-10 flex flex-col items-start text-start gap-4 bg-[#FAF4F0] rounded-[30px]">
          {/* Zone Rocket + Pièces */}
          <div className="relative flex items-start">
            <img
              src={rocket_icon}
              alt="Icône fusée"
              className="object-cover pl-6"
            />

            <img
              src={piece_icon}
              alt="Pièce"
              className="absolute -bottom-10 object-cover"
            />

            <img
              src={pieces_icon}
              alt="Pile de pièces"
              className="absolute left-[75px] sm:left-[85px] -bottom-10 object-cover"
            />
          </div>

          {/* Texte + Bouton */}
          <div className="w-full mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-black text-xl sm:text-2xl md:text-[26px] font-bold leading-snug tracking-tight max-w-[345px]">
                Qui peut lever des fonds sur izicagn
              </h3>

              <p className="text-base sm:text-lg text-[#6C7180] font-medium leading-[130%] tracking-[-1px] max-w-[406px]">
                Lorem ipsum dolor sit amet consectetur. Euismod tortor
                pellentesque ac sem risus. Sed tortor ut sed tellus eget.
              </p>
            </div>

            <Link to="/leverdesfonds/details">
              <button className="self-start sm:self-auto p-[18px] flex items-center justify-center bg-[#FFC9A9] transition-all duration-500 ease-in-out hover:bg-[#FD8342] shadow-lg rounded-full cursor-pointer group">
                <img src={arrow_up} alt="Arrow up" className="transition-all duration-500 ease-in-out group-hover:-rotate-45" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bloc 2 */}
        <div className="relative w-full lg:max-w-[608px] flex flex-col items-start text-start gap-4 bg-[#FAF4F0] rounded-[30px] pb-6">
          <img
            src={investissement_icon}
            alt="Investissement Icon"
            className="object-cover "
          />

          <div className="w-full px-10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-black text-xl sm:text-2xl md:text-[26px] font-bold leading-snug tracking-tight">
                Qui peut investir sur izicagn
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <p className="text-base sm:text-lg text-[#6C7180] font-medium leading-[130%] tracking-[-1px] max-w-[406px]">
                  Lorem ipsum dolor sit amet consectetur. Euismod tortor
                  pellentesque ac sem risus. Sed tortor ut sed tellus eget.
                </p>

                <Link to="/leverdesfonds/commentçamarche">
                  <button className="self-start sm:self-auto p-[18px] flex items-center justify-center bg-[#FFC9A9] transition-all duration-500 ease-in-out hover:bg-[#FD8342] shadow-lg rounded-full cursor-pointer group">
                    <img src={arrow_up} alt="Arrow up" className="transition-all duration-500 ease-in-out group-hover:-rotate-45" />
                  </button>
                </Link>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtapesSection;
