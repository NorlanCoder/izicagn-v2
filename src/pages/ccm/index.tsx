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
import Banniere from '../../assets/cagnotte/banniere3.svg'

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
    const [fixed,setFixed] = useState<boolean>(false)

    return (
        <>
            <Navbar />

            <div className=' w-full'>
                
                {/* Bannière code */}
                <div className='px-4'>
                    <section className='rounded-[42.51px] h-[573px] relative mb-8 mt-[100px] flex flex-col justify-center items-end xl:px-24 px-10 bg-[radial-gradient(circle,_#78DFF5,_#0BD1F4)] overflow-x-hidden'>
                        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_0%,_#000_100%)] mix-blend-overlay pointer-events-none"></div>
                        <div className='max-w-[740px] relative z-10'>
                            
                            <h1 className='text-[55px] leading-14 text-white font-[700] mb-5'>Ensemble <span className='text-[#0D304E] '>nous (et vous) </span>faisons la différence</h1>
                            <p className='text-[#0F6D8F] w-9/12 mb-8 text-[19px] font-bold '>Faites le premier pas vers votre objectif. Créez votre cagnotte et mobilisez votre communauté</p>
                            
                            <button className='bg-[#0D304E] transition-all hover:bg-[#07AED8] shadow-md text-white rounded-full text-[14px] py-[20px] px-[30px] cursor-pointer '>Démarrer une cagnotte</button>
                            
                        </div>
                        <img 
                            src={Banniere} 
                            alt=""
                            loading="lazy"
                            className="absolute left-0 top-0  h-full z-0"
                        />
                        {/* <div id='ccmbanniere' className="absolute inset-0 bg-left bg-no-repeat w-full z-0"></div> */}
                    </section>
                </div>

                <div className={` ${fixed ? 'sticky' : ''} mt-8 mb-14 flex flex-col items-center  w-full top-[78px] py-10 z-30 ccm-sticky`}>
                    <h1 className='text-[#0E0E18] text-[42px] font-[600] tracking-[-2px] mb-2'>Comment ça marche</h1>
                    <p className='text-[18px] text-[#727683] text-center font-[500] '>Découvrez comment Izicagn vous accompagne à chaque étape de votre collecte</p>
                    <div className='flex flex-row justify-center space-x-2 mt-8'>
                        {
                            howWorkButton.map((item)=>(
                                <Btn1 item={item} active={active} setActive={setActive} key={item.id} />
                            ))
                        }
                    </div>
                </div>

                <motion.div key={active} layout onViewportEnter={()=>{if(!fixed){setFixed(true)} }} className='mt-2 mb-14 flex flex-col items-center '>
                    
                    <AnimatePresence>
                        {
                            active=='Btn1' && (
                                <div className='overflow-hidden'>
                                    
                                    <div className='2xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px]'>
                                        <StepBlockComponent>
                                            <img src={BgAsset} alt="" className='absolute top-0 left-0 rounded-[40px] w-full ' />
                                            <div className='flex flex-col items-center md:flex-1'>
                                                <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                                    <img src={CcmStep1} alt=""  className='w-10 h-10'/>
                                                </div>
                                                <p className='text-[14px] text-[#4E5E62] font-semibold '>Etape 1</p>
                                                <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-[700]  md:w-9/12 mb-2 line-clamp-2 min-h-[2.8em]'>Racontez votre histoire au monde</h2>
                                                <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center font-[400] md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                            </div>

                                            <div className='flex flex-col items-center md:flex-1'>
                                                <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                                    <img src={CcmStep2} alt=""  className='w-10 h-10'/>
                                                </div>
                                                <p className='text-[14px] text-[#4E5E62] font-semibold '>Etape 2</p>
                                                <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-[700] md:w-9/12 mb-2 line-clamp-2 min-h-[2.8em]'>Partagez à vos proches et au-delà</h2>
                                                <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center font-[400] md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                            </div>

                                            <div className='flex flex-col items-center md:flex-1'>
                                                <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                                    <img src={CcmStep3} alt=""  className='w-10 h-10'/>
                                                </div>
                                                <p className='text-[14px] text-[#4E5E62] font-semibold '>Etape 3</p>
                                                <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-[700] md:w-9/12 mb-2 line-clamp-2 min-h-[2.8em]'>Gérez votre campagne où que vous soyez</h2>
                                                <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center font-[400] md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                            </div>
                                        </StepBlockComponent>
                                    </div>

                                    <h1 className='mt-14 text-[56px] font-bold flex flex-col text-center montserrat-bold leading-16 text-[#0E0E18] mb-[68px] relative z-10'><span className='montserrat-bold'>Transparence totale,</span> <span className='text-[#FD8352] montserrat-bold'>Sans frais cachés</span></h1>

                                    <div className=' w-full mt-10'>
                                        {
                                            CcmData1.map((item)=>(
                                                <StepItemComponent item={item} key={item.id} />
                                            ))
                                        }
                                    </div>
                                            
                                </div>
                            )
                        }
                    </AnimatePresence>

                    <AnimatePresence>
                        {
                            active=='Btn2' && (

                                <div className='overflow-hidden'>

                                    <div className='2xl:px-[280px] 2xl:px-[120px] md:px-[80px] px-[16px]'>
                                        <StepBlockComponent>
                                            <img src={BgAsset} alt="" className='absolute top-0 left-0 rounded-[40px] w-full' />
                                            <div className='flex flex-col items-center md:flex-1'>
                                                <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                                    <img src={CcmStep1} alt=""  className='w-10 h-10'/>
                                                </div>
                                                <p className='text-[14px] text-[#4E5E62] font-semibold '>Etape 1</p>
                                                <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-[700] md:w-9/12 mb-2 line-clamp-2 min-h-[2.8em]'>Trouvez qui vous voulez soutenir</h2>
                                                <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center font-[400] md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                            </div>

                                            <div className='flex flex-col items-center md:flex-1'>
                                                <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                                    <img src={CcmStep2} alt=""  className='w-10 h-10'/>
                                                </div>
                                                <p className='text-[14px] text-[#4E5E62] font-semibold '>Etape 2</p>
                                                <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-[700] md:w-9/12 mb-2 line-clamp-2 min-h-[2.8em]'>Entrez le montant du don</h2>
                                                <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center font-[400] md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                            </div>

                                            <div className='flex flex-col items-center md:flex-1'>
                                                <div className='bg-[#ECFDFF] border-4 border-[#D7EDF1] w-[100px] h-[100px] rounded-full flex flex-row justify-center items-center mb-2'>
                                                    <img src={CcmStep3} alt=""  className='w-10 h-10'/>
                                                </div>
                                                <p className='text-[14px] text-[#4E5E62] font-semibold '>Etape 3</p>
                                                <h2 className='text-[#0C0C44] lg:text-[25px] md:text-[20px] text-[25px] text-center font-[700] md:w-9/12 mb-2 line-clamp-2 min-h-[2.8em]'>Envoyez votre don en un clic</h2>
                                                <p className='text-[#0C0C44] lg:text-[20px] md:text-[16px] text-[20px] text-center font-[400] md:w-10/12'>Soutenir une cagnotte ou un projet d’entreprise</p>
                                            </div>
                                        </StepBlockComponent>
                                    </div>

                                    <h1 className='mt-14 text-[56px] font-bold flex flex-col text-center montserrat-bold leading-16 text-[#0E0E18] mb-[68px] '><span className='montserrat-bold'>Transparence totale,</span> <span className='text-[#FD8352] montserrat-bold'>Sans frais cachés</span></h1>

                                    <div className=' w-full mt-10'>
                                        {
                                            CcmData2.map((item)=>(
                                                <StepItemComponent item={item} key={item.id} />
                                            ))
                                        }
                                    </div>
                                          
                                </div>
                            )
                        }
                    </AnimatePresence>

                </motion.div>

                {/* <div className='flex flex-col items-center overflow-hidden'>
                    <h1 className='text-[56px] font-bold flex flex-col text-center montserrat-bold leading-16 text-[#0E0E18] mb-[68px] '><span className='montserrat-bold'>Transparence totale,</span> <span className='text-[#FD8352] montserrat-bold'>Sans frais cachés</span></h1>

                    <AnimatePresence>

                        {
                            active=='Btn1' && (
                                <div className=' w-full mt-10'>
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
                                <div className=' w-full mt-10'>
                                    {
                                        CcmData2.map((item)=>(
                                            <StepItemComponent item={item} key={item.id} />
                                        ))
                                    }
                                </div>
                            )
                        }

                    </AnimatePresence>

                    
                </div> */}

                <motion.div onViewportEnter={()=>{if(fixed){setFixed(false)} }} className='flex flex-row justify-center w-full mt-10 px-4'>
                    <div className=' w-full flex flex-col menu_btn2 xl:px-28 lg:px-16 px-8 py-10 rounded-[60px]'>
                        <div className='flex flex-row justify-center mb-8'>
                            <h1 className='lg:w-[973px] text-[#231F20] text-[48px] font-[700] text-center'>Un outil <span className='text-white montserrat-bold'>complet et pratique</span> pour l’atteinte de vos objectifs</h1>
                        </div>
                        
                        <div className='flex lg:flex-row flex-col items-center justify-center lg:space-x-2'>
                            <div className='lg:w-[379px] lg:h-[455px] w-full lg:flex hidden '>
                                <img src={CCM_Call_to_action} alt="" className='rounded-[30px] ' />
                            </div>
                            <div className='self-stretch'>
                                <Outils />
                            </div>
                        </div>

                        <div className='flex sm:flex-row flex-col sm:items-center sm:justify-center space-y-3 space-x-3 mb-8 mt-10'>
                            <button className='bg-[#FFF] transition-all hover:bg-[#07AED8] shadow-md text-[#0D304E] rounded-full py-[20px] px-[30px] cursor-pointer montserrat-bold text-[16px] mb-0 '>Démarrer une cagnotte</button>
                            <button className='bg-[#0D304E] transition-all hover:bg-[#07AED8] shadow-md text-white rounded-full py-[20px] px-[40px] cursor-pointer montserrat-bold text-[16px] '>Financer un projet</button>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="my-20 flex flex-col items-center px-8" onViewportEnter={()=>{if(fixed){setFixed(false)} }}>
                    <h1 className='text-[#0E0E18] text-center text-[48px] font-[600] tracking-[-1px] mb-8 '>Foire aux questions (FAQ)</h1>

                    <FaqComponent title='Comment créer une cagnotte sur Izicagn ?' text='Créer une cagnotte est simple ! Cliquez sur le bouton "Créer une cagnotte", remplissez les informations de votre collecte (objectif, description, visuel, etc.), et votre page sera prête à partager en quelques minutes.' />
                    <FaqComponent title='Y a-t-il des frais pour créer une cagnotte ?' text='Non, la création d’une cagnotte sur Izicagn est totalement gratuite. Nous prélevons seulement une petite commission sur les dons reçus pour couvrir les frais de traitement des paiements.' />
                    <FaqComponent title="Comment puis-je suivre l'évolution de ma cagnotte ?" text='Vous avez accès à un tableau de bord personnel où vous pouvez voir en temps réel les dons reçus, les messages des donateurs, et bien plus encore.' />
                    <FaqComponent title="Que faire si j'ai besoin d'aide avec ma cagnotte ?" text='Si vous avez des questions ou rencontrez un problème, notre équipe de support est disponible 24/7 pour vous aider. Vous pouvez nous contacter par chat en direct, par email ou via notre formulaire de contact.' />
                    <FaqComponent title="Quels modes de paiement sont acceptés sur Izicagn ?" text='Izicagn accepte les paiements par carte de crédit, carte de débit, PayPal, et d’autres options locales en fonction de votre région.' />

                </motion.div>

                <div className='px-4'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default CommentMarche