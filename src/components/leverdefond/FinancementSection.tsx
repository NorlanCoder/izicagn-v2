import Financement from '/src/assets/leverdefond/ldf1.png'
import HandShake from  '/src/assets/leverdefond/hand-shake.png'
import Professional from '/src/assets/leverdefond/professional.png'
import Decor1 from '/src/assets/leverdefond/path1.png'
import Decor2 from '/src/assets/leverdefond/path2.png'
import Decor3 from '/src/assets/leverdefond/path3.png'
import '../../utils/style/leverdefond.css'

const FinancementSection = () => {
    return (
        <div className='2xl:px[280px] lg:px-[120px] md:px-[80px] px-[16px] pb-20'>
            <div className='flex flex-col lg:flex-row space-y-10 space-x-10 items-center justify-center py-20'>
                <div className='space-y-[28px]'>
                    <h1 className='max-w-[440px] text-[36px] leading-[100%] tracking-[-2px] font-semibold'>Se lancer, se former et financer des projets</h1>
                    <div className='flex space-x-[10px] items-start'>
                        <div className='bg-[#FDF6F1] p-3 rounded-full'><img src={HandShake} alt="" /></div>
                        <p className='text-[17px] text-[#555B6D] leading-[21px] max-w-[465px]'>izicagn organise la mise en relation et l’intermédiation entre futurs entrepreneurs, projets d’entreprises et investisseurs</p>
                    </div>
                    <div className='flex space-x-[10px] items-start'>
                        <div className='bg-[#FDF6F1] p-3 rounded-full'><img src={Professional} alt="" /></div>
                        <p className='text-[17px] text-[#555B6D] leading-[21px] max-w-[465px]'>A travers un accompagnement sur la problématique de la structuration et d’accès au financement par le biais d’<span className='text-[#FD8352]'>entreprises partenaires de conseil</span>.</p>
                    </div>
                    <button className='bg-[#083044] py-4 px-[30px] rounded-[200px] text-white font-bold'>Financer un projet</button>
                </div>
                <div><img src={Financement} alt="" /></div>
            </div>

            <div className='flex flex-col items-center'>
                
                <h2 className='max-w-[771px] text-3xl md:text-[56px] text-[#0E0E18] font-bold text-center leading-[100%] tracking-[-2px] pb-16'>Pourquoi <span className='text-[#07AED8]'>lever des fonds </span>avec Izicagn ?</h2>
                <div className='flex flex-wrap justify-center space-x-6 space-y-6'>
                    <div className='relative rounded-[30px] max-h-[452px] px-10 pb-10' id='bg-ldf1'>
                        <img src={Decor1} alt="" className=' absolute left-0' />
                        <h3 className='text-[#07AED8] text-[83.69px] font-bold'>1</h3>
                        <h4 className='text-[32px] leading-[41px] font-bold max-w-[272px] pb-4'>Réseau d’investisseurs </h4>
                        <p className='max-w-[307px] text-[18px] font-medium leading-[27px]'>Accédez à un large réseau d’investisseurs prêts à soutenir des projets innovants. Grâce à Izicagn, vous bénéficiez d’une <span className=' font-bold'>visibilité</span> pour concrétiser vos idées.</p>
                    </div>
                    <div className='relative rounded-[30px] max-h-[452px] px-10 pb-10 xl:mt-14' id='bg-ldf2'>
                        <img src={Decor2} alt="" className=' absolute left-0 top-2' />
                        <h3 className='text-[#07AED8] text-[83.69px] font-bold'>2</h3>
                        <h4 className='text-[32px] leading-[41px] font-bold max-w-[272px] pb-4'>Programme sur mesure</h4>
                        <p className='max-w-[307px] text-[18px] font-medium leading-[27px]'>Avec notre programme d’<span className=' font-bold'>accompagnement</span>, vous bénéficiez d’un suivi personnalisé pour vous aider à structurer votre projet, maximiser vos chances de succès grâce à nos partenaires.</p>
                    </div>
                    <div className='relative rounded-[30px] max-h-[452px] px-10 pb-10 mr-6 md:mr-0' id='bg-ldf3'>
                        <img src={Decor3} alt="" className=' absolute left-0 top-0' />
                        <h3 className='text-[#07AED8] text-[83.69px] font-bold'>3</h3>
                        <h4 className='text-[32px] leading-[41px] font-bold max-w-[272px] pb-4'>Ressources d’expertise </h4>
                        <p className='max-w-[307px] text-[18px] font-medium leading-[27px]'>Que ce soit la gestion d’entreprise, les stratégies de levée de fonds, avec nos <span className=' font-bold'>ressources</span> vous serez équipé pour convaincre et progresser efficacement.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancementSection