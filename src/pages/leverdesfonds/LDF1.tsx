import CategoriesSection from "../../components/leverdefond/CategoriesSection";
import EtapesSection from "../../components/leverdefond/EtapesSection";

const LeverDesFonds1 = () => {
  return (
    <div className="px-3 md:px-10 lg:px-20">
      <section className="relative my-8 flex flex-col justify-center items-start rounded-[30px] md:rounded-[42.51px] bg-[radial-gradient(circle,_#78DFF5,_#0BD1F4)] overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24 py-10 md:py-16 min-h-[400px] md:min-h-[500px] lg:min-h-[573px]">
        <div className="relative z-10 max-w-full md:max-w-[680px]">
          <h1 className="text-[30px] sm:text-[36px] md:text-[45px] lg:text-[55px] leading-snug text-white font-extrabold mb-5">
            <span className="text-[#0D304E]">Transformez vos idées</span> en
            actions en trouvant un financement !
          </h1>

          <p className="text-[#0F6D8F] mb-6 text-[16px] sm:text-[17px] md:text-[19px] font-bold max-w-[90%]">
            Chez izicagn, on donne de la visibilité à vos projets.
            Rejoignez-nous pour faire avancer vos idées ambitieuses et
            créatives.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 w-full">
            <div className="border border-[#07AED8] w-full sm:w-auto rounded-full py-3 px-6 bg-white flex justify-center items-center">
              <p className="text-[16px] text-center font-bold text-[#083044]">
                Financer un projet
              </p>
            </div>

            <button className="bg-[#0D304E] text-white rounded-full text-[14px] py-3 px-6 font-bold w-full sm:w-auto">
              Démarrer une cagnotte
            </button>
          </div>
        </div>

        <div className="absolute inset-0 bg-right bg-no-repeat w-full z-0"></div>
      </section>

      <EtapesSection />

      <CategoriesSection />
    </div>
  );
};

export default LeverDesFonds1;
