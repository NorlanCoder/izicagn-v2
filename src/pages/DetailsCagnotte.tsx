import { CagnotteMediumListMin2, DonAmountMin } from '../utils/data'
import Navbar from '../components/general/navbar'
import Share from '../assets/cagnotte/ph_share-fat-light.svg'
import Share1 from '../assets/cagnotte/ph_share-fat-light(1).svg'
import Heart from '../assets/cagnotte/ph_heart.svg'
import RedHeart from '../assets/cagnotte/heart1.svg'
import Calendar from '../assets/cagnotte/hugeicons_calendar-add-01.svg'
import Calendar1 from '../assets/cagnotte/hugeicons_calendar-add-01(1).svg'
import Location from '../assets/cagnotte//location-tick.svg'
import MenuBoard from '../assets/cagnotte/menu-board.svg'
import Footer from '../components/general/footer'
import UserDeco from '../assets/cagnotte/deco1.png'
import DonAmmount from '../components/cagnotte/donAmmount'
import Info from '../assets/cagnotte/hugeicons_alert-circle.svg'
import Donation from '../assets/cagnotte/donate.svg'
import Suite from '../assets/cagnotte/chevron_bottom.svg'
import Img from '../assets/cagnotte/Img.svg'
import Img2 from '../assets/home/slide/slide-img-1.png'
import Img3 from '../assets/home/slide/slide-img-2.png'
import ChevronLeft from '../assets/cagnotte/chevron-left-white.svg'
import ChevronRight from '../assets/cagnotte/chevron-right-white.svg'
import CagnotteMediumComponentDesign2 from '../components/cagnotte/cagnotteMediumComponentDesign2'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useNavigate } from 'react-router'

const images = [Img, Img2, Img3];

