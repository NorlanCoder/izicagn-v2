import Navbar from '../components/general/navbar'
import Footer from '../components/general/footer'
import GobackComponent from '../components/general/gobackComponent'
import Frame from '../assets/Frame 1000002142.png'
import Rectangle from '../assets/Rectangle 22631.png'

const Mission = () => {
  return (
    <div className='px-5 w-full'>
      <Navbar />
      <div className='mt-8 mb-36'>
        <div className='md:px-4'><GobackComponent /></div>
        <div className='flex flex-col justify-center items-center space-y-8 mb-26'>
          <h1>NOTRE MISSION</h1>
          <h2 className='text-5xl xl:text-6xl text-center max-w-[840px]'>Transformer vos idées et 
            projets en réalité
          </h2>
          <p className=' text-center text-[18px] max-w-[940px]'>Notre mission principale est de permettre aux individus, aux organisations et aux communautés de 
            mobiliser des ressources financières en s appuyant sur la générosité collective en Afrique et partout 
            dans le monde.
          </p>
          <div className=' relative rounded-[42.51px]'>
            <img src={Frame} alt="" />
            <img src={Rectangle} alt="" className=' absolute top-0'/>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col items-center space-y-10 '>
            <div className='max-w-[940px]'>
              <p className='text-[18px]'>Nous facilitons l'accès au financement pour un large éventail de projets, de causes et d évènements.</p>
              <p className=' font-bold text-[18px]'>Notre cible : L’Europe, La Diaspora Africaine, Le continent Africain etc</p>
            </div>
            <div className='max-w-[940px]'>
              <ol className='flex flex-col space-y-6'>
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
                <li className='text-[18px]'>8. Encourager l'innovation dans les modèles de financement</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mission