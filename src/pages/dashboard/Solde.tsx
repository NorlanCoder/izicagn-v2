import { useState } from "react"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import walletIllustration from "../../assets/walletempty.svg"
import timedocIcon from "../../assets/timedocIcon.svg"
import databaseIcon from "../../assets/database.svg"
import { ArrowDownLeft, ArrowUpRight, CircleAlert, Download, Plus, Settings2, Sparkles } from "lucide-react"
import { FaCirclePlus } from "react-icons/fa6"

// ─── Mock data toggle ──────────────────────────────────────────────────────────
const HAS_BALANCE = true // mettre false pour voir l'état vide

interface CagnotteBalance {
    id: string
    title: string
    image: string
    montantBrut: number
    frais: number
    netDisponible: number
}

type MvtType = "IN" | "OUT"

interface Mouvement {
    id: string
    label: string
    sublabel: string
    date: string
    montant: number
    type: MvtType
}

const MOCK_CAGNOTTES: CagnotteBalance[] = [
    { id: "1", title: "Frais de scolarité pour Yan", image: "https://i.pravatar.cc/80?img=10", montantBrut: 2500, frais: 50, netDisponible: 2450 },
    { id: "2", title: "Soutien aux soins de Papa Léonce", image: "https://i.pravatar.cc/80?img=11", montantBrut: 800, frais: 16, netDisponible: 784 },
]

const MOCK_MOUVEMENTS: Mouvement[] = [
    { id: "1", label: "Don de Prisca A.", sublabel: "Frais de scolarité pour Yan", date: "12/11 · 16:31", montant: 10, type: "IN" },
    { id: "2", label: "Reversement MTN MoMo", sublabel: "Frais de scolarité pour Yan", date: "10/11 · 09:00", montant: 500, type: "OUT" },
    { id: "3", label: "Don anonyme", sublabel: "Frais de scolarité pour Yan", date: "12/11 · 11:02", montant: 784, type: "IN" },
]

type MvtFilter = "ALL" | "IN" | "OUT"

