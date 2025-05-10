import Navbar from "../components/general/navbar";
import GobackComponent from "../components/general/gobackComponent";
// import Plus from "../assets/cagnotte/Group1.png";
import Love from "../assets/tarif/love1.svg";
import Discount from "../assets/tarif/discount1.svg";
import Footer from "../components/general/footer";
import "../utils/style/tarif.css";
import CountryDropdown from "../components/tarifs/CountryDropdown";
import ServiceDropdown from "../components/tarifs/ServiceDropdown";

const Tarifs = () => {
  return (
    <div className=" w-full ">
      <Navbar />
      <div className="mt-[150px] ">
        <div className="flex justify-center items-center 2xl:px[280px] lg:px-[120px] md:px-[80px] px-[16px]">
          
          <div className="flex flex-col justify-center items-center pb-16">
            <div className=" self-start mb-5">
              <GobackComponent />
            </div>
            <div className="">
              <div className="flex justify-between w-full lg:w-[938px]">
                <h1 className=" text-[40px] lg:text-[54px] font-bold max-w-[640px] leading-16 mb-5">
                  Une tarification simple et transparente
                </h1>
                <div className="mt-3">
                  <CountryDropdown options={['Afrique', 'Europe']} defaultOption="Afrique" />
                </div>
                {/* <div className="flex items-center justify-center lg:justify-between px-[20px] py-[14px] bg-[#F2F4F4] rounded-[15px] w-[128px] h-[46px] mt-5">
                  <p>Afrique</p>
                  <img src={Chevron} alt="" />
                </div> */}
              </div>
            </div>
            <p className=" text-[18px] text-[#6F7886] max-w-[938px] ">
              Nous croyons en la transparence. Izicagn offre des options
              tarifaires claires et accessibles, adaptées aussi bien pour ceux
              qui lancent une cagnotte personnelle que pour les entrepreneurs
              cherchant à financer un projet ambitieux
            </p>
          </div>
        </div>

        <div className=" rounded-[42.51px] bg-[#E2E2E208]" id="bg-tarif">
          <div className="flex flex-col justify-center items-center py-14">
            <div className="">
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between md:items-center w-full lg:max-w-[1012px] pb-10 px-5">
                  <p className="text-[#0C0C44] text-3xl md:text-[48px] font-bold tracking-[-2px] max-w-[535px] montserrat-bold">
                    Des <span className="text-[#07AED8] montserrat-bold">tarifs simples</span>,
                    pour tous vos objectifs
                  </p>
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#6F7886] uppercase font-extrabold text-[16px] lg:text-[20px]">
                      Frais izicagn pour
                    </p>
                    <div className="flex items-center md:justify-between space-y-4">
                      <ServiceDropdown options={['Une cagnotte', 'Une levée de fonds']} defaultOption="Une cagnotte" />
                      {/* <p className="uppercase text-[16px] lg:text-[20px] text-[#EC320A] font-bold">
                        une cagnotte
                      </p> */}
                      {/* <img src={Plus} alt="" className=" cursor-pointer pb-4" /> */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-x-4 space-y-4 lg:flex-row ">
                  <div className=" bg-white rounded-[40px] outline-[#07AED81A] outline-[5px] pl-10 pr-20 pt-10 pb-20 h-[497px] w-[454px]">
                    <img src={Love} alt="" />
                    <p className=" text-[16px] text-[#4E5B6B] font-bold mt-2">
                      Aucun frais de démarrage{" "}
                    </p>
                    <p className=" text-[142px] text-[#FD8352] font-bold">
                      0<span className=" text-[58.48px] font-normal pl-3 ">Fcfa</span>
                    </p>
                    <p className="text-[15px] text-[#585D5E] max-w-[301px]">
                      pour créer la cagnotte ou participer à une cagnotte
                    </p>
                  </div>
                  <div className=" bg-white rounded-[40px] outline-[#07AED81A] outline-[5px] pl-10 pr-20 pt-10 h-[497px] w-[454px]">
                    <img src={Discount} alt="" />
                    <p className="text-[16px] text-[#4E5B6B] font-bold mt-2">
                      Des frais de transaction uniques
                    </p>
                    <p className="text-[142px] text-[#FD8352] font-bold ">
                      5<span className=" text-[58.48px] font-normal pl-3">%</span>
                    </p>
                    <p className="text-[15px] text-[#585D5E] max-w-[301px]">
                      prélevés sur chaque don pour couvrir les frais de
                      traitement des paiements et de maintenance de la
                      plateforme
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className=" md:text-[20px] text-white text-center py-4 font-extrabold ">
              ** En quoi consistent les frais de transaction ? **
            </p>
            <p className=" text-[#E5EEEF] text-[16px] text-center max-w-[1012px]">
              Les frais de transaction couvrent les coûts liés au traitement des
              paiements sur notre plateforme. Ils incluent les services des
              opérateurs de paiement pour gérer les transferts d'argent de
              manière sécurisée, ainsi que les frais de maintenance et de
              développement de la plateforme. Ce léger pourcentage nous permet
              d'assurer un service fiable, rapide et sécurisé pour toutes vos
              collectes de fonds. Ces frais sont transparents et sans surprise,
              vous permettant de maximiser l'impact de chaque don ou
              investissement.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-32 pb-[199px] px-4">
          <div className="w-[938px]">
            <h2 className="text-[28px] montserrat-bold pb-9">
              Exigences pour retirer les fonds
            </h2>
            <p className="text-[16px] text-[#555B6D] pb-5">
              Lorem ipsum dolor sit amet consectetur. Tempor quis urna
              consectetur malesuada rutrum donec cras ultrices. Id suscipit
              tellus tortor odio volutpat velit est. Vel laoreet eu in porttitor
              eget auctor quis sed a. Scelerisque eget lacus vel augue suscipit.
              Turpis faucibus ornare platea ultricies elit massa porttitor
              adipiscing. Pellentesque eget aliquam ullamcorper pretium
              pharetra. Varius non quam nisi ac lobortis augue. Enim in id vel
              leo duis libero enim nulla fermentum. Luctus tellus placerat
              consequat pulvinar magna accumsan tristique in auctor. Id
              porttitor lorem commodo dui praesent leo etiam quis.
            </p>
            <p className="text-[16px] text-[#555B6D]">
              Enim elementum blandit tempus eu amet. Nunc vitae quam quam quam
              egestas neque enim. Facilisi mattis proin amet interdum id neque.
              Luctus habitant risus pharetra suspendisse sit nibh eu in.
              Interdum luctus cum id tristique faucibus morbi enim nisi.
            </p>
            <p className="text-[16px] text-[#555B6D] pb-9">
              Arcu libero ipsum nulla diam diam augue neque vitae. Dolor platea
              pharetra eget consectetur aliquam vitae netus arcu. Morbi enim
              tincidunt imperdiet odio. Mauris faucibus etiam quis eget
              elementum. Odio et felis enim sit massa. Fermentum a facilisi
              ligula id tempor tristique aliquam. Mattis blandit nullam integer
              amet elit in tortor faucibus lacus. Semper vestibulum arcu viverra
              semper pellentesque pellentesque adipiscing nibh. Risus id
              venenatis amet etiam semper ullamcorper tristique aenean cras.
              Vitae dignissim nisi ligula mauris amet.
            </p>
            <p className="text-[16px] text-[#555B6D]">
              Congue nunc fusce nisi in nulla tellus eu tempus. Diam phasellus
              sit nunc sed viverra justo. Lacus quis ut cras lacinia. Turpis ut
              purus dui lacus est. Erat elit lectus viverra blandit enim donec
              potenti scelerisque. Commodo ac vulputate sociis ridiculus
              vestibulum cursus eros sapien bibendum. Cursus mi integer eget
              quam a.
            </p>
          </div>
        </div>
          <div className="flex justify-center pb-[199px] px-4">
            <div className="flex flex-col relative justify-center items-center space-y-4 bg-[radial-gradient(circle,#23c8ed,#23c8ed44)] bg-[#23c8ed44]  rounded-[40px] max-w-[1271px] md:w-[1271px] h-[326px]">
              
              <h2 className="text-[35px] md:text-[48px] text-center text-white font-bold mb-8 montserrat-bold leading-16 px-2">
                Prêt à{" "}
                <span className="text-[#231F20] montserrat-bold">donner vie vos idées ?</span>{" "}
                Créez votre cagnotte dès maintenant
              </h2>
              <button className=" text-white bg-[#083044] py-[16px] px-[30px] cursor-pointer rounded-[200px] transition-all hover:bg-[#07AED8] shadow-2xl montserrat-bold ">
                Démarrer une cagnotte
              </button>
            </div>
          </div>
      </div>
      <div className="px-4">
        <Footer />
      </div>
    </div>
  );
};

export default Tarifs;
