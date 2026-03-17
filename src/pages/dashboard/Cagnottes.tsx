import { useState } from "react"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import CreateCagnotteModal from "../../components/dashboard/CreateCagnotteModal"
import cagnotteEmpty from "../../assets/cagnotteempty.svg"
import { FaCirclePlus } from "react-icons/fa6"
import { Search, Loader2, Calendar } from "lucide-react"
import { useMyPotsQuery, type PotState, type PotReason, type Pot } from "../../features/pot/mutations"

const STATE_LABELS: Record<PotState, { label: string; color: string; bg: string }> = {
    PENDING: { label: "En attente", color: "text-yellow-700", bg: "bg-yellow-100" },
    IN_PROGRESS: { label: "En cours", color: "text-blue-700", bg: "bg-blue-100" },
    COMPLETED: { label: "Terminée", color: "text-green-700", bg: "bg-green-100" },
    PAUSED: { label: "En pause", color: "text-orange-700", bg: "bg-orange-100" },
    STOPPED: { label: "Arrêtée", color: "text-red-700", bg: "bg-red-100" },
}

const REASON_LABELS: Record<PotReason, string> = {
    FOR_ME: "Pour moi",
    FOR_COMMUNITY: "Communauté",
    FOR_PROJECT: "Projet",
}

const PotCard = ({ pot }: { pot: Pot }) => {
    const stateInfo = STATE_LABELS[pot.state]
    const collected = pot.collectedAmount || 0
    const target = pot.financialObject || 0
    const percent = target > 0 ? Math.min(Math.round((collected / target) * 100), 100) : 0
    const coverImage = pot.images?.[0]

    return (
        <div className="bg-white rounded-2xl border border-[#F0F2F5] shadow-sm overflow-hidden hover:shadow-md transition">
            <div className="h-36 bg-gradient-to-br from-[#E9F9FF] to-[#D0F0FF] relative">
                {coverImage && (
                    <img src={coverImage} alt="" className="w-full h-full object-cover" />
                )}
                <span className={`absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full ${stateInfo.bg} ${stateInfo.color}`}>
                    {stateInfo.label}
                </span>
            </div>
            <div className="p-4">
                <p className="text-[11px] font-semibold text-[#23C7ED] mb-1">{REASON_LABELS[pot.reason]}</p>
                <h3 className="text-sm font-bold text-[#0E0E18] mb-2 line-clamp-1">{pot.title}</h3>
                {pot.description && (
                    <p className="text-xs text-[#8296A3] mb-3 line-clamp-2">{pot.description}</p>
                )}
                <div className="mb-2">
                    <div className="flex justify-between text-[11px] mb-1">
                        <span className="font-semibold text-[#0E405D]">{collected.toLocaleString()} {pot.currency}</span>
                        <span className="text-[#8296A3]">{percent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F0F2F5] rounded-full">
                        <div className="h-1.5 bg-[#23C7ED] rounded-full transition-all" style={{ width: `${percent}%` }} />
                    </div>
                    <p className="text-[11px] text-[#8296A3] mt-1">Objectif : {target.toLocaleString()} {pot.currency}</p>
                </div>
                {pot.endDate && (
                    <div className="flex items-center gap-1 text-[11px] text-[#8296A3] mt-2">
                        <Calendar className="w-3 h-3" />
                        <span>Fin : {new Date(pot.endDate).toLocaleDateString("fr-FR")}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

const DashboardCagnottes = () => {
    const [showModal, setShowModal] = useState(false)
    const [search, setSearch] = useState("")
    const [stateFilter, setStateFilter] = useState<PotState | "">("")
    const [reasonFilter, setReasonFilter] = useState<PotReason | "">("")
    const [page, setPage] = useState(1)

    const { data, isLoading } = useMyPotsQuery({
        search: search || undefined,
        state: stateFilter || undefined,
        reason: reasonFilter || undefined,
        page,
        limit: 20,
    })

    const pots = data?.data || []
    const totalPages = data?.totalPages || 1
    const isEmpty = !isLoading && pots.length === 0 && !search && !stateFilter && !reasonFilter

    return (
        <DashboardLayout title="Mes cagnottes">
            {isEmpty ? (
                <div className="flex flex-col items-center justify-center text-center py-12 md:py-20">
                    <img src={cagnotteEmpty} alt="" className="w-40 h-40 md:w-56 md:h-56" />
                    <h2 className="text-xl md:text-[22px] font-bold text-[#0E405D] mb-3 leading-[27px]">
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
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                        <div className="flex items-center bg-[#F3F5F7] rounded-xl px-3 py-2 flex-1">
                            <Search className="w-4 h-4 text-[#8296A3] mr-2 shrink-0" />
                            <input
                                type="text"
                                placeholder="Rechercher une cagnotte..."
                                value={search}
                                onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                                className="w-full bg-transparent outline-none text-sm text-gray-700"
                            />
                        </div>
                        <select
                            value={stateFilter}
                            onChange={(e) => { setStateFilter(e.target.value as PotState | ""); setPage(1) }}
                            className="bg-[#F3F5F7] rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none appearance-none"
                        >
                            <option value="">Tous les statuts</option>
                            {Object.entries(STATE_LABELS).map(([key, { label }]) => (
                                <option key={key} value={key}>{label}</option>
                            ))}
                        </select>
                        <select
                            value={reasonFilter}
                            onChange={(e) => { setReasonFilter(e.target.value as PotReason | ""); setPage(1) }}
                            className="bg-[#F3F5F7] rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none appearance-none"
                        >
                            <option value="">Toutes les raisons</option>
                            {Object.entries(REASON_LABELS).map(([key, label]) => (
                                <option key={key} value={key}>{label}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-4 py-2.5 flex items-center rounded-xl bg-[#23C7ED] text-black font-bold text-sm shadow-[0_10px_20px_rgba(35,199,237,0.35)] hover:shadow-none transition-shadow shrink-0"
                        >
                            <FaCirclePlus className="mr-2" />
                            Créer
                        </button>
                    </div>

                    {isLoading ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="w-8 h-8 text-[#23C7ED] animate-spin" />
                        </div>
                    ) : pots.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-sm text-[#8296A3]">Aucune cagnotte trouvée pour ces filtres.</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {pots.map((pot) => (
                                    <PotCard key={pot.id} pot={pot} />
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
                                    <span className="text-sm text-[#8296A3]">
                                        {page} / {totalPages}
                                    </span>
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
