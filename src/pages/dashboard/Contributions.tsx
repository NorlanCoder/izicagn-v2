import { useState } from "react"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import cagnotteEmpty from "../../assets/cagnotteempty.svg"
import walleticon from "../../assets/walletIcon.svg"
import heartdonateIcon from "../../assets/heartdonateIcon.svg"
import cagnIcon from "../../assets/cagnIcon.svg"
import { Calendar, ChevronDown, CheckCircle2, Clock, Download, ExternalLink, Filter, Users, XCircle } from "lucide-react"

type ContributionStatus = "CONFIRMED" | "PENDING" | "CANCELLED"

interface Contribution {
    id: string
    cagnotteTitle: string
    cagnotteAuthor: string
    cagnotteImage: string
    amount: number
    currency: string
    date: string
    status: ContributionStatus
}

const STATUS_CONFIG: Record<ContributionStatus, { label: string; color: string; bg: string; Icon: React.ComponentType<{ className?: string }> }> = {
    CONFIRMED: { label: "Confirmé", color: "text-[#2E7D32]", bg: "bg-[#E8F5E9]", Icon: CheckCircle2 },
    PENDING: { label: "En attente", color: "text-[#E65100]", bg: "bg-[#FFF8E1]", Icon: Clock },
    CANCELLED: { label: "Annulé", color: "text-[#FF3B30]", bg: "bg-[#FFF0EF]", Icon: XCircle },
}

const MOCK_CONTRIBUTIONS: Contribution[] = [
    { id: "1", cagnotteTitle: "Frais de scolarité pour Y.", cagnotteAuthor: "Sophie S.", cagnotteImage: "https://i.pravatar.cc/80?img=1", amount: 25, currency: "€", date: "2025-11-12", status: "CONFIRMED" },
    { id: "2", cagnotteTitle: "Construction EPP Tin.", cagnotteAuthor: "Jean K.", cagnotteImage: "https://i.pravatar.cc/80?img=2", amount: 10, currency: "€", date: "2025-11-08", status: "CONFIRMED" },
    { id: "3", cagnotteTitle: "Soutien médical Papa Léon.", cagnotteAuthor: "Mawulé T.", cagnotteImage: "https://i.pravatar.cc/80?img=3", amount: 50, currency: "€", date: "2025-11-01", status: "PENDING" },
    { id: "4", cagnotteTitle: "Frais de scolarité pour Y.", cagnotteAuthor: "Sophie S.", cagnotteImage: "https://i.pravatar.cc/80?img=1", amount: 40, currency: "€", date: "2025-10-22", status: "CONFIRMED" },
    { id: "5", cagnotteTitle: "Construction EPP Tin.", cagnotteAuthor: "Jean K.", cagnotteImage: "https://i.pravatar.cc/80?img=2", amount: 20, currency: "€", date: "2025-10-15", status: "CONFIRMED" },
    { id: "6", cagnotteTitle: "Soutien médical Papa Léon.", cagnotteAuthor: "Mawulé T.", cagnotteImage: "https://i.pravatar.cc/80?img=3", amount: 30, currency: "€", date: "2025-10-02", status: "CANCELLED" },
]

const PERIOD_FILTERS = [
    { label: "Tout", value: "all" },
    { label: "Ce mois", value: "month" },
    { label: "3 mois", value: "3months" },
    { label: "Cette année", value: "year" },
] as const

type PeriodFilter = (typeof PERIOD_FILTERS)[number]["value"]

