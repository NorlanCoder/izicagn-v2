import { useState } from "react"
import { useNavigate } from "react-router"
import { AnimatePresence, motion } from "framer-motion"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import { Search, CheckCircle2, Clock, XCircle, Ban, RefreshCcw, X } from "lucide-react"
import { FaCirclePlus } from "react-icons/fa6"
import documentUploadIcon from "../../assets/documentUploadIcon.svg"
// ─── Types ─────────────────────────────────────────────────────────────────────

type ReversementStatus = "TRAITE" | "EN_TRAITEMENT" | "EN_ATTENTE" | "ECHOUE" | "REJETE" | "ANNULE"

interface Reversement {
    id: string
    reference: string
    provider: string
    providerLabel: string
    phone: string
    date: string
    motif?: string
    errorMessage?: string
    montantBrut: number
    montantNet: number
    recredite: boolean
    status: ReversementStatus
}

const STATUS_CONFIG: Record<ReversementStatus, { label: string; color: string; bg: string; Icon: React.ComponentType<{ className?: string }> }> = {
    TRAITE: { label: "Traité", color: "text-[#2E7D32]", bg: "bg-[#E8F5E9]", Icon: CheckCircle2 },
    EN_TRAITEMENT: { label: "En traitement", color: "text-[#E65100]", bg: "bg-[#FFF8E1]", Icon: Clock },
    EN_ATTENTE: { label: "En attente", color: "text-[#E65100]", bg: "bg-[#FFF8E1]", Icon: Clock },
    ECHOUE: { label: "Échoué", color: "text-[#D32F2F]", bg: "bg-[#FFEBEE]", Icon: XCircle },
    REJETE: { label: "Rejetée", color: "text-[#D32F2F]", bg: "bg-[#FFEBEE]", Icon: XCircle },
    ANNULE: { label: "Annulé", color: "text-[#6F7886]", bg: "bg-[#F3F5F7]", Icon: X },
}

const STATUS_ICON_BG: Record<ReversementStatus, { bg: string; border: string; iconColor: string }> = {
    TRAITE: { bg: "bg-[#E8F5E9]", border: "border-[#A5D6A7]", iconColor: "text-[#2E7D32]" },
    EN_TRAITEMENT: { bg: "bg-[#FFF8E1]", border: "border-[#FFE082]", iconColor: "text-[#E65100]" },
    EN_ATTENTE: { bg: "bg-[#FFF8E1]", border: "border-[#FFE082]", iconColor: "text-[#E65100]" },
    ECHOUE: { bg: "bg-[#FFEBEE]", border: "border-[#EF9A9A]", iconColor: "text-[#D32F2F]" },
    REJETE: { bg: "bg-[#FFEBEE]", border: "border-[#EF9A9A]", iconColor: "text-[#D32F2F]" },
    ANNULE: { bg: "bg-[#F3F5F7]", border: "border-[#D5DAE0]", iconColor: "text-[#6F7886]" },
}

const ICON_MAP: Record<ReversementStatus, React.ComponentType<{ className?: string }>> = {
    TRAITE: CheckCircle2,
    EN_TRAITEMENT: Clock,
    EN_ATTENTE: Clock,
    ECHOUE: Ban,
    REJETE: Ban,
    ANNULE: X,
}

// ─── Mock Data ──────────────────────────────────────────────────────────────────

