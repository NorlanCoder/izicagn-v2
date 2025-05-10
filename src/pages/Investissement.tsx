import Footer from '../components/general/footer'
import Navbar from '../components/general/navbar'
import Search from '../assets/cagnotte/search.png'
import '../utils/style/cagnotte.css'
import { CagnotteMediumList } from '../utils/data'
import CagnotteMediumComponent from '../components/cagnotte/cagnotteMediumComponent'
import Banniere from '../assets/cagnotte/banniere2.svg'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

const Investissement = () => {
    return (
		<div>
			<Navbar />
		
			<div className='w-full'>
				

				{/* Bannière code */}
				<div className="px-4">
					<section className='rounded-[42.51px] h-[573px] relative mb-8 mt-[100px] flex flex-col justify-center px-24 bg-[radial-gradient(circle,_#78DFF5,_#0BD1F4)] overflow-x-hidden'>
					<div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_0%,_#000_100%)] mix-blend-overlay pointer-events-none"></div>
						<div className='max-w-[740px] relative z-10'>
							
							<h1 className='text-[55px] leading-14 text-white montserrat-bold mb-5'>Explorer et <span className='text-[#0D304E] montserrat-bold'>investissez dans l'avenir</span></h1>
							<p className='text-[#0F6D8F] w-9/12 mb-8 text-[19.13px] font-bold '>Choisissez les idées qui vous inspirent, suivez leur progression, et participez activement à leur réussite</p>
							<div className='flex flex-row space-x-3'>
								<div className='border border-[#07AED8] w-[339px] rounded-full p-[12px] bg-white flex flex-row space-x-2 items-center'>
									<img src={Search} alt='' title=''/>
									<input type="text" placeholder='Rechercher' className='text-[#D9D9D9] w-full h-full focus:border-0 focus:outline-0' />
								</div>
								<button className='bg-[#0D304E] text-white rounded-full text-[14px] py-[16px] px-[21.26px] cursor-pointer font-bold'>Démarrer un projet</button>
							</div>
						</div>
						<img 
							src={Banniere} 
							alt=""
							loading="lazy"
							className="absolute right-0 top-0  h-full z-0"
						/>
						{/* <div id='investissementbanniere' className="absolute inset-0 bg-right bg-no-repeat w-full z-0"></div> */}
					</section>
				</div>


				{/* Liste Cagnotte */}
				<section className='mb-8 flex flex-col space-y-5 2xl:px[280px] lg:px-[120px] md:px-[80px] px-[16px]'>
					<div className='mt-8'>
						<div className="flex flex-row justify-between items-center">
							<h1 className="text-[#0A1243] text-[24px] font-bold mb-5 montserrat-bold">
							Projets sélectionné pour vous
							</h1>
							<Link to="/cagnotte" className="text-[#585D5E] text-[14px] font-bold flex flex-row items-center space-x-2">
								<span>Tous les projets</span>
								<ChevronRight className="text-[#585D5E] w-5 font-bold" />
							</Link>
						</div>
						<div className='flex flex-row flex-wrap'>
							{
								CagnotteMediumList.map((item,index) => (
									<CagnotteMediumComponent item={item} key={index.toString()} />
								))
							}
						</div>
					</div>

					<div className='mt-8'>
						<div className="flex flex-row justify-between items-center">
							<h1 className="text-[#0A1243] text-[24px] font-bold mb-5 montserrat-bold">
								Près de chez vous
							</h1>
							<Link to="/cagnotte" className="text-[#585D5E] text-[14px] font-bold flex flex-row items-center space-x-2">
								<span>Tous les projets</span>
								<ChevronRight className="text-[#585D5E] w-5 font-bold" />
							</Link>
						</div>
						<div className='flex flex-row flex-wrap'>
							{
								CagnotteMediumList.map((item,index) => (
									<CagnotteMediumComponent item={item} key={index.toString()} />
								))
							}
						</div>
					</div>
				</section>

				<div className="px-4">
					<Footer />
				</div>
			</div>
		</div>
    )
}

export default Investissement