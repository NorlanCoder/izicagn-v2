import Benin from '../../../../assets/auth/benin.png'
import Togo from '../../../../assets/auth/togo.png'
import Cote from '../../../../assets/auth/cote.png'
import Burkina from '../../../../assets/auth/burkina.png'
import Senegal from '../../../../assets/auth/senegal.png'
import France from '../../../../assets/auth/france.png'

import Select from 'react-select';

const Level4 = () => {

  const options = [
    { value: 'Bénin', label: <div className="flex items-center gap-2"><img src={Benin} alt="Benin" className="rounded-[4px" /> Bénin</div> },
    { value: 'Togo', label: <div className="flex items-center gap-2"><img src={Togo} alt="Togo" className="rounded-[4px" /> Togo</div> },
    { value: 'Côte d’Ivoire', label: <div className="flex items-center gap-2"><img src={Cote} alt="Togo" className="rounded-[4px" /> Côte d’Ivoire</div> },
    { value: 'Burkina Faso', label: <div className="flex items-center gap-2"><img src={Burkina} alt="Togo" className="rounded-[4px" /> Burkina Faso</div> },
    { value: 'Sénégal', label: <div className="flex items-center gap-2"><img src={Senegal} alt="Senegal" className="rounded-[4px" /> Sénégal</div> },
    { value: 'France', label: <div className="flex items-center gap-2"><img src={France} alt="France" className="rounded-[4px" /> France</div> },
  ];


  return (
    <div className="mt-20 w-full">
            <h2 className="text-[32px] text-[#0E0E18] font-bold ">Indiquez où votre projet sera t-il mis en place </h2>
            <p className="text-[15px] text-[#8296A3] ">Sélectionnez le pays d'identification fiscale de votre entreprise</p>

            <div className='mt-10 mb-58 w-full '>
              <Select
                options={options}
                className="w-full"
                classNamePrefix="custom-select p-10"
              />
            </div>

            <button className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full mt-10 absolute right-0 cursor-pointer hover:scale-105 transition">Continuer</button>
                
        </div>  
  )
}

export default Level4