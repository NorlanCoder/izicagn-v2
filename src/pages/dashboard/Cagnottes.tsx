import { useState } from "react"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import CreateCagnotteModal from "../../components/dashboard/CreateCagnotteModal"
import cagnotteEmpty from "../../assets/cagnotteempty.svg"
import { FaCirclePlus } from "react-icons/fa6"
import { Search, Loader2, Clock, Users, ExternalLink, ArrowRight } from "lucide-react"
import { useMyPotsQuery, type PotState, type Pot } from "../../features/pot/mutations"

type TabKey = "ALL" | "IN_PROGRESS" | "COMPLETED" | "PENDING"

const TABS: { key: TabKey; label: string; state?: PotState }[] = [
    { key: "ALL", label: "Toutes" },
    { key: "IN_PROGRESS", label: "En cours", state: "IN_PROGRESS" },
    { key: "COMPLETED", label: "Terminées", state: "COMPLETED" },
    { key: "PENDING", label: "Brouillons", state: "PENDING" },
]

const STATE_CONFIG: Record<PotState, { label: string; dotColor: string; textColor: string; bgColor: string; icon?: string }> = {
    IN_PROGRESS: { label: "En cours", dotColor: "bg-[#FD8352]", textColor: "text-[#FD8352]", bgColor: "bg-[#FFF4EE]" },
    COMPLETED: { label: "Terminée", dotColor: "bg-[#34C759]", textColor: "text-[#34C759]", bgColor: "bg-[#EAFBEF]", icon: "✓" },
    PENDING: { label: "Brouillon", dotColor: "bg-[#8296A3]", textColor: "text-[#8296A3]", bgColor: "bg-[#F3F5F7]", icon: "✎" },
    PAUSED: { label: "En pause", dotColor: "bg-[#FF9500]", textColor: "text-[#FF9500]", bgColor: "bg-[#FFF8EE]" },
    STOPPED: { label: "Arrêtée", dotColor: "bg-[#FF3B30]", textColor: "text-[#FF3B30]", bgColor: "bg-[#FFF0EF]" },
}

