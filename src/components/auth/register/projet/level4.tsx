import Benin from '../../../../assets/auth/benin.png'
import Togo from '../../../../assets/auth/togo.png'
import Cote from '../../../../assets/auth/cote.png'
import Burkina from '../../../../assets/auth/burkina.png'
import Senegal from '../../../../assets/auth/senegal.png'
import France from '../../../../assets/auth/france.png'
import Chevron from "../../../../assets/auth/Chevron.svg"

import Select from 'react-select';

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: 'transparent',
    borderColor: '#DFE3E6CC',
    borderWidth: '1px',
    borderRadius: '18px',
    boxShadow: state.isFocused ? '0 0 0 2px #23C7ED33' : 'none',
    padding: '10px 19px',
    minHeight: '48px',
    fontSize: '15px',
    cursor: 'pointer',
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isFocused ? '#E6F7FB' : '#fff',
    padding: '10px 20px',
    cursor: 'pointer',
  }),
  singleValue: (base: any) => ({
    ...base,
    fontWeight: '700',
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#A8ACB2',
    fontSize: '15px',
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: '#A8ACB2',
    paddingRight: '8px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: '12px',
    zIndex: 20,
  }),
};

// 🔽 Chevron personnalisé
const CustomDropdownIndicator = () => (
  <div className="absolute right-5 pointer-events-none">
    <img src={Chevron} alt="Chevron" />
  </div>
)


const Level4 = ({ changeLevel }: { changeLevel: () => void }) => {

  const options = [
    { value: 'Bénin', label: <div className="flex items-center gap-2"><img src={Benin} alt="Benin" className="rounded-[4px]" /> Bénin</div> },
    { value: 'Togo', label: <div className="flex items-center gap-2"><img src={Togo} alt="Togo" className="rounded-[4px]" /> Togo</div> },
    { value: 'Côte d’Ivoire', label: <div className="flex items-center gap-2"><img src={Cote} alt="Togo" className="rounded-[4px]" /> Côte d’Ivoire</div> },
    { value: 'Burkina Faso', label: <div className="flex items-center gap-2"><img src={Burkina} alt="Togo" className="rounded-[4px]" /> Burkina Faso</div> },
    { value: 'Sénégal', label: <div className="flex items-center gap-2"><img src={Senegal} alt="Senegal" className="rounded-[4px]" /> Sénégal</div> },
    { value: 'France', label: <div className="flex items-center gap-2"><img src={France} alt="France" className="rounded-[4px]" /> France</div> },
  ];


  return (
    <div className="mt-20 w-full">
            <h2 className="text-[32px] text-[#0E0E18] font-bold ">Indiquez où votre projet sera t-il mis en place </h2>
            <p className="text-[15px] text-[#8296A3] ">Sélectionnez le pays d'identification fiscale de votre entreprise</p>

            <div className='mt-10 mb-58 w-full '>
              <Select
                options={options}
                styles={customStyles}
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                placeholder="Sélectionnez"
                className="w-full"
                classNamePrefix="custom-select p-10"
              />
            </div>

            <button onClick={changeLevel} className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full mt-10 absolute right-0 cursor-pointer hover:scale-105 transition">Continuer</button>
                
        </div>  
  )
}

export default Level4