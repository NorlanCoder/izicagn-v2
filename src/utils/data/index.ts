import { CagnotteMediumType, CategoryType, CcmListSectionType, DonAmmountType, SideBarItemType } from "../type";
import Cat1 from '../../assets/cagnotte/cat1.svg';
import Cat2 from '../../assets/cagnotte/cat2.svg';
import Cat3 from '../../assets/cagnotte/cat3.svg';
import Cat4 from '../../assets/cagnotte/cat4.svg';
import Cat5 from '../../assets/cagnotte/cat5.svg';
import Cat6 from '../../assets/cagnotte/cat6.svg';

import Cagn1 from '../../assets/cagnotte/cagn1.png';
import Cagn2 from '../../assets/cagnotte/cagn2.png';
import Cagn3 from '../../assets/cagnotte/cagn3.png';

import Sub1 from '../../assets/sidebar/sidebari1.svg';
import Sub2 from '../../assets/sidebar/sidebari2.svg';
import Sub3 from '../../assets/sidebar/sidebari3.svg';
import Sub4 from '../../assets/sidebar/sidebari4.svg';
// import Sub5 from '../../assets/sidebar/sidebari5.svg';

import CCM_SECTION1 from '../../assets/ccm/ccm_img1.svg';
import CCM_SECTION2 from '../../assets/ccm/ccm_img2.svg';
import CCM_SECTION3 from '../../assets/ccm/ccm_img3.svg';
import CCM_SECTION4 from '../../assets/ccm/ccm_img4.svg';
import CCM_SECTION5 from '../../assets/ccm/ccm_img5.svg';
import CCM_SECTION6 from '../../assets/ccm/ccm_img6.svg';

import CCM_ICON1 from '../../assets/ccm/rating1.svg';
import CCM_ICON2 from '../../assets/ccm/rating2.svg';
import CCM_ICON3 from '../../assets/ccm/rating3.svg';
import CCM_ICON4 from '../../assets/ccm/love1.svg';
import CCM_ICON5 from '../../assets/ccm/love2.svg';
import CCM_ICON6 from '../../assets/ccm/love3.svg';

export const CategoryList:CategoryType[] = [
    {
        id: 'C0001',
        name: 'Événements',
        image: Cat1
    },
    {
        id: 'C0002',
        name: 'Solidarité et Soutien',
        image: Cat2
    },
    {
        id: 'C0003',
        name: 'Projets personnels',
        image: Cat3
    },
    {
        id: 'C0004',
        name: 'Sports et Loisirs',
        image: Cat4
    },
    {
        id: 'C0005',
        name: 'Cadeaux et collectes communes',
        image: Cat5
    },
    {
        id: 'C0006',
        name: 'Communauté et Culture',
        image: Cat6
    },
    {
        id: 'C0007',
        name: 'Technologie et Innovation',
        image: Cat1
    },
    {
        id: 'C0008',
        name: "Aide d'urgence",
        image: Cat2
    },
];

export const CagnotteMediumList: CagnotteMediumType[] = [
    { 
      id: "1", 
      title: "Soutien Scolaire", 
      solde: 2500, 
      besoin: 5000, 
      participant: 35, 
      image: Cagn1 
    },
    { 
      id: "2", 
      title: "Projet Humanitaire", 
      solde: 1200, 
      besoin: 3000, 
      participant: 20, 
      image: Cagn2
    },
    { 
      id: "3", 
      title: "Mariage de Paul & Anna", 
      solde: 800, 
      besoin: 5000, 
      participant: 15, 
      image: Cagn3
    },
    { 
      id: "4", 
      title: "Opération Médicale", 
      solde: 4000, 
      besoin: 10000, 
      participant: 50, 
      image: Cagn2 
    },
    { 
      id: "5", 
      title: "Voyage Scolaire", 
      solde: 1800, 
      besoin: 4500, 
      participant: 22, 
      image: Cagn1
    },
    { 
      id: "6", 
      title: "Aide aux Réfugiés", 
      solde: 3200, 
      besoin: 7000, 
      participant: 65, 
      image: Cagn3
    },
    { 
      id: "7", 
      title: "Startup Innovante", 
      solde: 5000, 
      besoin: 20000, 
      participant: 80, 
      image: Cagn2
    },
    { 
      id: "8", 
      title: "Festival Local", 
      solde: 900, 
      besoin: 2500, 
      participant: 30, 
      image: Cagn3
    }
];

export const CagnotteMediumListMin: CagnotteMediumType[] = [
    { 
      id: "1", 
      title: "Soutien Scolaire", 
      solde: 2500, 
      besoin: 5000, 
      participant: 35, 
      image: Cagn1 
    },
    { 
      id: "2", 
      title: "Projet Humanitaire", 
      solde: 1200, 
      besoin: 3000, 
      participant: 20, 
      image: Cagn2
    },
    { 
      id: "3", 
      title: "Mariage de Paul & Anna", 
      solde: 800, 
      besoin: 5000, 
      participant: 15, 
      image: Cagn3
    },
    { 
      id: "4", 
      title: "Opération Médicale", 
      solde: 4000, 
      besoin: 10000, 
      participant: 50, 
      image: Cagn2 
    }
];

