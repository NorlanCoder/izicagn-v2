import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Illustration from "../../assets/accueil/Acceuil_Illustration.svg";
import Chat from "../../assets/accueil/Message.svg";
import Logo from "../../assets/accueil/Fav.svg";
import Edit from "../../assets/accueil/Edit.svg"
import Partage from "../../assets/accueil/Partage.svg"
import Don from "../../assets/accueil/Don.svg"
import Cagnotte from "../../assets/accueil/Cagnotte.svg"
import Nuage from "../../assets/accueil/Nuage.png"
import Etoile from "../../assets/accueil/Etoile.png"
import Astéris from "../../assets/accueil/Astéris.png"
import wallet from "../../assets/accueil/wallet.png"
import Vector from "../../assets/accueil/Vector.png"
import Etoile_blanc from "../../assets/accueil/Etoile-blanc.png"

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { useAuth } from "../../lib/AuthContext";
import { X, Send } from "lucide-react";

const options = [
  "Aujourd'hui",
  "Cette semaine",
  "Ce mois-ci",
  "Cette année",
];

const items = [
    {
        icon: Edit,
        label1: "Créez votre cagnotte",
        label2: "en 3 minutes"
    },
    {
        icon: Partage,
        label1: "Partagez avec votre réseau",
        label2: "WhatsApp, SMS, réseaux sociaux…"
    },
    {
        icon: Don,
        label1: "Recevez des dons",
        label2: "directement sur votre Mobile Money"
    }
];

const stats = [
  {
    title: "DONS CE MOIS",
    value: "12",
    sub: "+3 depuis hier",
  },
  {
    title: "MONTANT TOTAL",
    value: "222,91 €",
    sub: "4 dons ce mois",
    highlight: true,
  },
  {
    title: "CONTRIBUTEURS",
    value: "12",
    sub: "+3 depuis hier",
  },
];

const donations = [
  {
    name: "Prisca A.",
    initials: "PA",
    date: "12/11/2025, 16:31",
    amount: "10.00 €",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Don anonyme",
    initials: "--",
    date: "12/11/2025, 14:28",
    amount: "30.00 €",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Mawulé Tamegnon",
    initials: "MT",
    date: "12/11/2025, 11:09",
    amount: "42.91 €",
    color: "bg-teal-100 text-teal-600",
  },
  {
    name: "Jean Kodjo",
    initials: "JK",
    date: "12/11/2025, 11:02",
    amount: "140.00 €",
    color: "bg-purple-100 text-purple-600",
  },
];

