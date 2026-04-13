import { useState, useRef } from "react"
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

const OPERATEURS = ["MTN Bénin", "Moov Africa Bénin", "Celtiis Bénin", "Orange Bénin"]

const DemandeReversement = () => {
    const navigate = useNavigate()
    const [montant, setMontant] = useState("")
    const [toutReverser, setToutReverser] = useState(false)
    const [motif, setMotif] = useState("")
    const [selectedMoyen, setSelectedMoyen] = useState("mtn")
    const [showModal, setShowModal] = useState(false)
    const [modalStep, setModalStep] = useState<"moyens" | "form" | "otp" | "banque">("moyens")
    const [bankNom, setBankNom] = useState("")
    const [bankTitulaire, setBankTitulaire] = useState("")
    const [bankIban, setBankIban] = useState("")
    const [bankSwift, setBankSwift] = useState("")
    const [bankPays, setBankPays] = useState("")
    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const otpRefs = useRef<(HTMLInputElement | null)[]>([])
    const [selectedOperateur, setSelectedOperateur] = useState<typeof MOBILE_MONEY[0] | null>(null)
    const [phone, setPhone] = useState("")
    const [titulaire, setTitulaire] = useState("")
    const [operateurGSM, setOperateurGSM] = useState("MTN Bénin")
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
                            onClick={() => { setModalStep("moyens"); setShowModal(true) }}
                            className="flex items-center justify-center border border-dashed border-[#D5DAE0] rounded-xl px-5 min-w-[60px] hover:border-[#8296A3] transition"
                        >
                            <Plus className="w-5 h-5 text-[#8296A3]" />
                        </button>
                    </div>
                </div>

                {/* Modal unifié : moyens → form → otp */}
                <AnimatePresence>
                    {showModal && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/40 z-50"
                                onClick={() => { setShowModal(false); setModalStep("moyens") }}
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
                                        <h2 className="text-[13px] font-bold tracking-widest uppercase text-[#0D1F2D]">
                                            {modalStep === "moyens" && "Moyen de reversement"}
                                            {modalStep === "form" && "Informations du compte"}
                                            {modalStep === "otp" && "Vérification du numéro"}
                                            {modalStep === "banque" && "Informations du compte"}
                                        </h2>
                                        <button
                                            onClick={() => { setShowModal(false); setModalStep("moyens") }}
                                            className="w-9 h-9 rounded-full bg-[#F3F5F7] flex items-center justify-center hover:bg-[#E5E7EB] transition"
                                        >
                                            <X className="w-4 h-4 text-[#495460]" />
                                        </button>
                                    </div>

                                    {/* Étape 1 : choix du moyen */}
                                    {modalStep === "moyens" && (
                                        <div className="px-6 pb-6 space-y-6">
                                            <div>
                                                <p className="text-[13px] font-bold text-[#0E0E18] mb-3">Reversement par Mobile Money</p>
                                                <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden">
                                                    {MOBILE_MONEY.map((m, i) => (
                                                        <button
                                                            key={m.id}
                                                            onClick={() => {
                                                                setSelectedOperateur(m)
                                                                setOperateurGSM(m.label)
                                                                setModalStep("form")
                                                            }}
                                                            className={`w-full flex items-center justify-between px-4 py-3.5 hover:bg-[#F8FAFB] transition ${i < MOBILE_MONEY.length - 1 ? "border-b border-[#F0F2F5]" : ""}`}
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
                                            <div>
                                                <p className="text-[13px] font-bold text-[#0E0E18] mb-3">Reversement par Banque</p>
                                                <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden">
                                                    <button
                                                        onClick={() => setModalStep("banque")}
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
                                    )}

                                    {/* Étape 2 : informations du compte */}
                                    {modalStep === "form" && (
                                        <div className="px-6 pb-6 space-y-5">
                                            <div>
                                                <label className="text-[14px] font-semibold text-[#0E0E18] mb-2 block">Numéro de téléphone</label>
                                                <div className="flex gap-2">
                                                    <div className="flex items-center gap-1.5 bg-[#F3F5F7] rounded-xl px-3 py-3 text-[14px] text-[#0E0E18] font-semibold shrink-0">
                                                        <span>🇧🇯</span>
                                                        <span>+229</span>
                                                        <ChevronRight className="w-4 h-4 text-[#8296A3] rotate-90" />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        placeholder="+229"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        className="flex-1 bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#0E0E18] placeholder:text-[#C0CAD4] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition"
                                                    />
                                                </div>
                                                <p className="text-[12px] text-[#8296A3] mt-2 flex items-start gap-1.5">
                                                    <span className="mt-0.5 shrink-0">ⓘ</span>
                                                    Assurez-vous que ce numéro est actif et que vous y avez accès. Un code de vérification vous sera envoyé.
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-[14px] font-semibold text-[#0E0E18] mb-2 block">Nom du titulaire</label>
                                                <input
                                                    type="text"
                                                    placeholder="Sophie SAGBOHAN"
                                                    value={titulaire}
                                                    onChange={(e) => setTitulaire(e.target.value)}
                                                    className="w-full bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#0E0E18] placeholder:text-[#C0CAD4] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition"
                                                />
                                                <p className="text-[12px] text-[#8296A3] mt-2 flex items-start gap-1.5">
                                                    <span className="mt-0.5 shrink-0">ⓘ</span>
                                                    Doit correspondre exactement au nom enregistré chez l'opérateur.
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-[14px] font-semibold text-[#0E0E18] mb-2 block">Opérateur GSM</label>
                                                <div className="relative">
                                                    <select
                                                        value={operateurGSM}
                                                        onChange={(e) => setOperateurGSM(e.target.value)}
                                                        className="w-full appearance-none bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#8296A3] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition pr-10"
                                                    >
                                                        {OPERATEURS.map((op) => (
                                                            <option key={op} value={op}>{op}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8296A3] rotate-90 pointer-events-none" />
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setModalStep("otp")}
                                                className="w-full py-4 rounded-2xl bg-[#23C7ED] text-[#002D3F] font-bold text-[15px] hover:bg-[#1EB0D8] transition"
                                            >
                                                Sauvegarder
                                            </button>
                                        </div>
                                    )}

                                    {/* Étape banque : informations bancaires */}
                                    {modalStep === "banque" && (
                                        <div className="px-6 pb-6 space-y-4">
                                            {/* Nom de la banque */}
                                            <div>
                                                <label className="text-[14px] font-semibold text-[#0E0E18] mb-2 block">Nom de la banque <span className="text-[#FD8352]">*</span></label>
                                                <input
                                                    type="text"
                                                    placeholder="---"
                                                    value={bankNom}
                                                    onChange={(e) => setBankNom(e.target.value)}
                                                    className="w-full bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#0E0E18] placeholder:text-[#C0CAD4] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition"
                                                />
                                            </div>
                                            {/* Nom du titulaire */}
                                            <div>
                                                <label className="text-[14px] font-semibold text-[#0E0E18] mb-2 block">Nom du titulaire du compte <span className="text-[#FD8352]">*</span></label>
                                                <input
                                                    type="text"
                                                    placeholder="---"
                                                    value={bankTitulaire}
                                                    onChange={(e) => setBankTitulaire(e.target.value)}
                                                    className="w-full bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#0E0E18] placeholder:text-[#C0CAD4] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition"
                                                />
                                            </div>
                                            {/* IBAN */}
                                            <div>
                                                <label className="text-[14px] font-semibold text-[#0E0E18] mb-2 block">Numéro de compte / IBAN <span className="text-[#FD8352]">*</span></label>
                                                <input
                                                    type="text"
                                                    placeholder="---"
                                                    value={bankIban}
                                                    onChange={(e) => setBankIban(e.target.value)}
                                                    className="w-full bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#0E0E18] placeholder:text-[#C0CAD4] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition"
                                                />
                                                <p className="text-[12px] text-[#23C7ED] mt-1">Disponible sur votre RIB ou dans votre application bancaire.</p>
                                            </div>
                                            {/* SWIFT + Pays */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="text-[14px] font-semibold text-[#0E0E18] mb-2 block">Code SWIFT / BIC <span className="text-[#8296A3] font-normal text-[13px]">(optionnel)</span></label>
                                                    <input
                                                        type="text"
                                                        placeholder="---"
                                                        value={bankSwift}
                                                        onChange={(e) => setBankSwift(e.target.value)}
                                                        className="w-full bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#0E0E18] placeholder:text-[#C0CAD4] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[14px] font-semibold text-[#0E0E18] mb-2 block">Pays</label>
                                                    <div className="relative">
                                                        <select
                                                            value={bankPays}
                                                            onChange={(e) => setBankPays(e.target.value)}
                                                            className="w-full appearance-none bg-[#F3F5F7] rounded-xl px-4 py-3 text-[14px] text-[#C0CAD4] focus:outline-none focus:ring-1 focus:ring-[#23C7ED] transition pr-10"
                                                        >
                                                            <option value="">---</option>
                                                            <option value="BJ">Bénin</option>
                                                            <option value="CI">Côte d'Ivoire</option>
                                                            <option value="SN">Sénégal</option>
                                                            <option value="TG">Togo</option>
                                                            <option value="ML">Mali</option>
                                                            <option value="BF">Burkina Faso</option>
                                                        </select>
                                                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8296A3] rotate-90 pointer-events-none" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Avertissement */}
                                            <div className="flex items-start gap-2 bg-[#FFF4EE] border border-[#FDDDD0] rounded-xl px-4 py-3">
                                                <span className="text-[#FD8352] mt-0.5 shrink-0">ⓘ</span>
                                                <p className="text-[12px] text-[#7A4020]">Les reversements vers un compte bancaire peuvent prendre <span className="font-bold">3 à 5 jours</span> ouvrés et sont soumis à des frais.</p>
                                            </div>
                                            {/* Boutons */}
                                            <div className="flex gap-3 pt-1">
                                                <button
                                                    onClick={() => setModalStep("moyens")}
                                                    className="flex-1 py-3.5 rounded-2xl border border-[#E5E7EB] bg-white text-[#0E0E18] font-semibold text-[14px] hover:bg-[#F3F5F7] transition"
                                                >
                                                    Annuler
                                                </button>
                                                <button
                                                    onClick={() => { setShowModal(false); setModalStep("moyens") }}
                                                    className="flex-1 py-3.5 rounded-2xl bg-[#23C7ED] text-[#002D3F] font-bold text-[14px] hover:bg-[#1EB0D8] transition"
                                                >
                                                    Sauvegarder
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Étape 3 : OTP */}
                                    {modalStep === "otp" && (
                                        <>
                                            <div className="px-6 pb-0 flex flex-col items-center text-center">
                                                <p className="text-[14px] text-[#0E0E18] mb-6">
                                                    Entrez le code envoyé au <span className="font-semibold">+229 0191*****</span> par SMS.
                                                </p>
                                                <div className="flex gap-3 mb-6">
                                                    {otp.map((digit, i) => (
                                                        <input
                                                            key={i}
                                                            ref={(el) => { otpRefs.current[i] = el }}
                                                            type="text"
                                                            inputMode="numeric"
                                                            maxLength={1}
                                                            value={digit}
                                                            onChange={(e) => {
                                                                const val = e.target.value.replace(/\D/, "")
                                                                const next = [...otp]
                                                                next[i] = val
                                                                setOtp(next)
                                                                if (val && i < 5) otpRefs.current[i + 1]?.focus()
                                                            }}
                                                            onKeyDown={(e) => {
                                                                if (e.key === "Backspace" && !otp[i] && i > 0) {
                                                                    otpRefs.current[i - 1]?.focus()
                                                                }
                                                            }}
                                                            className="w-12 h-14 rounded-2xl bg-[#F3F5F7] text-center text-[20px] font-semibold text-[#0E0E18] focus:outline-none focus:ring-2 focus:ring-[#23C7ED] transition placeholder:text-[#C0CAD4]"
                                                            placeholder="-"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-[13px] text-[#8296A3] mb-1">Ce code est valable pour 10 minutes.</p>
                                                <button className="text-[13px] text-[#1A6EBD] underline mb-6">
                                                    Vous n'avez pas reçu de code ?
                                                </button>
                                            </div>
                                            <div className="border-t border-[#F0F2F5] px-6 py-4">
                                                <button
                                                    onClick={() => {
                                                        if (selectedOperateur) setSelectedMoyen(selectedOperateur.id)
                                                        setShowModal(false)
                                                        setModalStep("moyens")
                                                        setOtp(["", "", "", "", "", ""])
                                                    }}
                                                    className="w-full py-4 rounded-2xl bg-[#23C7ED] text-[#002D3F] font-bold text-[15px] hover:bg-[#1EB0D8] transition"
                                                >
                                                    Valider le numéro
                                                </button>
                                            </div>
                                        </>
                                    )}
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
