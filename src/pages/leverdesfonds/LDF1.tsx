import AvisSection from "../../components/leverdefond/AvisSection"
import EtapesSection from "../../components/leverdefond/EtapesSection"
import FinancementSection from "../../components/leverdefond/FinancementSection"
import FaqComponent from '../../components/general/faqComponent'
import Navbar from "../../components/general/navbar";
import Footer from "../../components/general/footer";
import CategoriesSection from "../../components/leverdefond/CategoriesSection";

const LeverDesFonds1 = () => {
    return (

		<>
			<Navbar />
			<div className="px-4 mt-[100px] w-full lg:mx-0">
				<section className='rounded-[42.51px] md:h-[573px] relative my-8 flex flex-col md:justify-center md:px-24 p-10 bg-[radial-gradient(circle,_#78DFF5,_#0BD1F4)] overflow-x-hidden'>
					<div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_0%,_#000_100%)] mix-blend-overlay pointer-events-none"></div>
					<div className='max-w-[789px] relative z-10'>
				
						<h1 className='md:text-[55px] text-3xl md:leading-14 tracking-[-1%] text-white montserrat-bold mb-5'><span className='text-[#0D304E] montserrat-bold'>Transformez vos idées</span>  en actions en trouvant un financement !</h1>
						<p className='text-[#0F6D8F] w-9/12 mb-8 text-[19px] font-semibold leading-[130%] md:flex hidden max-w-[690px]'>Chez izicagn, on donne de la visibilité à vos projets. Rejoignez-nous pour faire avancer vos idées ambitieuses et créatives.</p>
						<div className='flex md:flex-row flex-col gap-3'>
							
							<button className='bg-white transition-all duration-700 ease-in-out hover:bg-[#07AED8] cursor-pointer montserrat-bold text-[#083044] rounded-full text-[14px] py-[20px] px-[30px] font-bold md:w-auto w-full ursor-pointer mb-0'>Financer un projet</button>
							<button className='bg-[#0D304E] transition-all duration-700 ease-in-out hover:bg-[#07AED8] cursor-pointer montserrat-bold text-white rounded-full text-[14px] py-[20px] px-[30px] font-bold md:w-auto w-full ursor-pointer'>Démarrer une cagnotte</button>
						</div>
					</div>
				</section>

				<div> 
					<FinancementSection />
				</div>

				<div className="md:px-24 px-5">
					<EtapesSection />
				</div>

				<div className="mt-28 mb-6">
					<CategoriesSection />
				</div>

				<div>
					<AvisSection />
				</div>

				<div className="flex justify-center pb-[50px] pt-20 px-4">
					<div className="flex flex-col relative justify-center items-center space-y-4 bg-[radial-gradient(circle,#23c8ed,#23c8ed44)] bg-[#23c8ed44] rounded-[40px] max-w-[1271px] md:w-[1271px] md:h-[326px] md:p-0 p-10">
					
						<h2 className="text-[35px] md:text-[48px] text-center text-white font-bold mb-8 montserrat-bold leading-16 px-2">
							Prêt à{" "}
							<span className="text-[#231F20] montserrat-bold">donner vie vos idées ?</span>{" "}
							Créez votre cagnotte dès maintenant
						</h2>
						<button className=" text-white bg-[#083044] py-[16px] px-[30px] cursor-pointer rounded-[200px] transition-all hover:bg-[#07AED8] shadow-2xl montserrat-bold">
							Démarrer un projet
						</button>
					</div>
				</div>

				<div className="my-8 flex flex-col items-center">
					<h1 className='text-[#0E0E18] text-[48px] text-center font-bold mb-8 '>Foire aux questions (FAQ)</h1>

					<FaqComponent title='Comment créer une cagnotte sur Izicagn ?' text='Créer une cagnotte est simple ! Cliquez sur le bouton "Créer une cagnotte", remplissez les informations de votre collecte (objectif, description, visuel, etc.), et votre page sera prête à partager en quelques minutes.' />
					<FaqComponent title='Y a-t-il des frais pour créer une cagnotte ?' text='Non, la création d’une cagnotte sur Izicagn est totalement gratuite. Nous prélevons seulement une petite commission sur les dons reçus pour couvrir les frais de traitement des paiements.' />
					<FaqComponent title="Comment puis-je suivre l'évolution de ma cagnotte ?" text='Vous avez accès à un tableau de bord personnel où vous pouvez voir en temps réel les dons reçus, les messages des donateurs, et bien plus encore.' />
					<FaqComponent title="Que faire si j'ai besoin d'aide avec ma cagnotte ?" text='Si vous avez des questions ou rencontrez un problème, notre équipe de support est disponible 24/7 pour vous aider. Vous pouvez nous contacter par chat en direct, par email ou via notre formulaire de contact.' />
					<FaqComponent title="Quels modes de paiement sont acceptés sur Izicagn ?" text='Izicagn accepte les paiements par carte de crédit, carte de débit, PayPal, et d’autres options locales en fonction de votre région.' />

				</div>

				<Footer />
			</div>
			
		</>
		
  	);
};

export default LeverDesFonds1;
