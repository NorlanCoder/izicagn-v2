import Footer from '../components/general/footer'
import Navbar from '../components/general/navbar'
import Search from '../assets/cagnotte/search.png'
import '../utils/style/cagnotte.css'
import { CagnotteMediumList, CategoryList } from '../utils/data'
import Category from '../components/cagnotte/category'
import CagnotteMediumComponent from '../components/cagnotte/cagnotteMediumComponent'

const Cagnotte = () => {
	return (
		<div className='px-5 w-full'>
			<Navbar />

			{/* Bannière code */}
			<section className='rounded-[42.51px] h-[573px] relative my-8 flex flex-col justify-center px-24 bg-[radial-gradient(circle,_#78DFF5,_#0BD1F4)] overflow-x-hidden'>
				<div className='max-w-[740px] relative z-10'>
					
					<h1 className='text-[55px] leading-14 text-white font-extrabold mb-5'>Devenez le <span className='text-[#0D304E]'>héros de quelqu'un</span> aujourd'hui</h1>
					<p className='text-[#0F6D8F] w-9/12 mb-8 text-[19px] font-bold '>Donnez de l'espoir à ceux qui en ont besoin, découvrez, soutenez, et devenez acteur du changement</p>
					<div className='flex flex-row space-x-3'>
						<div className='border border-[#07AED8] w-[339px] rounded-full p-[12px] bg-white flex flex-row space-x-2 items-center'>
							<img src={Search} alt='' title=''/>
							<input type="text" placeholder='Rechercher' className='text-[#D9D9D9] w-full h-full focus:border-0 focus:outline-0' />
						</div>
						<button className='bg-[#0D304E] text-white rounded-full text-[14px] py-[16px] px-[20px] font-bold'>Démarrer une cagnotte</button>
					</div>
				</div>
				<div id='cagnottebanniere' className="absolute inset-0 bg-right bg-no-repeat w-full z-0"></div>
			</section>

			{/* Liste catégorie */}

			<section id="categorylist" className='flex flex-row flex-nowrap overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth justify-center space-x-2 mb-8 w-full'>
				{CategoryList.map((item)=>(
					<Category item={item} key={item.id} />
				))}
			</section>

			{/* Liste Cagnotte */}
			<section className='mb-8 flex flex-col space-y-5 md:px-8'>
				<div className='mt-8'>
					<h1 className='text-[#0A1243] text-[24px] font-bold mb-5'>Évènements personnels</h1>
					<div className='flex flex-row flex-wrap'>
						{
							CagnotteMediumList.map((item,index) => (
								<CagnotteMediumComponent item={item} key={index.toString()} />
							))
						}
					</div>
				</div>

				<div className='mt-8'>
					<h1 className='text-[#0A1243] text-[24px] font-bold mb-5'>Causes d’associations</h1>
					<div className='flex flex-row flex-wrap'>
						{
							CagnotteMediumList.map((item,index) => (
								<CagnotteMediumComponent item={item} key={index.toString()} />
							))
						}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}

export default Cagnotte