const MOCK_REVERSEMENTS: Reversement[] = [
    // Mars 2026
    { id: "1", reference: "REV-2026-03-27", provider: "MTN Mobile Money", providerLabel: "MTN MoMo", phone: "+229 97 12 34 56", date: "2026-03-27T15:42:00", motif: "Frais médicaux", montantBrut: 150000, montantNet: 147000, recredite: false, status: "EN_TRAITEMENT" },
    { id: "2", reference: "REV-2026-03-22", provider: "MTN Mobile Money", providerLabel: "MTN MoMo", phone: "+229 97 12 34 56", date: "2026-03-22T10:00:00", montantBrut: 200000, montantNet: 195500, recredite: false, status: "TRAITE" },
    { id: "3", reference: "REV-2026-03-14", provider: "Orange Money", providerLabel: "Orange Money", phone: "+229 95 00 00 00", date: "2026-03-14T09:30:00", motif: "Achat matériel", montantBrut: 75000, montantNet: 73250, recredite: false, status: "TRAITE" },
    { id: "4", reference: "REV-2026-03-10", provider: "MTN Mobile Money", providerLabel: "MTN MoMo", phone: "+229 97 12 34 56", date: "2026-03-10T14:15:00", errorMessage: "Numéro injoignable", montantBrut: 35000, montantNet: 0, recredite: true, status: "REJETE" },
    // Février 2026
    { id: "5", reference: "REV-2026-02-28", provider: "MTN Mobile Money", providerLabel: "MTN MoMo", phone: "+229 97 12 34 56", date: "2026-02-28T08:00:00", montantBrut: 100000, montantNet: 97500, recredite: false, status: "EN_ATTENTE" },
    { id: "6", reference: "REV-2026-02-18", provider: "Orange Money", providerLabel: "Orange Money", phone: "+229 95 00 00 00", date: "2026-02-18T11:00:00", montantBrut: 150000, montantNet: 146500, recredite: false, status: "TRAITE" },
    { id: "7", reference: "REV-2026-02-07", provider: "MTN Mobile Money", providerLabel: "MTN MoMo", phone: "+229 97 12 34 56", date: "2026-02-07T17:30:00", errorMessage: "Annulé par l'utilisateur", montantBrut: 60000, montantNet: 0, recredite: true, status: "ANNULE" },
    // Janvier 2026
    { id: "8", reference: "REV-2026-01-29", provider: "MTN Mobile Money", providerLabel: "MTN MoMo", phone: "+229 97 12 34 56", date: "2026-01-29T09:00:00", montantBrut: 50000, montantNet: 48750, recredite: false, status: "TRAITE" },
    { id: "9", reference: "REV-2026-01-20", provider: "Orange Money", providerLabel: "Orange Money", phone: "+229 95 00 00 00", date: "2026-01-20T16:00:00", montantBrut: 40000, montantNet: 39000, recredite: false, status: "TRAITE" },
    { id: "10", reference: "REV-2026-01-12", provider: "Moov Money", providerLabel: "Moov Money", phone: "+229 96 00 00 00", date: "2026-01-12T13:00:00", errorMessage: "Compte inexistant", montantBrut: 25000, montantNet: 0, recredite: true, status: "ECHOUE" },
    { id: "11", reference: "REV-2026-01-03", provider: "MTN Mobile Money", providerLabel: "MTN MoMo", phone: "+229 97 12 34 56", date: "2026-01-03T10:00:00", montantBrut: 12500, montantNet: 12000, recredite: false, status: "TRAITE" },
]

type StatusFilter = "TOUS" | "TRAITE" | "EN_COURS" | "EN_TRAITEMENT" | "ECHOUE" | "ANNULE"
type PeriodFilter = "7j" | "30j" | "90j" | "tout"

const STATUS_TABS: { key: StatusFilter; label: string; color?: string; bg?: string; border?: string }[] = [
    { key: "TOUS", label: "Tous", color: "text-white", bg: "bg-[#0E405D]", border: "border-[#0E405D]" },
    { key: "TRAITE", label: "Traités", color: "text-[#2E7D32]", bg: "bg-[#E8F5E9]", border: "border-[#A5D6A7]" },
    { key: "EN_COURS", label: "En cours", color: "text-[#0277BD]", bg: "bg-[#E1F5FE]", border: "border-[#81D4FA]" },
    { key: "EN_TRAITEMENT", label: "En traitement", color: "text-[#E65100]", bg: "bg-[#FFF8E1]", border: "border-[#FFE082]" },
    { key: "ECHOUE", label: "Échoués", color: "text-[#D32F2F]", bg: "bg-[#FFEBEE]", border: "border-[#EF9A9A]" },
    { key: "ANNULE", label: "Annulés", color: "text-[#6F7886]", bg: "bg-[#F3F5F7]", border: "border-[#D5DAE0]" },
]