const DashboardHome = () => {

    const [selected, setSelected] = useState("Ce mois-ci");
    const [open, setOpen] = useState(false);
    const { user } = useAuth();

    const [isopen, setIsopen] = useState(false);

    const fullName = user
    ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim()
    : "";

    return (
        <DashboardLayout title="Mon Espace">
            <div className="space-y-6">
                <div>
                    <h2 className="text-[32px] d:text-xl font-bold text-[#001829]">
                        Accueil
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4">
                    <div className="flex items-center space-x-5">
                        <img src={Illustration} alt="Illustration" />
                        <div>
                            <p className=" text-lg font-normal text-[#7D8791]">Bienvenue 👋</p>
                            <p className="text-[#001829] text-[26px] font-semibold">{fullName}</p>
                        </div>
                    </div>
                    <div className="relative inline-block">
                        {/* Bouton */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-2 px-4 py-2 border border-[#D0D7DE] rounded-full  hover:bg-gray-200 transition"
                        >
                            <span className="text-sm text-gray-700">
                            Période : {selected}
                            </span>
                            <ChevronDown size={16} />
                        </button>

                        {/* Dropdown */}
                        {open && (
                            <div className="absolute mt-2 w-full bg-white border rounded-xl shadow-md z-50">
                            {options.map((option) => (
                                <div
                                key={option}
                                onClick={() => {
                                    setSelected(option);
                                    setOpen(false);
                                }}
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded-xl"
                                >
                                {option}
                                </div>
                            ))}
                            </div>
                        )}
                    </div> 
                </div>

                <div className="flex flex-row gap-x-10">
                    <p className="text-[#024442] font-semibold uppercase text-sm">
                        COLLECTES
                    </p>
                    <p className="font-semibold uppercase text-sm text-[#B1B5B9]">
                        CONTRIBUTIONS
                    </p>
                </div>
                <div className="border-[#E6E9EC] border-[1px] rounded-[20px] px-4 py-10 lg:py-[100px] lg:px-[300px] xl:py-[127px] xl:px-[336px] flex flex-col items-center justify-center">
                    <div className=" max-w-[332px] space-y-2.5">
                        <h1 className="font-bold text-lg text-center">Lancez votre première collecte !</h1>
                        <p className="text-[#5C6F84] text-center font-normal text-[12px]">
                            En 3 minutes, votre cagnotte peut être active et prête à recevoir des dons.
                        </p>
                    </div>
                    <div>
                        <button className="mt-4 bg-[#68E0F8] py-2.5 px-[30px] rounded-[15px] font-bold text-[#002D3F] text-sm flex flex-row space-x-1.5">
                            <div className="bg-[#002D3F] rounded-full w-5 h-5 flex items-center justify-center">
                                <Plus className="text-[#68E0F8] h-[16.66666603088379px] w-[16.66666603088379px]" />
                            </div>
                            Créer une collecte
                        </button>
                    </div>
                    <div className=" relative">
                        <div className="flex items-center gap-4 mt-20">
                            <div className="flex-1 h-px bg-[#F0F4F8]"></div>

                            <p className="text-[11px] font-semibold text-[#C8D0DA] whitespace-nowrap">
                                COMMENT ÇA MARCHE ?
                            </p>

                            <div className="flex-1 h-px bg-[#F0F4F8]"></div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 gap-5 mt-10">
                            {items.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                {/* Icône */}
                                <img
                                    src={item.icon}
                                    
                                    
                                />

                                {/* Texte */}
                                <div className=" w-[161.34px] h-[33.60px]">
                                     <p className="mt-2 font-bold text-sm text-[#1A1A2E] whitespace-pre-line">
                                    {item.label1}
                                    </p>
                                    <p className="text-[#9AA3B0] text-xs mt-1">
                                        {item.label2}
                                    </p>
                                </div>
                                </div>
                            ))}
                        </div>
                        <div className="fixed bottom-40 right-6 z-50">
                            {/* Bouton */}
                            <div className="relative">
                                <button
                                onClick={() => setIsopen(!isopen)}
                                className="flex items-center gap-3 bg-[#07AED8] text-white px-2 py-2 rounded-full shadow-lg hover:bg-cyan-600 transition"
                                >
                                <span className="font-semibold text-[13px]">Besoin d'aide ?</span>

                                <div className="bg-white text-cyan-500 rounded-full p-2 animate-bounce">
                                    {/* <MessageCircle size={18} /> */}
                                    <img src={Chat} alt="" />
                                </div>
                                </button>

                                {/* Modale */}
                                {isopen && (
                                <div className="fixed bottom-24 right-5 w-[340px] h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_.3s_ease]">
          
                                    {/* Header */}
                                    <div className="bg-cyan-600 text-white p-4 flex justify-between items-start">
                                        <img src={Logo} alt="" />
                                        <div>
                                        <h3 className="font-semibold text-sm">Support izicagn</h3>
                                        <p className="text-xs opacity-90">En ligne · Répond en &lt;5 min</p>
                                        </div>
                                        <X
                                        className="cursor-pointer hover:scale-110"
                                        onClick={() => setIsopen(!isopen)}
                                        />
                                    </div>

                                    {/* Body */}
                                    <div className="flex-1 bg-gray-50 p-4">
                                        <div className="bg-white p-3 rounded-xl shadow w-[85%] text-sm">
                                        👋 Bonjour ! Comment puis-je vous aider ?
                                        </div>

                                        {/* Boutons rapides
                                        <div className="mt-4 flex flex-wrap gap-2">
                                        <QuickBtn text="Créer une cagnotte" />
                                        <QuickBtn text="Reversement" />
                                        <QuickBtn text="KYC / Vérification" />
                                        </div> */}
                                    </div>

                                    {/* Footer */}
                                    <div className="p-3 border-t flex gap-2">
                                        <input
                                        placeholder="Écrivez un message..."
                                        className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none text-sm"
                                        />
                                        <button className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center hover:scale-105">
                                        <Send size={18} />
                                        </button>
                                    </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="space-y-6">
                        <div className="bg-[#AEF4FE] rounded-[28px] py-9 px-10 flex flex-col">
                            <div className=" w-full">
                                <h1 className="font-medium text-[16px] text-[#2F6E8A] uppercase">solde disponible</h1>
                                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                    <h1 className="font-extrabold text-5xl lg:text-[52px] text-[#04242F]">30.000 €</h1>
                                    <div className="flex items-center space-x-1">
                                        <div className="flex justify-center items-center bg-white p-1.5 rounded-[20px] space-x-0.5">
                                            <img src={Cagnotte} alt="" />
                                            <p className="font-semibold text-[#234459] text-sm">02</p>
                                        </div>
                                        <p className="font-medium text-[#3B6076] text-sm">cagnottes en cours</p>
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <img src={Nuage} alt="" className="absolute right-80 bottom-2 hidden lg:block" />
                                    <img src={Etoile} alt="" className="absolute right-70 bottom-16 hidden lg:block" />
                                    <img src={Astéris} alt="" className="absolute right-60 -bottom-9 hidden lg:block" />
                                    <img src={wallet} alt="" className="absolute right-0 -bottom-9 z-10 hidden lg:block" />
                                    <img src={Vector} alt="" className="absolute -right-10 bottom-7 hidden lg:block" />
                                    <img src={Etoile_blanc} alt="" className="absolute -right-8 bottom-" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid lg:grid-cols-3 gap-4">
                                {stats.map((item, i) => (
                                    <div
                                    key={i}
                                    className="border border-[#CCE8F2] rounded-2xl p-4 bg-white shadow-2xs"
                                    >
                                    <p className="text-xs text-[#9AA3B0] font-semibold uppercase">
                                        {item.title}
                                    </p>

                                    <p
                                        className={`text-xl text-[#1A1A2E] font-bold mt-1 ${
                                        item.highlight ? "text-orange-500" : "text-[#001829]"
                                        }`}
                                    >
                                        {item.value}
                                    </p>

                                    <p className="text-xs text-[#9AA3B0] mt-1">{item.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border border-[#E6E9EC] rounded-2xl p-4 shadow-lg mb-5">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Dons récents</h2>
                                <button className="text-[13px] text-[#00BCD4] font-semibold">
                                Voir tout →
                                </button>
                            </div>

                            {/* Table */}
                            <div className="w-full overflow-x-auto">
                                <table className="w-full text-sm">
                                <thead className="bg-[#FAFAFA]">
                                    <tr className="text-left text-[#9AA3B0] text-xs font-semibold">
                                    <th className="py-3 pr-1 pl-4">
                                        <input type="checkbox" className="appearance-none w-[18px] h-[18px] border-[#110C22]/20 border-2 bg-white rounded-md checked:bg-blue-500 checked:border-[#110C22]/20" />
                                    </th>
                                    <th className="py-2 pr-6 pl-1">Donateur</th>
                                    <th className="py-2 pr-6 pl-1">Date</th>
                                    <th className="py-2 pr-6 pl-1">Montant</th>
                                    <th className="py-2 pr-6 pl-1">Date</th>
                                    </tr>
                                </thead>

                                <tbody className="space-y-10">
                                    {donations.map((item, i) => (
                                    <tr key={i} className=" last:border-none">
                                        <td className="py-3 pr-1 pl-4">
                                        <input type="checkbox" className="appearance-none w-[18px] h-[18px] border-[#110C22]/20 border-2 bg-white rounded-md checked:bg-blue-500 checked:border-[#110C22]/20" />
                                        </td>

                                        {/* Donateur */}
                                        <td>
                                        <div className="flex items-center gap-3 py-2 pr-6 pl-1">
                                            <div
                                            className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold ${item.color}`}
                                            >
                                            {item.initials}
                                            </div>
                                            {item.name}
                                        </div>
                                        </td>

                                        <td className="py-2 pr-6 pl-1">{item.date}</td>

                                        <td className="font-semibold text-[#001829] py-2 pr-6 pl-1">
                                        {item.amount}
                                        </td>

                                        <td className="py-2 pr-6 pl-1">{item.date}</td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>

                            {/* Footer */}
                            <div className="mt-4 border-t pt-4 border-[#F0F4F8] flex justify-center items-center space-x-2">
                                <ChevronDown className="w-[14px] h-[14px] text-[#5A6272]" />
                                <p className="text-sm text-[#5A6272] font-semibold">Afficher plus</p>
                            </div>
                        </div>
                    </div>
            </div>
        </DashboardLayout>
    )
}

export default DashboardHome

