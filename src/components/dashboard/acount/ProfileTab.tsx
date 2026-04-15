import { useState } from "react";
import { TriangleAlert, Camera, User, Download, Building2, House } from "lucide-react";

const options = [
  {
    id: "particulier",
    label: "Particulier",
    desc: "Personne physique",
    icon: <User />,
  },
  {
    id: "organisation",
    label: "Organisation",
    desc: "ONG ou Fondation",
    icon: <House />,
  },
  {
    id: "entreprise",
    label: "Entreprise",
    desc: "Société commerciale",
    icon: <Building2 />,
  },
];

export default function ProfileTab  () {  
  const [selected, setSelected] = useState("particulier");

  return (
    <div className="min-h-screen  ">
      <div className="space-y-8">

        <div className="border-[#E8EDF2] border-2 rounded-xl shadow p-6 ">
          {/* ALERT */}
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between bg-[#FFF8E1] border border-[#FF9800] text-orange-800 px-[18px] py-[13px] mb-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="bg-[#FFF3E0] border-[#FFE0B2] border p-2 rounded-[10px]">
                  <TriangleAlert className="h-[18px] w-[18px] text-[#EC320A]" />
              </div>
              <div className="text-sm text-[#5D4037]">
                  <p className="font-medium">Votre compte n’est pas encore vérifié. Vos collectes sont limitées à</p>
                  <p className="font-bold">50 000 FCFA/mois.</p>
              </div>
            </div>
            <button className="bg-[#001829] text-white font-bold text-xs px-[14px] py-[7px] rounded-full">
              Vérifier mon compte →
            </button>
          </div>

          {/* CARD */}
          <div className="bg-white space-y-6">

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row items-center justify-between border-b border-[#F0F4F8] pb-5">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-[#ECFDFF] flex items-center justify-center font-bold text-[#0F6D8F]">
                  SS
                </div>
                <div className="space-y-2">
                  <h2 className="font-bold text-lg text-[#1A1A2E]">Sophie SAGBOHAN</h2>
                  <p className="text-[13px] text-[#5A6272]">sophie.sagbo@gmail.com</p>
                  <div className="">
                      {/* <input type="file" className="hidde" /> */}
                      <button className="border-[#E8EDF2] px-[13px] py-[7px] flex items-center space-x-1.5 text-xs font-semibold rounded-[8px] border-2">
                          <Camera size={16} />
                          Changer de photo
                      </button>
                  </div>
                </div>
                <span className="text-xs bg-[#FFF5DB] text-[#E09400] font-semibold px-[10px] py-[3px] rounded-full">
                  Non vérifié
                </span>
              </div>

              <div className="space-y-1">
                  <span className="text-[11px] text-[#9AA3B0]">Type de compte</span>
                  <div className="flex items-center gap-1 bg-[#110C2214] px-2.5 py-1 rounded-full ">
                      <User className="h-3.5 w-3.5" />
                      <p className="text-[11px] text-[#110C22] font-semobold">Particulier</p>
                  </div>
              </div>
            </div>

            {/* FORM */}
            <div>
              <form action="">
                  <div className="grid grid-cols-1 md:grid-cols-2 space-x-3 mb-6">
                      <div className="flex flex-col space-y-2">
                          <label htmlFor="firstname" className="text-xs text-[#5A6272] font-semibold">Prénom</label>
                          <input type="text" id="firstname" placeholder="Prénom" defaultValue="Sophie" className="bg-[#F5F8FB] text-[#110C22BD] text-sm border-[1.5px] border-[#E8EDF2] rounded-[10px] py-2.5 px-3.5 w-full" />
                      </div>
                      <div className="flex flex-col space-y-2">
                          <label htmlFor="lastname" className="text-xs text-[#5A6272] font-semibold">Nom de famille</label>
                          <input type="text" id="lastname" placeholder="Nom" defaultValue="SAGBOHAN" className="bg-[#F5F8FB] text-[#110C22BD] text-sm border-[1.5px] border-[#E8EDF2] rounded-[10px] py-2.5 px-3.5 w-full" />
                      </div>
                  </div>
                  <div className="flex flex-col space-y-2 mb-6">
                      <label htmlFor="email" className="text-xs text-[#5A6272] font-semibold">Adresse e-mail</label>
                      <input type="email" id="email" placeholder="Email" defaultValue="sophie.sagbo@gmail.com" className="bg-[#F5F8FB] text-[#110C22BD] text-sm border-[1.5px] border-[#E8EDF2] rounded-[10px] py-2.5 px-3.5 w-full" />
                  </div>

                  <label htmlFor="country" className="text-xs text-[#5A6272] font-semibold">Téléphone</label>
                  <div className="flex space-x-3 mb-6">
                      <select name="country" id="country" className="bg-[#F5F8FB] text-[#110C22BD] text-sm border-[1.5px] border-[#E8EDF2] rounded-[10px] py-2.5 px-3.5 w-1/12">
                          <option value="bénin">+229</option>
                          <option value="france">+33</option>
                          <option value="togo">+228</option>
                      </select>
                      <input type="tel" placeholder="Téléphone" defaultValue="94274298" className="bg-[#F5F8FB] text-[#110C22BD] text-sm border-[1.5px] border-[#E8EDF2] rounded-[10px] py-2.5 px-3.5 w-full" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 space-x-3 mb-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="sexe" className="text-xs text-[#5A6272] font-semibold">Sexe</label>
                      <select name="sexe" id="sexe" className="bg-[#F5F8FB] text-[#110C22BD] text-sm border-[1.5px] border-[#E8EDF2] rounded-[10px] py-2.5 px-3.5">
                          <option value="féminin">Féminin</option>
                          <option value="masculin">Masculin</option>
                      </select>
                    </div>
                    <div className="flex flex-col space-y-2">
                          <label htmlFor="date" className="text-xs text-[#5A6272] font-semibold">Date de naissance</label>
                          <input type="date" id="date" placeholder="Date de naissance" defaultValue="1992-01-30" className="bg-[#F5F8FB] text-[#110C22BD] text-sm border-[1.5px] border-[#E8EDF2] rounded-[10px] py-2.5 px-3.5 w-full" />
                      </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 space-x-3 mb-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="country" className="text-xs text-[#5A6272] font-semibold">Pays</label>
                      <select name="country" id="country" className="bg-[#F5F8FB] text-[#110C22BD] text-sm border-[1.5px] border-[#E8EDF2] rounded-[10px] py-2.5 px-3.5">
                          <option value="france">France</option>
                          <option value="bénin">Bénin</option>
                          <option value="togo">Togo</option>
                      </select>
                    </div>
                    <div className="flex flex-col space-y-2">
                          <label htmlFor="ville" className="text-xs text-[#5A6272] font-semibold">Ville</label>
                          <input type="text" id="ville" placeholder="Ville" defaultValue="Cotonou" className="bg-[#F5F8FB] text-[#110C22BD] text-sm border-[1.5px] border-[#E8EDF2] rounded-[10px] py-2.5 px-3.5 w-full" />
                      </div>
                  </div>
              </form>
            </div>

            {/* ACCOUNT TYPE */}
            <div className="space-y-2">
                <p className="text-xs text-[#5A6272] font-semibold">
                  Type de compte
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {options.map((opt) => {
                    const isActive = selected === opt.id;

                    return (
                      <label
                        key={opt.id}
                        className={`cursor-pointer border rounded-xl p-4 flex justify-between transition
                        ${
                          isActive
                            ? "border-[#0988B133] border-2 bg-[#E0F7FA]"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        {/* hidden radio */}
                        <input
                          type="radio"
                          name="accountType"
                          value={opt.id}
                          checked={isActive}
                          onChange={() => setSelected(opt.id)}
                          className="hidden"
                        />

                        {/* LEFT */}
                        <div className="flex flex-col  gap-3">
                          <div
                            className={`w-10 h-10 flex items-center justify-center rounded-lg text-lg
                            ${
                              isActive
                                ? "bg-[#00BCD426] text-cyan-600"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {opt.icon}
                          </div>

                          <div>
                            <p
                              className={`text-[16px] font-bold ${
                                isActive ? "text-[#0988B1]" : "text-[#1A1A2E]"
                              }`}
                            >
                              {opt.label}
                            </p>
                            <p className="text-[11px] text-[#9AA3B0]">
                              {opt.desc}
                            </p>
                          </div>
                        </div>

                        {/* RIGHT DOT */}
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mt-3
                          ${
                            isActive
                              ? "border-cyan-500"
                              : "border-gray-300"
                          }`}
                        >
                          {isActive && (
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            <div>
              
            </div>

            {/* BUTTON */}
            <div className="flex justify-end">
              <button className="bg-[#68E0F8] hover:bg-cyan-600 text-sm text-[#002D3F] font-bold px-[30px] py-3 rounded-[15px]">
                Sauvegarder les modifications
              </button>
            </div>
          </div>
        </div>

        {/* DOCUMENTS */}
        <div className="bg-white rounded-2xl shadow p-5 space-y-[15px]">
          
          <div className="space-y-1.5">
            <h3 className="font-semibold text-[#1A1A2E] text-[16px]">Mes documents</h3>
            <p className="text-[#9AA3B0] text-[13px]">0 document(s) importé(s)</p>
          </div>

          <div className="bg-[#F8FAFC] border-2 border-dashed border-[#B2EBF2] rounded-xl p-10 flex flex-col items-center space-y-2.5 text-center text-gray-500">
            <input type="file" className="hidden" />
            <div className="bg-[#E0F7FA] w-11 h-11 rounded-full flex justify-center items-center">
              <Download className="text-[#00BCD4]" />
            </div>
             <div className="space-y-[2px]">
              <h1 className="text-[#1A1A2E] text-sm font-semibold">Glissez-déposez un fichier ici</h1>
              <p className="text-xs text-[#9AA3B0]">ou cliquez pour parcourir (PDF, JPG, PNG - max 5 Mo)</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}