export const CagnotteMediumListMin2: CagnotteMediumType[] = [
  { 
    id: "1", 
    title: "Soutien à la formation des jeunes agriculteurs", 
    solde: 2500, 
    besoin: 5000, 
    participant: 35, 
    image: Cagn1 
  },
  { 
    id: "2", 
    title: "Rénovation du centre culturel de Douala", 
    solde: 1200, 
    besoin: 3000, 
    participant: 20, 
    image: Cagn2
  },
  { 
    id: "3", 
    title: "Soins médicaux de Marie", 
    solde: 800, 
    besoin: 5000, 
    participant: 15, 
    image: Cagn3
  },
  { 
    id: "4", 
    title: "Soins médicaux de Marie", 
    solde: 4000, 
    besoin: 10000, 
    participant: 50, 
    image: Cagn2 
  }
];
  
export const DonAmountMin: DonAmmountType[] = [
  {
    id: 'A001',
    amount: '10 000'
  },
  {
    id: 'A002',
    amount: '20 000'
  },
  {
    id: 'A003',
    amount: '50 000'
  },
  {
    id: 'A004',
    amount: '100 000'
  }
]

export const SidebarItemData: SideBarItemType[] = [
  {
    id: 'S001',
    image: Sub1,
    title: 'Cagnottes',
    text: 'Soutenez les causes qui vous tiennent à cœur',
    path: '/cagnotte',
    soon: false
  },
  {
    id: 'S003',
    image: Sub3,
    title: 'Tarifs',
    text: 'Des offres claires et adaptées',
    path: '/tarifs',
    soon: false
  },
  {
    id: 'S004',
    image: Sub4,
    title: 'Notre mission',
    text: 'Soutenir vos ambitions, transformer vos idées en succès',
    path: '/mission',
    soon: false
  },
  {
    id: 'S002',
    image: Sub2,
    title: 'Investissements',
    text: 'Investissez dans des projets à potentiel',
    path: '/investissement',
    soon: true
  },
  // {
  //   id: 'S005',
  //   image: Sub5,
  //   title: 'Izicagn Pro',
  //   text: 'Private equity, Professionnels de la finance',
  //   path: '/mission',
  //   soon: true
  // },
]

export const CcmData1: CcmListSectionType[] = [
  {
    id: 'CC001',
    icon: CCM_ICON1,
    title: 'Une expérience unique avec zéro complication',
    text: 'Avec Izicagn, tout est pensé pour vous faciliter la vie. En quelques clics, vous êtes prêt à collecter des dons. Une interface fluide, des outils intelligents, et voilà',
    image: CCM_SECTION1,
    direction: true
  },
  {
    id: 'CC002',
    icon: CCM_ICON2,
    title: 'Sécurité complète, Sérénité Assurée',
    text: 'Protéger vos transactions, c’est notre promesse. Izicagn utilise des systèmes de sécurité avancés pour que chaque don soit effectué en toute confiance.',
    image: CCM_SECTION2,
    direction: false
  },
  {
    id: 'CC003',
    icon: CCM_ICON3,
    title: 'Une plateforme de confiance, digne de vous',
    text: 'Vous méritez une plateforme à la hauteur de vos ambitions. Avec Izicagn, vous bénéficiez de la transparence, de la fiabilité et d’un soutien de qualité à chaque étape.',
    image: CCM_SECTION3,
    direction: true
  }
]

export const CcmData2: CcmListSectionType[] = [
  {
    id: 'CC004',
    icon: CCM_ICON4,
    title: 'Un Don simple et rapide, en quelques clics',
    text: "Avec izicagn, en quelques secondes, vous pouvez soutenir des causes qui vous tiennent à cœur. Que ce soit pour aider un proche, financer un projet ou soutenir une organisation, tout se fait en un clin d'œil, sans tracas.",
    image: CCM_SECTION4,
    direction: false
  },
  {
    id: 'CC005',
    icon: CCM_ICON5,
    title: 'Sécurité à 100%, vos Dons protégés',
    text: "Votre générosité mérite la meilleure protection. Nous prenons la sécurité très au sérieux. Vos informations bancaires sont chiffrées et vos transactions sont sécurisées avec les dernières technologies.",
    image: CCM_SECTION5,
    direction: true
  },
  {
    id: 'CC006',
    icon: CCM_ICON6,
    title: 'Des collectes fiables et authentiques.',
    text: "Les comptes des collecteurs sont passe pas une vérification  rigoureuse. Cela vous garantit que votre don va bien aux personnes et projets que vous souhaitez soutenir. Donnez en toute sérénité.",
    image: CCM_SECTION6,
    direction: false
  }
]