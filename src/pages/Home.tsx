
import Footer from '../components/general/footer'
import Navbar from '../components/general/navbar'
import ZigzagText from '../assets/home/deco/zigzag.svg'
import { CagnotteMediumList } from '../utils/data'
import CagnotteLargeComponent from '../components/cagnotte/cagnotteLargeComponent'
import CagnotteLargeComponent2 from '../components/cagnotte/cagnotteLargeComponent2'
import HomeStatutCarousel from '../components/home/HomeStatutCarousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ObjectifAsset1 from '../assets/home/x-2.svg'
import ObjectifAsset2 from '../assets/home/x-3.svg'
import Substract from '../assets/home/Subtract.svg'
import HomeAnimation from '../assets/home/deco/home_animation.svg'
import '../utils/style/home.css'
import Partner from '../components/home/Partner'
import HomeStat from '../components/home/HomeStat'
import CarouselImage from '../components/home/CarouselImage'
import Appstore from '../assets/home/appstore.svg'
import Playstore from '../assets/home/playstore.svg'
import Fleche from '../assets/home/fleche.svg'
import BackDeco from '../assets/home/backdeco.svg'
import Iphone11 from '../assets/home/iphone11.svg'
import Iphone11Shadow from '../assets/home/iphoneShadow.svg'
import { Link } from 'react-router'
import LeftImg from '../assets/home/hero_section/left.svg'
import RightImg from '../assets/home/hero_section/right.svg'
import BottomImg1 from '../assets/home/hero_section/bottom1.svg'
import BottomImg2 from '../assets/home/hero_section/bottom2.svg'
import UnderlineDeco from '../assets/home/hero_section/Underline_06.svg'
import Axterix from '../assets/home/hero_section/axterix.svg'
import Highlight from '../assets/home/hero_section/Highlight_10.svg'
import ArticleCardMedium from '../components/articles/ArticleCardMedium'
import { articleItems } from './AllArticle'
import Testimonial from '../components/home/Testimonial'
import { useEffect, useState } from 'react'

const Typewriter = ({ text, speed = 100 }: {text: string, speed: number}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [niveau, setNiveau] = useState(false);
  
    useEffect(() => {
        let timeout:any;

        if (!niveau && index < text.length) {
            // Effet de "tape"
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);
        } else if (!niveau && index >= text.length) {
            // Quand c'est fini d'écrire, on passe à l'effacement
            timeout = setTimeout(() => {
                setNiveau(true);
            }, speed);
        } else if (niveau && index > 0) {
            // Effet d'effacement
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            }, speed);
        } else if (niveau && index === 0) {
            // Quand tout est effacé, on recommence
            timeout = setTimeout(() => {
                setNiveau(false);
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [index, text, speed, niveau]);

    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
        <h1 className="xl:text-[68px] lg:text-[58px] md:text-[68px] text-[58px] font-bold xl:w-1/2 lg:w-2/3 w-full text-center leading-16 relative z-5 text-[#FD8352]">
            {displayedText}
            <span style={{ display: isMobile ? 'none' : 'inline' }} className="animate-pulse text-[#FD8352]">|</span>
        </h1>
    );
  };
  


