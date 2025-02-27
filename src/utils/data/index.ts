import { CagnotteMediumType, CategoryType } from "../type";
import Cat1 from '../../assets/cagnotte/cat1.png';
import Cat2 from '../../assets/cagnotte/cat2.png';
import Cat3 from '../../assets/cagnotte/cat3.png';
import Cat4 from '../../assets/cagnotte/cat4.png';
import Cat5 from '../../assets/cagnotte/cat5.png';
import Cat6 from '../../assets/cagnotte/cat6.png';

import Cagn1 from '../../assets/cagnotte/cagn1.png';
import Cagn2 from '../../assets/cagnotte/cagn2.png';
import Cagn3 from '../../assets/cagnotte/cagn3.png';

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
  
  