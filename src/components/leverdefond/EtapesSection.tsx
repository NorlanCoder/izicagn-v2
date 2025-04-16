import avatar_1 from "../../assets/Lever de fond/avatar_1.png";
import li_frame from "../../assets/Lever de fond/li_frame.png";
import Subtract from "../../assets/Lever de fond/Subtract.png";
import vetor_1 from "../../assets/Lever de fond/vetor_1.png";
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
    <section className="w-full h-full">
      <div className="w-full h-[622px] flex justify-center items-start gap-4 mb-8">
        <div
          style={{
            backgroundImage: `url(${vetor_1})`,
            backgroundSize: "",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
          className="relative w-full xl:w-[40vw] h-[480px] xl:h-[622px] rounded-[20px] md:rounded-[30px]"
        >
          <img
            src={avatar_1}
            alt="Avatar"
            className="w-full h-full object-cover mix-blend-lighten rounded-[20px] md:rounded-[30px]"
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
          className="w-full xl:w-[60vw] h-[480px] xl:h-[622px] bg-[#033C50] flex flex-col justify-center rounded-[20px] md:rounded-[30px] space-y-6 sm:space-y-8 p-6 sm:p-8"
        >
          <h2 className="text-[22px] sm:text-[28px] lg:text-[38px] text-white font-bold leading-[130%] mb-4 sm:mb-6">
            Lever des fonds en quelques étapes simples
          </h2>

          {/* li_frame et liste côte à côte */}
          <div className="w-full flex flex-row items-center gap-4 sm:gap-6 overflow-x-auto">
            {/* Image */}
            <div className="hidden min-w-[20px] xl:flex flex-shrink-0">
              <img
                src={li_frame}
                alt="Li Frame"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Liste */}
            <ul className="list-disc xl:list-none flex flex-col gap-3 text-white text-[15px] sm:text-[16px] md:text-[18px] leading-[1.5]  p-4">
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

          <button className="w-full sm:w-[247px] h-[50px] sm:h-[60px] text-[15px] sm:text-[16px] text-[#0F6D8F] font-bold bg-white rounded-full cursor-pointer">
            Démarrer un projet
          </button>
        </div>
      </div>

      <div className="w-full mb-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-4">
        {/* Bloc 1 */}
        <div className="relative w-full lg:w-1/2 p-5 flex flex-col items-start text-start gap-4 bg-[#FAF4F0] rounded-[30px]">
          {/* Zone Rocket + Pièces */}
          <div className="relative flex items-start">
            <img
              src={rocket_icon}
              alt="Icône fusée"
              className="w-[70px] sm:w-[80px] md:w-[90px] h-auto object-cover"
            />

            <img
              src={piece_icon}
              alt="Pièce"
              className="absolute left-[50px] sm:left-[55px] top-[40px] sm:top-[48px] w-[25px] sm:w-[30px] h-auto object-cover"
            />

            <img
              src={pieces_icon}
              alt="Pile de pièces"
              className="absolute left-[75px] sm:left-[85px] top-[50px] sm:top-[60px] w-[40px] sm:w-[50px] h-auto object-cover"
            />
          </div>

          {/* Texte + Bouton */}
          <div className="w-full mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1 space-y-2.5">
              <h3 className="text-black text-xl sm:text-2xl md:text-[26px] font-bold leading-snug tracking-tight">
                Qui peut lever des fonds sur izicagn
              </h3>

              <p className="text-base sm:text-lg text-[#6C7180] font-semibold leading-relaxed tracking-tight">
                Lorem ipsum dolor sit amet consectetur. Euismod tortor
                pellentesque ac sem risus. Sed tortor ut sed tellus eget.
              </p>
            </div>

            <Link to="/leverdesfonds/details">
              <button className="self-start sm:self-auto p-3 flex items-center justify-center bg-orange-300 shadow-lg rounded-full cursor-pointer">
                <img src={arrow_up} alt="Arrow up" className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bloc 2 */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-start text-start gap-4 bg-[#FAF4F0] rounded-[30px]">
          <img
            src={investissement_icon}
            alt="Investissement Icon"
            className="w-[120px] md:w-[150px] h-auto object-cover "
          />

          <div className="w-full px-6 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1 space-y-2.5">
              <h3 className="text-black text-xl sm:text-2xl md:text-[26px] font-bold leading-snug tracking-tight">
                Qui peut investir sur izicagn
              </h3>

              <p className="text-base sm:text-lg text-[#6C7180] font-semibold leading-relaxed tracking-tight">
                Lorem ipsum dolor sit amet consectetur. Euismod tortor
                pellentesque ac sem risus. Sed tortor ut sed tellus eget.
              </p>
            </div>

            <Link to="/leverdesfonds/commentçamarche">
              <button className="self-start sm:self-auto p-3 flex items-center justify-center bg-orange-300 shadow-lg rounded-full cursor-pointer">
                <img src={arrow_up} alt="Arrow up" className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtapesSection;
