import { useState } from "react";


const Level8 = () => {

  const [selected, setSelected] = useState("");

  const options = [
    { id: "option1", label: "moi-meme", description: "Le projet est entièrement personnel et je le gère en tant qu'individu" },
    { id: "option2", label: "une équipe", description: "Le projet est porté par un équipe travaillant ensemble" },
    { id: "option3", label: "une entrprise", description: "Le projet est initié et géré par moon entraprise" },
    { id: "option4", label: "en partenariat", description: "Le projet est une colaboration avec des entités ou individus" },
  ];

  return (
    <div className="mt-20 w-full">
            <h2 className="text-[32px] text-[#0E0E18] font-bold ">Qui est derrièrre ce projet ?</h2>
            <p className="text-[15px] text-[#8296A3] ">Présentez la êrsonne, l'équipe ou l'organisation à l'origine de cette initiative, pour que vos soutient en sachent plus sur  votre engagement et vos ambitions</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 mb-20">
              {options.map((opt) => (
                <label
                  key={opt.id}
                  htmlFor={opt.id}
                  className={`border rounded-[26px] bg-[#F5F8FB] p-4 cursor-pointer transition ${
                    selected === opt.id ? "border-blue-500 bg-blue-100" : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id={opt.id}
                      name="card-option"
                      value={opt.id}
                      checked={selected === opt.id}
                      onChange={() => setSelected(opt.id)}
                      className="form-radio"
                    />
                    <span className="text-[#0B3D5A] uppercase font-bold">{opt.label}</span>
                  </div>
                  <p className="pl-6 text-[12px] text-[#677C91] max-w-[242px]">{opt.description}</p>
                </label>
                
              ))}
            </div>
            
            <button className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full mt-10 absolute right-0 cursor-pointer hover:scale-105 transition">Continuer</button>
                
        </div>
  )
}

export default Level8