const PERIOD_TABS: { key: PeriodFilter; label: string }[] = [
    { key: "7j", label: "7j" },
    { key: "30j", label: "30j" },
    { key: "90j", label: "90j" },
    { key: "tout", label: "Tout" },
]

// ─── Helpers ────────────────────────────────────────────────────────────────────

function groupByMonth(items: Reversement[]): { label: string; count: number; total: number; items: Reversement[] }[] {
    const groups: Record<string, Reversement[]> = {}
    for (const r of items) {
        const d = new Date(r.date)
        const key = `${d.getFullYear()}-${String(d.getMonth()).padStart(2, "0")}`
        if (!groups[key]) groups[key] = []
        groups[key].push(r)
    }
    return Object.entries(groups)
        .sort(([a], [b]) => b.localeCompare(a))
        .map(([, items]) => {
            const d = new Date(items[0].date)
            const label = d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" }).replace(/^\w/, (c) => c.toUpperCase())
            const total = items.reduce((s, r) => s + r.montantBrut, 0)
            return { label, count: items.length, total, items }
        })
}

function formatAmount(n: number): string {
    return n.toLocaleString("fr-FR")
}

// ─── Component ──────────────────────────────────────────────────────────────────

const DashboardReversements = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("TOUS")
    const [period, setPeriod] = useState<PeriodFilter>("30j")
    const [selected, setSelected] = useState<Reversement | null>(null)

    const all = MOCK_REVERSEMENTS

    // Stats
    const totalReverse = all.filter((r) => r.status === "TRAITE").reduce((s, r) => s + r.montantNet, 0)
    const reversementsTraites = all.filter((r) => r.status === "TRAITE").length
    const enCours = all.filter((r) => r.status === "EN_TRAITEMENT" || r.status === "EN_ATTENTE").length
    const echouesAnnules = all.filter((r) => ["ECHOUE", "REJETE", "ANNULE"].includes(r.status)).length

    // Filter
    const filtered = all.filter((r) => {
        // Search
        if (search) {
            const q = search.toLowerCase()
            const match = r.reference.toLowerCase().includes(q) || r.provider.toLowerCase().includes(q) || r.phone.includes(q) || String(r.montantBrut).includes(q)
            if (!match) return false
        }
        // Status
        if (statusFilter === "TRAITE" && r.status !== "TRAITE") return false
        if (statusFilter === "EN_COURS" && r.status !== "EN_TRAITEMENT" && r.status !== "EN_ATTENTE") return false
        if (statusFilter === "EN_TRAITEMENT" && r.status !== "EN_TRAITEMENT") return false
        if (statusFilter === "ECHOUE" && r.status !== "ECHOUE" && r.status !== "REJETE") return false
        if (statusFilter === "ANNULE" && r.status !== "ANNULE") return false
        // Period
        if (period !== "tout") {
            const d = new Date(r.date)
            const now = new Date()
            const days = period === "7j" ? 7 : period === "30j" ? 30 : 90
            const ago = new Date(now.getTime() - days * 86400000)
            if (d < ago) return false
        }
        return true
    })

    const groups = groupByMonth(filtered)

    return (
        <DashboardLayout title="Reversements">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                <h1 className="text-xl lg:text-2xl font-bold text-[#0E0E18]">Reversements</h1>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 bg-[#110C2208] text-[#0E0E18] text-sm font-semibold px-4 py-2.5 rounded-xl border border-[#E5E7EB] hover:bg-[#F3F5F7] transition">
                        <img src={documentUploadIcon} alt="Exporter" className="w-4.5" />
                        Exporter l'historique
                    </button>
                    <button onClick={() => navigate("/dashboard/reversements/nouveau")} className="flex items-center gap-2 bg-[#23C7ED] text-[#002D3F] text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-[#1EB0D8] transition">
                        Nouveau reversement <FaCirclePlus />
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#110C2208] rounded-2xl p-2 gap-2 mb-6">
                <div className="bg-white rounded-2xl px-4 py-3" style={{ borderWidth: "1px 1px 3px 1px", borderStyle: "solid", borderColor: "#E8EDF2" }}>
                    <p className="text-[12px] font-semibold uppercase text-[#5A6272] mb-1">Total reversé</p>
                    <p className="text-xl font-bold text-[#0D1F2D]">{formatAmount(totalReverse)} €</p>
                    <p className="text-[11px] text-[#8296A3]">sur 90 jours</p>
                </div>
                <div className="bg-white rounded-2xl px-4 py-3" style={{ borderWidth: "1px 1px 3px 1px", borderStyle: "solid", borderColor: "#E8EDF2" }}>
                    <p className="text-[12px] font-semibold uppercase text-[#5A6272] mb-1">Reversements traités</p>
                    <p className="text-xl font-bold text-[#16A34A]">{reversementsTraites}</p>
                    <p className="text-[11px] text-[#8296A3]">dont 3 ce mois</p>
                </div>
                <div className="bg-white rounded-2xl px-4 py-3" style={{ borderWidth: "1px 1px 3px 1px", borderStyle: "solid", borderColor: "#E8EDF2" }}>
                    <p className="text-[12px] font-semibold uppercase text-[#5A6272] mb-1">En cours de traitement</p>
                    <p className="text-xl font-bold text-[#D97706]">{enCours}</p>
                    <p className="text-[11px] text-[#8296A3]">150 000 FCFA · depuis 6h</p>
                </div>
                <div className="bg-white rounded-2xl px-4 py-3" style={{ borderWidth: "1px 1px 3px 1px", borderStyle: "solid", borderColor: "#E8EDF2" }}>
                    <p className="text-[12px] font-semibold uppercase text-[#5A6272] mb-1">Échoués / Annulés</p>
                    <p className="text-xl font-bold text-[#DC2626]">{echouesAnnules}</p>
                    <p className="text-[11px] text-[#8296A3]">recrédités</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-3 mb-4 border border-[#E8EDF2] rounded-2xl">
                {/* Search + Status */}
                <div className="flex border-b border-[#E8EDF2] p-2 items-center gap-3 flex-wrap">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8296A3]" />
                        <input
                            type="text"
                            placeholder="Référence, montant, moyen..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-9 pr-3 py-2 text-[13px] border border-[#E5E7EB] rounded-full bg-white w-52 placeholder:text-[#8296A3] focus:outline-none focus:border-[#23C7ED] transition"
                        />
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#8296A3]">Statut</span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                        {STATUS_TABS.map((tab) => {
                            const active = statusFilter === tab.key
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => setStatusFilter(tab.key)}
                                    className={`text-[12px] font-semibold px-3 py-1.5 rounded-full border transition whitespace-nowrap ${tab.bg || "bg-[#F3F5F7]"} ${tab.color || "text-[#6F7886]"} ${tab.border || "border-[#D5DAE0]"} ${
                                        active ? "ring-2 ring-offset-1 ring-[#23C7ED]/30" : "opacity-80 hover:opacity-100"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            )
                        })}
                    </div>
                </div>
                {/* Period + count */}
                <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-2">
                        <span className="text-[12px] text-[#8296A3]">Période :</span>
                        <div className="flex items-center gap-1 bg-[#F3F5F7] rounded-full p-0.5">
                            {PERIOD_TABS.map((p) => (
                                <button
                                    key={p.key}
                                    onClick={() => setPeriod(p.key)}
                                    className={`text-[12px] font-semibold px-3 py-1 rounded-full transition ${
                                        period === p.key ? "bg-white text-[#0E0E18]" : "text-[#8296A3] hover:text-[#495460]"
                                    }`}
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <span className="text-[12px] text-[#8296A3]">{filtered.length} résultats</span>
                </div>
            </div>

            {/* Grouped list */}
            <div className="flex flex-col gap-5">
                {groups.map((group) => (
                    <div key={group.label} className="bg-white border border-[#E2EAF0] rounded-2xl overflow-hidden">
                        {/* Month header */}
                        <div className="flex items-center justify-between px-5 py-3 border-b border-[#E2EAF0] bg-[#F0F5F8]">
                            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0E405D]">{group.label}</p>
                            <p className="text-[11px] font-semibold text-[#8296A3]">
                                {group.count} opération{group.count > 1 ? "s" : ""} · <span className="text-[#0E0E18]">- {formatAmount(group.total)} €</span>
                            </p>
                        </div>
                        {/* Rows */}
                        {group.items.map((r) => {
                            const iconCfg = STATUS_ICON_BG[r.status]
                            const StatusIcon = ICON_MAP[r.status]
                            const statusCfg = STATUS_CONFIG[r.status]
                            const d = new Date(r.date)
                            const dateLabel = d.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
                            return (
                                <div key={r.id} onClick={() => setSelected(r)} className="flex items-center gap-4 px-5 py-4 border-b border-[#F0F2F5] last:border-b-0 hover:bg-[#FAFBFC] transition cursor-pointer">
                                    {/* Status icon */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${iconCfg.bg}`}>
                                        <StatusIcon className={`w-5 h-5 ${iconCfg.iconColor}`} />
                                    </div>
                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[11px] text-[#8296A3] mb-0.5">{r.reference}</p>
                                        <p className="text-[15px] font-semibold text-[#0E0E18] truncate">
                                            {r.provider} - {r.phone}
                                        </p>
                                        <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                                            <span className="text-[11px] text-[#6B7B8D]">{r.providerLabel}</span>
                                            <span className="text-[11px] text-[#8296A3]">·</span>
                                            <span className="text-[11px] text-[#94A3B3]">{dateLabel}</span>
                                            {r.motif && (
                                                <>
                                                    <span className="text-[12px] text-[#8296A3]">·</span>
                                                    <span className="text-[12px] text-[#6B7B8D] italic">{r.motif}</span>
                                                </>
                                            )}
                                            {r.errorMessage && (
                                                <>
                                                    <span className="text-[12px] text-[#8296A3]">·</span>
                                                    <span className="text-[12px] text-[#DC2626] italic">{r.errorMessage}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {/* Amount + Status */}
                                    <div className="flex flex-col items-end shrink-0 gap-0.5">
                                        <p className="text-[14px] font-bold text-[#0D1F2D]">- {formatAmount(r.montantBrut)}</p>
                                        {(r.status === "TRAITE" || r.status === "EN_TRAITEMENT" || r.status === "EN_ATTENTE") && (
                                            <p className="text-[11px] text-[#8296A3]">Net : {formatAmount(r.montantNet)} €</p>
                                        )}
                                        {r.recredite && (
                                            <p className="text-[11px] text-[#23C7ED] flex items-center gap-1">
                                                <RefreshCcw className="w-3 h-3" /> Recrédité
                                            </p>
                                        )}
                                        <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full  ${statusCfg.color} ${statusCfg.bg} ${
                                            r.status === "TRAITE" ? "border-[#A5D6A7]" :
                                            r.status === "EN_TRAITEMENT" || r.status === "EN_ATTENTE" ? "border-[#FFE082]" :
                                            r.status === "ECHOUE" || r.status === "REJETE" ? "border-[#EF9A9A]" :
                                            "border-[#D5DAE0]"
                                        }`}>
                                            <statusCfg.Icon className="w-3 h-3" /> {statusCfg.label}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ))}

                {filtered.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <p className="text-lg font-semibold text-[#0E0E18] mb-1">Aucun reversement trouvé</p>
                        <p className="text-sm text-[#8296A3]">Essayez de modifier vos filtres ou la période.</p>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selected && <ReversementDetailModal reversement={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </DashboardLayout>
    )
}

// ─── Detail Modal ───────────────────────────────────────────────────────────────

const SUIVI_STEPS = [
    { label: "Demande enregistrée", sub: "", done: true, icon: CheckCircle2, iconColor: "text-[#2E7D32]", iconBg: "bg-[#E8F5E9]" },
    { label: "Vérification en cours", sub: "Contrôle automatique du compte", done: false, icon: Clock, iconColor: "text-[#0277BD]", iconBg: "bg-[#E1F5FE]" },
    { label: "Virement initié", sub: "En attente d'envoi opérateur", done: false, icon: null, iconColor: "", iconBg: "bg-[#F3F5F7]" },
    { label: "Fonds reçus", sub: "Notification SMS & email", done: false, icon: null, iconColor: "", iconBg: "bg-[#F3F5F7]" },
]

function ReversementDetailModal({ reversement: r, onClose }: { reversement: Reversement; onClose: () => void }) {
    const statusCfg = STATUS_CONFIG[r.status]
    const iconCfg = STATUS_ICON_BG[r.status]
    const StatusIcon = ICON_MAP[r.status]
    const d = new Date(r.date)
    const dateStr = d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) + " à " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    const shortRef = r.reference.split("-").pop()
    const commission = Math.round(r.montantBrut * 0.02)
    const fraisOp = 500
    const netARecevoir = r.montantBrut - commission - fraisOp

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 z-50"
                onClick={onClose}
            />
            {/* Panel */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-full max-w-[480px] bg-white z-50 shadow-2xl flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0F2F5]">
                    <p className="text-[13px] font-bold text-[#0D1F2D]">REV · {shortRef}</p>
                    <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#F3F5F7] transition">
                        <X className="w-5 h-5 text-[#495460]" />
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto">
                    {/* Hero card */}
                    <div className="mx-6 mt-6 bg-gradient-to-b from-[#F3F8FB] to-white rounded-2xl px-6 py-8 flex flex-col items-center">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${iconCfg.bg}`}>
                            <StatusIcon className={`w-7 h-7 ${iconCfg.iconColor}`} />
                        </div>
                        <p className="text-[28px] font-black text-[#0D1F2D]">- {formatAmount(r.montantBrut)} €</p>
                        {r.montantNet > 0 && (
                            <p className="text-[13px] text-[#6B7B8D] mt-1">Net : {formatAmount(r.montantNet)} €</p>
                        )}
                        <span className={`inline-flex items-center gap-1 text-[12px] font-semibold px-3 py-1 rounded-full mt-3 ${statusCfg.color} ${statusCfg.bg}`}>
                            <statusCfg.Icon className="w-3.5 h-3.5" /> {statusCfg.label}
                        </span>
                        <p className="text-[11px] text-[#94A3B3] mt-2">{r.reference}</p>
                    </div>

                    {/* Détail des frais */}
                    <div className="px-6 mt-6">
                        <p className="text-[10px] font-bold uppercase text-[#94A3B3] mb-3">Détail des frais</p>
                        <div className="bg-[#FAFBFC] rounded-xl border border-[#F0F2F5] divide-y divide-[#F0F2F5]">
                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-[12px] text-[#495460]">Montant demandé</span>
                                <span className="text-[12px] font-bold text-[#0E0E18]">{formatAmount(r.montantBrut)} €</span>
                            </div>
                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-[12px] text-[#495460]">Commission Izicagn (2%)</span>
                                <span className="text-[12px] font-semibold text-[#DC2626]">- {formatAmount(commission)} €</span>
                            </div>
                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-[12px] text-[#495460]">Frais opérateur</span>
                                <span className="text-[12px] font-semibold text-[#DC2626]">- {formatAmount(fraisOp)} €</span>
                            </div>
                            <div className="flex items-center justify-between px-4 py-3 bg-white rounded-b-xl">
                                <span className="text-[13px] font-bold text-[#0E0E18]">Net à recevoir</span>
                                <span className="text-[13px] font-semibold text-[#16A34A]">{formatAmount(netARecevoir)} €</span>
                            </div>
                        </div>
                    </div>

                    {/* Informations */}
                    <div className="px-6 mt-6">
                        <p className="text-[10px] font-bold uppercase text-[#94A3B3] mb-3">Informations</p>
                        <div className="divide-y divide-[#F0F2F5]">
                            {[
                                ["Référence", r.reference],
                                ["Date", dateStr],
                                ["Opérateur", r.provider],
                                ["Numéro", r.phone],
                                ["Titulaire", "Sophie SAGBOHAN"],
                                ...(r.motif ? [["Motif", r.motif]] : []),
                            ].map(([label, value]) => (
                                <div key={label} className="flex items-center justify-between py-3">
                                    <span className="text-[12px] text-[#495460]">{label}</span>
                                    <span className={`text-[11px] font-medium text-[#0D1F2D] ${label === "Motif" ? "italic text-[#23C7ED]" : ""}`}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Suivi de l'opération */}
                    <div className="px-6 mt-6 mb-6">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-[#0E405D] mb-4">Suivi de l'opération</p>
                        <div className="relative">
                            {SUIVI_STEPS.map((step, i) => {
                                const isLast = i === SUIVI_STEPS.length - 1
                                return (
                                    <div key={i} className="flex gap-3 relative">
                                        {/* Vertical line */}
                                        {!isLast && (
                                            <div className="absolute left-[15px] top-[32px] w-[2px] h-[calc(100%-8px)] bg-[#E8EDF2]" />
                                        )}
                                        {/* Step icon */}
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${step.done ? step.iconBg : step.iconBg}`}>
                                            {step.icon ? (
                                                <step.icon className={`w-4 h-4 ${step.done ? step.iconColor : step.iconColor}`} />
                                            ) : (
                                                <span className="text-[12px] font-bold text-[#8296A3]">{i + 1}</span>
                                            )}
                                        </div>
                                        {/* Step text */}
                                        <div className="pb-5">
                                            <p className={`text-[13px] font-semibold ${step.done ? "text-[#0E0E18]" : "text-[#495460]"}`}>{step.label}</p>
                                            <p className="text-[11px] text-[#8296A3] mt-0.5">{step.done ? dateStr : step.sub}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Info banner */}
                        <div className="bg-[#E1F5FE] border border-[#81D4FA] rounded-xl px-4 py-3 mt-4 flex items-start gap-2">
                            <RefreshCcw className="w-4 h-4 text-[#0277BD] shrink-0 mt-0.5" />
                            <p className="text-[12px] text-[#0E0E18]">
                                Délai estimé : <span className="font-bold">24 à 72h</span> après soumission. Vous recevrez une notification à chaque étape.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom buttons */}
                <div className="px-6 py-4 border-t border-[#F0F2F5] flex flex-col gap-2">
                    <button className="w-full py-2 rounded-full bg-[#FCA5A5] border border-[#FBBEB8] text-[#DC2626] font-semibold text-sm cursor-pointer transition">
                        Annuler ce reversement
                    </button>
                    <button className="w-full py-2 rounded-full bg-[#E2EAF0] border border-[#E5E7EB] text-[#6B7B8D] font-semibold text-sm hover:bg-[#F3F5F7] cursor-pointer transition">
                        Contacter le support
                    </button>
                </div>
            </motion.div>
        </>
    )
}

export default DashboardReversements
