import Navbar from '../../components/general/navbar'
import Footer from '../../components/general/footer'
import '../../utils/style/ccm.css'
import FaqComponent from '../../components/general/faqComponent'
import Btn1 from '../../components/general/btn1'
import BgAsset from '../../assets/ccm_bg_asset.png'
import CcmStep1 from '../../assets/ccm_step1.png'
import CcmStep2 from '../../assets/ccm_step2.png'
import CcmStep3 from '../../assets/ccm_step3.png'
import StepBlockComponent from '../../components/ccm/stepBlockComponent'
import { useState } from 'react'
import { CcmData1, CcmData2 } from '../../utils/data'
import StepItemComponent from '../../components/ccm/stepItemComponent'
import { AnimatePresence, motion } from 'motion/react'
import CCM_Call_to_action from '../../assets/ccm/ccm_img7.png';
import Outils from '../../components/ccm/Outils'

const howWorkButton: {id: string, text: string}[] = [
    {
        id: 'Btn1',
        text: 'Collecte'
    },
    {
        id: 'Btn2',
        text: 'Don'
    }
]

const CommentMarche = () => {

    const [active,setActive] = useState<string>('Btn1')

    return (
        <>
            <Navbar />

            <div className='px-5 w-full'>
                
                {/* Bannière code */}
                <section className='rounded-[42.51px] h-[573px] relative my-8 flex flex-col justify-center items-end px-24 bg-[radial-gradient(circle,_#78DFF5,_#0BD1F4)] overflow-x-hidden'>
                    <div className='max-w-[740px] relative z-10'>
                        
                        <h1 className='text-[55px] leading-14 text-white font-extrabold mb-5'>Ensemble <span className='text-[#0D304E]'>nous (et vous) </span>faisons la différence</h1>
                        <p className='text-[#0F6D8F] w-9/12 mb-8 text-[19px] font-bold '>Donnez de l'espoir à ceux qui en ont besoin, découvrez, soutenez, et devenez acteur du changement</p>
                        
                        <button className='bg-[#0D304E] text-white rounded-full text-[14px] py-[16px] px-[20px] font-bold'>Démarrer une cagnotte</button>
                        
                    </div>
                    <div id='ccmbanniere' className="absolute inset-0 bg-left bg-no-repeat w-full z-0"></div>
                </section>

                <div className="mt-8 mb-14 flex flex-col items-center sticky w-full top-[80px] py-10 z-30 ccm-sticky">
                    <h1 className='text-[#0E0E18] text-[42px] font-bold mb-2'>Comment ça marche</h1>
                    <p className='text-[18px] text-[#727683] '>Découvrez comment Izicagn vous accompagne à chaque étape de votre collecte</p>
                    <div className='flex flex-row justify-center space-x-2 mt-4'>
                        {
                            howWorkButton.map((item)=>(
                                <Btn1 item={item} active={active} setActive={setActive} key={item.id} />
                            ))
                        }
                    </div>
                </div>

                <div className='mt-2 mb-14 flex flex-col items-center'>
                    
                    <AnimatePresence>
                        {
                            active=='Btn1' && (
                                <StepBlockComponent>
                                    <img src={BgAsset} alt="" className='absolute top-0 left-0 rounded-[40px] ' />
                                    <div className='flex flex-col items-center'>
                                        <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                            <img src={CcmStep1} alt=""  className='w-10 h-10'/>
                                        </div>
                                        <p className='text-[14px] text-[#4E5E62] font-bold '>Etape 1</p>
                                        <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-bold md:w-9/12 mb-2'>Racontez votre histoire au monde</h2>
                                        <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                            <img src={CcmStep2} alt=""  className='w-10 h-10'/>
                                        </div>
                                        <p className='text-[14px] text-[#4E5E62] font-bold '>Etape 2</p>
                                        <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-bold md:w-9/12 mb-2'>Partagez à vos proches et au-delà</h2>
                                        <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                            <img src={CcmStep3} alt=""  className='w-10 h-10'/>
                                        </div>
                                        <p className='text-[14px] text-[#4E5E62] font-bold '>Etape 3</p>
                                        <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-bold md:w-9/12 mb-2'>Gérez votre campagne où que vous soyez</h2>
                                        <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                    </div>
                                </StepBlockComponent>
                            )
                        }
                    </AnimatePresence>

                    <AnimatePresence>
                        {
                            active=='Btn2' && (
                                <StepBlockComponent>
                                    <img src={BgAsset} alt="" className='absolute top-0 left-0 rounded-[40px] ' />
                                    <div className='flex flex-col items-center'>
                                        <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                            <img src={CcmStep1} alt=""  className='w-10 h-10'/>
                                        </div>
                                        <p className='text-[14px] text-[#4E5E62] font-bold '>Etape 1</p>
                                        <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-bold md:w-9/12 mb-2'>Trouvez qui vous voulez soutenir</h2>
                                        <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                            <img src={CcmStep2} alt=""  className='w-10 h-10'/>
                                        </div>
                                        <p className='text-[14px] text-[#4E5E62] font-bold '>Etape 2</p>
                                        <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-bold md:w-9/12 mb-2'>Entrez le montant du don</h2>
                                        <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                            <img src={CcmStep3} alt=""  className='w-10 h-10'/>
                                        </div>
                                        <p className='text-[14px] text-[#4E5E62] font-bold '>Etape 3</p>
                                        <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-bold md:w-9/12 mb-2'>Envoyez votre don en un clic</h2>
                                        <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                    </div>
                                </StepBlockComponent>
                            )
                        }
                    </AnimatePresence>

                </div>

                <div className='flex flex-col items-center'>
                    <h1 className='text-[56px] font-bold flex flex-col text-center '><span>Transparence totale,</span> <span className='text-[#FD8352]'>Sans frais cachés</span></h1>

                    <AnimatePresence>

                        {
                            active=='Btn1' && (
                                <div className='xl:w-[1232px] w-full mt-10'>
                                    {
                                        CcmData1.map((item)=>(
                                            <StepItemComponent item={item} key={item.id} />
                                        ))
                                    }
                                </div>
                            )
                        }

                    </AnimatePresence>

                    <AnimatePresence>

                        {
                            active=='Btn2' && (
                                <div className='xl:w-[1232px] w-full mt-10'>
                                    {
                                        CcmData2.map((item)=>(
                                            <StepItemComponent item={item} key={item.id} />
                                        ))
                                    }
                                </div>
                            )
                        }

                    </AnimatePresence>

                    
                </div>

                <div className='flex flex-row justify-center w-full mt-10'>
                    <div className='xl:w-[1232px] w-full flex flex-col menu_btn2 lg:px-28 py-10 rounded-[60px]'>
                        <div className='flex-flex-row justify-center mb-8'>
                            <h1 className='lg:w-[973px] text-[48px] font-bold text-center'>Un outil <span className='text-white'>complet et pratique</span> pour l’atteinte de vos objectifs</h1>
                        </div>
                        
                        <div className='flex flex-row space-x-2'>
                            <div className='lg:w-[379px] lg:h-[455px] w-full '>
                                <img src={CCM_Call_to_action} alt="" className='rounded-[30px] ' />
                            </div>
                            <div>
                                <Outils />
                            </div>
                        </div>
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

                <Footer />
            </div>
        </>
    )
}

export default CommentMarche