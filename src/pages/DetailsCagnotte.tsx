import { CagnotteMediumListMin } from '../utils/data'
import CagnotteMediumComponent from '../components/cagnotte/cagnotteMediumComponent'
import Navbar from '../components/general/navbar'
import Share from '../assets/cagnotte/ph_share-fat-light.png'
import Heart from '../assets/cagnotte/count_heart.png'
import RedHeart from '../assets/cagnotte/heart.png'
import Calendar from '../assets/cagnotte/hugeicons_calendar-add-01.png'
import Footer from '../components/general/footer'
import UserDeco from '../assets/cagnotte/deco1.png'

const DetailsCagnotte = () => {
	return (
		<div className='px-5 w-full'>
			<Navbar />

			{/* Bloc presentation */}
			<section className='md:px-8 mt-8'>
				<div className='flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-y-0 gap-y-2 mb-5'>
					<h1 className='text-[#0A1243] text-[38px] font-bold xl:w-9/12 lg:w-8/12'>Sauvons Rufus, le jeune de 9ans</h1>
					<div className='flex flex-row space-x-2 xl:w-3/12 lg:w-4/12'>
						<button className='bg-[#07AED8] text-white grow-0 rounded-full w-full text-[15px] px-[30px] py-[12px] cursor-pointer'>Soutenir</button>
						<button className='px-[15px] py-[12px] border-[0.89px] rounded-[12px] border-[#8C8C8C24] flex flex-row justify-center items-center cursor-pointer'>
							<img src={Share} alt="" />
						</button>
						<button className='px-[15px] py-[12px] border-[0.89px] rounded-[12px] border-[#8C8C8C24] flex flex-row justify-center items-center cursor-pointer'>
							<img src={Calendar} alt="" />
						</button>
					</div>
				</div>
				<div className='flex lg:flex-row flex-col lg:items-center lg:space-x-3 gap-y-2 mb-5'>
					<div className='flex flex-col space-y-2 xl:w-9/12 lg:w-8/12'>
						<div className='w-full h-[487px] border border-[#EDEDF3] rounded-[17px] '>

						</div>
						<div className='flex flex-row justify-between border border-[#EDEDF3] rounded-[17px] p-[20px] '>
							<div className='flex flex-row items-center space-x-2 '>
								<div className=''>
									<img src={UserDeco} alt="" className='border-2 border-[#C2D7F8] w-[63.70px] h-[63.70px] rounded-full' />
								</div>
								<div className='flex flex-col justify-center '>
									<p className='text-[#515151] text-[15px]'>Organisée par:</p>
									<h2 className='font-bold'>ONG Hands together</h2>
								</div>
							</div>
							<div className='flex flex-row items-center space-x-2'>
								<div className='pl-1 flex flex-row items-center bg-[#EFF4F9] rounded-full'>
									<div className='px-3 flex flex-row items-center space-x-2'>
										<img src={RedHeart} alt="" />
										<h1 className='font-bold'>100</h1>
									</div>
									<button className='w-[50px] h-[50px] border-[0.89px] bg-white rounded-full border-[#8C8C8C24] flex flex-row justify-center items-center cursor-pointer'>
										<img src={Heart} alt="" className='w-5' />
									</button>
								</div>
								<button className='w-[50px] h-[50px] border-[0.89px] rounded-full border-[#8C8C8C24] flex flex-row justify-center items-center cursor-pointer'>
									<img src={Share} alt="" className='w-5' />
								</button>
								<button className='w-[50px] h-[50px] border-[0.89px] rounded-full border-[#8C8C8C24] flex flex-row justify-center items-center cursor-pointer'>
									<img src={Calendar} alt="" className='w-5' />
								</button>
							</div>
						</div>
					</div>
					<div className='xl:w-3/12 lg:w-4/12 self-stretch'>
						<div className='h-full border border-[#07AED838] rounded-[17px]'>

						</div>
					</div>
				</div>
				<div>
					<div></div>
					<div></div>
				</div>
				<div></div>
			</section>

			{/* Liste Cagnotte */}
			<section className='mb-8 flex flex-col space-y-5 md:px-8'>
				<div className='mt-8'>
					<h1 className='text-[#0A1243] text-[24px] font-bold mb-5'>D'autres causes comme celle-ci</h1>
					<div className='flex flex-row flex-wrap'>
						{
							CagnotteMediumListMin.map((item,index) => (
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

export default DetailsCagnotte