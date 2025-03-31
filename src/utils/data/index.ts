import { CagnotteMediumType, CategoryType, DonAmmountType, SideBarItemType } from "../type";
import Cat1 from '../../assets/cagnotte/cat1.png';
import Cat2 from '../../assets/cagnotte/cat2.png';
import Cat3 from '../../assets/cagnotte/cat3.png';
import Cat4 from '../../assets/cagnotte/cat4.png';
import Cat5 from '../../assets/cagnotte/cat5.png';
import Cat6 from '../../assets/cagnotte/cat6.png';

import Cagn1 from '../../assets/cagnotte/cagn1.png';
import Cagn2 from '../../assets/cagnotte/cagn2.png';
import Cagn3 from '../../assets/cagnotte/cagn3.png';

import Sub1 from '../../assets/sidebar/sidebari1.svg';
import Sub2 from '../../assets/sidebar/sidebari2.svg';
import Sub3 from '../../assets/sidebar/sidebari3.svg';
import Sub4 from '../../assets/sidebar/sidebari4.svg';
import Sub5 from '../../assets/sidebar/sidebari5.svg';

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
  
export const DonAmountMin: DonAmmountType[] = [
  {
    id: 'A001',
    amount: 10000
  },
  {
    id: 'A002',
    amount: 20000
  },
  {
    id: 'A003',
    amount: 50000
  },
  {
    id: 'A004',
    amount: 100000
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
    id: 'S002',
    image: Sub2,
    title: 'Investissements',
    text: 'Investissez dans des projets à potentiel',
    path: '/investissement',
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
    id: 'S005',
    image: Sub5,
    title: 'Izicagn Pro',
    text: 'Private equity, Professionnels de la finance',
    path: '/mission',
    soon: true
  },
]