const PotRow = ({ pot }: { pot: Pot }) => {
    const cfg = STATE_CONFIG[pot.state]
    const collected = pot.collectedAmount || 0
    const target = pot.financialObject || 0
    const percent = target > 0 ? Math.min(Math.round((collected / target) * 100), 100) : 0
    const coverImage = pot.images?.[0]
    const contributors = pot.contributorsCount || 0
    const createdAt = pot.created_at ? new Date(pot.created_at).toLocaleDateString("fr-FR") : ""
    const endDate = pot.endDate ? new Date(pot.endDate).toLocaleDateString("fr-FR") : ""
    const currency = pot.currency || "XOF"

    return (
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 py-5 border-b border-[#F0F2F5] last:border-b-0">
            {/* INTITULÉ */}
            <div className="flex items-center gap-4 lg:w-[40%] min-w-0">
                <div className="w-[72px] h-[72px] rounded-xl overflow-hidden bg-[#F0F2F5] shrink-0">
                    {coverImage ? (
                        <img src={coverImage} alt="" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#E9F9FF] to-[#D0F0FF]" />
                    )}
                </div>
                <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#0E405D] leading-5 line-clamp-2">{pot.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${cfg.bgColor} ${cfg.textColor}`}>
                            {cfg.icon ? (
                                <span className="text-[10px]">{cfg.icon}</span>
                            ) : (
                                <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor}`} />
                            )}
                            {cfg.label}
                        </span>
                        {createdAt && (
                            <span className="text-[11px] text-[#8296A3]">Créé le : {createdAt}</span>
                        )}
                    </div>
                </div>
            </div>

            {/* MONTANT COLLECTÉ */}
            <div className="lg:w-[30%]">
                <div className="flex items-baseline gap-0.5 mb-1.5">
                    <span className="text-base font-bold text-[#FD8352]">{collected.toLocaleString()}{currency}</span>
                    <span className="text-sm text-[#0E405D] font-semibold">/{target.toLocaleString()}{currency}</span>
                </div>
                <div className="w-full max-w-[180px] h-2 bg-[#F0F2F5] rounded-full mb-1.5">
                    <div className="h-2 bg-[#FD8352] rounded-full transition-all" style={{ width: `${percent}%` }} />
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#8296A3]">
                    <Users className="w-3 h-3" />
                    <span>{contributors} Contributeur{contributors !== 1 ? "s" : ""}</span>
                </div>
            </div>

            {/* ACTIONS */}
            <div className="lg:w-[30%] flex flex-col sm:flex-row items-start sm:items-center gap-2 lg:justify-end">
                {endDate && (
                    <div className="flex items-center gap-1 text-[12px] text-[#8296A3] mr-3">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Fin : {endDate}</span>
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 text-[13px] font-semibold text-[#0E405D] border border-[#D9DFE7] rounded-lg px-3.5 py-2 hover:bg-[#F3F5F7] transition">
                        Gérer <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button className="flex items-center gap-1.5 text-[13px] font-semibold text-[#0E405D] border border-[#D9DFE7] rounded-lg px-3.5 py-2 hover:bg-[#F3F5F7] transition">
                        Partager <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

const DashboardCagnottes = () => {
    const [showModal, setShowModal] = useState(false)
    const [activeTab, setActiveTab] = useState<TabKey>("ALL")
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)

    const currentTab = TABS.find((t) => t.key === activeTab)

    const { data, isLoading } = useMyPotsQuery({
        search: search || undefined,
        state: currentTab?.state || undefined,
        page,
        limit: 20,
    })

    const pots = data?.data || []
    const total = data?.total || 0
    const totalPages = data?.totalPages || 1

    return (
        <DashboardLayout title="Mes cagnottes">
            {isEmpty ? (
                <div className="flex flex-col items-center justify-center text-center py-12 md:py-20">
                    <img src={cagnotteEmpty} alt="" className="w-40 h-40 md:w-56 md:h-56" />
                    <h2 className="text-xl md:text-[22px] font-bold text-[#0E405D] mb-3">
                        Vous n'avez encore créé <br /> aucune cagnotte
                    </h2>
                    <p className="text-sm md:text-base text-[#6F7886] mb-8">
                        Créez votre première cagnotte pour collecter des fonds pour une <br /> cause, un proche ou un projet personnel.
                    </p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-4 py-3 flex items-center rounded-xl bg-[#23C7ED] text-black font-bold text-sm md:text-base shadow-[0_10px_20px_rgba(35,199,237,0.35)] hover:shadow-none transition-shadow"
                    >
                        <FaCirclePlus className="mr-2" />
                        Créer une cagnotte
                    </button>
                </div>
            ) : (
                <div>
                    {/* Toolbar : tabs + search + button */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                        {/* Tabs */}
                        <div className="flex items-center gap-1">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => { setActiveTab(tab.key); setPage(1) }}
                                    className={`text-sm font-semibold px-4 py-2 rounded-full transition ${
                                        activeTab === tab.key
                                            ? "bg-[#0E405D] text-white"
                                            : "text-[#8296A3] hover:bg-[#F3F5F7]"
                                    }`}
                                >
                                    {tab.label}
                                    {tab.key === "ALL" && total > 0 && (
                                        <span className={`ml-1.5 text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                                            activeTab === "ALL" ? "bg-white/20" : "bg-[#0E405D] text-white"
                                        }`}>
                                            {String(total).padStart(2, "0")}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Search + Create */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center bg-[#F3F5F7] rounded-xl px-3 py-2 w-48">
                                <Search className="w-4 h-4 text-[#8296A3] mr-2 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Rechercher"
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                                    className="w-full bg-transparent outline-none text-sm text-gray-700"
                                />
                            </div>
                            <button
                                onClick={() => setShowModal(true)}
                                className="px-4 py-2.5 flex items-center rounded-xl bg-[#23C7ED] text-white font-bold text-sm shadow-[0_10px_20px_rgba(35,199,237,0.35)] hover:shadow-none transition-shadow shrink-0"
                            >
                                <FaCirclePlus className="mr-2" />
                                Créer une cagnotte
                            </button>
                        </div>
                    </div>

                    {/* Table header */}
                    <div className="hidden lg:flex items-center text-[11px] font-semibold text-[#8296A3] uppercase tracking-wider pb-3 border-b border-[#F0F2F5]">
                        <div className="w-[40%]">Intitulé</div>
                        <div className="w-[30%]">Montant collecté</div>
                        <div className="w-[30%] text-right">Actions</div>
                    </div>

                    {/* Content */}
                    {isLoading ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="w-8 h-8 text-[#23C7ED] animate-spin" />
                        </div>
                    ) : pots.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-sm text-[#8296A3]">Aucune cagnotte trouvée.</p>
                        </div>
                    ) : (
                        <>
                            <div>
                                {pots.map((pot) => (
                                    <PotRow key={pot.id} pot={pot} />
                                ))}
                            </div>

                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-8">
                                    <button
                                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                                        disabled={page <= 1}
                                        className="px-3 py-1.5 text-sm rounded-lg border border-[#E5E7EB] disabled:opacity-40 hover:bg-[#F3F5F7] transition"
                                    >
                                        Précédent
                                    </button>
                                    <span className="text-sm text-[#8296A3]">{page} / {totalPages}</span>
                                    <button
                                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={page >= totalPages}
                                        className="px-3 py-1.5 text-sm rounded-lg border border-[#E5E7EB] disabled:opacity-40 hover:bg-[#F3F5F7] transition"
                                    >
                                        Suivant
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}

            {showModal && (
                <CreateCagnotteModal
                    onClose={() => setShowModal(false)}
                    onSuccess={() => setShowModal(false)}
                />
            )}
        </DashboardLayout>
    )
}

export default DashboardCagnottes
