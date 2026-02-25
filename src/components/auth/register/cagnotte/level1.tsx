import { useState } from 'react';
import SelectBeneficiaire, { BeneficiaireOption } from '../../../../components/SelectBeneficiaire';
import moiMemeIcon from '/src/assets/cagnotte/moi-meme.png';
import communote from '/src/assets/cagnotte/communote.png';
import peojet from '/src/assets/cagnotte/projet.png';

const Level1 = ({ changeLevel }: { changeLevel: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedObjectifs, setSelectedObjectifs] = useState<string[]>([]);

  const options: BeneficiaireOption[] = [
    {
      label: "Pour moi-même",
      description: "Vous collectez des fonds pour un projet ou pour répondre à vos des urgences personnels ou.",
      icon: <img src={moiMemeIcon} alt="Moi-même" className="w-[55px] h-[55px]" />,
    },
    {
      label: "Pour une communauté ou une association",
      description: "Vous collectez des fonds au nom d'une organisation caritative ou d'une association à but non lucratif.",
      icon: <img src={communote} alt="communauté" className="w-[55px] h-[55px]" />,
    },
    {
      label: "Pour un projet",
      description: "Vous collectez des fonds pour un projet qui bénéficiera à votre communauté locale.",
      icon: <img src={peojet} alt="Projet" className="w-[55px] h-[55px]" />,
    },
  ];

  const objectifs = [
    "Mariage", "Anniversaire", "Études", "Voyage",
    "Santé et médical", "Naissance", "Déménagement", "Retraite"
  ];

  const toggleObjectif = (item: string) => {
    setSelectedObjectifs((prev) =>
      prev.includes(item) ? prev.filter((val) => val !== item) : [...prev, item]
    );
  };

  return (
    <div className="mt-20">
      <h2 className="text-[32px] text-[#0E0E18] font-semibold">
        <span className="text-[#FD8352]">Pour</span> quoi collectez-vous des fonds ?
      </h2>

      <div className="mt-10 space-y-5">
        <label className="text-[15px] font-semibold">Je collecte pour :</label>

        <div className={`rounded-[12px] ${selected !== null ? 'bg-[#CFECF3]' : 'bg-[#F3F5F7]'}`}>
          <SelectBeneficiaire
            options={options}
            selected={selected}
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onSelect={(index: number) => {
              setSelected(index);
              setIsOpen(false);
              setSelectedObjectifs([]);
            }}
            onReset={() => {
              setSelected(null);
              setSelectedObjectifs([]);
            }}
          />
        </div>

        {selected !== null && (
          <div className="mt-6">
            <p className="text-sm text-[#0E0E18] font-medium mb-3">
              Sélectionnez les termes qui décrivent le mieux votre objectif
            </p>
            <div className="flex flex-wrap gap-3 bg-[#F7F9FA] p-5 rounded-[16px]">
              {objectifs.map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggleObjectif(item)}
                  className={`px-5 py-2 text-sm rounded-full border transition ${
                    selectedObjectifs.includes(item)
                      ? "bg-[#23C7ED] text-white border-[#23C7ED]"
                      : "bg-white text-black border-[#E5E7EB] hover:bg-[#23C7ED]/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      
        <div className="flex justify-end items-center gap-4 pt-36 bottom-14 right-0">
        {selected !== null && (
          <button className="border-2 border-[#D9DFE7CC] px-[34px] py-[16px] text-black font-semibold rounded-full hover:scale-105 transition">
          Précédent
             </button>
           )}
            <button onClick={changeLevel} className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full hover:scale-105 transition">
                Continuer
            </button>
        </div>
     
    </div>
  );
};

export default Level1;
