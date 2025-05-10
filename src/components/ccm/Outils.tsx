import User from '../../assets/ccm/user.svg'
import Feedback from '../../assets/ccm/feedback.svg'
import Customization from '../../assets/ccm/customization.svg'
import Profits from '../../assets/ccm/profits.svg'
import Verified from '../../assets/ccm/verified.svg'
import Headset from '../../assets/ccm/headset.svg'

const Outils = () => {

    const cardsData = [
        {
          image: User,
          title: "Création rapide et intuitif",
          description: "Lancer votre cagnotte en un rien de temps.",
        },
        {
          image: Feedback,
          title: "Partage sur tous vos réseaux",
          description: "Maximiser votre visibilité et atteindre le plus de donateurs.",
        },
        {
          image: Customization,
          title: "Options de personnalisation",
          description: "Recevez des notifications pour chaque don, et suivez l'évolution de votre cagnotte",
        },
        {
          image: Profits,
          title: "Suivi en temps réel",
          description: "Ajoutez des images, des vidéos et des descriptions pour donner vie à votre collecte",
        },
        {
          image: Verified,
          title: "Paiements sécurisés",
          description: "Toutes les transactions sont protégées par des systèmes de sécurité de pointe",
        },
        {
          image: Headset,
          title: "Support client disponible 24/7",
          description: "Obtenez une assistance à tout moment pour vous aider.",
        },
      ];
      
    
    return (
        <div className='flex flex-row justify-center h-[100%]'>
          <div className="bg-white max-w-[769px] lg:max-h-[455px] grid lg:grid-cols-3 md:grid-cols-2 lgrid-rows-2 rounded-[30px] overflow-hidden p-8">
            {cardsData.map((card, index) => {
              let borderClasses = "p-[12px] flex flex-col items-start gap-2 border- border-[#F0F0F0]";

              // Ligne du haut
              if (index < 3) {
                if (index === 0) borderClasses += " md:border-r lg:border-b";
                if (index === 1) borderClasses += " lg:border-x  lg:border-b";
                if (index === 2) borderClasses += " lg:border-l lg:border-r-0 md:border-r lg:border-b";
              }

              // Ligne du bas
              if (index >= 3) {
                if (index === 3) borderClasses += " lg:border-r";
                if (index === 4) borderClasses += " lg:border-x";
                if (index === 5) borderClasses += " md:border-l";
              }

              return (
                <div key={index} className={borderClasses}>
                  <div className="bg-[#FFE6D5] w-[48px] h-[48px] p-4 rounded-full">
                    <img src={card.image} alt={`Image ${index + 1}`} />
                  </div>

                  <div className="space-y-1">
                    <h1 className="text-[18px] text-[#292D32] font-semibold tracking-[-0.54px]">
                      {card.title}
                    </h1>
                    
                    <p className="text-[13px] text-[#4E5E62] ">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    )
}

export default Outils