import { useState, useRef, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import { useGetPotByIdQuery, useUpdatePotMutation, useTagsQuery, useUploadFilesMutation, type PotState } from "../../features/pot/mutations"
import moneyIcon from "../../assets/money.svg"
import finance from "../../assets/finance.svg"
import lightbulb from "../../assets/light-bulb.svg"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {
    Clock,
    Copy,
    Loader2,
    ChevronDown,
    HelpCircle,
    Reply,
    X,
    Trash2,
    ImagePlus,
    Info,
    MessageSquare,
} from "lucide-react"
import { IoIosShareAlt } from "react-icons/io";
import { MdInsertLink } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6"
import { BsFillChatTextFill } from "react-icons/bs";




const STATE_CONFIG: Record<PotState, { label: string; textColor: string; bgColor: string; dotColor: string }> = {
    IN_PROGRESS: { label: "En cours", textColor: "text-[#FD8352]", bgColor: "bg-[#FFF4EE]", dotColor: "bg-[#FD8352]" },
    COMPLETED: { label: "Terminée", textColor: "text-[#34C759]", bgColor: "bg-[#EAFBEF]", dotColor: "bg-[#34C759]" },
    PENDING: { label: "Brouillon", textColor: "text-[#8296A3]", bgColor: "bg-[#F3F5F7]", dotColor: "bg-[#8296A3]" },
    PAUSED: { label: "En pause", textColor: "text-[#FF9500]", bgColor: "bg-[#FFF8EE]", dotColor: "bg-[#FF9500]" },
    STOPPED: { label: "Arrêtée", textColor: "text-[#FF3B30]", bgColor: "bg-[#FFF0EF]", dotColor: "bg-[#FF3B30]" },
}

const CagnotteDetail = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState<"activite" | "parametres">("activite")
    const [paramSection, setParamSection] = useState<"generales" | "communication">("generales")
    const [copied, setCopied] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [showTipsModal, setShowTipsModal] = useState(false)

    // Paramètres form state
    const [editTitle, setEditTitle] = useState("")
    const [editDescription, setEditDescription] = useState("")
    const [editFinancialObject, setEditFinancialObject] = useState("")
    const [editStartDate, setEditStartDate] = useState<Date | null>(null)
    const [editEndDate, setEditEndDate] = useState<Date | null>(null)
    const [editTags, setEditTags] = useState<string[]>([])
    const [editImages, setEditImages] = useState<string[]>([])
    const [editImagePreviews, setEditImagePreviews] = useState<string[]>([])
    const [saveError, setSaveError] = useState("")
    const [saveSuccess, setSaveSuccess] = useState(false)
    const [tagsOpen, setTagsOpen] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const updateMutation = useUpdatePotMutation()
    const { data: tagsData } = useTagsQuery()
    const uploadMutation = useUploadFilesMutation()
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const { data: pot, isLoading, isError } = useGetPotByIdQuery(id ?? "")

    // Init form fields when pot loads
    useEffect(() => {
        if (!pot) return
        setEditTitle(pot.title || "")
        setEditDescription(pot.description || "")
        setEditFinancialObject(String(pot.financialObject || ""))
        setEditStartDate(pot.startDate ? new Date(pot.startDate) : null)
        setEditEndDate(pot.endDate ? new Date(pot.endDate) : null)
        setEditTags((pot.tags || []).map((t) => t.id))
        setEditImages(pot.images || [])
        setEditImagePreviews(pot.images || [])
    }, [pot])

    const handleCopy = () => {
        const url = shareUrl
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    if (isLoading) {
        return (
            <DashboardLayout title="Chargement...">
                <div className="flex items-center justify-center py-32">
                    <Loader2 className="w-10 h-10 text-[#23C7ED] animate-spin" />
                </div>
            </DashboardLayout>
        )
    }

    if (isError || !pot) {
        return (
            <DashboardLayout title="Erreur">
                <div className="text-center py-24">
                    <p className="text-[#8296A3] mb-4">Impossible de charger cette cagnotte.</p>
                    <button
                        onClick={() => navigate("/dashboard/cagnottes")}
                        className="text-[#23C7ED] font-semibold underline"
                    >
                        Retour à mes cagnottes
                    </button>
                </div>
            </DashboardLayout>
        )
    }

    const cfg = STATE_CONFIG[pot.state]
    const collected = Number(pot.realAmount ?? pot.collectedAmount ?? 0)
    const target = Number(pot.financialObject ?? 0)
    const percent = target > 0 ? Math.min(Math.round((collected / target) * 100), 100) : 0
    const currency = pot.currency || "XOF"
    const coverImage = pot.images?.[0]
    const contributors = pot.contributorsCount || 0
    const donations = pot.donationsCount || 0
    const ref = (pot.ref as string) || pot.id.slice(0, 8).toUpperCase()
    const slug = (pot.slug as string) || pot.id
    const shareUrl = `izicagn.com/cagnotte/${slug}`

    // Jours restants
    let daysLeft: number | null = null
    let endDateFormatted = ""
    if (pot.endDate) {
        const end = new Date(pot.endDate)
        endDateFormatted = end.toLocaleDateString("fr-FR")
        const now = new Date()
        const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
        daysLeft = diff > 0 ? diff : 0
    }

    return (
        <DashboardLayout title={`Cagnotte #${ref}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div className="flex items-center gap-2 flex-wrap">
                    <button
                        onClick={() => navigate("/dashboard/cagnottes")}
                        className="flex items-center gap-1 text-sm text-[#8D8A95] font-semibold transition"
                    >
                        <Reply className="w-5 h-5 text-gray-600" />
                        Mes cagnottes
                    </button>

                    <span className="text-[#D9DFE7]">&gt;</span>
                    <span className="text-sm font-semibold text-[#8D8A95]">#{ref}</span>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md ${cfg.bgColor} ${cfg.textColor}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor}`} />
                        {cfg.label}
                    </span>
                </div>
                <div className="relative self-start sm:self-auto" ref={menuRef}>
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="flex items-center gap-1.5 text-sm font-semibold text-[#0E405D] border border-[#D9DFE7] rounded-xl px-4 py-2.5 hover:bg-[#F3F5F7] transition"
                    >
                        Gérer la cagnotte <ChevronDown className={`w-4 h-4 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-[#F0F2F5] rounded-2xl shadow-xl z-50 py-3 px-2 flex flex-col gap-1">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-full text-left px-4 py-3 text-sm font-semibold text-[#0E0E18] hover:bg-[#F3F5F7] rounded-xl transition"
                            >
                                Reverser les fonds
                            </button>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-full text-left px-4 py-3 text-sm font-semibold text-[#0E0E18] hover:bg-[#F3F5F7] rounded-xl transition"
                            >
                                Suspendre la cagnotte
                            </button>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-[#E53E3E] hover:bg-[#FFF0F0] rounded-xl transition"
                            >
                                <Trash2 className="w-4 h-4" />
                                Fermer la cagnotte
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center mb-6">
                {(["activite", "parametres"] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex flex-col items-start pb-3 mr-8 gap-1.5 text-sm font-semibold transition ${
                            activeTab === tab ? "text-[#0E405D]" : "text-[#C5C8D0] hover:text-[#0E405D]"
                        }`}
                    >
                        {tab === "activite" ? "Activité" : "Paramètres"}
                        <span className={`h-1 rounded-full transition-all ${activeTab === tab ? "w-8 bg-[#FD8352]" : "w-0 bg-transparent"}`} />
                    </button>
                ))}
            </div>

            {activeTab === "activite" && (
                <div className="space-y-4">
                    {/* Infos principales */}
                    <div className="flex flex-col md:flex-row gap-5">
                        {/* Cover image */}
                        <div className="w-full md:w-[260px] shrink-0 rounded-2xl overflow-hidden bg-[#F0F2F5] aspect-[4/3]">
                            {coverImage ? (
                                <img src={coverImage} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-linear-to-br from-[#E9F9FF] to-[#D0F0FF]" />
                            )}
                        </div>

                        {/* Info card */}
                        <div className="flex-1 bg-[#C1DFE7] rounded-2xl p-5 flex flex-col gap-4">
                            <div>
                                <p className="text-xs text-[#8296A3] font-medium mb-1">Titre de la cagnotte</p>
                                <h2 className="text-xl font-bold text-[#032F3F]">{pot.title}</h2>
                            </div>

                            {/* Montant card */}
                            <div className="bg-white rounded-xl p-4 flex flex-col gap-3">
                                <div className="flex items-start gap-3">
                                    <img src={moneyIcon} alt="" className="w-10 h-10 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-[#8296A3] font-semibold">Montant collecté</p>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                            <div className="flex items-baseline gap-0.5">
                                                <span className="text-[22px] font-bold text-[#FD8352]">{collected.toLocaleString()}</span>
                                                <span className="text-[22px] font-bold text-[#FD8352]">/{target.toLocaleString()}{currency}</span>
                                            </div>
                                            <span className="text-xs font-semibold text-[#032F3F] bg-[#F5F8FB] px-2 py-0.5 rounded-md">
                                                {percent}% de l'objectif
                                            </span>
                                            <div className="flex items-center gap-4 ml-auto text-sm">
                                                <span className="text-[#8296A3]">Dons reçus : <strong className="text-[#0E405D]">{donations}</strong></span>
                                                <span className="text-[#8296A3]">Donateurs : <strong className="text-[#0E405D]">{contributors}</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Progress bar */}
                                <div className="w-full h-2.5 bg-[#F0F2F5] rounded-full">
                                    <div
                                        className="h-2.5 bg-[#FD8352] rounded-full transition-all"
                                        style={{ width: `${percent}%` }}
                                    />
                                </div>
                                {daysLeft !== null && (
                                    <div className="flex items-center gap-1.5 text-xs text-[#8296A3]">
                                        <Clock className="w-3.5 h-3.5 shrink-0" />
                                        <span>
                                            Clôture dans{" "}
                                            <span className="text-[#23C7ED] font-semibold">{daysLeft}jours ({endDateFormatted})</span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Partager */}
                    <div className="bg-white border border-[#F0F2F5] rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                            <div className="w-10 h-10 rounded-full bg-[#FFF4EE] flex items-center justify-center shrink-0">
                                <img src={lightbulb} alt="" className="rounded-full"/>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#0E405D]">Partager la cagnotte</p>
                                <p className="text-xs text-[#8296A3] mt-0.5 leading-relaxed">Les cagnottes partagées régulièrement reçoivent 2× plus de dons.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 flex-wrap">
                            <div className="flex items-center gap-1.5 bg-[#F3F5F7] rounded-md px-3 py-1.5 text-xs text-[#0E405D] font-medium">
                                <MdInsertLink className=" text-white bg-black h-5 w-5 p-1 rounded-full" />
                                <span className="truncate max-w-[250px]">{shareUrl}</span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-1.5 text-xs font-semibold text-[#0E405D] border border-[#D9DFE7] rounded-md px-3 py-1.5 hover:bg-[#F3F5F7] transition"
                            >
                                <Copy className="w-3.5 h-3.5" />
                                {copied ? "Copié !" : "Copier"}
                            </button>
                            <button className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0E405D] rounded-md px-3 py-1.5 hover:bg-[#0c3650] transition">
                                Partager <IoIosShareAlt className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>

                    {/* Contributions vides */}
                    {donations === 0 && (
                        <div className="bg-[#FAFBFC] border border-[#F0F2F5] rounded-2xl flex flex-col items-center justify-center py-16 px-6 text-center">
                            <div className=" mb-6">
                                <img src={finance}   alt="" />
                            </div>
                            <p className="text-sm text-[#1E2224] mb-4">Votre cagnotte n'a pas encore<br />reçu de contribution.</p>
                            <button onClick={() => setShowTipsModal(true)} className="flex items-center gap-1.5 bg-[#1E222414] underline text-xs font-semibold text-[#1E2224]  rounded-full px-4 py-2  transition">
                                <HelpCircle className="w-3.5 h-3.5" />
                                Comment obtenir des dons ?
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Modal : comment obtenir des dons */}
            {showTipsModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowTipsModal(false)}>
                    <div
                        className="bg-white rounded-3xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between p-6 pb-4">
                            <h2 className="text-xl font-bold text-[#0E0E18] pr-4">Comment obtenir des dons pour ma cagnottes ?</h2>
                            <button
                                onClick={() => setShowTipsModal(false)}
                                className="w-9 h-9 rounded-full bg-[#F3F5F7] flex items-center justify-center shrink-0 hover:bg-[#E5E7EB] transition"
                            >
                                <X className="w-4 h-4 text-[#495460]" />
                            </button>
                        </div>
                        <div className="px-6 pb-8 space-y-6 text-sm text-[#495460]">
                            <div>
                                <p className="font-bold text-[#0E0E18] mb-2">Astuce 1</p>
                                <p>Partagez votre cagnotte sur vos réseaux sociaux (WhatsApp, Facebook, Instagram…). Plus vous partagez, plus vous augmentez vos chances de recevoir des dons rapidement.</p>
                            </div>
                            <div>
                                <p className="font-bold text-[#0E0E18] mb-2">Astuce 2</p>
                                <p>Rédigez une description claire et touchante. Expliquez votre besoin, votre histoire et comment les dons seront utilisés. Les donateurs sont plus enclins à contribuer quand ils comprennent l'impact de leur geste.</p>
                            </div>
                            <div>
                                <p className="font-bold text-[#0E0E18] mb-2">Astuce 3</p>
                                <p>Ajoutez des photos de qualité à votre cagnotte. Une image parlante renforce la crédibilité et l'émotion de votre collecte.</p>
                            </div>
                            <div>
                                <p className="font-bold text-[#0E0E18] mb-2">Astuce 4</p>
                                <p>Tenez vos donateurs informés en publiant des mises à jour régulières sur l'avancement de votre collecte. Cela inspire confiance et encourage de nouvelles contributions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "parametres" && (
                <div className="flex gap-6 items-start">
                    {/* Sidebar */}
                    <div className="w-44 shrink-0 rounded-2xl bg-[#110C220D] border border-[#F0F2F5] py-3 px-2 flex flex-col gap-1">
                        <button
                            onClick={() => setParamSection("generales")}
                            className={`flex items-center gap-2 w-full px-3 py-2.5 text-sm font-semibold rounded-xl transition ${paramSection === "generales" ? "bg-white text-[#0E405D] shadow-[0_2px_4px_-2px_rgba(17,12,34,0.12)]" : "text-[#8296A3] hover:bg-[#F3F5F7]"}`}
                        >
                            <FaCircleInfo className="w-4 h-4 shrink-0" /> Générales
                        </button>
                        <button
                            onClick={() => setParamSection("communication")}
                            className={`flex items-center gap-2 w-full px-3 py-2.5 text-sm font-semibold rounded-xl transition ${paramSection === "communication" ? "bg-white text-[#0E405D] shadow-[0_2px_4px_-2px_rgba(17,12,34,0.12)]" : "text-[#8296A3] hover:bg-[#F3F5F7]"}`}
                        >
                            <BsFillChatTextFill className="w-4 h-4 shrink-0" /> Communication
                        </button>
                    </div>

                    {/* Content */}
                    {paramSection === "generales" && (
                        <div className="flex-1 bg-white rounded-2xl border border-[#F0F2F5] shadow-[0_2px_4px_-2px_rgba(17,12,34,0.12)] ">
                            <h3 className="text-lg font-bold text-[] uppercase p-6 ">Informations générales</h3>
                            <div className="space-y-5 border-t-2 border-[#110C2214] p-5">
                                {/* Titre */}
                                <div className="flex items-start gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18] pt-2">Titre de la cagnotte</label>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="flex-1 border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#0E0E18] focus:outline-none focus:border-[#23C7ED]"
                                    />
                                </div>
                                {/* Description */}
                                <div className="flex items-start gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18] pt-2">Description</label>
                                    <textarea
                                        rows={5}
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        className="flex-1 border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#0E0E18] focus:outline-none focus:border-[#23C7ED] resize-y"
                                    />
                                </div>
                                {/* Montant */}
                                <div className="flex items-center gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18]">Montant visé</label>
                                    <input
                                        type="number"
                                        value={editFinancialObject}
                                        onChange={(e) => setEditFinancialObject(e.target.value)}
                                        className="w-48 border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#0E0E18] focus:outline-none focus:border-[#23C7ED]"
                                    />
                                </div>
                                {/* Date début */}
                                <div className="flex items-center gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18]">Date de début</label>
                                    <DatePicker
                                        selected={editStartDate}
                                        onChange={(d) => setEditStartDate(d)}
                                        dateFormat="dd/MM/yyyy"
                                        className="w-48 border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#0E0E18] focus:outline-none focus:border-[#23C7ED]"
                                    />
                                </div>
                                {/* Date fin */}
                                <div className="flex items-center gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18]">Date de fin</label>
                                    <DatePicker
                                        selected={editEndDate}
                                        onChange={(d) => setEditEndDate(d)}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={editStartDate ?? undefined}
                                        className="w-48 border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#0E0E18] focus:outline-none focus:border-[#23C7ED]"
                                    />
                                </div>
                                {/* Bénéficiaire */}
                                <div className="flex items-center gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18]">Bénéficiaire</label>
                                    <input
                                        type="text"
                                        readOnly
                                        value={pot.person ? `${pot.person.firstName} ${pot.person.lastName} (Vous-même)` : "Vous-même"}
                                        className="flex-1 border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#0E0E18] bg-[#FAFBFC] focus:outline-none"
                                    />
                                </div>
                                {/* Objectifs / Tags */}
                                <div className="flex items-start gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18] pt-2">Objectifs</label>
                                    <div className="flex-1 relative">
                                        <div
                                            className="flex items-center flex-wrap gap-2 min-h-[44px] border border-[#E5E7EB] rounded-xl px-4 py-2 cursor-pointer"
                                            onClick={() => setTagsOpen((v) => !v)}
                                        >
                                            {editTags.length === 0 && <span className="text-sm text-[#8296A3]">Sélectionner des objectifs</span>}
                                            {(tagsData?.data || []).filter((t) => editTags.includes(t.id)).map((t) => (
                                                <span key={t.id} className="bg-[#E9F9FF] text-[#07AED8] text-xs font-semibold px-3 py-1 rounded-full">{t.name}</span>
                                            ))}
                                            <ChevronDown className={`w-4 h-4 text-[#8296A3] ml-auto transition-transform ${tagsOpen ? "rotate-180" : ""}`} />
                                        </div>
                                        {tagsOpen && (
                                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-20 p-3 flex flex-wrap gap-2">
                                                {(tagsData?.data || []).map((t) => (
                                                    <button
                                                        key={t.id}
                                                        onClick={() => setEditTags((prev) => prev.includes(t.id) ? prev.filter((x) => x !== t.id) : [...prev, t.id])}
                                                        className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition ${editTags.includes(t.id) ? "bg-[#23C7ED] text-white border-[#23C7ED]" : "text-[#0E0E18] border-[#E5E7EB] hover:border-[#23C7ED]"}`}
                                                    >
                                                        {t.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* Images */}
                                <div className="flex items-start gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18] pt-2">Images de présentation</label>
                                    <div className="flex-1">
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            className="hidden"
                                            onChange={async (e) => {
                                                const files = e.target.files
                                                if (!files || files.length === 0) return
                                                const formData = new FormData()
                                                Array.from(files).forEach((f) => formData.append("files", f))
                                                try {
                                                    const urls = await uploadMutation.mutateAsync(formData)
                                                    setEditImages((prev) => [...prev, ...urls])
                                                    Array.from(files).forEach((f) => {
                                                        const reader = new FileReader()
                                                        reader.onload = (ev) => {
                                                            if (ev.target?.result) setEditImagePreviews((prev) => [...prev, ev.target!.result as string])
                                                        }
                                                        reader.readAsDataURL(f)
                                                    })
                                                } catch { setSaveError("Erreur upload images.") }
                                                if (fileInputRef.current) fileInputRef.current.value = ""
                                            }}
                                        />
                                        <div className="flex flex-wrap gap-3">
                                            {editImagePreviews.map((src, i) => (
                                                <div key={i} className="relative w-24 h-20 rounded-xl overflow-hidden group">
                                                    <img src={src} alt="" className="w-full h-full object-cover" />
                                                    <button
                                                        onClick={() => { setEditImages((p) => p.filter((_, idx) => idx !== i)); setEditImagePreviews((p) => p.filter((_, idx) => idx !== i)) }}
                                                        className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                                                    >
                                                        <X className="w-3 h-3 text-white" />
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                onClick={() => fileInputRef.current?.click()}
                                                disabled={uploadMutation.isPending}
                                                className="w-24 h-20 rounded-xl border-2 border-dashed border-[#D9DFE7] bg-[#F3F5F7] flex items-center justify-center hover:bg-[#E9F9FF] transition disabled:opacity-50"
                                            >
                                                {uploadMutation.isPending ? <Loader2 className="w-5 h-5 text-[#23C7ED] animate-spin" /> : <ImagePlus className="w-5 h-5 text-[#8296A3]" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Actions */}
                                {saveError && <p className="text-red-500 text-sm">{saveError}</p>}
                                {saveSuccess && <p className="text-green-600 text-sm font-semibold">Modifications enregistrées !</p>}
                                <div className="flex justify-end pt-2">
                                    <button
                                        onClick={async () => {
                                            if (!editStartDate || !editEndDate) { setSaveError("Veuillez renseigner les dates."); return }
                                            setSaveError(""); setSaveSuccess(false)
                                            try {
                                                await updateMutation.mutateAsync({
                                                    id: pot.id,
                                                    reason: pot.reason,
                                                    tags: editTags,
                                                    country: pot.country || "",
                                                    city: pot.city || "",
                                                    title: editTitle,
                                                    description: editDescription,
                                                    startDate: editStartDate.toISOString(),
                                                    endDate: editEndDate.toISOString(),
                                                    financialObject: Number(editFinancialObject),
                                                    currency: pot.currency,
                                                    images: editImages,
                                                    contreparties: pot.contreparties || [],
                                                })
                                                setSaveSuccess(true)
                                                setTimeout(() => setSaveSuccess(false), 3000)
                                            } catch (err) {
                                                setSaveError(err instanceof Error ? err.message : "Erreur lors de la sauvegarde.")
                                            }
                                        }}
                                        disabled={updateMutation.isPending}
                                        className="bg-[#23C7ED] px-7 py-2.5 text-sm font-semibold text-white rounded-full disabled:opacity-40 hover:opacity-90 transition"
                                    >
                                        {updateMutation.isPending ? "Enregistrement..." : "Enregistrer"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {paramSection === "communication" && (
                        <div className="flex-1 bg-white rounded-2xl border border-[#F0F2F5] shadow-[0_2px_4px_-2px_rgba(17,12,34,0.12)]">
                            <h3 className="text-lg font-bold uppercase p-6">Communication</h3>
                            <div className="space-y-5 border-t-2 border-[#110C2214] p-5">
                                {/* Message de remerciement */}
                                <div className="flex items-start gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18] pt-2">Message de remerciement</label>
                                    <div className="flex-1 flex items-center gap-3 border border-[#E5E7EB] rounded-xl px-4 py-3">
                                        <MessageSquare className="w-4 h-4 text-[#23C7ED] shrink-0" />
                                        <span className="flex-1 text-sm text-[#8296A3]">Laisser un message personnalisé pour remercier votre héros après un don</span>
                                        <button
                                            type="button"
                                            className="w-10 h-6 rounded-full bg-[#E5E7EB] flex items-center shrink-0 relative transition-colors"
                                        >
                                            <span className="w-4 h-4 rounded-full bg-white shadow-sm absolute left-1 transition-all" />
                                        </button>
                                    </div>
                                </div>
                                {/* Bénéficiaire */}
                                <div className="flex items-center gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18]">Bénéficiaire</label>
                                    <input
                                        type="text"
                                        readOnly
                                        value={pot.person ? `${pot.person.firstName} ${pot.person.lastName} (Vous-même)` : "Vous-même"}
                                        className="flex-1 border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#0E0E18] bg-[#FAFBFC] focus:outline-none"
                                    />
                                </div>
                                {/* Objectifs / Tags */}
                                <div className="flex items-start gap-6">
                                    <label className="w-40 shrink-0 text-sm font-semibold text-[#0E0E18] pt-2">Objectifs</label>
                                    <div className="flex-1 relative">
                                        <div
                                            className="flex items-center flex-wrap gap-2 min-h-11 border border-[#E5E7EB] rounded-xl px-4 py-2 cursor-pointer"
                                            onClick={() => setTagsOpen((v) => !v)}
                                        >
                                            {editTags.length === 0 && <span className="text-sm text-[#8296A3]">Sélectionner des objectifs</span>}
                                            {(tagsData?.data || []).filter((t) => editTags.includes(t.id)).map((t) => (
                                                <span key={t.id} className="bg-[#E9F9FF] text-[#07AED8] text-xs font-semibold px-3 py-1 rounded-full">{t.name}</span>
                                            ))}
                                            <ChevronDown className={`w-4 h-4 text-[#8296A3] ml-auto transition-transform ${tagsOpen ? "rotate-180" : ""}`} />
                                        </div>
                                        {tagsOpen && (
                                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-20 p-3 flex flex-wrap gap-2">
                                                {(tagsData?.data || []).map((t) => (
                                                    <button
                                                        key={t.id}
                                                        onClick={() => setEditTags((prev) => prev.includes(t.id) ? prev.filter((x) => x !== t.id) : [...prev, t.id])}
                                                        className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition ${editTags.includes(t.id) ? "bg-[#23C7ED] text-white border-[#23C7ED]" : "text-[#0E0E18] border-[#E5E7EB] hover:border-[#23C7ED]"}`}
                                                    >
                                                        {t.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* Actions */}
                                <div className="flex justify-end pt-2">
                                    <button
                                        disabled
                                        className="bg-[#23C7ED] px-7 py-2.5 text-sm font-semibold text-white rounded-full opacity-40 cursor-not-allowed"
                                    >
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </DashboardLayout>
    )
}

export default CagnotteDetail