const DashboardContributions = () => {
    const [period, setPeriod] = useState<PeriodFilter>("all")
    const [statusFilter, setStatusFilter] = useState<ContributionStatus | "ALL">("ALL")
    const [statusOpen, setStatusOpen] = useState(false)

    const contributions = MOCK_CONTRIBUTIONS
    const hasContributions = contributions.length > 0

    const totalDonne = contributions.filter((c) => c.status === "CONFIRMED").reduce((sum, c) => sum + c.amount, 0)
    const donsEffectues = contributions.length
    const cagnottesSoutenues = new Set(contributions.map((c) => c.cagnotteTitle)).size

    const filtered = contributions.filter((c) => {
        if (statusFilter !== "ALL" && c.status !== statusFilter) return false
        if (period === "all") return true
        const d = new Date(c.date)
        const now = new Date()
        if (period === "month") return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
        if (period === "3months") { const ago = new Date(); ago.setMonth(ago.getMonth() - 3); return d >= ago }
        if (period === "year") return d.getFullYear() === now.getFullYear()
        return true
    })

    const filteredTotal = filtered.filter((c) => c.status === "CONFIRMED").reduce((sum, c) => sum + c.amount, 0)

    if (!hasContributions) {
        return (
            <DashboardLayout title="Mes contributions">
                <div className="flex flex-col items-center justify-center text-center py-12 md:py-20">
                    <img src={cagnotteEmpty} alt="" className="h-40 mb-2 md:h-60" />
                    <h2 className="text-xl md:text-[22px] font-bold mb-3">
                        Vous n'avez contribué à <br />aucune cagnotte
                    </h2>
                    <p className="text-sm md:text-base text-[#6F7886] mb-8">
                        Les dons que vous avez fait pour d'autres cagnottes s'afficheront dans votre espace ici.
                    </p>
                </div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout title="Mes contributions">
            <h1 className="text-xl lg:text-2xl font-bold text-[#0E405D]  mb-4 lg:mb-6">Mes contributions</h1>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#110C2208] rounded-2xl p-2 gap-2 mb-8">
                <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4" style={{ borderWidth: "1px 1px 3px 1px", borderStyle: "solid", borderColor: "#E8EDF2" }}>
                    <div className="w-10 h-10 rounded-xl bg-[#CFF7FE] flex items-center justify-center shrink-0">
                        <img src={walleticon} alt="Wallet Icon" className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-[#23C7ED]">{totalDonne.toFixed(2)} €</p>
                        <p className="text-[14px] text-[#5A6272]">Total donné</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4" style={{ borderWidth: "1px 1px 3px 1px", borderStyle: "solid", borderColor: "#E8EDF2" }}>
                    <div className="w-10 h-10 rounded-xl bg-[#CFF7FE] flex items-center justify-center shrink-0">
                        <img src={heartdonateIcon} alt="Heart Donate Icon" className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-[#0E0E18]">{donsEffectues}</p>
                        <p className="text-[14px] text-[#5A6272]">Dons effectués</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4" style={{ borderWidth: "1px 1px 3px 1px", borderStyle: "solid", borderColor: "#E8EDF2" }}>
                    <div className="w-10 h-10 rounded-xl bg-[#CFF7FE] flex items-center justify-center shrink-0">
                        <img src={cagnIcon} alt="Cagnottes Icon" className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-[#0E0E18]">{cagnottesSoutenues}</p>
                        <p className="text-[14px] text-[#5A6272]">Cagnottes soutenues</p>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                    {PERIOD_FILTERS.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setPeriod(f.value)}
                            className={`text-sm font-semibold px-2 py-2 rounded-full transition whitespace-nowrap ${
                                period === f.value
                                    ? "bg-[#001829] text-white"
                                    : "text-[#8296A3] hover:bg-[#F3F5F7] border border-[#E8EDF2]"
                            }`}
                        >
                            {f.label}
                            {f.value === "all" && contributions.length > 0 && (
                                <span className={`ml-1.5 text-[11px] font-bold p-1 rounded-full ${
                                    period === "all" ? "bg-white text-[#001829]" : "bg-[#0E405D] text-white"
                                }`}>
                                    {contributions.length.toString().padStart(2, "0")}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                <div className="relative">
                    <button
                        onClick={() => setStatusOpen((v) => !v)}
                        className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold text-[#0E405D] border border-[#E5E7EB] rounded-full hover:bg-[#F3F5F7] transition"
                    >
                        <Filter className="w-3.5 h-3.5" />
                        Statut <ChevronDown className={`w-3.5 h-3.5 transition-transform ${statusOpen ? "rotate-180" : ""}`} />
                    </button>
                    {statusOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-[#F0F2F5] rounded-xl shadow-lg z-20 py-1">
                            {[{ label: "Tous", value: "ALL" as const }, ...Object.entries(STATUS_CONFIG).map(([k, v]) => ({ label: v.label, value: k as ContributionStatus }))].map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => { setStatusFilter(opt.value); setStatusOpen(false) }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-[#F3F5F7] transition ${statusFilter === opt.value ? "font-semibold text-[#0E405D]" : "text-[#8296A3]"}`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border p-2 border-[#F0F2F5] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] bg-[#FAFAFA] px-5 py-3 text-[11px] font-semibold text-[#8296A3] uppercase tracking-wider border-b border-[#F0F2F5]">
                    <span>Cagnotte</span>
                    <span>Montant</span>
                    <span>Date</span>
                    <span>Statut</span>
                    <span>Actions</span>
                </div>
                {filtered.map((c) => {
                    const cfg = STATUS_CONFIG[c.status]
                    return (
                        <div key={c.id} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center px-5 py-4 border-b border-[#F0F2F5] last:border-b-0 hover:bg-[#FAFBFC] transition">
                            <div className="flex items-center gap-3 min-w-0">
                                <img src={c.cagnotteImage} alt="" className="w-12 h-12 rounded-[10px] object-cover shrink-0" />
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-[#0E0E18] truncate">{c.cagnotteTitle}</p>
                                    <p className="text-xs text-[#8296A3] truncate">
                                        <Users className="w-3 h-3 inline mr-1" />par {c.cagnotteAuthor}
                                    </p>
                                </div>
                            </div>
                            <span className="text-sm font-bold text-[#FD8352]">{c.amount.toFixed(2)} {c.currency}</span>
                            <span className="flex items-center gap-1.5 text-sm text-[#495460]">
                                <Calendar className="w-3.5 h-3.5 text-[#8296A3]" />
                                {new Date(c.date).toLocaleDateString("fr-FR")}
                            </span>
                            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full w-fit ${cfg.bg} ${cfg.color}`}>
                                <cfg.Icon className="w-3.5 h-3.5" />
                                {cfg.label}
                            </span>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-1 text-xs font-semibold text-[#5A6272] border border-[#E5E7EB] rounded-lg px-3 py-1.5 hover:bg-[#F3F5F7] transition">
                                    Voir <ExternalLink className="w-3 h-3" />
                                </button>
                                <button
                                    disabled={c.status !== "CONFIRMED"}
                                    className="flex items-center justify-center w-8 h-8 border border-[#E5E7EB] rounded-lg hover:bg-[#F3F5F7] transition disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    <Download className="w-3.5 h-3.5 text-[#00BCD4]" />
                                </button>
                            </div>
                        </div>
                    )
                })}
                <div className="flex items-center justify-between px-5 py-3 border-t border-[#F0F2F5] text-sm">
                    <p className="text-[#0E405D]">
                        <span className="font-bold text-[#23C7ED]">{filtered.length} dons</span> affichés{" "}
                        <span className="text-[#23C7ED] underline cursor-pointer">(filtrés)</span>
                    </p>
                    <p className="text-[#8296A3]">
                        Total donné : <span className="font-bold text-[#FD8352]">{filteredTotal.toFixed(2)} €</span>
                    </p>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default DashboardContributions
