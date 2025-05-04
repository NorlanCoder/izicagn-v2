
import ChevronDown from '../../assets/cagnotte/ci_chevron-down.png'
import ArrowOutward from '../../assets/ic_outline-arrow-outward.png'
import Facebook from '../../assets/ri_facebook-fill.png'
import Twitter from '../../assets/prime_twitter.png'
import Instagram from '../../assets/ri_instagram-fill.png'
import LinkedIn from '../../assets/akar-icons_linkedin-fill.png'
import PlayStore from '../../assets/Link1.svg'
import AppStore from '../../assets/Link.svg'
import Logo1 from '../../assets/logo1.svg'
import Logo2 from '../../assets/logo2.webp'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { Globe } from 'lucide-react'

const Footer = () => {

    const SocialNetwork = (item:{item:{id:string,name:string,link:string,image:string}}) => {
        return (
            <div className="border border-[#F0F2F4A6] rounded-full flex flex-row items-center lg:justify-evenly px-[20px] py-[10px] space-x-[6px] ">
                <img src={item.item.image} alt='' title='' className={`   w-4 cursor-pointer`} />
                <p className='text-[14px]'>{item.item.name}</p>
                <img src={ArrowOutward} alt='' title='' className='w-4 cursor-pointer' />
            </div>
        )
    }

    const SocialNetworkList: {id:string,name:string,link:string,image:string}[] = [
        {
            id: 'N0001',
            name: 'Facebook',
            link: '',
            image: Facebook
        },
        {
            id: 'N0002',
            name: 'Twitter',
            link: '',
            image: Twitter
        },
        {
            id: 'N0003',
            name: 'Instagram',
            link: '',
            image: Instagram
        },
        {
            id: 'N0004',
            name: 'LinkedIn',
            link: '',
            image: LinkedIn
        }
    ]

    return (
        <footer className='bg-[#082938] text-white rounded-t-[60px] py-10 md:px-14 px-4 w-full'>

            <div className='flex lg:flex-row flex-col px-[34px] pt-5'>

                <div className="lg:w-[560px]">
                    <motion.div
                        className='relative mb-18'
                        whileHover="hover"
                        initial="hidden"
                        animate="hidden"
                    >
                        <Link to="/" className="block relative h-full">
                            {/* Logo 1 */}
                            <motion.img
                                src={Logo1}
                                className="absolute top-0 left-0 w-[158px]"
                                variants={{
                                    hidden: { opacity: 1 },
                                    hover: { opacity: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Logo 2 */}
                            <motion.img
                                src={Logo2}
                                className="absolute top-0 left-0 w-[158px]"
                                variants={{
                                    hidden: { opacity: 0 },
                                    hover: { opacity: 1 },
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </motion.div>
                    <p className="lg:w-[382px] text-[14px] text-[#ECFDFF] mt-4">
                        Izicagn est immatriculée à l’ORIAS en tant qu’Intermédiaire en Financement Partificipatif (IFP) sous le numéro d’immatriculation 24000751.
                    </p>
                </div>
                <div className='flex md:flex-row flex-col xl:justify-between lg:justify-center md:justify-between xl:space-x-0 lg:space-x-20 space-x-0 text-[14px] xl:w-[660px] lg:mt-0 md:mt-10 mt-5 w-full'>
                    <div className='md:mt-0 mt-5'>
                        <h1 className='uppercase font-bold mb-2 text-[14px] montserrat-bold '>Donateur</h1>
                        <ul className='text-[#CCCCCC] flex flex-col space-y-1 text-[15px]'>
                            <Link to="/cagnotte">Cagnottes</Link>
                            <Link to="/investissement">Investissements</Link>
                            <Link to="/tarifs">Tarifs</Link>
                        </ul>
                    </div>
                    <div className='md:mt-0 mt-5'>
                        <h1 className='uppercase font-bold mb-2 text-[14px] montserrat-bold '>Collecte</h1>
                        <ul className='text-[#CCCCCC] flex flex-col space-y-1 text-[15px] '>
                            <Link to="/register">Démarrer une cagnotte</Link>
                            <Link to="/leverdesfonds">Lever des fonds</Link>
                            <Link to="/commentçamarche">Comment ça marche ?</Link>
                            <Link to="/garantie">Garanties</Link>
                        </ul>
                    </div>
                    <div className='md:mt-0 mt-5'>
                        <h1 className='uppercase font-bold mb-2 text-[14px] montserrat-bold '>Izicagn</h1>
                        <ul className='text-[#CCCCCC] flex flex-col space-y-1 text-[15px]'>
                            <Link to="">Izicagn pro</Link>
                            <Link to="">Nous contacter</Link>
                            <Link to="">Actualités</Link>
                            <Link to="">L'application mobile</Link>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='xl:py-20 py-10 px-[34px] flex lg:flex-row flex-col items-center'>
                <div className='flex flex-row space-x-2 lg:w-[560px] '>
                    <img src={PlayStore} alt='' title='' className='cursor-pointer' />
                    <img src={AppStore} alt='' title='' className='cursor-pointer' />
                </div>
                <div className='flex flex-row flex-wrap xl:pt-0 pt-10 xl:space-x-5 lg:space-x-2 md:space-x-2 space-x-4 lg:space-y-2 space-y-3'>
                    {
                        SocialNetworkList.map((item) => (
                            <SocialNetwork item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
            
            <div className='flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center lg:space-y-0 spacey-5 border-t border-t-[#255571] pt-[34px] px-[34px]'>
                <p className="text-[14px]">&copy; 2024 Izicagn, Tous droits réservés</p>
                <ul className='flex lg:flex-row flex-col lg:items-center space-x-4 lg:space-y-0 space-y-5 lg:my-0 my-8 text-[14px]'>
                    <li>Confidentialité</li>
                    <li className="text-[8px] lg:flex hidden">•</li>
                    <li>Conditions générales</li>
                    <li className="text-[8px] lg:flex hidden">•</li>
                    <li>Mentions légales</li>
                    <li className="text-[8px] lg:flex hidden">•</li>
                    <li>L'entreprise</li>
                </ul>
                <div className="bg-white rounded-full w-[132px] h-[36px] flex flex-row items-center justify-evenly px-[12px] py-[8px] space-x-[6px] ">
                    {/* <img src={Hearth} alt='' title='' className='w-4' /> */}
                    <Globe className='text-black w-4'/>
                    <p className="text-black m-0 p-0 text-[13px] pr-1 montserrat-bold">Français</p>
                    <img src={ChevronDown} alt='' title='' className='w-4 cursor-pointer' />
                </div>
            </div>

        </footer>
    )
}

export default Footer