import Ilustration from '../assets/Garanties/Garanties.png'
import Sac from '../assets/Garanties/sack1.png'
import Frame from '../assets/Garanties/Frame.png'

const Garanties = () => {
    return (
        <div className=' px-4'>
            <div className='flex flex-col items-center'>
                <div className='space-y-3'>
                    <h1 className='text-3xl md:text-[54px] font-medium'>Nos garanties sur izicagn</h1>
                    <p className='text-[18px] text-[#6F7886] max-w-[929px] pb-8'>Chez izicagn, nous comprenons l'importance de la confiance lorsque vous utilisez notre application pour collecter des fonds ou contribuer à une cagnotte. C'est pourquoi nous avons mis en place une politique de garantie de remboursement pour assurer une expérience sans souci à tous nos utilisateurs.</p>
                </div>
                <div className='flex justify-center pb-28'><img src={Ilustration} alt="" /></div>
                <div className=' space-y-6 pb-14'>
                    <h1 className=' text-3xl md:text-[54px] font-medium max-w-[603px] tracking-[-1px] leading-[113.99999999999999%]'>Pourquoi une garantie de remboursement ?</h1>
                    <div className='max-w-[928px] space-y-4'>
                        <p className='text-[16px] leading-[128%]'><span className='text-[16px] font-bold'>Tranquillité d'esprit :</span>Nous voulons que vous puissiez organiser et participer à des collectes de fonds en toute confiance, sachant que votre argent est en sécurité</p>
                        <p className='text-[16px] leading-[128%]'><span className='text-[16px] font-bold'>Sécurité des fonds :</span>La garantie de remboursement est notre engagement à protéger les fonds collectés contre toute fraude ou toute mauvaise utilisation. C’est pour cela que nous demandons parfois  à nos utilisateurs porteur de projet de fournir des preuves de destination des fonds avant transfert des fonds sur leur compte.</p>
                        <p className='text-[16px] leading-[128%]'><span className='text-[16px] font-bold'>Satisfaction client :</span>Nous croyons fermement que votre satisfaction est la clé de notre succès. En cas de problème, nous sommes là pour vous assister et résoudre toute situation de manière équitable.</p>
                    </div>
                </div>
                <div className=' space-y-10 pb-20'>
                    <div className='flex flex-col justify-start items-start'>
                        <h1 className='text-3xl md:text-[54px] font-medium'>Conditions de remboursement</h1>
                        <p className='text-[18px] text-[#113950]'>La garantie de remboursement d’izicagn s'applique dans les situations suivantes :</p>
                    </div>
                    
                    <div className='flex flex-wrap justify-center space-y-4 space-x-6'>

                        <div className='max-w-[287px]'>
                            <h2 className='text-[22px] text-[#23C7ED]'>01</h2>
                            <h3 className='text-[28px] text-[#0F6D8F] font-semibold'>Fraude avérée</h3>
                            <p className='text-[18px] text-[#6F7886]'>Si une collecte de fonds s'avère être frauduleuse après vérification, nous rembourserons les contributeurs.</p>
                        </div>
                        
                        <div className='max-w-[287px]'>
                            <h2 className='text-[22px] text-[#23C7ED]'>02</h2>
                            <h3 className='text-[28px] text-[#0F6D8F] font-semibold'>Objectif non atteint</h3>
                            <p className='text-[18px] text-[#6F7886]'>Si la cagnotte a un objectif spécifique et que cet objectif n'est pas atteint, les contributeurs peuvent demander un remboursement</p>
                        </div>

                        <div className='max-w-[287px] mr-6 md:mr-0'>
                            <h2 className='text-[22px] text-[#23C7ED]'>03</h2>
                            <h3 className='text-[28px] text-[#0F6D8F] font-semibold'>Collecte annulée</h3>
                            <p className='text-[18px] text-[#6F7886]'>Si l'événement ou le projet pour lequel la collecte de fonds a été organisée est annulé, les contributeurs peuvent recevoir un remboursement</p>
                        </div>

                    </div>
                </div>

                <div className='bg-[#FFF4ED] max-w-[938px] rounded-[20px] px-2 md:pl-14 md:pr-32 pb-12'>
                    <div className='flex space-x-3 items-center border-b border-[#F8E6DF] py-6'>
                        <img src={Sac} alt="" />
                        <p className='text-[22px] font-bold leading-[113.99999999999999%] uppercase tracking-[-1px]'>Procédure de Remboursement</p>
                    </div>
                    <div className='max-w-[727px] space-y-4 md:pl-11 pt-6 '>
                        <p className='text-[15px] leading-[128%]'><span className='text-[15px] font-bold'>Soumettre une demande :</span>En cas de problème, les utilisateurs peuvent soumettre une demande de remboursement via notre application ou notre site web en fournissant les détails nécessaires.</p>
                        <p className='text-[15px] leading-[128%]'><span className='text-[15px] font-bold'>Vérification :</span>Notre équipe examinera chaque demande de remboursement, vérifiera les preuves fournies et, si nécessaire, contactera l'organisateur de la cagnotte pour plus d'informations.</p>
                        <p className='text-[15px] leading-[128%]'><span className='text-[15px] font-bold'>Décision et remboursement :</span>Une fois la demande approuvée, le remboursement sera effectué directement sur le compte bancaire ou le moyen de paiement utilisé par le contributeur, généralement dans un délai de 7 à 10 jours ouvrables.</p>
                    </div>
                </div>

                <div className='flex flex-col text-start items-start max-w-[928px]  py-20'>
                    <h1 className='text-3xl md:text-[54px] font-medium max-w-[800px]'>Nous nous engageons à</h1>

                    <ul className='list-disc max-w-[928px] px-5'>
                        <li>⁠Transparence : Communiquer de manière claire et transparente sur les raisons de l'approbation ou du refus d'une demande de remboursement.</li>
                        <li>Support client : Fournir une assistance rapide et efficace à tous nos utilisateurs via notre service client, accessible par email ou chat en direct.</li>
                        <li>Amélioration continue : Évaluer régulièrement notre politique de garantie de remboursement pour nous assurer qu'elle répond aux besoins et aux attentes de nos utilisateurs.</li>
                    </ul>
                </div>
                <div className=' pb-20'><img src={Frame} alt="" /></div>
            </div>
        </div>
    )
}

export default Garanties