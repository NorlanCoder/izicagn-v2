
import Footer from '../components/general/footer'
import ZigzagText from '../assets/home/deco/zigzag.svg'
import { CagnotteMediumList } from '../utils/data'
import CagnotteLargeComponent from '../components/cagnotte/cagnotteLargeComponent'
import CagnotteLargeComponent2 from '../components/cagnotte/cagnotteLargeComponent2'
import HomeStatutCarousel from '../components/home/HomeStatutCarousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ObjectifAsset1 from '../assets/home/x-2.svg'
import ObjectifAsset2 from '../assets/home/x-3.svg'
import Substract from '../assets/home/Subtract.svg'
import HomeAnimation from '../assets/home/deco/img_illustration-DaCo_5lR.webp'
import '../utils/style/home.css'
import Partner from '../components/home/Partner'
import HomeStat from '../components/home/HomeStat'
import CarouselImage from '../components/home/CarouselImage'
import Appstore from '../assets/home/appstore.svg'
import Playstore from '../assets/home/playstore.svg'
import Fleche from '../assets/home/fleche.svg'
import BackDeco from '../assets/home/backdeco.svg'
import App from '../assets/home/app-preview.png'
import { Link } from 'react-router'
import LeftImg from '../assets/home/hero_section/left.png'
import RightImg from '../assets/home/hero_section/right.png'
import BottomImg1 from '../assets/home/hero_section/bottom1.png'
import BottomImg2 from '../assets/home/hero_section/bottom2.png'
import UnderlineDeco from '../assets/home/hero_section/Underline_06.svg'
import Axterix from '../assets/home/hero_section/axterix.svg'
import Highlight from '../assets/home/hero_section/Highlight_10.svg'
import ArticleCardMedium from '../components/articles/ArticleCardMedium'
import { articleItems } from './AllArticle'
import Testimonial from '../components/home/Testimonial'
import { useEffect, useState } from 'react'
import Navbar2 from '../components/general/navbar2'
import { motion, useAnimation } from 'motion/react'
import CategoryDropdown from '../components/general/CategoryDropdown'


const Typewriter = ({
  texts,
  speed = 100,
}: {
  texts: string[];
  speed: number;
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0); // index de la lettre
  const [niveau, setNiveau] = useState(false); // false = écrire, true = effacer
  const [textIndex, setTextIndex] = useState(0); // index du texte courant
  useEffect(() => {
    let timeout: any;
    const currentText = texts[textIndex];

    if (!niveau && index < currentText.length) {
      // Effet de tape
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (!niveau && index >= currentText.length) {
      // Pause avant effacement
      timeout = setTimeout(() => setNiveau(true), 1000);
    } else if (niveau && index > 0) {
      // Effet d'effacement
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, speed);
    } else if (niveau && index === 0) {
      // Passage au texte suivant
      timeout = setTimeout(() => {
        setNiveau(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [index, niveau, texts, textIndex, speed]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <h1 className=" md:text-[68px] text-[58px] font-bold lg:w-2/3 w-full text-center leading-20 relative z-5 text-[#FD8352] montserrat-bold pt-4 tracking-[-3px]">
      {displayedText}
      <span
        style={{ display: isMobile ? 'none' : 'inline' }}
        className="animate-pulse text-[#FD8352]"
      >
        |
      </span>
    </h1>
  );
};

  


const Home = () => {

    const controls = useAnimation();

    useEffect(() => {
        // const handleScroll = () => {
            controls.start('visible');
        // };

        // window.addEventListener('scroll',handleScroll)

        // setTimeout(() => {
        //     handleScroll();
        // }, 1000);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay }
        })
    };

    const fadeInVariantLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: (delay = 0) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay }
        })
    };

    const fadeInVariantRight = {
        hidden: { opacity: 0, x: 100 },
        visible: (delay = 0) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay }
        })
    };

    return (
        <div>
            <Navbar2 /> 

            <section className='md:h-[108vh] flex flex-col items-center justify-center hero_section_bg relative pt-28 overflow-hidden'>
                <h1 className='text-[#0C0C44]  md:text-[68px] text-[58px] font-bold lg:w-[779px] md:w-2/3 w-full text-center leading-[80px] relative z-5 montserrat-bold] tracking-[-3px] '>Ensemble, faisons de chaque geste un acte </h1>
                <Typewriter  texts={['de générosité','d’entraide','d’investissement']} speed={200} />
                <div className="flex md:flex-row flex-col justify-center space-x-5 mt-10 relative z-5">
                    <Link to="/commentçamarche" className="bg-gradient-to-b from-[#07AED8] to-[#90E2F8] hover:to-[#07AED8] hover:shadow-none text-white p-[14.04px] px-[28.09px] rounded-full font-[700] text-[17.07px] shadow-lg transition-all  flex justify-center items-center ">Démarrer une cagnotte</Link>
                    {/* <Link to="/commentçamarche" className="bg-white text-[#0C0C44] p-[14.04px] px-[28.09px] rounded-full font-[700] text-[17.07px] transition-all hover:bg-[#0C0C44] hover:text-white hover:shadow-none  flex justify-center items-center md:mt-0 mt-5">Financer un projet</Link> */}
                </div>
                <div className='w-[569.7608161694778px] h-[600.6400979966875px] bg-[#b0e4f262] rotate-[12.95deg] absolute top-[92.27px] right-[325px] blur-3xl'></div>
                <div className='w-[753.8562054001509px] h-[680.67284343799715px] bg-[#b0e4f262] -rotate-[28.55deg] absolute top-[92px] left-[62px] blur-3xl'></div>
                <motion.div className='flex flex-col items-center mt-10 w-[417.655162236501px] relative z-5' variants={fadeInVariant} initial="hidden" animate={controls} custom={0.5}>
                    <p className='xl:text-[22px] lg:text-[21px] text-center -rotate-[3.05deg] pacifico relative text-[#0C0C44] leading-10 font-bold'>La 1ere plateforme sécurisée de Crowdfunding en Afrique... Leader en Europe</p>
                    <img src={UnderlineDeco} alt="" className='mt-4' />
                </motion.div>

                <motion.div className='absolute top-[95px] left-0 z-1' variants={fadeInVariantLeft} initial="hidden" animate={controls} custom={0.1}>
                    <img src={LeftImg} alt="" className='md:w-[282.63px] w-[20vh] lg:opacity-100 md:opacity-40 opacity-25' />
                    <img src={Axterix} alt="" className='absolute bottom-12 -right-14' />
                </motion.div>

                <motion.div className='absolute top-[170px] right-0 z-1' variants={fadeInVariantRight} initial="hidden" animate={controls} custom={0.4}>
                    <img src={RightImg} alt="" className='md:w-[263.34px] w-[20vh] lg:opacity-100 md:opacity-40 opacity-25' />
                    <img src={Highlight} alt="" className='absolute -bottom-24 -left-20' />
                </motion.div>

                <motion.div className='absolute lg:flex hidden bottom-0 left-72 z-1' variants={fadeInVariant} initial="hidden" animate={controls} custom={0.5}>
                    <img src={BottomImg2} alt="" className='lg:w-[282.67px] md:w-[30vh] w-[20vh] lg:opacity-100 md:opacity-40 opacity-25' />
                </motion.div>

                <motion.div className='absolute right-72 bottom-0 z-1' variants={fadeInVariant} initial="hidden" animate={controls} custom={0.7}>
                    <img src={BottomImg1} alt="" className='lg:w-[282.67px] md:w-[30vh] w-[20vh] lg:opacity-100 md:opacity-40 opacity-25' />
                </motion.div>
            </section>

            <section className='3xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px] mt-20 mb-24'>
                
                <div className="flex lg:flex-row lg:items-center justify-center flex-col">
                    <div className='relative w-full flex flex-col justify-start items-center'>
                        <h1 className='xl:text-[58px] lg:text-[50px] text-[58px] text-[#0C0C44] lg:flex lg:flex-col flex-row leading-16 lg:text-left text-center'><span className='montserrat-bold font-[700]'>Découvrez </span><span className='montserrat-bold font-[700]'> Izicagn sur mobile</span> <span className='text-[#FD8352] montserrat-bold'> <span className='text-[#0C0C44] montserrat-bold font-[700]'>pour</span> <i className='montserrat-bold font-[700]'>simplifiez </i></span><i className='text-[#FD8352] montserrat-bold font-[700]'>vos levées de fonds</i></h1>
                        <div className='flex flex-row lg:self-start ml-10 space-x-4 mt-20'>
                            <img src={Playstore} alt="" />
                            <img src={Appstore} alt="" />
                        </div>
                        <img src={Fleche} alt="" className='absolute bottom-8 -left-24' />
                    </div>

                    <div className='w-full flex lg:flex-row lg:justify-left flex-col relative' style={{backgroundImage: BackDeco}}>
                        <img src={App} alt="" />
                    </div>
                </div>
            </section>

            <section className='3xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px] mb-32'>
                
                <div>
                    <h1 className='text-[64px] text-[#0C0C44] font-bold md:flex md:flex-col flex-row text-center leading-20 font-[800]'><span className='font-[800]'>La collecte de</span> <span className='text-[#07AED8] font-[800]'> <span className=' text-[#0C0C44] font-[800]'>fonds</span> efficace <span className=' text-[#0C0C44] font-[800]'>et</span> sécurisée</span></h1>
                    <p className='flex justify-center'><img src={ZigzagText} alt="" /></p>
                </div>
                
                <div className='flex justify-center mt-5'>
                    <p className='text-center lg:w-11/12 sm:w-2/3 text-[16px] text-[#494F62] font-[500]'>Izicagn vous accompagne pour vos collectes de dons en ligne quelque soit votre projet. Créez et gérez des campagnes de collecte de fonds facilement et efficacement.</p>
                </div>

                <div className='w-full flex lg:flex-row lg:justify-center flex-col md:space-x-6 mt-20'>
                    <HomeStat />
                    <CarouselImage />
                </div>

            </section>

            <section className='3xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px] my-10'>
                
                <div className='flex flex-row items-center space-x-4 mb-6'>
                    <h1 className='text-[32px] text-[#0A1243] font-[700]'>Les tendances</h1>
                    <CategoryDropdown />
                </div>
                
                <div className='flex flex-row flex-wrap'>
                    <CagnotteLargeComponent item={CagnotteMediumList[2]} />
                    <CagnotteLargeComponent item={CagnotteMediumList[1]} />
                </div>
                <div className='flex flex-row flex-wrap'>
                    <CagnotteLargeComponent2 item={CagnotteMediumList[2]} />
                    <CagnotteLargeComponent2 item={CagnotteMediumList[1]} />
                    <CagnotteLargeComponent2 item={CagnotteMediumList[3]} />
                </div>

            </section>

            <section className='my-10'>
                <img src={HomeAnimation} alt="" />
            </section>

            <section className='3xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px] px-10 my-10 mb-24'>
                
                <h1 className='text-[48px] text-[#0C0C44] font-bold md:flex md:flex-col flex-row text-center leading-14 mt-20 '><span className='font-[800]'>L'outil idéal <span className='text-[#07AED8] font-[800]'> quelque soit </span></span> <span className=' text-[#0C0C44] font-[800]'>votre objectif</span></h1>
                
                <div className='w-full flex md:flex-row flex-col md:space-x-6 mt-16'>
                    <HomeStatutCarousel />
                    <div className='self-stretch h-auto md:w-3/5 flex flex-col space-y-6 md:mt-0 mt-8'>
                        <motion.div 
                            className='h-[348px] bg-[#D6F5F9] grow rounded-[40px] overflow-hidden relative group'
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            <div className='px-[65px] pt-[45px] flex flex-row items-center grow-0 relative z-1'>
                                <p className='grow w-1/2 relative z-1 text-[#3B4F54] '>Un espace personnel pour gérer et suivre en temps réel les contributions, et partager facilement votre collecte sur les réseaux sociaux.</p>
                                <div className='cursor-pointer relative z-1 h-[50px] w-[50px] bg-[#0F6D8F] rounded-full grow-0 self-center flex justify-center items-center'>
                                    <ChevronRight className='text-white' />
                                </div>
                            </div>

                            <div className='grow flex flex-row absolute top-0 w-full h-full'>
                                <motion.img
                                    variants={{
                                        rest: { rotate: 0 },
                                        hover: { rotate: -12, bottom: -450},
                                    }}
                                    src={ObjectifAsset2} 
                                    alt=""
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className='absolute -bottom-[500px] xl:left-0 lg:-left-20 z-2' 
                                />
                                <motion.img 
                                    variants={{
                                        rest: { y: 0 },
                                        hover: { y: 80 },
                                    }}
                                    src={ObjectifAsset1} 
                                    alt=""
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className='absolute bottom-0 xl:right-0 lg:-right-20 right-0 z-1'
                                />
                            </div>
                            <motion.div
                                variants={{
                                    rest: { height: 0 },
                                    hover: { height: '100%' },
                                }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className='bg-slate-500/5 w-[100%] absolute bottom-2 left-0 z-10'
                            >
                            </motion.div>
                            <img src={Substract} alt="" className='absolute top-0 right-0 z-0' />
                        </motion.div>
                        <div className='grow-0 flex flex-row items-end space-x-6'>
                            <div className='bg-[#4CABC2] rounded-[40px] h-[205px] w-1/2 flex flex-col items-center justify-center text-white'>
                                <h1 className='text-[52px] font-[700]'>+1300</h1>
                                <p className='text-[20px] px-5 text-center font-[400]'>entreprises l’ont fait ici</p>
                            </div>
                            <div className='bg-[#CFF7FE] rounded-[40px] h-[205px] w-1/2 flex flex-col items-center justify-center text-[#083044]'>
                                <h1 className='text-[52px] font-[700]'>+740</h1>
                                <p className='text-[20px] px-5 text-center font-[400]'>Investisseurs chaque an</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='mb-24 mt-20'>
                <h1 className='uppercase text-center mb-5 text-[20px] font-[600] text-[#585D5E] '>Des moyens de paiements sûrs et adaptés où que vous soyez</h1>
                <Partner />
            </section>

            <section className='3xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px] my-10 mb-24'>
                
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-[48px] text-[#0C0C44]  md:flex md:flex-col flex-row leading-14 tracking-[-1px] font-[700] mt-10 mb-10 '>Ils nous ont fais confiance</h1>
                    <div className='flex flex-row space-x-2'>
                        <div className='w-[49px] h-[49px] rounded-full bg-[#07AED8]/10 flex flex-row justify-center items-center cursor-pointer '>
                            <ChevronLeft className='text-white' />
                        </div>
                        <div className='w-[49px] h-[49px] rounded-full bg-[#07AED8] flex flex-row justify-center items-center cursor-pointer'>
                            <ChevronRight className='text-white' />
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-row flex-wrap'>
                    <Testimonial />
                </div>
            </section>

            <section className='3xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px] my-10 mb-24'>
                
                <h1 className='text-[48px] text-[#0C0C44] font-[700] md:flex md:flex-col flex-row leading-14 mt-10 mb-2 tracking-[-1px] '>Actualités</h1>
                
                <div className='flex flex-row flex-wrap space-between'>
                    <ArticleCardMedium
                        image={articleItems[2].image}
                        date={articleItems[2].date}
                        react={articleItems[2].react}
                        desc={articleItems[2].desc}
                    />
                    <ArticleCardMedium
                        image={articleItems[1].image}
                        date={articleItems[1].date}
                        react={articleItems[1].react}
                        desc={articleItems[1].desc}
                    />
                    <ArticleCardMedium
                        image={articleItems[0].image}
                        date={articleItems[0].date}
                        react={articleItems[0].react}
                        desc={articleItems[0].desc}
                    />
                </div>

                <div className='flex flex-row justify-center mt-20'>
                    <Link to="/articles" className="bg-[#F4F6F7] transition-all text-[#000] p-4 px-7 rounded-full text-[16px] font-[700] ">Plus d'articles</Link>
                </div>

            </section>

            <div className='px-4'>
                <Footer />
            </div>

        </div>
    )
}

export default Home;
