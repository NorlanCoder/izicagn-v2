import User from '../../assets/ccm/user.png'
import Feedback from '../../assets/ccm/feedback.png'
import Customization from '../../assets/ccm/customization.png'
import Profits from '../../assets/ccm/profits.png'
import Verified from '../../assets/ccm/verified.png'
import Headset from '../../assets/ccm/headset.png'

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
        <div>
            <div className="bg-white max-w-[769px] max-h-[455px] grid grid-cols-3 grid-rows-2 rounded-[30px] overflow-hidden p-6">
  {cardsData.map((card, index) => {
    let borderClasses = "p-[10.5px] flex flex-col items-start gap-2 border- border-[#F0F0F0]";

    // Ligne du haut
    if (index < 3) {
      if (index === 0) borderClasses += " border-r border-b";
      if (index === 1) borderClasses += " border-x border-b";
      if (index === 2) borderClasses += " border-l border-b";
    }

    // Ligne du bas
    if (index >= 3) {
      if (index === 3) borderClasses += " border-r";
      if (index === 4) borderClasses += " border-x";
      if (index === 5) borderClasses += " border-l";
    }

    return (
      <div key={index} className={borderClasses}>
        <div className="bg-[#FFE6D5] p-4 rounded-full">
          <img src={card.image} alt={`Image ${index + 1}`} />
        </div>

        <div className="space-y-1">
          <h1 className="text-[18px] text-[#292D32] font-semibold tracking-[-0.54px] leading-[100%]">
            {card.title}
          </h1>
          
          <p className="text-[13px] text-[#4E5E62] leading-[100%]">
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