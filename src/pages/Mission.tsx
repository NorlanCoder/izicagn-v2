import Navbar from '../components/general/navbar'
import Footer from '../components/general/footer'
import GobackComponent from '../components/general/gobackComponent'
import Frame from '../assets/Frame 1000002142.png'
import Rectangle from '../assets/Rectangle 22631.png'

const Mission = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-[150px] w-full'>
        
        <div className='mt-8 mb-36'>
          
          <div className='flex flex-col justify-center items-center space-y-8 mb-26'>
            <div className='flex flex-col items-center space-y-3'>
              <div className='self-start mb-10'><GobackComponent /></div>
              <h1 className='text-[#57606D] text-[18px] font-bold '>NOTRE MISSION</h1>
              <h2 className='text-5xl xl:text-6xl text-center max-w-[890px] font-bold'>Transformer vos idées et 
                projets en réalité
              </h2>
            </div>
            <p className=' text-center text-[18px] text-[#6F7886] max-w-[940px] mb-10'>Notre mission principale est de permettre aux individus, aux organisations et aux communautés de 
              mobiliser des ressources financières en s appuyant sur la générosité collective en Afrique et partout 
              dans le monde.
            </p>
            <div className=' relative rounded-[42.51px] 2xl:px[280px] lg:px-[120px] md:px-[80px] px-[16px]'>
              <img src={Frame} alt="" />
              <img src={Rectangle} alt="" className=' absolute top-0'/>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col items-center space-y-10'>
              
              <div className='max-w-[940px]'>
                <div className='max-w-[940px] text-[#292D32] my-3'>
                  <p className='text-[18px] text-[#6F7886] '>Nous facilitons l'accès au financement pour un large éventail de projets, de causes et d'évènements.</p>
                  <p className='montserrat-bold text-[18px]'>Notre cible : L’Europe, La Diaspora Africaine, Le continent Africain etc</p>
                </div>
                <ol className=' space-y-6'>
                  <li className='text-[18px]'>1. Faciliter l'accès au financement
                    <p className=' mt-4'>Rendre le financement accessible à tous, sans passer par les canaux traditionnels comme les banques 
                      ou les investisseurs. Que ce soit pour financer un projet créatif, une cause humanitaire, un événement 
                      personnel ou une entreprise en démarrage.
                    </p>
                  </li>
                  <li className='text-[18px] '>2. Favoriser l'inclusion financière surtout en Afrique
                    <p className=' mt-4'>Offrir une opportunité de financement à tous ceux qui n ont pas nécessairement accès aux 
                      financements traditionnels. Que vous soyez un entrepreneur sans réseau d investisseurs, un particulier 
                      avec un besoin urgent, ou une association cherchant à lever des fonds pour une cause sociale, izicagn 
                      vous offre une alternative simple, rapide et souvent sans barrière à l'entrée.
                    </p>
                  </li>
                  <li className='text-[18px]'>3. Soutenir des projets variés et innovants</li>
                  <li className='text-[18px]'>4. Encourager la solidarité et l'entraide
                    <p className=' mt-4'>Mettre en avant les valeurs de solidarité et d entraide en facilitant les contributions à des causes 
                      sociales, humanitaires ou personnelles.
                    </p>
                    <p className=' mt-4'>Permettre aux donateurs ou investisseur de participer à des initiatives qui ont du sens pour eux, qu il 
                      s agisse de soutenir une cause caritative, de venir en aide à une personne en difficulté, ou de financer 
                      un projet communautaire.
                    </p>
                  </li>
                  <li className='text-[18px]'>5. Garantir la transparence et la sécurité
                    <p className=' mt-4'>La transparence et la sécurité des transactions sont des missions fondamentales pour assurer la 
                      confiance entre les porteurs de projets et les contributeurs. izicagn veille dans la mesure du possible à 
                      ce que les fonds collectés soient utilisés de manière responsable et conforme aux objectifs annoncés; 
                      tout en protégeant vos données personnelles et en sécurisant les transactions financières.
                    </p>
                  </li>
                  <li className='text-[18px]'>6. Créer des communautés autour des projets
                    <p className=' mt-4'>Faciliter la mise en relation entre les créateurs de projets et les contributeurs, izicagn participe à la 
                      création de communautés
                    </p>
                  </li>
                  <li className='text-[18px]'>7. Soutenir les porteurs de projet dans leur campagne</li>
                  <li className='text-[18px]'>8.   Encourager l'innovation dans les modèles de financement</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4'>
          <Footer />
        </div>
        
      </div>
    </div>
  )
}

export default Mission