const DetailsCagnotte = () => {

	const [index, setIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen1, setIsOpen1] = useState(false);
	const navigate = useNavigate();

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	const toggleOpen1 = () => {
		setIsOpen1(!isOpen1);
	};

	const nextSlide = () => {
		setIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	}

	const RedirectToPaiementPage = () => {
		navigate("/cagnotte/paiement", {replace: true})
	}

	return (
		<div>
			<Navbar />
			<div className=' w-full'>

				{/* Bloc presentation */}
				<section className='3xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px] mt-[150px] '>
					<div className='flex lg:flex-row flex-col lg:justify-between lg:items-center lg:space-x-10 space-x-3 lg:gap-y-0 gap-y-2 mb-5'>
						<h1 className='text-[#0A1243] text-[38px] font-bold xl:w-[880px] lg:w-8/12 montserrat-bold '>Sauvons Rufus, le jeune de 9ans</h1>
						<div className='flex flex-row space-x-2 xl:w-[403px] lg:w-4/12'>
							<button onClick={()=>RedirectToPaiementPage()} className='bg-[#23C7ED] text-white grow-0 rounded-full w-full text-[20px] px-[24px] py-[12px] font-bold cursor-pointer'>Soutenir</button>
							<button className='w-[56px] h-[52px] px-[15px] py-[12px] border-[0.89px] rounded-[12.4px] border-[#8C8C8C24] flex flex-row justify-center items-center cursor-pointer'>
								<img src={Share1} alt="" />
							</button>
							<button className='w-[56px] h-[52px] px-[15px] py-[12px] border-[0.89px] rounded-[12px] border-[#8C8C8C24] flex flex-row justify-center items-center cursor-pointer'>
								<img src={Calendar1} alt="" />
							</button>
						</div>
					</div>
					<div className='flex lg:flex-row flex-col lg:items-start lg:space-x-10 space-x-3 gap-y-2 mb-5'>
						<div className='flex flex-col space-y-2 xl:w-[880px] lg:w-8/12'>
							<div className='w-full max-h-[487px] border border-[#EDEDF3] rounded-[17px] relative overflow-hidden '>
								{/* <div className='rounded-[17px] h-[100%] '>
									<img src={Img} className='h-[100%] w-[100%] ' alt="" />
								</div> */}
								<AnimatePresence mode="wait">
									<motion.img
										key={index}
										src={images[index]}
										className="h-[100%] w-[100%] object-cover"
										initial={{ opacity: 0, x: 100 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -100 }}
										transition={{ duration: 0.5, ease: 'easeInOut' }}
									/>
								</AnimatePresence>
								<button onClick={nextSlide} className='absolute w-[36px] h-[36px] rounded-full bg-[#FFFFFF99] top-[221px] right-[16px] z-30 flex flex-row justify-center items-center '>
									<img src={ChevronRight} alt="" />
								</button>
								<button onClick={prevSlide} className='absolute w-[36px] h-[36px] rounded-full bg-[#FFFFFF99] top-[221px] left-[16px] z-30 flex flex-row justify-center items-center '>
									<img src={ChevronLeft} alt="" />
								</button>
								<div className="rounded-[17px] absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#0000003b] mix-blend-overlay pointer-events-none z-10"></div>
								<div className='absolute bottom-[34.74px] left-[42px] flex flex-row space-x-5 z-20 '>
									<button className='bg-gradient-to-r from-[#32C1EF99] to-[#32C1EF99] px-[16.83px] py-[10.63px] border border-[#9FEAFD4D] text-white flex flex-row items-center justify-center montserrat-bold text-[16px] rounded-[200px] '>Santé et médical</button>
									<button className='bg-gradient-to-r from-[#32C1EF99] to-[#32C1EF99] px-[16.83px] py-[10.63px] border border-[#9FEAFD4D] text-white flex flex-row items-center justify-center montserrat-bold text-[16px] rounded-[200px] '>Aide d'urgence</button>
								</div>
							</div>
							<div className='flex flex-row justify-between border border-[#EDEDF3] rounded-[17px] p-[24px] '>
								<div className='flex flex-row items-center space-x-2 '>
									<div className=''>
										<img src={UserDeco} alt="" className=' w-[63.70px] h-[63.70px] rounded-full' />
									</div>
									<div className='flex flex-col justify-center '>
										<p className='text-[#515151] text-[15.95px]'>Organisée par:</p>
										<h2 className='font-bold text-[24.81px] '>ONG Hands together</h2>
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
						<div className='xl:w-[403px] lg:w-4/12 self-stretch shadow-xl bg-transparent rounded-[17px]'>
							<div className='h-full border border-[#07AED838] rounded-[17px] p-[24px]'>
								{/* Details */}
								<div className='mb-5 mt-5 pb-5 border-b border-[#D9E8F4] '>
									<div className='flex flex-row items-center space-x-2'>
										<div className='py-[2px] px-[10px] bg-[#FBF5F3] rounded-[10px] '>
											<h1 className='text-[22px] text-[#FD5E2E] montserrat-bold font-extrabold'>6 000 000 Fcfa</h1>
										</div>
										<p className='text-[#858585] text-[16px] font-[500px]'>collectés</p>
									</div>
									<h2 className='text-[14px] my-4 text-[#292D32] font-semibold '>Objectif: <span className='text-[#0C0C44] montserrat-bold font-extrabold '>15 000 000 Fcfa</span></h2>
									<div className='bg-[#F3F5F6] h-[6px] rounded-full overflow-hidden'>
										<div className='rounded-full bg-[#FCE261] h-full ' style={{width: `30%`}}></div>
									</div>
									<div className='flex flex-row flex-wrap gap-y-2 space-x-4 pt-8'>
										<div className='flex flex-row  items-center space-x-2'>
											<div className='h-[44px] w-[44px] rounded-full bg-[#EFF4F9] flex flex-row justify-center items-center'>
												<img src={MenuBoard} alt="" />
											</div>
											<h1 className='text-[#515151] text-[14px]'>Fin dans <span className='font-bold montserrat-bold text-black pl-1 text-[16px] '> 34 jours</span></h1>
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
									<h2 className="text-[18px] montserrat-bold text-black my-3">Contribuer</h2>
									<div className='flex flex-row items-center flex-wrap gap-3 mb-4 max-h-[120px] overflow-hidden '>
										{DonAmountMin.map((item) => (
											<DonAmmount item={item} key={item.id.toString()} />
										))}
									</div>

									<div className='relative mt-5 mb-5'>
										{/* <div className='w-2/5 h-16 rounded-[18px] border border-[#DFE3E6CC] absolute z-0 left-0 -top-3 '></div> */}
										<input type="number" className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full relative z-10 hover:border-0 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0 transition-all' placeholder='Autre montant' />
									</div>

									<div className='flex flex-row'>
										<button className='bg-[#23C7ED] text-white rounded-full w-full text-[18px] px-[30px] py-[12px] font-bold cursor-pointer'>Faire un don</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Obed code */}
					<div className='flex flex-col lg:flex-row lg:justify-between lg:gap-y-0 lg:space-x-10 space-x-3 gap-y-2 mb-5'>
						<div className='flex flex-col space-y-2 xl:w-[880px] lg:w-8/12'>
							<motion.div className='flex flex-col gap-8 border border-[#D9E8F4] rounded-[17px] p-[40px] '>
								<motion.div
									animate={{ height: isOpen ? "auto" : "175px" }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
									style={{ overflow: "hidden" }}
								>
									<h2 className="text-[20px] font-bold mb-3 montserrat-bold ">Présentation</h2>
									<p className='text-[#515151] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien eget amet. 
										Integer condimentum sapien amet placerat gravida pellentesque. Dui gravida ut ac feugiat 
										metus. Praesent dis consectetur ut lorem pretium sit sed. Tincidunt porttitor eget diam sed 
										ornare elit elit egestas. Diam luctus nisl commodo id consequat nibh aliquam neque. Mi nec 
										quis aliquet lectus est in. Dolor elit cursus diam turpis dignissim lacus ut tincidunt facilisi.
									</p>
									<p className='text-[#515151] text-[16px] mt-5'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien eget amet. 
										Integer condimentum sapien amet placerat gravida pellentesque. Dui gravida ut ac feugiat 
										metus. Praesent dis consectetur ut lorem pretium sit sed. Tincidunt porttitor eget diam sed 
										ornare elit elit egestas. Diam luctus nisl commodo id consequat nibh aliquam neque. Mi nec 
										quis aliquet lectus est in. Dolor elit cursus diam turpis dignissim lacus ut tincidunt facilisi.
									</p>
									<p className='text-[#515151] text-[16px] mt-5'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien eget amet. 
										Integer condimentum sapien amet placerat gravida pellentesque. Dui gravida ut ac feugiat 
										metus. Praesent dis consectetur ut lorem pretium sit sed. Tincidunt porttitor eget diam sed 
										ornare elit elit egestas. Diam luctus nisl commodo id consequat nibh aliquam neque. Mi nec 
										quis aliquet lectus est in. Dolor elit cursus diam turpis dignissim lacus ut tincidunt facilisi.
									</p>
									<p className='text-[#515151] text-[16px] mt-5'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien eget amet. 
										Integer condimentum sapien amet placerat gravida pellentesque. Dui gravida ut ac feugiat 
										metus. Praesent dis consectetur ut lorem pretium sit sed. Tincidunt porttitor eget diam sed 
										ornare elit elit egestas. Diam luctus nisl commodo id consequat nibh aliquam neque. Mi nec 
										quis aliquet lectus est in. Dolor elit cursus diam turpis dignissim lacus ut tincidunt facilisi.
									</p>
								</motion.div>
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-4 cursor-pointer'>
										<p className=" underline text-[#292D32] text-[15px] " onClick={()=>toggleOpen()}>Afficher plus</p>
										<a href="#" className=''><img src={Suite} alt="" /></a>
									</div>
									<div className='flex flex-row items-center gap-2'>
										<a href="#" className=' cursor-pointer'><img src={Info} alt="" /></a>
										<p className='text-[14px] text-[#0C0C44] '>Dénoncer cette cagnotte</p>
									</div>
								</div>
							</motion.div>
							<div className='border border-[#EDEDF3] rounded-[17px] p-[40px]'>
								<h2 className='text-[20px] font-bold pb-14 montserrat-bold'>Discussions (137avis)</h2>
								<motion.div
									animate={{ height: isOpen1 ? "auto" : "300px" }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
									style={{ overflow: "hidden" }}
									className='flex flex-col gap-10'
								>
									<div className='flex flex-col'>
										<div className='flex items-start gap-2'>
											<img src={UserDeco} alt="" className='w-12' />
											<div className=''>
												<h3 className='text-[16px] font-bold'>Marie Dansou</h3>
												<p className=' text-[13px] text-[#A9A9B0] '>Il y a 3h, <span className=' text-[#07AED8] font-bold'> soutient de 8000 Fcfa</span></p>
												<p className=' max-w-4xl pt-2 text-[#4E4E4E] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien 
														eget amet. Integer condimentum sapien amet placerat gravida pellentesque. Dui 
														gravida ut ac feugiat metus. Praesent dis consectetur ut lorem pretium sit sed. 
												</p>
											</div>
										</div>
									</div>
									<div className='flex flex-col'>
										<div className='flex items-start gap-2'>
											<img src={UserDeco} alt="" className='w-12' />
											<div className=''>
												<h3 className='text-[16px] font-bold'>Marie Dansou</h3>
												<p className=' text-[13px] text-[#A9A9B0]'>Hier<span className=' text-[#07AED8] font-bold'></span></p>
												<p className=' max-w-4xl pt-2 text-[#4E4E4E] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien 
													eget amet. Integer condimentum sapien amet placerat gravida pellentesque. Dui 
													gravida ut ac feugiat metus. Praesent dis consectetur ut lorem pretium sit sed. 
												</p>
											</div>
										</div>
									</div>
									<div className='flex flex-col'>
										<div className='flex items-start gap-2'>
											<img src={UserDeco} alt="" className='w-12' />
											<div className=''>
												<h3 className='text-[16px] font-bold'>Marie Dansou</h3>
												<p className=' text-[13px] text-[#A9A9B0]'>Hier<span className=' text-[#07AED8] font-bold'></span></p>
												<p className=' max-w-4xl pt-2 text-[#4E4E4E] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien 
													eget amet. Integer condimentum sapien amet placerat gravida pellentesque. Dui 
													gravida ut ac feugiat metus. Praesent dis consectetur ut lorem pretium sit sed. 
												</p>
											</div>
										</div>
									</div>
									<div className='flex flex-col'>
										<div className='flex items-start gap-2'>
											<img src={UserDeco} alt="" className='w-12' />
											<div className=''>
												<h3 className='text-[16px] font-bold'>Marie Dansou</h3>
												<p className=' text-[13px] text-[#A9A9B0]'>Hier<span className=' text-[#07AED8] font-bold'></span></p>
												<p className=' max-w-4xl pt-2 text-[#4E4E4E] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Sit sit vivamus ipsum pharetra sapien 
													eget amet. Integer condimentum sapien amet placerat gravida pellentesque. Dui 
													gravida ut ac feugiat metus. Praesent dis consectetur ut lorem pretium sit sed. 
												</p>
											</div>
										</div>
									</div>
								</motion.div>
								<div className=' border-b border-[#D9E8F4] pt-12 pb-8'>
									<button className=' text-[#292D32] text-[14px] underline cursor-pointer' onClick={()=>toggleOpen1()}>Afficher tous les avis</button>
								</div>
								<div>
									<p className='py-6 text-[16px] font-bold'>Laisser un avis</p>
									<textarea className='border border-[#EDEDF3] rounded-[17px] px-[20px] pt-[20px] h-[143px] w-full focus:outline-0 hover:outline-3 hover:outline-[#9FEAFD4D] shadow shadow-[#DFE3E6CC] ' placeholder='Texte'></textarea>
								</div>
							</div>
						</div>
						<div className='flex flex-row space-x-2 self-start xl:w-[403px] lg:w-4/12 w-full'>
							<div className=' pl-8 w-full border border-[#EDEDF3] rounded-[17px] p-[24px]'>
								<h2 className='text-[18px] font-bold my-2 montserrat-bold'>Dons récents</h2>
								<p className=' text-[14px] font-bold text-[#F18145]'>28 000 personnes ont soutenues à cette cause</p>
								<div className='flex items-center gap-6 mt-4'>
									<div className='h-[44px] w-[44px] rounded-full bg-[#EFF4F9] flex flex-row justify-center items-center'>
										<img src={Donation} alt="" className='' />
									</div>
									<div>
										<p className='text-[#3C3C4399] text-[14px]'>Donateur anonyme</p>
										<p className=' montserrat-bold text-[16px]'>13 000 Fcfa</p>
									</div>
								</div>
								<div className='flex items-center gap-6 my-6'>
									<div className='h-[44px] w-[44px] rounded-full bg-[#EFF4F9] flex flex-row justify-center items-center'>
										<img src={Donation} alt="" className='' />
									</div>
									<div>
										<p className='text-[#3C3C4399] text-[14px]'>Sylivia Do-Rego</p>
										<p className=' montserrat-bold text-[16px]'>18 000 Fcfa</p>
									</div>
								</div>
								<div className='flex flex-row items-center gap-2'>
									<p className=' underline text-[15px] text-[#292D32] '>Tout les dons</p>
									<a href="#" className=' cursor-pointer'><img src={Suite} alt="" /></a>
								</div>
							</div>
						</div>	
					</div>

				</section>

				{/* Liste Cagnotte */}
				<section className='mb-8 flex flex-col space-y-5 2xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px] relative z-10 '>
					<div className='mt-8'>
						<h1 className='text-[#090914] text-[36px] font-[600] mb-5 relative z-10'>D'autres causes comme celle-ci</h1>
						<div className='flex flex-row flex-wrap'>
							{
								CagnotteMediumListMin2.map((item,index) => (
									<CagnotteMediumComponentDesign2 item={item} key={index.toString()} />
								))
							}
						</div>
					</div>
				</section>

				<div className='px-4'>
					<Footer />
				</div>

			</div>
		</div>
	)
}

export default DetailsCagnotte