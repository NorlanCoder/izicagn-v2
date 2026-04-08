import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import CreateCagnotteModal from "../../components/dashboard/CreateCagnotteModal"
import cagnotteEmpty from "../../assets/Icon-cagnottes.svg"
import { FaCirclePlus } from "react-icons/fa6"
import { Search, Loader2, Clock, ExternalLink, ArrowRight, HandCoins } from "lucide-react"
import { useMyPotsQuery, type PotState, type Pot } from "../../features/pot/mutations"

type TabKey = "ALL" | "IN_PROGRESS" | "COMPLETED" | "PENDING"

const TABS: { key: TabKey; label: string; state?: PotState }[] = [
    { key: "ALL", label: "Tout" },
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
    const navigate = useNavigate()
    const cfg = STATE_CONFIG[pot.state]
    const collected = pot.collectedAmount || 0
    const target = Number(pot.financialObject) || 0
    const percent = target > 0 ? Math.min(Math.round((collected / target) * 100), 100) : 0
    const coverImage = pot.images?.[0]
    const contributors = pot.contributorsCount || 0
    const createdAt = pot.created_at ? new Date(pot.created_at).toLocaleDateString("fr-FR") : ""
    const endDate = pot.endDate ? new Date(pot.endDate).toLocaleDateString("fr-FR") : ""
    const currency = pot.currency || "XOF"

    return (
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0 p-3 lg:p-0 lg:py-5 mb-3 lg:mb-0 rounded-xl lg:rounded-none bg-white lg:bg-transparent shadow-sm lg:shadow-none border border-[#F0F2F5] lg:border-0 lg:border-b last:border-b-0">
            {/* INTITULÉ */}
            <div className="flex items-center gap-3 lg:gap-4 lg:w-[40%] min-w-0">
                <div className="w-14 h-14 lg:w-[100px] lg:h-[72px] rounded-xl overflow-hidden bg-[#F0F2F5] shrink-0">
                    {coverImage ? (
                        <img src={coverImage} alt="" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#E9F9FF] to-[#D0F0FF]" />
                    )}
                </div>
                <div className="min-w-0">
                    <h3 className="text-base font-bold text-black leading-5 line-clamp-2">{pot.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md ${cfg.bgColor} ${cfg.textColor}`}>
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
            <div className="lg:w-[30%] pl-[calc(3.5rem+0.75rem)] lg:pl-0">
                <div className="flex items-baseline gap-0.5 mb-1.5">
                    <span className="text-sm lg:text-base font-bold text-[#FF7E33]">{collected.toLocaleString()}{currency}</span>
                    <span className="text-xs lg:text-sm text-[#0E405D] font-semibold">/{target.toLocaleString()}{currency}</span>
                </div>
                <div className="w-full lg:max-w-[180px] h-2 bg-[#F0F2F5] rounded-full mb-1.5">
                    <div className="h-2 bg-[#FF7E33] rounded-full transition-all" style={{ width: `${percent}%` }} />
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#8296A3]">
                    <HandCoins className="w-3 h-3" />
                    <span>{contributors} Contributeur{contributors !== 1 ? "s" : ""}</span>
                </div>
            </div>

            {/* ACTIONS */}
            <div className="lg:w-[30%] flex flex-col items-start gap-2 lg:justify-end pl-[calc(3.5rem+0.75rem)] lg:pl-0">
                {endDate && (
                    <div className="hidden sm:flex items-center gap-1 text-[12px] text-[#8296A3] mr-3">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Fin : {endDate}</span>
                    </div>
                )}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                        onClick={() => navigate(`/dashboard/cagnottes/${pot.id}`)}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-[12px] lg:text-[13px] font-semibold text-[#0E405D] border border-[#D9DFE7] rounded-lg px-3 lg:px-3.5 py-2 hover:bg-[#F3F5F7] transition">
                        Gérer <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-[12px] lg:text-[13px] font-semibold text-[#0E405D] border border-[#D9DFE7] rounded-lg px-3 lg:px-3.5 py-2 hover:bg-[#F3F5F7] transition">
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
    const queryClient = useQueryClient()

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
    const isEmpty = !isLoading && pots.length === 0 && !search && activeTab === "ALL"

    return (
        <DashboardLayout title="Mes cagnottes">
            {isEmpty ? (
                <div className="flex flex-col items-center justify-center text-center py-12 md:py-20">
                    <img src={cagnotteEmpty} alt="" className=" h-40 mb-2  md:h-60" />
                    <h2 className="text-xl md:text-[22px] font-bold mb-3">
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
                    <h1 className="text-xl lg:text-2xl font-bold text-[#0E405D] mb-4 lg:mb-6">Mes cagnottes</h1>

                    {/* Toolbar : tabs + search + button */}
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4 mb-4 lg:mb-6">
                        {/* Tabs */}
                        <div className="flex items-center gap-1 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => { setActiveTab(tab.key); setPage(1) }}
                                    className={`text-sm font-semibold px-2 py-2 rounded-full transition whitespace-nowrap ${
                                        activeTab === tab.key
                                            ? "bg-[#001829] text-white"
                                            : "text-[#8296A3] hover:bg-[#F3F5F7] border border-[#E8EDF2]"
                                    }`}
                                >
                                    {tab.label}
                                    {tab.key === "ALL" && total > 0 && (
                                        <span className={`ml-1.5 text-[11px] font-bold p-1 rounded-full ${
                                            activeTab === "ALL" ? "bg-white text-[#001829]" : "bg-[#0E405D] text-white"
                                        }`}>
                                            {String(total).padStart(2, "0")}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Search + Create */}
                        <div className="flex items-center gap-2 lg:gap-3">
                            <div className="flex items-center bg-[#F3F5F7] rounded-xl px-3 py-2 flex-1 lg:flex-none lg:w-48">
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
                                className="px-3 lg:px-4 py-2.5 flex items-center rounded-xl bg-[#23C7ED] text-white font-bold text-sm shadow-[0_10px_20px_rgba(35,199,237,0.35)] hover:shadow-none transition-shadow shrink-0"
                            >
                                <FaCirclePlus className="mr-1.5 lg:mr-2" />
                                <span className="hidden sm:inline">Créer une cagnotte</span>
                                <span className="sm:hidden">Créer</span>
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
                    onSuccess={() => {
                        setShowModal(false)
                        queryClient.invalidateQueries({ queryKey: ["my-pots"] })
                    }}
                />
            )}
        </DashboardLayout>
    )
}

export default DashboardCagnottes
