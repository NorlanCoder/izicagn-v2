
import Hearth from '../../assets/cagnotte/hearth.png'
import ChevronDown from '../../assets/cagnotte/ci_chevron-down.png'
import ArrowOutward from '../../assets/ic_outline-arrow-outward.png'
import Facebook from '../../assets/ri_facebook-fill.png'
import Twitter from '../../assets/prime_twitter.png'
import Instagram from '../../assets/ri_instagram-fill.png'
import LinkedIn from '../../assets/akar-icons_linkedin-fill.png'
import PlayStore from '../../assets/Link1.png'
import AppStore from '../../assets/Link.png'
import Logo1 from '../../assets/logo1.png'

const Footer = () => {

    const SocialNetwork = (item:{item:{id:string,name:string,link:string,image:string}}) => {
        return (
            <div className="border border-[#F0F2F4A6] rounded-full flex flex-row items-center lg:justify-evenly px-[20px] py-[10px] space-x-[6px] ">
                <img src={item.item.image} alt='' title='' className='w-4 cursor-pointer' />
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

            <div className='flex lg:flex-row flex-col justify-between px-[34px] pt-5'>
                <div>
                    <img src={Logo1} className='mb-4' />
                    <p className='lg:w-[382px] text-[14px] text-[#ECFDFF] '>Izicagn est immatriculée à l’ORIAS en tant qu’Intermédiaire en Financement Partificipatif (IFP) sous le numéro d’immatriculation 24000751.</p>
                </div>
                <div className='flex md:flex-row flex-col xl:justify-between lg:justify-center md:justify-between xl:space-x-0 lg:space-x-20 space-x-0 text-[14px] xl:w-[660px] lg:mt-0 md:mt-10 mt-5 w-full'>
                    <div className='md:mt-0 mt-5'>
                        <h1 className='uppercase font-bold mb-2'>Donateur</h1>
                        <ul className='text-[#CCCCCC] flex flex-col space-y-1'>
                            <li>Cagnottes</li>
                            <li>Investissements</li>
                            <li>Tarifs</li>
                        </ul>
                    </div>
                    <div className='md:mt-0 mt-5'>
                        <h1 className='uppercase font-bold mb-2'>Collecte</h1>
                        <ul className='text-[#CCCCCC] flex flex-col space-y-1'>
                            <li>Démarrer une cagnotte</li>
                            <li>Lever des fonds</li>
                            <li>Comment ça marche ?</li>
                            <li>Garanties</li>
                        </ul>
                    </div>
                    <div className='md:mt-0 mt-5'>
                        <h1 className='uppercase font-bold mb-2'>Izicagn</h1>
                        <ul className='text-[#CCCCCC] flex flex-col space-y-1'>
                            <li>Izicagn pro</li>
                            <li>Nous contacter</li>
                            <li>Actualités</li>
                            <li>L'application mobile</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='xl:py-20 py-10 px-[34px] flex xl:flex-row flex-col justify-between items-center'>
                <div className='flex flex-row space-x-2'>
                    <img src={PlayStore} alt='' title='' className='cursor-pointer' />
                    <img src={AppStore} alt='' title='' className='cursor-pointer' />
                </div>
                <div className='flex flex-row flex-wrap justify-center w-full xl:pt-0 pt-10 xl:space-x-5 lg:space-x-2 md:space-x-2 space-x-4 lg:space-y-0 space-y-3'>
                    {
                        SocialNetworkList.map((item) => (
                            <SocialNetwork item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
            
            <div className='flex flex-col md:flex-row md:justify-between md:items-center border-t border-t-[#255571] pt-[34px] px-[34px]'>
                <p className="text-[14px]">&copy; 2024 Izicagn, Tous droits réservés</p>
                <ul className='flex flex-row items-center space-x-4 text-[14px]'>
                    <li>Confidentialité</li>
                    <li className="text-[8px]">•</li>
                    <li>Conditions générales</li>
                    <li className="text-[8px]">•</li>
                    <li>Mentions légales</li>
                    <li className="text-[8px]">•</li>
                    <li>L'entreprise</li>
                </ul>
                <div className="bg-white rounded-full w-[132px] h-[36px] flex flex-row items-center justify-evenly px-[12px] py-[8px] space-x-[6px] ">
                    <img src={Hearth} alt='' title='' className='w-4' />
                    <p className="text-black m-0 p-0 text-[14px]">Français</p>
                    <img src={ChevronDown} alt='' title='' className='w-4 cursor-pointer' />
                </div>
            </div>

        </footer>
    )
}

export default Footer