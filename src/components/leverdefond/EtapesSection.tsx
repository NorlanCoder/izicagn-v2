import Marquee from "react-fast-marquee";

import avatar_1 from "../../assets/Lever de fond/avatar_1.png";
import li_frame from "../../assets/Lever de fond/li_frame.png";
import Subtract from "../../assets/Lever de fond/Subtract.png";
import vetor_1 from "../../assets/Lever de fond/vetor_1.png";
import investissement_icon from "../../assets/Lever de fond/investissement_icon.png";
import arrow_up from "../../assets/Lever de fond/uil_arrow-up.png";
import rocket_icon from "../../assets/Lever de fond/rocket_icon.png";
import pieces_icon from "../../assets/Lever de fond/pieces_icon.png";
import piece_icon from "../../assets/Lever de fond/piece_icon.png";

const categories = [
  "Startups",
  "Énergies renouvelables",
  "Fintech",
  "Art et culture",
  "Entrepreneurs sociaux",
  "Commerce",
  "Industrie",
  "Mode et design",
  "Sport et loisirs",
  "Immobilier et urbanisme",
  "Distribution",
];

const CategoryBadge = ({ text }) => (
  <div className="px-6 py-2 rounded-full bg-[#ECFDFF] text-[#0F6D8F] font-semibold text-[14px] whitespace-nowrap mx-2">
    {text}
  </div>
);

const EtapesSection = () => {
  return (
    <section className="w-full h-full">
      <div className="w-full h-[100vh] flex items-start ga`1p-4 mb-8">
        <div
          style={{
            backgroundImage: `url(${vetor_1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative w-[40vw] h-full rounded-[30px]"
        >
          <img
            src={avatar_1}
            alt="Avatar"
            className="w-full h-full rounded-[30px] object-cover mix-blend-lighten"
          />
        </div>

        <div
          style={{
            backgroundImage: `url(${Subtract})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[60vw] h-full bg-[#033C50] rounded-[30px] space-y-8 p-8"
        >
          <h2 className="max-w-lg text-white text-[38px] font-[700] leading-[130%] mb-8">
            Lever des fonds en quelques étapes simples
          </h2>

          <div className="w-full flex items-center gap-[28px] ">
            <div className="">
              <img
                src={li_frame}
                alt="Li Frame"
                className=" h-auto object-cover"
              />
            </div>

            <ul className=" flex flex-col items-start text-start gap-4 text-white text-lg mt-[18px]">
              <li className="w-[333px]">Créez votre compte izicagn</li>

              <li className="w-[333px]">
                Présentez votre Projet aux investisseur
              </li>

              <li className="w-[436px]">
                Lancez votre campagne et suivi vos progrès depuis votre espace
                personnel
              </li>

              <li className="w-[408px]">
                Accédez aux outils méthodologiques pour réussir objectif{" "}
              </li>
            </ul>
          </div>

          <button className="w-[247px] h-[60px] text-[16px] text-[#0F6D8F] font-[700] leading-[24px] bg-white outline-none rounded-full cursor-pointer">
            Démarrer un projet
          </button>
        </div>
      </div>

      <div className="w-full mb-8 flex items-center gap-2.5">
        <div className="relative p-6 w-1/2 flex flex-col items-start text-start gap-2.5 bg-[#FAF4F0] rounded-[30px]">
          {/* Zone Rocket + Pièces */}
          <div className="relative flex items-start">
            <img
              src={rocket_icon}
              alt="Icône fusée"
              className="w-[90px] h-auto object-cover"
            />

            <img
              src={piece_icon}
              alt="Pièce"
              className="absolute left-[65px] top-[55px] w-[30px] h-auto object-cover"
            />

            <img
              src={pieces_icon}
              alt="Pile de pièces"
              className="absolute left-[90px] top-[65px] w-[50px] h-auto object-cover"
            />
          </div>

          {/* Texte + Bouton flèche */}
          <div className="w-full mt-4 flex items-center justify-between ">
            <div className="max-w-md space-y-2.5">
              <h3 className=" text-black text-[26px] font-[700] leading-[130%] tracking-[-1px]">
                Qui peut lever des fonds sur izicagn
              </h3>

              <p className="text-lg text-[#6C7180] font-[700] leading-[130%] tracking-[-1px]">
                Lorem ipsum dolor sit amet consectetur. Euismod tortor
                pellentesque ac sem risus. Sed tortor ut sed tellus eget.
              </p>
            </div>

            <button className="p-3 flex items-center justify-center bg-orange-300 shadow-lg rounded-full cursor-pointer outline-none">
              <img src={arrow_up} alt="Arrow up" className="" />
            </button>
          </div>
        </div>

        <div className="relative w-1/2 flex flex-col items-start text-start gap-2.5 bg-[#FAF4F0] rounded-[30px] ">
          <img
            src={investissement_icon}
            alt="Investissement Icon"
            className="w-[100px] h-auto object-cover"
          />

          <div className="w-full p-6 flex items-center justify-between ">
            <div className="max-w-md space-y-2.5">
              <h3 className=" text-black text-[26px] font-[700] leading-[130%] tracking-[-1px]">
                Qui peut investir sur izicagn
              </h3>

              <p className="text-lg text-[#6C7180] font-[700] leading-[130%] tracking-[-1px]">
                Lorem ipsum dolor sit amet consectetur. Euismod tortor
                pellentesque ac sem risus. Sed tortor ut sed tellus eget.
              </p>
            </div>

            <button className="p-3 flex items-center justify-center bg-orange-300 shadow-lg rounded-full cursor-pointer outline-none">
              <img src={arrow_up} alt="Arrow up" className="" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-16 py-8 overflow-hidden">
        {[1, 2, 3].map((_, i) => (
          <Marquee
            key={i}
            gradient={false}
            speed={40}
            pauseOnHover={true}
            loop={0}
            className="flex gap-10"
            direction={i % 2 === 0 ? "left" : "right"}
          >
            {categories.concat(categories).map((category, index) => (
              <CategoryBadge key={`${i}-${index}`} text={category} />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default EtapesSection;
