import { CagnotteMediumListMin, DonAmountMin } from '../utils/data'
import CagnotteMediumComponent from '../components/cagnotte/cagnotteMediumComponent'
import Navbar from '../components/general/navbar'
import Share from '../assets/cagnotte/ph_share-fat-light.png'
import Heart from '../assets/cagnotte/count_heart.png'
import RedHeart from '../assets/cagnotte/heart.png'
import Calendar from '../assets/cagnotte/hugeicons_calendar-add-01.png'
import Location from '../assets/cagnotte/location-tick.png'
import MenuBoard from '../assets/cagnotte/menu-board.png'
import Footer from '../components/general/footer'
import UserDeco from '../assets/cagnotte/deco1.png'
import DonAmmount from '../components/cagnotte/donAmmount'
import Info from '../assets/cagnotte/info.png'
import Donation from '../assets/cagnotte/donate.png'
import Suite from '../assets/cagnotte/ci_chevron-down.png'

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
				<div className='flex lg:flex-row flex-col lg:items-start lg:space-x-3 gap-y-2 mb-5'>
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
						<div className='h-full border border-[#07AED838] rounded-[17px] p-[24px]'>
							{/* Details */}
							<div className='mb-5 pb-5 border-b border-[#D9E8F4] '>
								<div className='flex flex-row items-center space-x-2'>
									<div className='py-[6px] px-[10px] bg-[#FBF5F3] rounded-[10px] '>
										<h1 className='font-bold text-[22px] text-[#FD5E2E] '>6 000 000</h1>
									</div>
									<p className='text-[#858585] text-[16px] '>Collectés</p>
								</div>
								<h2 className='text-[14px] my-4 '>Objectifs: <span className='text-[#0C0C44] font-bold '>15 000 000</span></h2>
								<div className='bg-[#F3F5F6] h-[6px] rounded-full overflow-hidden'>
									<div className='rounded-full bg-[#FCE261] h-full ' style={{width: `30%`}}></div>
								</div>
								<div className='flex flex-row flex-wrap gap-y-2 space-x-4 pt-5'>
									<div className='flex flex-row  items-center space-x-2'>
										<div className='h-[44px] w-[44px] rounded-full bg-[#EFF4F9] flex flex-row justify-center items-center'>
											<img src={MenuBoard} alt="" />
										</div>
										<h1 className='text-[#515151] text-[14px] '>Fin dans <span className='font-bold'>34 jours</span></h1>
									</div>
									<div className='flex flex-row items-center space-x-2'>
										<div className='h-[44px] w-[44px] rounded-full bg-[#EFF4F9] flex flex-row justify-center items-center'>
											<img src={Location} alt="" />
										</div>
										<h1 className='text-[#515151] text-[14px] '>Cotonou</h1>
									</div>
								</div>
							</div>

							{/* Price */}
							<div>
								<h2 className="text-[22px] font-bold my-3">Contribuer</h2>
								<div className='flex flex-row flex-wrap gap-3 mb-4'>
									{DonAmountMin.map((item) => (
										<DonAmmount item={item} key={item.id.toString()} />
									))}
								</div>

								<div className='relative mt-10 mb-5'>
									<div className='w-2/5 h-16 rounded-[18px] border border-[#DFE3E6CC] absolute z-0 left-0 -top-3 '></div>
									<input type="number" className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0' placeholder='Autre montant' />
								</div>

								<div className='flex flex-row'>
									<button className='bg-[#07AED8] text-white rounded-full w-full text-[15px] px-[30px] py-[12px] cursor-pointer'>Faire un don</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* Obed code */}
				<div className='flex flex-col lg:flex-row lg:justify-between lg:gap-y-0 lg:space-x-3 gap-y-2 mb-5'>
					<div className='flex flex-col space-y-2 xl:w-9/12 lg:w-8/12'>
						<div className='flex flex-col gap-8 border border-[#EDEDF3] rounded-[17px] p-[40px]'>
							<div>
								<h2 className="text-[22px] font-bold my-3">Présentation</h2>
								<p className='text-[#515151] text-[15px]'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien eget amet. 
									Integer condimentum sapien amet placerat gravida pellentesque. Dui gravida ut ac feugiat 
									metus. Praesent dis consectetur ut lorem pretium sit sed. Tincidunt porttitor eget diam sed 
									ornare elit elit egestas. Diam luctus nisl commodo id consequat nibh aliquam neque. Mi nec 
									quis aliquet lectus est in. Dolor elit cursus diam turpis dignissim lacus ut tincidunt facilisi.
								</p>
							</div>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-4'>
									<p className=" underline">Afficher plus</p>
									<a href="#" className=' cursor-pointer'><img src={Suite} alt="" /></a>
								</div>
								<div className='flex items-center gap-2'>
									<a href="#" className=' cursor-pointer'><img src={Info} alt="" /></a>
									<p>Dénoncer cette cagnotte</p>
								</div>
							</div>
						</div>
						<div className='border border-[#EDEDF3] rounded-[17px] p-[40px]'>
							<h2 className='text-[22px] font-bold pb-14'>Discussions (137avis)</h2>
							<div className='flex flex-col gap-10'>
								<div className='flex flex-col'>
									<div className='flex items-start gap-2'>
										<img src={UserDeco} alt="" className='w-12' />
										<div className=''>
											<h3 className='text-[16px] font-bold'>Marie Dansou</h3>
											<p className=' text-[14px]'>Il y a 3h, <span className=' text-blue-400 font-bold'> soutient de 8000 Fcfa</span></p>
											<p className=' max-w-4xl pt-2 text-[#515151] text-[15px]'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien 
													eget amet. Integer condimentum sapien amet placerat gravida pellentesque. Dui 
													gravida ut ac feugiat metus. Praesent dis consectetur ut lorem pretium sit sed. 
											</p>
										</div>
									</div>
									
								</div>
								<div className='flex flex-col'>
									<div className='flex items-center gap-2'>
										<img src={UserDeco} alt="" className='w-12' />
										<div className=''>
											<h3 className='text-[16px] font-bold'>Marie Dansou</h3>
											<p className=' text-[14px]'>Hier<span className=' text-blue-400'></span></p>
										</div>
									</div>
									<p className=' max-w-4xl pl-[71px] pt-2 text-[#515151] text-[15px]'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien 
											eget amet. Integer condimentum sapien amet placerat gravida pellentesque. Dui 
											gravida ut ac feugiat metus. Praesent dis consectetur ut lorem pretium sit sed. 
									</p>
								</div>
							</div>
							<div className=' border-b-2 border-[#C2D7F8] py-12'>
								<a href="" className=' underline'>Afficher tous les avis</a>
							</div>
							<div>
								<p className='py-6 text-[16px] font-bold'>Laisser un avis</p>
								<input className='border border-[#EDEDF3] rounded-[17px] p-[40px] w-full focus:outline-0 hover:outline-3 hover:outline-[#9FEAFD4D]' placeholder='Texte' type="text" />
							</div>
						</div>
					</div>
					<div className='flex flex-row space-x-2 self-start xl:w-3/12 lg:w-4/12 w-full'>
						<div className=' pl-8 w-full border border-[#EDEDF3] rounded-[17px] p-[24px]'>
							<h2 className='text-[22px] font-bold my-2'>Dons récents</h2>
							<p className=' text-[13px] font-bold text-red-500'>28 000 personnes ont soutenues à cette cause</p>
							<div className='flex items-center gap-6 mt-4'>
								<div className='h-[44px] w-[44px] rounded-full bg-[#EFF4F9] flex flex-row justify-center items-center'>
									<img src={Donation} alt="" className='' />
								</div>
								<div>
									<p className='text-[#515151] text-[15px]'>Donateur anonyme</p>
									<p className=' font-extrabold'>13 000 Fcfa</p>
								</div>
							</div>
							<div className='flex items-center gap-6 my-6'>
								<div className='h-[44px] w-[44px] rounded-full bg-[#EFF4F9] flex flex-row justify-center items-center'>
									<img src={Donation} alt="" className='' />
								</div>
								<div>
									<p className='text-[#515151] text-[15px]'>Sylivia Do-Rego</p>
									<p className=' font-extrabold'>13 000 Fcfa</p>
								</div>
							</div>
							<div className='flex gap-2'>
								<p className=' underline'>Tout les dons</p>
								<a href="#" className=' cursor-pointer'><img src={Suite} alt="" /></a>
							</div>
						</div>
					</div>	
				</div>

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