const Home = () => {
    return (
        <div>
            <Navbar /> 

            <section className='h-[90vh] flex flex-col items-center justify-center hero_section_bg xl:mb-36 relative'>
                <h1 className='text-[#0C0C44] xl:text-[68px] lg:text-[58px] md:text-[68px] text-[58px] font-bold xl:w-1/2 lg:w-2/3 w-full text-center leading-16 relative z-5'>Ensemble, faisons de chaque geste un acte </h1>
                <Typewriter  text="de générosité" speed={200} />
                <div className="flex flex-row justify-center space-x-5 mt-10 relative z-5">
                    <Link to="/commentçamarche" className="menu_btn2 text-white p-4 px-7 rounded-full">Démarrer une cagnotte</Link>
                    <Link to="/commentçamarche" className="bg-white text-[#0C0C44] p-4 px-7 rounded-full">Financer un projet</Link>
                </div>
                <div className='flex flex-col items-center mt-14'>
                    <p className='w-2/3 text-[22px] text-center -rotate-4 pacifico relative'>La 1ere plateforme sécurisée de Crowdfunding en Afrique... Leader en Europe</p>
                    <img src={UnderlineDeco} alt="" />
                </div>
                <div className='absolute top-0 left-0 z-1'>
                    <img src={LeftImg} alt="" className='lg:w-[35vh] md:w-[30vh] w-[20vh] lg:opacity-100 md:opacity-40 opacity-25' />
                    <img src={Axterix} alt="" className='absolute bottom-0 -right-5' />
                </div>
                <div className='absolute top-5 right-0 z-1'>
                    <img src={RightImg} alt="" className='lg:w-[35vh] md:w-[30vh] w-[20vh] lg:opacity-100 md:opacity-40 opacity-25' />
                    <img src={Highlight} alt="" className='absolute -bottom-20 -left-28' />
                </div>
                <div className='absolute lg:flex hidden bottom-0 left-60 z-1'>
                    <img src={BottomImg2} alt="" className='lg:w-[35vh] md:w-[30vh] w-[20vh] lg:opacity-100 md:opacity-40 opacity-25' />
                </div>
                <div className='absolute right-60 bottom-0 z-1'>
                    <img src={BottomImg1} alt="" className='lg:w-[35vh] md:w-[30vh] w-[20vh] lg:opacity-100 md:opacity-40 opacity-25' />
                </div>
            </section>

            <section className='lg:px-[120px] md:px-[50px] px-10 mb-32'>
                
                <div className="flex lg:flex-row flex-col">
                    <div className='relative grow-0 lg:w-6/12 w-full flex flex-col lg:items-center items-center mt-32'>
                        <h1 className='text-[58px] text-[#0C0C44] font-bold lg:flex lg:flex-col flex-row leading-14 lg:text-left text-center'><span>Découvrez </span><span> Izicagn sur mobile</span> <span className='text-[#FD8352]'> <span className='text-[#0C0C44]'>pour</span> <i>simplifier </i></span><span className='text-[#FD8352]'>vos levées de fonds</span></h1>
                        <div className='flex flex-row lg:self-start ml-10 space-x-4 mt-16'>
                            <img src={Playstore} alt="" />
                            <img src={Appstore} alt="" />
                        </div>
                        <img src={Fleche} alt="" className='absolute bottom-8 -left-24' />
                    </div>

                    <div className='w-full flex lg:flex-row lg:justify-center flex-col md:space-x-6 grow lg:w-6/12 relative self-stretch lg:h-auto h-[639.28px]' style={{backgroundImage: BackDeco}}>
                        <div className='absolute w-full lg:-bottom-36 left-0 flex flex-row justify-center z-3'>
                            <img src={Iphone11} alt="" />
                        </div>
                        <div className='absolute w-full -bottom-16 left-5 flex flex-row justify-center z-2'>
                            <img src={Iphone11Shadow} alt="" />
                        </div>
                        <div className='absolute w-full -bottom-36 left-0  flex flex-row justify-center z-2'>
                            <img src={BackDeco} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='lg:px-[120px] md:px-[50px] px-10 mb-32'>
                
                <div>
                    <h1 className='text-[56px] text-[#0C0C44] font-bold md:flex md:flex-col flex-row text-center leading-14 '><span>La collecte de</span> <span className='text-[#07AED8]'> <span className=' text-[#0C0C44]'>fonds</span> éfficace <span className=' text-[#0C0C44]'>et</span> sécurosé</span></h1>
                    <p className='flex justify-center'><img src={ZigzagText} alt="" /></p>
                </div>
                
                <div className='flex justify-center mt-5'>
                    <p className='text-center md:w-2/3'>Izicagn vous accompagne pour vos collectes de dons en ligne quelque soit votre projet. Créez et gérez des campagnes de collecte de fonds facilement et efficacement.</p>
                </div>

                <div className='w-full flex lg:flex-row flex-col md:space-x-6 mt-10'>
                    <HomeStat />
                    <CarouselImage />
                </div>

            </section>

            <section className='lg:px-[120px] md:px-[50px] px-10 my-10'>
                
                <h1 className='text-[32px] text-[#0A1243] font-bold'>Les tendances</h1>
                
                <div className='flex flex-row flex-wrap'>
                    <CagnotteLargeComponent item={CagnotteMediumList[0]} />
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

            <section className='lg:px-[120px] md:px-[50px] px-10 my-10 mb-24'>
                
                <h1 className='text-[48px] text-[#0C0C44] font-bold md:flex md:flex-col flex-row text-center leading-14 mt-20 '><span>L'outil idéal <span className='text-[#07AED8]'> quelque soit </span></span> <span className=' text-[#0C0C44]'>votre objectif</span></h1>
                
                <div className='w-full flex md:flex-row flex-col md:space-x-6 mt-20'>
                    <HomeStatutCarousel />
                    <div className='self-stretch h-auto md:w-3/5 flex flex-col space-y-6 md:mt-0 mt-8'>
                        <div className='h-[348px] bg-[#D6F5F9] grow rounded-[40px] overflow-hidden relative'>
                            <div className='px-[65px] pt-[45px] flex flex-row items-center grow-0 relative z-1'>
                                <p className='grow w-1/2 relative z-1'>Un espace personnel pour gérer et suivre en temps réel les contributions, et partager facilement votre collecte sur les réseaux sociaux.</p>
                                <div className='cursor-pointer relative z-1 h-[50px] w-[50px] bg-[#0F6D8F] rounded-full grow-0 self-center flex justify-center items-center'>
                                    <ChevronRight className='text-white' />
                                </div>
                            </div>

                            <div className='grow flex flex-row relative h-full'>
                                <img src={ObjectifAsset2} alt="" className='absolute 2xl:bottom-24 lg:bottom-32 xl:left-0 lg:-left-20 z-2' />
                                <img src={ObjectifAsset1} alt="" className='absolute 2xl:bottom-24 lg:bottom-36 xl:right-0 lg:-right-20 right-0 z-1' />
                            </div>

                            <img src={Substract} alt="" className='absolute top-0 right-0 z-0' />
                        </div>
                        <div className='grow-0 flex flex-row items-end space-x-6'>
                            <div className='bg-[#4CABC2] rounded-[40px] h-[205px] w-1/2 flex flex-col items-center justify-center text-white'>
                                <h1 className='text-[52px] font-bold '>+1300</h1>
                                <p className='text-[20px] px-5 text-center'>entreprises l’ont fait ici</p>
                            </div>
                            <div className='bg-[#CFF7FE] rounded-[40px] h-[205px] w-1/2 flex flex-col items-center justify-center text-[#083044]'>
                                <h1 className='text-[52px] font-bold '>+740</h1>
                                <p className='text-[20px] px-5 text-center'>Investisseurs chaque an</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='mb-24'>
                <h1 className='uppercase text-center mb-5'>Des moyens de paiements sûrs et adaptés où que vous soyez</h1>
                <Partner />
            </section>

            <section className='lg:px-[120px] md:px-[50px] px-10 my-10 mb-24'>
                
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-[48px] text-[#0C0C44] font-bold md:flex md:flex-col flex-row leading-14 mt-10 mb-10 '>Ils nous ont fais confiance</h1>
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

            <section className='lg:px-[120px] md:px-[50px] px-10 my-10 mb-24'>
                
                <h1 className='text-[48px] text-[#0C0C44] font-bold md:flex md:flex-col flex-row leading-14 mt-10 mb-10 '>Actualités</h1>
                
                <div className='flex flex-row flex-wrap'>
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
                    <Link to="/articles" className="bg-[#F4F6F7] hover:bg-slate-300 transition-all text-[#0C0C44] p-4 px-7 rounded-full">Plus d'articles</Link>
                </div>

            </section>

            <Footer />

        </div>
    )
}

export default Home;
