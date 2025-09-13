import Navbar from '../components/general/navbar'
import { CagnotteMediumList, CategoryList } from '../utils/data'
import Search from '../assets/cagnotte/search.png'
import Category from '../components/cagnotte/category'
import CagnotteMediumComponent from '../components/cagnotte/cagnotteMediumComponent'
import Footer from '../components/general/footer'
import { motion } from 'framer-motion'

const RechercheCagnotte = () => {
    return (
		<div>
			<Navbar />
			<div className='px-4 w-full'>
				

				{/* Bannière code */}
				<section className='rounded-[42.51px] h-[224px] relative mb-8 mt-[100px] flex flex-col justify-center px-24 bg-[radial-gradient(circle,_#78DFF5,_#0BD1F4)] overflow-x-hidden'>
					<div className=' md:px-0 flex flex-rox justify-center px-4 relative z-10'>
						<div className='flex flex-row md:w-[730px] w-full space-x-3 p-1 pl-4 border-2 rounded-full bg-white border-[#07AED8]'>
							<div className='bg-transparent grow-1 flex flex-row space-x-2 items-center'>
								<img src={Search} alt='' title=''/>
								<input type="text" placeholder='Rechercher' className='text-[#D9D9D9] w-full focus:border-0 focus:outline-0' />
							</div>
							<button className='bg-[#07AED8] text-white grow-0 rounded-full text-[14px] p-[16px] font-bold'>Rechercher</button>
						</div>
					</div>
				</section>

				{/* Liste catégorie */}

				<section id="categorylist" className='flex flex-row flex-nowrap overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth justify-center space-x-2 mb-4 w-full pb-[50px] 2xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px]'>
					{CategoryList.map((item)=>(
						<Category item={item} key={item.id} />
					))}
				</section>

				{/* Liste Cagnotte */}
				<section className='mb-8 flex flex-col space-y-5 2xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px]'>
					<div className=''>
						<div className='flex flex-row flex-wrap space-y-10'>
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
		</div>
    )
}

export default RechercheCagnotte