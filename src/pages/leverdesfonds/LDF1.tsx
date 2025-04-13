import AvisSection from "../../components/leverdefond/AvisSection"
import EtapesSection from "../../components/leverdefond/EtapesSection"
import FinancementSection from "../../components/leverdefond/FinancementSection"
import FaqComponent from '../../components/general/faqComponent'

const LeverDesFonds1 = () => {
    return (
        <div className=" px-5">
            <section className='rounded-[42.51px] h-[573px] relative my-8 flex flex-col justify-center px-24 bg-[radial-gradient(circle,_#78DFF5,_#0BD1F4)] overflow-x-hidden'>
              <div className='max-w-[680px] relative z-10'>
        
                <h1 className='text-[55px] leading-14 text-white font-extrabold mb-5'><span className='text-[#0D304E]'>Transformez vos idées</span>  en actions en trouvant un financement !</h1>
                <p className='text-[#0F6D8F] w-9/12 mb-8 text-[19px] font-bold '>Chez izicagn, on donne de la visibilité à vos projets. Rejoignez-nous pour faire avancer vos idées ambitieuses et créatives.</p>
                <div className='flex flex-row space-x-3'>
                  <div className='border border-[#07AED8] w-[339px] rounded-full p-[12px] bg-white flex flex-row space-x-2 justify-center items-center'>
                                  <p className="text-[16px] text-center font-bold text-[#083044]">Financer un projet</p> 
                  </div>
                  <button className='bg-[#0D304E] text-white rounded-full text-[14px] py-[16px] px-[20px] font-bold'>Démarrer une cagnotte</button>
                </div>
              </div>
              
            </section>

            <div> <FinancementSection /> </div>

            <div> <EtapesSection /> </div>

            <div> <AvisSection /> </div>

            <div className="flex justify-center py-20 px-4">
              <div className="flex flex-col justify-center items-center space-y-4 bg-[#23C7ED] rounded-[40px] max-w-[1271px] md:w-[1271px] h-[326px]">
                <h2 className="text-[35px] md:text-[48px] text-center text-white font-bold max-w-[973px] px-2">
                  Prêt à{" "}
                  <span className="text-[#231F20]">donner vie vos idées ?</span>{" "}
                  Créez votre cagnotte dès maintenant
                </h2>
                <button className=" text-white bg-[#083044] py-[16px] px-[30px] rounded-[200px]">
                  Démarrer une cagnotte
                </button>
              </div>
            </div>

            <div className="my-8 flex flex-col items-center">
                    <h1 className='text-[#0E0E18] text-[48px] font-bold mb-8 '>Foire aux questions (FAQ)</h1>

                    <FaqComponent title='Comment créer une cagnotte sur Izicagn ?' text='Créer une cagnotte est simple ! Cliquez sur le bouton "Créer une cagnotte", remplissez les informations de votre collecte (objectif, description, visuel, etc.), et votre page sera prête à partager en quelques minutes.' />
                    <FaqComponent title='Y a-t-il des frais pour créer une cagnotte ?' text='Non, la création d’une cagnotte sur Izicagn est totalement gratuite. Nous prélevons seulement une petite commission sur les dons reçus pour couvrir les frais de traitement des paiements.' />
                    <FaqComponent title="Comment puis-je suivre l'évolution de ma cagnotte ?" text='Vous avez accès à un tableau de bord personnel où vous pouvez voir en temps réel les dons reçus, les messages des donateurs, et bien plus encore.' />
                    <FaqComponent title="Que faire si j'ai besoin d'aide avec ma cagnotte ?" text='Si vous avez des questions ou rencontrez un problème, notre équipe de support est disponible 24/7 pour vous aider. Vous pouvez nous contacter par chat en direct, par email ou via notre formulaire de contact.' />
                    <FaqComponent title="Quels modes de paiement sont acceptés sur Izicagn ?" text='Izicagn accepte les paiements par carte de crédit, carte de débit, PayPal, et d’autres options locales en fonction de votre région.' />

                </div>

            
        </div>
    )
}

export default LeverDesFonds1
