import Footer from '../components/general/footer'
import Navbar from '../components/general/navbar'
import { CagnotteMediumList, CategoryList } from '../utils/data'
import CagnotteMediumComponent from '../components/cagnotte/cagnotteMediumComponent'
import GobackComponent from '../components/general/gobackComponent'
import Search from '../assets/cagnotte/search.png'
import CategoryScroll from '../components/cagnotte/categoryScroll'
import { useState } from 'react'

const CategoryCagnotte = () => {

    const [active,setActive] = useState(1)

    const changeActive = (nb:number) => {
        setActive(nb)
    }

    return (
        <div className='px-5 w-full'>
			<Navbar />

            {/* Go back */}
            <GobackComponent />

			{/* Liste Cagnotte */}
			<section className='mb-8 flex flex-col space-y-5 md:px-8'>
				<div className='mt-8'>
					<h1 className='text-[#0A1243] text-[24px] font-bold mb-5'>Évènements personnels <span className='text-[#0988B1] '>53 071 causes</span></h1>
                    
                    {/* Category */}
                    <div className='flex flex-row mb-8'>
                        <div className='border-r border-[#757575] pr-4'>
                            <div className='w-[339px] rounded-full p-[12px] bg-[#F5F5F4] flex flex-row space-x-2 items-center'>
                                <img src={Search} alt='' title=''/>
                                <input type="text" placeholder='Rechercher' className='text-[#757575] w-full h-full focus:border-0 focus:outline-0' />
                            </div>
                        </div>
                        <div className='border px-4 flex flex-row w-2xl overflow-x-auto space-x-1 gap-y-2 '>
                            {
                                CategoryList.map((item,index) => (
                                    <CategoryScroll item={item} index={index+1} key={item.id} active={active} changeActive={changeActive} />
                                ))
                            }
                        </div>
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

			<Footer />
		</div>
    )
}

export default CategoryCagnotte