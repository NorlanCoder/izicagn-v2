import { FC } from 'react';
import React from 'react';

export interface BeneficiaireOption {
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface SelectBeneficiaireProps {
  options: BeneficiaireOption[];
  selected: number | null;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (index: number) => void;
  onReset: () => void;
}

const SelectBeneficiaire: FC<SelectBeneficiaireProps> = ({
  options,
  selected,
  isOpen,
  onToggle,
  onSelect,
  onReset,
}) => {
  return (
    <div className="relative w-full bg-[#F3F5F7] rounded-[12px] mb-3">
      <div
        onClick={onToggle}
        className={`cursor-pointer px-6 py-5 rounded-[12px] flex items-center justify-between transition ${
            selected !== null ? 'bg-[#CFECF3]' : 'bg-[#F3F5F7]'
          }`}
      >
        {selected !== null ? (
          <div className="flex items-center gap-3">
            {options[selected].icon}
            <div>
              <div className="font-bold text-[#0E0E18] text-sm">{options[selected].label}</div>
              <div className="text-xs text-[#475569]">{options[selected].description}</div>
            </div>
          </div>
        ) : (
          <span className="text-gray-500">Text</span>
        )}

        <div className="flex items-center gap-2 ml-2">
          {selected !== null && (
            <img
              src="/src/assets/cagnotte/eos-icons_arrow-rotate.png"
              alt="reset"
              className="w-4 h-4 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onReset();
              }}
            />
          )}
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full bg-white shadow-lg rounded-[12px] border border-gray-200">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => onSelect(index)}
              className="p-4 cursor-pointer hover:bg-gray-100 rounded-[12px]"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{option.icon}</div>
                <div>
                  <div className="font-bold">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBeneficiaire;
