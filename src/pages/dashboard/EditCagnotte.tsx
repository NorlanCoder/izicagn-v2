import { useRef, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { MapPin, Calendar, Plus, Trash2, ImagePlus, Loader2, X, Reply } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import moiMemeIcon from "/src/assets/cagnotte/moi-meme.png"
import communote from "/src/assets/cagnotte/communote.png"
import peojet from "/src/assets/cagnotte/projet.png"
import {
    useGetPotByIdQuery,
    useUpdatePotMutation,
    useTagsQuery,
    useUploadFilesMutation,
    type ContrepartiePayload,
} from "../../features/pot/mutations"
import { useQueryClient } from "@tanstack/react-query"

const COUNTRIES_CITIES: Record<string, { label: string; cities: string[] }> = {
    BJ: { label: "Bénin", cities: ["Cotonou", "Porto-Novo", "Parakou", "Abomey-Calavi", "Djougou", "Bohicon", "Natitingou"] },
    CI: { label: "Côte d'Ivoire", cities: ["Abidjan", "Yamoussoukro", "Bouaké", "San-Pédro", "Daloa", "Korhogo", "Man"] },
    SN: { label: "Sénégal", cities: ["Dakar", "Saint-Louis", "Thiès", "Ziguinchor", "Kaolack", "Rufisque", "Mbour"] },
    TG: { label: "Togo", cities: ["Lomé", "Sokodé", "Kara", "Kpalimé", "Atakpamé", "Dapaong", "Tsévié"] },
    BF: { label: "Burkina Faso", cities: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Banfora", "Ouahigouya", "Pouytenga"] },
    ML: { label: "Mali", cities: ["Bamako", "Sikasso", "Mopti", "Koutiala", "Ségou", "Kayes", "Gao"] },
    NE: { label: "Niger", cities: ["Niamey", "Zinder", "Maradi", "Agadez", "Tahoua", "Dosso"] },
    GN: { label: "Guinée", cities: ["Conakry", "Nzérékoré", "Kankan", "Kindia", "Labé", "Mamou"] },
    CM: { label: "Cameroun", cities: ["Douala", "Yaoundé", "Garoua", "Bamenda", "Maroua", "Bafoussam", "Ngaoundéré"] },
    GA: { label: "Gabon", cities: ["Libreville", "Port-Gentil", "Franceville", "Oyem", "Moanda"] },
    CG: { label: "Congo", cities: ["Brazzaville", "Pointe-Noire", "Dolisie", "Nkayi", "Owando"] },
    CD: { label: "RD Congo", cities: ["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kisangani", "Goma", "Bukavu"] },
    FR: { label: "France", cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Bordeaux", "Lille"] },
    BE: { label: "Belgique", cities: ["Bruxelles", "Anvers", "Gand", "Liège", "Charleroi", "Namur"] },
    CA: { label: "Canada", cities: ["Montréal", "Toronto", "Ottawa", "Québec", "Vancouver", "Calgary"] },
    US: { label: "États-Unis", cities: ["New York", "Los Angeles", "Chicago", "Houston", "Washington", "Miami"] },
}

const REASON_OPTIONS = [
    { value: "FOR_ME", label: "Pour moi-même", description: "Fonds pour un projet ou des urgences personnelles.", icon: <img src={moiMemeIcon} alt="" className="w-10 h-10" /> },
    { value: "FOR_COMMUNITY", label: "Pour une communauté", description: "Fonds au nom d'une organisation caritative.", icon: <img src={communote} alt="" className="w-10 h-10" /> },
    { value: "FOR_PROJECT", label: "Pour un projet", description: "Fonds pour un projet communautaire.", icon: <img src={peojet} alt="" className="w-10 h-10" /> },
]

const EditCagnotte = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { data: pot, isLoading: potLoading } = useGetPotByIdQuery(id ?? "")

    const [initialized, setInitialized] = useState(false)

    const [reason, setReason] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)
    const [financialObject, setFinancialObject] = useState("")
    const [currency] = useState("XOF")
    const [contreparties, setContreparties] = useState<ContrepartiePayload[]>([])
    const [images, setImages] = useState<string[]>([])
    const [imagePreviews, setImagePreviews] = useState<string[]>([])
    const [error, setError] = useState("")
    const fileInputRef = useRef<HTMLInputElement>(null)

    const mutation = useUpdatePotMutation()
    const { data: tagsData, isLoading: tagsLoading } = useTagsQuery()
    const uploadMutation = useUploadFilesMutation()

    useEffect(() => {
        if (pot && !initialized) {
            setReason(pot.reason || "")
            setTags(pot.tags?.map((t) => t.id) || [])
            setCountry(pot.country || "")
            setCity(pot.city || "")
            setTitle(pot.title || "")
            setDescription(pot.description || "")
            setStartDate(pot.startDate ? new Date(pot.startDate) : null)
            setEndDate(pot.endDate ? new Date(pot.endDate) : null)
            setFinancialObject(String(pot.financialObject || ""))
            setContreparties(pot.contreparties?.map((c) => ({ title: c.title, amount: c.amount })) || [])
            setImages(pot.images || [])
            setImagePreviews(pot.images || [])
            setInitialized(true)
        }
    }, [pot, initialized])

    const toggleTag = (tag: string) =>
        setTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag])

    const addContrepartie = () =>
        setContreparties((prev) => [...prev, { title: "", amount: 0 }])

    const removeContrepartie = (i: number) =>
        setContreparties((prev) => prev.filter((_, idx) => idx !== i))

    const updateContrepartie = (i: number, field: keyof ContrepartiePayload, value: string | number) =>
        setContreparties((prev) => prev.map((c, idx) => idx === i ? { ...c, [field]: value } : c))

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) return
        const formData = new FormData()
        Array.from(files).forEach((file) => formData.append("files", file))
        try {
            const urls = await uploadMutation.mutateAsync(formData)
            setImages((prev) => [...prev, ...urls])
            Array.from(files).forEach((file) => {
                const reader = new FileReader()
                reader.onload = (ev) => {
                    if (ev.target?.result) setImagePreviews((prev) => [...prev, ev.target!.result as string])
                }
                reader.readAsDataURL(file)
            })
        } catch {
            setError("Erreur lors de l'upload des images.")
        }
        if (fileInputRef.current) fileInputRef.current.value = ""
    }

    const removeImage = (i: number) => {
        setImages((prev) => prev.filter((_, idx) => idx !== i))
        setImagePreviews((prev) => prev.filter((_, idx) => idx !== i))
    }

    const handleSubmit = async () => {
        if (!startDate || !endDate) { setError("Veuillez renseigner les dates."); return }
        if (!title.trim()) { setError("Veuillez renseigner le titre."); return }
        setError("")
        try {
            await mutation.mutateAsync({
                id: id!,
                reason, tags, country, city, title, description,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                financialObject: Number(financialObject),
                currency, images,
                contreparties: contreparties.filter((c) => c.title.trim()),
            })
            queryClient.invalidateQueries({ queryKey: ["pot", id] })
            queryClient.invalidateQueries({ queryKey: ["my-pots"] })
            navigate(`/dashboard/cagnottes/${id}`)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Une erreur est survenue.")
        }
    }

    if (potLoading) {
        return (
            <DashboardLayout title="Chargement...">
                <div className="flex items-center justify-center py-32">
                    <Loader2 className="w-10 h-10 text-[#23C7ED] animate-spin" />
                </div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout title="Modifier la cagnotte">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => navigate(`/dashboard/cagnottes/${id}`)}
                        className="flex items-center gap-1 text-sm text-[#8D8A95] font-semibold transition"
                    >
                        <Reply className="w-5 h-5 text-gray-600" />
                        Retour
                    </button>
                    <span className="text-[#D9DFE7]">&gt;</span>
                    <span className="text-sm font-semibold text-[#0E405D]">Modifier la cagnotte</span>
                </div>
            </div>

            <div className="max-w-3xl space-y-6">

                {/* ── Raison ── */}
                <section className="bg-white border border-[#F0F2F5] rounded-2xl p-6">
                    <h3 className="text-base font-bold text-[#0E0E18] mb-4">
                        <span className="text-[#FD8352]">Pour</span> quoi collectez-vous ?
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-3">
                        {REASON_OPTIONS.map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => setReason(opt.value)}
                                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition text-center ${
                                    reason === opt.value
                                        ? "border-[#23C7ED] bg-[#E9F9FF]"
                                        : "border-[#F3F5F7] bg-[#F3F5F7] hover:border-[#23C7ED]"
                                }`}
                            >
                                {opt.icon}
                                <p className="font-semibold text-sm text-[#0E0E18]">{opt.label}</p>
                            </button>
                        ))}
                    </div>

                    {reason && (
                        <div className="mt-5">
                            <p className="text-sm font-semibold text-[#0E0E18] mb-3">Tags</p>
                            {tagsLoading ? (
                                <div className="flex items-center gap-2 text-sm text-[#8296A3]">
                                    <Loader2 className="w-4 h-4 animate-spin" /> Chargement...
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {(tagsData?.data || []).map((tag) => (
                                        <button
                                            key={tag.id}
                                            onClick={() => toggleTag(tag.id)}
                                            className={`px-4 py-1.5 text-sm rounded-full border transition ${
                                                tags.includes(tag.id)
                                                    ? "bg-[#23C7ED] text-white border-[#23C7ED]"
                                                    : "bg-white text-black border-[#E5E7EB] hover:border-[#23C7ED]"
                                            }`}
                                        >
                                            {tag.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </section>

                {/* ── Titre & Description ── */}
                <section className="bg-white border border-[#F0F2F5] rounded-2xl p-6">
                    <h3 className="text-base font-bold text-[#0E0E18] mb-4">
                        <span className="text-[#FD8352]">Décrivez</span> votre cagnotte
                    </h3>
                    <div className="space-y-3">
                        <div className="bg-[#F3F5F7] rounded-2xl">
                            <input
                                type="text"
                                placeholder="Nom de la cagnotte"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full py-4 px-5 rounded-2xl focus:outline-none bg-transparent text-sm"
                            />
                        </div>
                        <div className="bg-[#F3F5F7] rounded-2xl">
                            <textarea
                                placeholder="Description"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full py-4 px-5 rounded-2xl focus:outline-none bg-transparent resize-none text-sm"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Localisation ── */}
                <section className="bg-white border border-[#F0F2F5] rounded-2xl p-6">
                    <h3 className="text-base font-bold text-[#0E0E18] mb-4">
                        <span className="text-[#FD8352]">Localisation</span>
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                            <label className="text-sm font-semibold text-[#0E0E18] mb-1 block">Pays</label>
                            <div className="flex items-center border border-gray-200 rounded-2xl shadow-sm px-4 bg-white">
                                <MapPin className="w-4 h-4 text-[#23C7ED] mr-2 shrink-0" />
                                <select
                                    value={country}
                                    onChange={(e) => { setCountry(e.target.value); setCity("") }}
                                    className="w-full py-3 outline-none text-sm text-gray-700 bg-transparent appearance-none"
                                >
                                    <option value="">Sélectionnez un pays</option>
                                    {Object.entries(COUNTRIES_CITIES).map(([code, { label }]) => (
                                        <option key={code} value={code}>{label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-[#0E0E18] mb-1 block">Ville</label>
                            <div className="flex items-center border border-gray-200 rounded-2xl shadow-sm px-4 bg-white">
                                <MapPin className="w-4 h-4 text-[#23C7ED] mr-2 shrink-0" />
                                <select
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    disabled={!country}
                                    className="w-full py-3 outline-none text-sm text-gray-700 bg-transparent appearance-none disabled:opacity-50"
                                >
                                    <option value="">Sélectionnez une ville</option>
                                    {(COUNTRIES_CITIES[country]?.cities || []).map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Dates & Montant ── */}
                <section className="bg-white border border-[#F0F2F5] rounded-2xl p-6">
                    <h3 className="text-base font-bold text-[#0E0E18] mb-4">
                        <span className="text-[#FD8352]">Dates</span> & montant
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 mb-4">
                        <div>
                            <label className="text-sm font-semibold text-[#0E0E18] mb-1 block">Date de début</label>
                            <div className="flex items-center border border-gray-200 rounded-2xl shadow-sm px-4 py-2 bg-[#F5F8FB]">
                                <Calendar className="w-4 h-4 text-[#23C7ED] mr-2 shrink-0" />
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Date de début"
                                    className="w-full h-10 outline-none text-sm text-gray-700 bg-transparent"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-[#0E0E18] mb-1 block">Date de fin</label>
                            <div className="flex items-center border border-gray-200 rounded-2xl shadow-sm px-4 py-2 bg-[#F5F8FB]">
                                <Calendar className="w-4 h-4 text-[#23C7ED] mr-2 shrink-0" />
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Date de fin"
                                    minDate={startDate ?? undefined}
                                    className="w-full h-10 outline-none text-sm text-gray-700 bg-transparent"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#0E0E18] mb-1 block">Montant visé</label>
                        <div className="flex items-center bg-[#F3F5F7] rounded-2xl overflow-hidden">
                            <input
                                type="number"
                                placeholder="Ex: 100000"
                                value={financialObject}
                                onChange={(e) => setFinancialObject(e.target.value)}
                                className="w-full py-4 px-5 bg-transparent focus:outline-none text-sm text-gray-700"
                            />
                            <span className="text-white text-sm font-bold bg-[#95A3B0] rounded-xl px-3 py-2 mr-3 shrink-0">
                                {currency}
                            </span>
                        </div>
                        {financialObject && (
                            <p className="text-xs text-[#07AED8] mt-2">
                                Montant visé : <span className="font-semibold">{Number(financialObject).toLocaleString()} {currency}</span>
                            </p>
                        )}
                    </div>
                </section>

                {/* ── Contreparties ── */}
                <section className="bg-white border border-[#F0F2F5] rounded-2xl p-6">
                    <h3 className="text-base font-bold text-[#0E0E18] mb-1">
                        <span className="text-[#FD8352]">Contreparties</span>
                    </h3>
                    <p className="text-xs text-[#8296A3] mb-4">Récompenses à offrir à vos donateurs (facultatif)</p>
                    <div className="space-y-3">
                        {contreparties.map((c, i) => (
                            <div key={i} className="flex items-end gap-3">
                                <div className="flex-1">
                                    <label className="text-xs font-semibold text-[#0E0E18] mb-1 block">Contrepartie</label>
                                    <div className="flex items-center border border-gray-200 rounded-2xl px-4 py-2 bg-[#F5F8FB]">
                                        <input
                                            type="text"
                                            placeholder="Intitulé"
                                            value={c.title}
                                            onChange={(e) => updateContrepartie(i, "title", e.target.value)}
                                            className="w-full h-9 outline-none text-sm bg-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="w-32">
                                    <label className="text-xs font-semibold text-[#0E0E18] mb-1 block">Montant min</label>
                                    <div className="flex items-center border border-gray-200 rounded-2xl px-4 py-2 bg-[#F5F8FB]">
                                        <input
                                            type="number"
                                            placeholder="----"
                                            value={c.amount || ""}
                                            onChange={(e) => updateContrepartie(i, "amount", Number(e.target.value))}
                                            className="w-full h-9 outline-none text-sm bg-transparent"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeContrepartie(i)}
                                    className="w-10 h-10 rounded-full bg-[#FDF0EE] border border-[#FBBEB8] flex items-center justify-center mb-0.5"
                                >
                                    <Trash2 className="w-4 h-4 text-[#A35A15]" />
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={addContrepartie}
                            className="flex items-center gap-2 text-white bg-[#032F3F] text-sm px-4 py-2.5 rounded-full"
                        >
                            <Plus className="w-4 h-4" />
                            Ajouter une contrepartie
                        </button>
                    </div>
                </section>

                {/* ── Images ── */}
                <section className="bg-white border border-[#F0F2F5] rounded-2xl p-6">
                    <h3 className="text-base font-bold text-[#0E0E18] mb-1">
                        <span className="text-[#FD8352]">Images</span>
                    </h3>
                    <p className="text-xs text-[#8296A3] mb-4">Ajoutez des photos pour présenter votre projet</p>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {imagePreviews.map((src, idx) => (
                            <div key={idx} className="relative aspect-3/2 rounded-2xl overflow-hidden group">
                                <img src={src} alt="" className="w-full h-full object-cover" />
                                <button
                                    onClick={() => removeImage(idx)}
                                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                                >
                                    <X className="w-3.5 h-3.5 text-white" />
                                </button>
                            </div>
                        ))}

                        <button
                            onClick={() => fileInputRef.current?.click()}
                            disabled={uploadMutation.isPending}
                            className="aspect-3/2 rounded-2xl bg-[#F3F5F7] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#E9F9FF] transition border-2 border-dashed border-[#C1E1F5] disabled:opacity-50"
                        >
                            {uploadMutation.isPending ? (
                                <Loader2 className="w-7 h-7 text-[#23C7ED] animate-spin" />
                            ) : (
                                <ImagePlus className="w-7 h-7 text-[#9A9A9A]" />
                            )}
                            <p className="text-xs text-[#9A9A9A]">
                                {uploadMutation.isPending ? "Upload..." : "Ajouter"}
                            </p>
                        </button>
                    </div>
                </section>

                {/* ── Erreur + Actions ── */}
                {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <div className="flex justify-between items-center pb-8">
                    <button
                        onClick={() => navigate(`/dashboard/cagnottes/${id}`)}
                        className="border-2 border-[#D9DFE7] px-7 py-3 text-sm font-semibold text-[#495460] rounded-full hover:bg-[#F3F5F7] transition"
                    >
                        Annuler
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={mutation.isPending}
                        className="bg-[#23C7ED] px-7 py-3 text-sm font-semibold text-white rounded-full disabled:opacity-40 hover:opacity-90 transition"
                    >
                        {mutation.isPending ? "Enregistrement..." : "Enregistrer les modifications"}
                    </button>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default EditCagnotte
