import Footer from "../components/general/footer";
import GobackComponent from "../components/general/gobackComponent";
import Navbar from "../components/general/navbar";
import ArticleCard from "../components/articles/ArticleCard";
import LoadMoreButton from "../components/general/loadMoreButton";

import search_icon from "../assets/articles/search_icon.png";
import articles_avatar_1 from "../assets/articles/articles_avatar_1.png";
import articles_avatar_2 from "../assets/articles/articles_avatar_2.png";
import articles_avatar_3 from "../assets/articles/articles_avatar_3.png";
import clap_hand_icon from "../assets/articles/clap_hand_icon.png";
import linear_background from "../assets/articles/linear_background.png";
import google_play_logo from "../assets/articles/google_play_logo.png";
import apple_store_logo from "../assets/articles/play_store_logo.png";
import phone_mockup from "../assets/articles/phone_mockup.png";

export const articleItems = [
  {
    id: 1,
    image: articles_avatar_1,
    date: "09/07/2023",
    react: "09",
    desc: "Les meilleurs pratiques pour creer une cagnote",
  },
  {
    id: 2,
    image: articles_avatar_2,
    date: "09/07/2023",
    react: "09",
    desc: "Les 5 Erreurs à eviter lors de la collecte de fonds",
  },
  {
    id: 3,
    image: articles_avatar_1,
    date: "09/07/2023",
    react: "09",
    desc: "Les meilleurs pratiques pour creer une cagnote",
  },
  {
    id: 4,
    image: articles_avatar_2,
    date: "09/07/2023",
    react: "09",
    desc: "Les 5 Erreurs à eviter lors de la collecte de fonds",
  },
  {
    id: 5,
    image: articles_avatar_1,
    date: "09/07/2023",
    react: "09",
    desc: "Les meilleurs pratiques pour creer une cagnote",
  },
  {
    id: 6,
    image: articles_avatar_2,
    date: "09/07/2023",
    react: "09",
    desc: "Les 5 Erreurs à eviter lors de la collecte de fonds",
  },
];

const AllArticle = () => {
  return (
    <div className="w-full">
      <Navbar />

      <div className="w-full">
        <div className="md:px-4">
          <GobackComponent />
        </div>

        <div className="w-full flex flex-col my-8 justify-center text-start items-start px-3 md:px-6">
          {/* Header */}
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-[#0E0E18] tracking-[-2px] font-medium text-[24px] md:text-[38px] lg:text-[48px]">
              Actualités et ressources
            </h1>

            <div className="relative w-full md:w-auto">
              <img
                src={search_icon}
                alt="Search Icon"
                className="absolute top-3 left-4 object-cover"
              />

              <input
                type="text"
                className="w-full lg:w-[286px] ps-10 h-[42px] rounded-[40px] border border-[#F5F5F4] bg-[#F5F5F4] outline-none text-[13px] tracking-[-1%] font-medium"
                placeholder="Rechercher des articles"
              />
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col items-start gap-4 mt-4">
            <div className="w-full lg:w-[70%] bg-white rounded-[26px] flex flex-col items-start gap-5">
              <img
                src={articles_avatar_1}
                alt="Avatar_1"
                className="w-full h-[432px] rounded-xl object-cover"
              />

              <div className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <span className="text-[#888888] font-[400] text-sm">
                    Il y a 8 heures
                  </span>

                  <div className="bg-[#ECFDFF] flex items-center gap-[5px] w-[68px] h-[32px] rounded-[20px]">
                    <span className="text-sm font-medium text-black">09</span>

                    <img
                      src={clap_hand_icon}
                      alt="Clap Hand Icon"
                      className="w-[20px] h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="w-full space-y-2 lg:space-y-1 px-2">
                  <h3 className="text-black text-[18px] md:text-[20px] font-[700] ">
                    Comment formuler sa cagnote et gagner la confiance des
                    donateurs
                  </h3>

                  <p className="text-[#6F7886] text-base md:text-lg font-medium">
                    Découvrez l'importance de la transparence dans la gestion de
                    votre campagne et comment utiliser les outils d'izicagn pour
                    rassurer vos donateurs
                  </p>
                </div>
              </div>
            </div>

            <div className=" w-full lg:w-[30%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <ArticleCard
                image={articles_avatar_3}
                date="2 jours"
                react="09"
                desc="Comment engager vos contributeurs et M..."
              />

              <ArticleCard
                image={articles_avatar_3}
                date="2 jours"
                react="09"
                desc="Comment engager vos contributeurs et M..."
              />
            </div>
          </div>
        </div>

        <div className="w-full px-3 md:px-6y flex flex-col lg:flex-row gap-8 items-start">
          {/* Liste d'articles */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articleItems.map((item) => (
              <ArticleCard
                key={item.id}
                image={item.image}
                date={item.date}
                react={item.react}
                desc={item.desc}
              />
            ))}
          </div>

          {/* Section Téléchargement App */}
          <div
            style={{
              backgroundImage: `url(${linear_background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col items-center gap-8 md:p-8 p-0 px-6 rounded-[20px]"
          >
            {/* Partie gauche (texte + logos) */}
            <div className="flex flex-col gap-4 py-4 text-start">
              <h3 className="text-[20px] sm:text-[24px] text-[#08254D] font-extrabold leading-snug">
                Collecter, donner et investir dans les projets qui comptent
              </h3>

              <p className="text-sm font-normal ">
                Téléchargez l'application izicagn sur votre mobile :
              </p>

              <div className="flex items-center md:items-start gap-4">
                <img
                  src={google_play_logo}
                  alt="Google Play Store Logo"
                  className="w-[130px] sm:w-[145px] object-contain"
                />

                <img
                  src={apple_store_logo}
                  alt="Apple Store Logo"
                  className="w-[130px] sm:w-[145px] object-contain"
                />
              </div>
            </div>

            {/* Partie droite (image du téléphone) */}
            <div className="w-full max-w-[325px]">
              <img
                src={phone_mockup}
                alt="Phone Mockup"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[20px]">
          <LoadMoreButton />
        </div>
      </div>

      <div className="mt-[244px]">
        <Footer />
      </div>
    </div>
  );
};

export default AllArticle;
