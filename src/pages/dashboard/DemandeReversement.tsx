import { useState } from "react"
import { useNavigate } from "react-router"
import { AnimatePresence, motion } from "framer-motion"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import { Reply, Plus, ChevronRight, X, Landmark } from "lucide-react"
import mtnIcon from "../../assets/home/payment/mtn.png"
import moovIcon from "../../assets/home/payment/moov.png"
import ecoIcon from "../../assets/home/payment/eco.png"
import orangeIcon from "../../assets/home/payment/orange.png"
import walletIcon from "../../assets/walletIcon.svg"

function formatAmount(n: number): string {
    return n.toLocaleString("fr-FR")
}

const MOYENS = [
    { id: "mtn", label: "MTN Momo", phone: "229 0191739280", icon: mtnIcon },
    { id: "moov", label: "Moov Money", phone: "229 0191739280", icon: moovIcon },
    { id: "ecobank", label: "Ecobank", phone: "229 0191739280", icon: ecoIcon },
]

const MOBILE_MONEY = [
    { id: "mtn", label: "MTN Mobile money", icon: mtnIcon },
    { id: "moov", label: "Moov Money", icon: moovIcon },
    { id: "celtiis", label: "Celtiis Cash", icon: ecoIcon },
    { id: "orange", label: "Orange Money", icon: orangeIcon },
]

