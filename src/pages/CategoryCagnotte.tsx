import Footer from '../components/general/footer'
import Navbar from '../components/general/navbar'
import { CagnotteMediumList, CategoryList } from '../utils/data'
import CagnotteMediumComponent from '../components/cagnotte/cagnotteMediumComponent'
import GobackComponent from '../components/general/gobackComponent'
import Search from '../assets/cagnotte/search.png'
import ChevronRight from '../assets/cagnotte/chevron-right1.png'
import CategoryScroll from '../components/cagnotte/categoryScroll'
import '../utils/style/cagnotte.css'
import { useState } from 'react'

const CategoryCagnotte = () => {

    const [active,setActive] = useState(1)

    const changeActive = (nb:number) => {
        setActive(nb)
    }

    return (
        <div className=''>
            <Navbar />

            <div className='3xl:px-[280px] lg:px-[120px] md:px-[80px] px-[16px] w-full mt-[160px]'>

                {/* Go back */}
                <div className=''><GobackComponent /></div>

                {/* Liste Cagnotte */}
                <section className='mb-8 flex flex-col space-y-5'>
                    <div className='mt-8'>
                        <h1 className='text-[#0A1243] text-[24px] font-bold mb-5'>Évènements personnels <span className='text-[#0988B1] '>53 071 causes</span></h1>
                        
                        {/* Category */}
                        <div className='flex flex-row items-center mb-8'>
                            <div className='border-r border-[#757575] pr-4'>
                                <div className='w-[339px] rounded-full p-[20px] py-[16px] bg-[#F5F5F4] flex flex-row space-x-2 items-center'>
                                    <img src={Search} alt='' title=''/>
                                    <input type="text" placeholder='Rechercher' className='text-[#757575] w-full h-full focus:border-0 focus:outline-0' />
                                </div>
                            </div>
                            <div className='px-4 flex flex-row flex-nowrap w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-1 gap-y-2 ' style={{scrollbarWidth: 'none'}}>
                                {
                                    CategoryList.map((item,index) => (
                                        <CategoryScroll item={item} index={index+1} key={item.id} active={active} changeActive={changeActive} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className='flex flex-row flex-wrap space-y-10'>
                            {
                                CagnotteMediumList.map((item,index) => (
                                    <CagnotteMediumComponent item={item} key={index.toString()} />
                                ))
                            }
                        </div>

                        <div className='my-10 flex flex-row justify-center'>
                            <button className={` border border-[#102C3B66] rounded-full text-[14px] py-[14px] px-[20px] font-bold whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer flex flex-row space-x-2 justify-center items-center`}> <p>Afficher plus</p> <img src={ChevronRight} alt="" className='w-[16px]' /></button>
                        </div>
                    </div>

                </section>

                <Footer />
            </div>

        </div>
    )
}

export default CategoryCagnotte