const DashboardSolde = () => {
    const [mvtFilter, setMvtFilter] = useState<MvtFilter>("ALL")

    const totalBrut = MOCK_CAGNOTTES.reduce((s, c) => s + c.montantBrut, 0)
    const totalFrais = MOCK_CAGNOTTES.reduce((s, c) => s + c.frais, 0)
    const totalNet = MOCK_CAGNOTTES.reduce((s, c) => s + c.netDisponible, 0)

    const filteredMvt = MOCK_MOUVEMENTS.filter((m) => mvtFilter === "ALL" || m.type === mvtFilter)

    return (
        <DashboardLayout title="Solde">
            <h1 className="text-xl lg:text-2xl font-bold text-[#0E0E18] mb-6">Mon solde</h1>

            {/* ── Bloc haut ──────────────────────────────────────────────── */}
            <div className={`grid gap-4 mb-6 ${HAS_BALANCE ? "grid-cols-1 lg:grid-cols-[1fr_400px]" : "grid-cols-1"}`}>
                {/* Carte solde principal */}
                <div className="relative rounded-[28px] overflow-hidden bg-[#AEF4FE] px-8 py-4 flex flex-col justify-between min-h-[150px]">
                    {/* Sparkle top-right */}
                    <Sparkles className="absolute top-4 right-4 w-6 h-6 text-white/50" />
                    {/* Snowflake bottom-left */}
                    <Sparkles className="absolute bottom-4 left-4 w-5 h-5 text-white/30 rotate-45" />

                    <p className={`text-base  font-medium uppercase text-[#0E405D]/70 ${HAS_BALANCE ? "" : "text-center"}`}>
                        Solde total disponible
                    </p>
                    {HAS_BALANCE ? (
                        <>
                            <p className={`text-[52px] ${HAS_BALANCE ? "" : "text-center"} font-black text-[#04242F]`}>
                                {totalNet.toLocaleString("fr-FR")} <span className="text-3xl">€</span>
                            </p>
                            <div className="flex items-center justify-between ">
                                <p className="text-[12px] text-center font-medium text-[#3B6076]">Disponible pour reversement immédiat</p>
                                <button className="flex items-center gap-1.5 bg-white text-[#0E0E18] text-[14px] font-semibold px-4 py-2 border-2 border-[#23C7ED33] rounded-xl shadow-sm hover:bg-[#1EB0D8] transition whitespace-nowrap">
                                    Demander un reversement  <FaCirclePlus className="" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-[52px] text-center font-black text-[#04242F]">0 €</p>
                            <p className="text-[12px] text-center font-medium text-[#3B6076]">Aucun fonds collecté pour le moment</p>
                        </>
                    )}
                </div>

                {/* Cartes secondaires (seulement si solde) */}
                {HAS_BALANCE && (
                    <div className="flex flex-col gap-3 border-2 border-[#110C2214] bg-[#110C2208] rounded-[28px] p-4">
                        <div className="flex items-center gap-3 bg-white border border-[#F0F2F5] rounded-2xl px-4 py-3 shadow-[0px_2px_8px_0px_#00BCD414]">
                            <div className="w-9 h-9 rounded-xl bg-[#110C220D] flex items-center justify-center shrink-0">
                                <img src={timedocIcon} alt="En attente" className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[13px] text-[#6F7886]">Demandes en attente</p>
                            </div>
                            <p className="text-xl font-medium text-[#0E0E18]">0 €</p>
                        </div>
                        <div className="flex items-center gap-3 bg-white border border-[#F0F2F5] rounded-2xl px-4 py-3 shadow-[0px_2px_8px_0px_#00BCD414]">
                            <div className="w-9 h-9 rounded-xl bg-[#E2FCF0] flex items-center justify-center shrink-0">
                                <img src={databaseIcon} alt="En transit" className="w-4 h-4 " />

                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[14px] text-[#6F7886]">Reversements en transit</p>
                            </div>
                            <p className="text-xl font-medium text-[#0E0E18]">0 €</p>
                        </div>
                    </div>
                )}
            </div>

            {/* ── État vide ──────────────────────────────────────────────── */}
            {!HAS_BALANCE && (
                <div className="bg-white border border-[#F0F2F5] rounded-2xl flex flex-col items-center justify-center text-center px-6 py-14 gap-4">
                    <img src={walletIllustration} alt="Portefeuille vide" className="w-30 h-30" />
                    <div>
                        <h3 className="text-xl font-bold text-[#0E0E18] mb-2">Votre portefeuille est vide</h3>
                        <p className="text-sm text-[#6F7886] ">
                            Vos dons apparaîtront ici dès que vous recevrez votre premier soutien. <br />
                            Créez une cagnotte et partagez-la pour commencer à collecter.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            className="px-3 lg:px-4 py-2.5 flex items-center rounded-xl bg-[#23C7ED] text-[#002D3F] font-bold text-sm  transition-shadow shrink-0"
                        >
                            <FaCirclePlus className="mr-1.5 lg:mr-2" />
                            <span className="hidden sm:inline">Créer une cagnotte</span>
                            <span className="sm:hidden">Créer</span>
                        </button>

                        <button className="flex cursor-pointer items-center gap-2 bg-white text-[#0E0E18] text-sm font-semibold px-3 lg:px-4 py-2.5 rounded-xl border border-[#E5E7EB] hover:bg-[#F3F5F7] transition">
                            <Settings2 className="w-4 h-4" /> Configurer un moyen
                        </button>
                    </div>
                </div>
            )}

            {/* ── Détail par cagnotte ─────────────────────────────────────── */}
            {HAS_BALANCE && (
                <>
                    <div className="bg-white border p-2 border-[#F0F2F5] rounded-2xl overflow-hidden mb-6">
                        <div className="px-5 py-4 border-b border-[#F0F2F5]">
                            <h2 className="text-[15px] font-bold text-[#0E0E18]">Détail par cagnotte</h2>
                        </div>
                        {/* Header */}
                        <div className="grid bg-[#FAFAFA] grid-cols-[2fr_1fr_1fr_1fr] px-5 py-2.5 text-[11px] font-semibold text-[#8296A3] uppercase tracking-wider border-b border-[#F0F2F5]">
                            <span>Cagnotte</span>
                            <span>Montant brut</span>
                            <span>Frais</span>
                            <span>Net disponible</span>
                        </div>
                        {/* Rows */}
                        {MOCK_CAGNOTTES.map((c) => (
                            <div key={c.id} className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-5 py-4 border-b border-[#F0F2F5] last:border-b-0">
                                <div className="flex items-center gap-3 min-w-0">
                                    <img src={c.image} alt="" className="w-14 h-12 rounded-xl object-cover shrink-0" />
                                    <p className="text-[16px] font-bold text-[#0E0E18] truncate">{c.title}</p>
                                </div>
                                <span className="text-[16px] text-[#495460]">{c.montantBrut.toLocaleString("fr-FR")} €</span>
                                <span className="text-[14px] bg-[#FFF4ED] w-fit py-1 px-2 rounded-full font-medium text-[#EC320A]">-{c.frais} €</span>
                                <span className="text-[16px] font-bold text-[#1EB0D8]">{c.netDisponible.toLocaleString("fr-FR")} €</span>
                            </div>
                        ))}
                        {/* Total row */}
                        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-5 py-3.5 bg-[#FAFBFC] border-t border-[#F0F2F5]">
                            <span className="text-[16px] font-semibold text-[#0E0E18]">Total :</span>
                            <span className="text-[16px] font-semibold text-[#0E0E18]">{totalBrut.toLocaleString("fr-FR")} €</span>
                            <span className="text-[16px] font-semibold text-[#0E0E18]">{totalFrais} €</span>
                            <span className="text-[16px] font-bold text-[#23C7ED]">{totalNet.toLocaleString("fr-FR")} €</span>
                        </div>
                        {/* Notice */}
                        <div className="px-5 py-3 rounded-lg bg-[#FFF4ED] mt-2 flex items-center gap-2">
                            <CircleAlert className="w-3.5 h-3.5 text-[#EC320A] shrink-0" />
                            <p className="text-[12px] text-[#676472]">
                                Frais de plateforme : <span className="font-semibold">2% TTC</span> par transaction confirmée. Les montants nets sont crédités sous 24-48h ouvrées.
                            </p>
                        </div>
                    </div>

                    {/* ── Mouvements récents ─────────────────────────────────── */}
                    <div className="bg-white border p-2 border-[#F0F2F5] rounded-2xl overflow-hidden">
                        <div className="px-5 py-4 border-b border-[#F0F2F5] flex items-center justify-between">
                            <h2 className="text-[15px] font-bold text-[#0E0E18]">Mouvements récents</h2>
                            <div className="flex items-center gap-1 bg-[#E2EAF0] rounded-full p-1">
                                {(["ALL", "IN", "OUT"] as MvtFilter[]).map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setMvtFilter(f)}
                                        className={`text-[12px] font-semibold px-3 py-1 rounded-full transition ${mvtFilter === f ? "bg-white text-[#1E3448]" : "text-[#5A6272]"
                                            }`}
                                    >
                                        {f === "ALL" ? "Tous" : f === "IN" ? "Entrées" : "Sorties"}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {filteredMvt.map((m) => (
                            <div key={m.id} className="flex items-center gap-4 px-5 py-4 border-b border-[#F0F2F5] last:border-b-0 hover:bg-[#FAFBFC] transition">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${m.type === "IN" ? "bg-[#E8F5E9]" : "bg-[#FFF3E0]"
                                    }`}>
                                    {m.type === "IN"
                                        ? <ArrowDownLeft className="w-4 h-4 text-[#0A9C55]" />
                                        : <ArrowUpRight className="w-4 h-4 text-[#F2AA09]" />
                                    }
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[14px] font-semibold text-[#1A1A2E] truncate">{m.label}</p>
                                    <p className="text-[12px] text-[#9AA3B0] truncate">{m.sublabel}</p>
                                </div>
                                <p className="text-[15px] text-[#110C2252] shrink-0">{m.date}</p>
                                <p className={`text-[15px] font-bold shrink-0 ${m.type === "IN" ? "text-[#0A9C55]" : "text-[#F2AA09]"}`}>
                                    {m.type === "IN" ? "+" : "-"}{m.montant.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €
                                </p>
                            </div>
                        ))}

                        <div className="flex justify-center px-5 py-4">
                            <button className="flex items-center gap-1.5 text-[13px] font-medium text-[#07AED8] hover:underline transition">
                                <Download className="w-3.5 h-3.5" />
                                Télécharger l'historique complet (PDF)
                            </button>
                        </div>
                    </div>
                </>
            )}
        </DashboardLayout>
    )
}

export default DashboardSolde