const DemandeReversement = () => {
    const navigate = useNavigate()
    const [montant, setMontant] = useState("")
    const [toutReverser, setToutReverser] = useState(false)
    const [motif, setMotif] = useState("")
    const [selectedMoyen, setSelectedMoyen] = useState("mtn")
    const [showMoyenModal, setShowMoyenModal] = useState(false)
    const solde = 2470

    return (
        <DashboardLayout title="Demande de reversement">
            <div className="max-w-2xl mx-auto py-4">
                {/* Back button */}
                <button onClick={() => navigate("/dashboard/reversements")} className="mb-4 block">
                    <Reply className="w-6 h-6 text-[#495460]" />
                </button>

                {/* Title */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-[#0E0E18]">Demande de reversement</h1>
                    <p className="text-[13px] text-[#8296A3] mt-1">Les fonds seront transférés vers votre moyen de paiement enregistré.</p>
                </div>

                {/* Solde banner */}
                <div className="flex items-center justify-between bg-[#F0FFF4] border border-[#C6F6D5] rounded-xl px-5 py-3 mb-6">
                    <div className="flex items-center gap-2">
                        <img src={walletIcon} alt="" className="w-5 h-5" />
                        <span className="text-[14px] font-semibold text-[#0E0E18]">Solde disponible</span>
                        <span className="text-[14px] font-bold text-[#0E0E18]">{formatAmount(solde)} €</span>
                    </div>
                    <span className="text-[13px] text-[#495460] bg-white border border-[#E5E7EB] rounded-full px-3 py-1">Délai moyen : 24 à 72 h</span>
                </div>

                {/* Form section 1: Montant + Motif */}
                <div className="border border-[#E5E7EB] rounded-2xl p-6 mb-4">
                    {/* Montant */}
                    <div className="mb-5">
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-[14px] font-semibold text-[#0E0E18]">
                                Montant <span className="font-normal text-[#8296A3]">(Minimum 100€)</span>
                            </label>
                            <label className="flex items-center gap-2 text-[13px] text-[#495460] cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={toutReverser}
                                    onChange={(e) => {
                                        setToutReverser(e.target.checked)
                                        if (e.target.checked) setMontant(String(solde))
                                    }}
                                    className="w-4 h-4 rounded border-[#D5DAE0] accent-[#23C7ED]"
                                />
                                Tout reverser
                            </label>
                        </div>
                        <input
                            type="text"
                            placeholder="----"
                            value={toutReverser ? formatAmount(solde) : montant}
                            onChange={(e) => { if (!toutReverser) setMontant(e.target.value) }}
                            className="w-full bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#0E0E18] placeholder:text-[#8296A3] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition"
                        />
                    </div>

                    {/* Motif */}
                    <div>
                        <label className="text-[14px] font-semibold text-[#0E0E18] mb-2 block">
                            Motif du reversement <span className="font-normal text-[#8296A3]">(Facultatif)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="----"
                            value={motif}
                            onChange={(e) => setMotif(e.target.value)}
                            className="w-full bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#0E0E18] placeholder:text-[#8296A3] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition"
                        />
                        <p className="text-[12px] text-[#8296A3] mt-2 italic">Visible uniquement par vous, pour votre suivi personnel.</p>
                    </div>
                </div>

                {/* Form section 2: Moyen de reversement */}
                <div className="border border-[#E5E7EB] rounded-2xl p-6 mb-8">
                    <p className="text-[14px] font-semibold text-[#0E0E18] mb-4">Moyen de reversement</p>
                    <div className="flex items-stretch gap-3 flex-wrap">
                        {MOYENS.map((m) => (
                            <button
                                key={m.id}
                                onClick={() => setSelectedMoyen(m.id)}
                                className={`flex flex-col items-start gap-1 border rounded-xl px-4 py-3 min-w-[140px] transition ${
                                    selectedMoyen === m.id
                                        ? "border-[#FD8352] bg-white shadow-sm"
                                        : "border-[#E5E7EB] bg-white hover:border-[#CDD5DC]"
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    {m.icon ? (
                                        <img src={m.icon} alt={m.label} className="w-6 h-6 rounded-lg object-cover" />
                                    ) : (
                                        <div className="w-6 h-6 rounded-full bg-[#0277BD] flex items-center justify-center">
                                            <span className="text-[8px] font-bold text-white">ECO</span>
                                        </div>
                                    )}
                                    <span className="text-[13px] font-semibold text-[#0E0E18]">{m.label}</span>
                                </div>
                                <span className="text-[12px] text-[#8296A3]">{m.phone}</span>
                            </button>
                        ))}
                        {/* Add button */}
                        <button
                            onClick={() => setShowMoyenModal(true)}
                            className="flex items-center justify-center border border-dashed border-[#D5DAE0] rounded-xl px-5 min-w-[60px] hover:border-[#8296A3] transition"
                        >
                            <Plus className="w-5 h-5 text-[#8296A3]" />
                        </button>
                    </div>
                </div>

                {/* Modal: Moyen de reversement */}
                <AnimatePresence>
                    {showMoyenModal && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/40 z-50"
                                onClick={() => setShowMoyenModal(false)}
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 30, stiffness: 350 }}
                                className="fixed inset-0 z-50 flex items-center justify-center px-4"
                            >
                                <div className="bg-white rounded-3xl w-full max-w-[520px] overflow-hidden shadow-2xl">
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-6 pt-6 pb-4">
                                        <h2 className="text-[13px] font-bold tracking-widest uppercase text-[#0D1F2D]">Moyen de reversement</h2>
                                        <button
                                            onClick={() => setShowMoyenModal(false)}
                                            className="w-9 h-9 rounded-full bg-[#F3F5F7] flex items-center justify-center hover:bg-[#E5E7EB] transition"
                                        >
                                            <X className="w-4 h-4 text-[#495460]" />
                                        </button>
                                    </div>

                                    <div className="px-6 pb-6 space-y-6">
                                        {/* Mobile Money */}
                                        <div>
                                            <p className="text-[13px] font-bold text-[#0E0E18] mb-3">Reversement par Mobile Money</p>
                                            <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden">
                                                {MOBILE_MONEY.map((m, i) => (
                                                    <button
                                                        key={m.id}
                                                        onClick={() => { setSelectedMoyen(m.id); setShowMoyenModal(false) }}
                                                        className={`w-full flex items-center justify-between px-4 py-3.5 hover:bg-[#F8FAFB] transition ${
                                                            i < MOBILE_MONEY.length - 1 ? "border-b border-[#F0F2F5]" : ""
                                                        }`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <img src={m.icon} alt={m.label} className="w-10 h-10 rounded-xl object-cover" />
                                                            <span className="text-[15px] font-semibold text-[#0E0E18]">{m.label}</span>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-[#8296A3]" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Banque */}
                                        <div>
                                            <p className="text-[13px] font-bold text-[#0E0E18] mb-3">Reversement par Banque</p>
                                            <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden">
                                                <button
                                                    onClick={() => setShowMoyenModal(false)}
                                                    className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-[#F8FAFB] transition"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] flex items-center justify-center">
                                                            <Landmark className="w-5 h-5 text-[#1A6EBD]" />
                                                        </div>
                                                        <span className="text-[15px] font-semibold text-[#0E0E18]">Configurer un compte</span>
                                                    </div>
                                                    <ChevronRight className="w-5 h-5 text-[#8296A3]" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Bottom buttons */}
                <div className="flex items-center justify-center gap-3">
                    <button
                        onClick={() => navigate("/dashboard/reversements")}
                        className="px-8 py-3 rounded-full border border-[#E5E7EB] bg-white text-[#0E0E18] font-semibold text-sm hover:bg-[#F3F5F7] transition"
                    >
                        Annuler
                    </button>
                    <button className="px-8 py-3 rounded-full bg-[#23C7ED] text-[#002D3F] font-bold text-sm hover:bg-[#1EB0D8] transition">
                        Envoyer la demande
                    </button>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default DemandeReversement
