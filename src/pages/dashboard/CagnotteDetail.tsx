import { useState, useRef, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import { useGetPotByIdQuery, type PotState } from "../../features/pot/mutations"
import moneyIcon from "../../assets/money.svg"
import finance from "../../assets/finance.svg"
import {
    Clock,
    Copy,
    Loader2,
    ChevronDown,
    HelpCircle,
    Gift,
    Reply,
    Pencil,
} from "lucide-react"
import { IoIosShareAlt } from "react-icons/io";
import { MdInsertLink } from "react-icons/md";



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
    const [copied, setCopied] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
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
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-[#F0F2F5] rounded-xl shadow-lg z-50 py-1">
                            <button
                                onClick={() => { setMenuOpen(false); navigate(`/dashboard/cagnottes/${id}/modifier`) }}
                                className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-[#0E405D] hover:bg-[#F3F5F7] transition"
                            >
                                <Pencil className="w-4 h-4" />
                                Modifier
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center border-b border-[#F0F2F5] mb-6">
                {(["activite", "parametres"] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-sm font-semibold px-1 pb-3 mr-8 border-b-2 transition ${
                            activeTab === tab
                                ? "border-[#FD8352] text-[#0E405D]"
                                : "border-transparent text-[#8296A3] hover:text-[#0E405D]"
                        }`}
                    >
                        {tab === "activite" ? "Activité" : "Paramètres"}
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
                    <div className="bg-white border border-[#F0F2F5] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                            <div className="w-10 h-10 rounded-full bg-[#FFF4EE] flex items-center justify-center shrink-0">
                                <Gift className="w-5 h-5 text-[#FD8352]" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#0E405D]">Partager la cagnotte</p>
                                <p className="text-xs text-[#8296A3] mt-0.5 leading-relaxed">Les cagnottes partagées régulièrement reçoivent 2× plus de dons.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 flex-wrap">
                            <div className="flex items-center gap-1.5 bg-[#F3F5F7] rounded-md px-3 py-1.5 text-xs text-[#0E405D] font-medium">
                                <MdInsertLink className=" text-white bg-black h-5 w-5 p-1 rounded-full" />
                                <span className="truncate max-w-[160px]">{shareUrl}</span>
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
                            <p className="text-sm text-[#8296A3] mb-4">Votre cagnotte n'a pas encore<br />reçu de contribution.</p>
                            <button className="flex items-center gap-1.5 text-xs font-semibold text-[#8296A3] border border-[#D9DFE7] rounded-full px-4 py-2 hover:bg-[#F3F5F7] transition">
                                <HelpCircle className="w-3.5 h-3.5" />
                                Comment obtenir des dons ?
                            </button>
                        </div>
                    )}
                </div>
            )}

            {activeTab === "parametres" && (
                <div className="bg-[#FAFBFC] border border-[#F0F2F5] rounded-2xl p-8 text-center">
                    <p className="text-sm text-[#8296A3]">Les paramètres de la cagnotte seront disponibles prochainement.</p>
                </div>
            )}
        </DashboardLayout>
    )
}

export default CagnotteDetail
