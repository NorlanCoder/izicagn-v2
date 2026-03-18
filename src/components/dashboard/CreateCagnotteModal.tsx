import { useRef, useState } from "react"
import { X, MapPin, Calendar, Plus, Trash2, ImagePlus, Loader2 } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moiMemeIcon from "/src/assets/cagnotte/moi-meme.png"
import communote from "/src/assets/cagnotte/communote.png"
import peojet from "/src/assets/cagnotte/projet.png"
import { useCreateCagnotteMutation, useTagsQuery, useUploadFilesMutation, type ContrepartiePayload } from "../../features/pot/mutations"


const TOTAL_STEPS = 7

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
    {
        value: "FOR_ME",
        label: "Pour moi-même",
        description: "Vous collectez des fonds pour un projet ou pour répondre à vos urgences personnels.",
        icon: <img src={moiMemeIcon} alt="" className="w-12 h-12" />,
    },
    {
        value: "FOR_COMMUNITY",
        label: "Pour une communauté ou une association",
        description: "Vous collectez des fonds au nom d'une organisation caritative.",
        icon: <img src={communote} alt="" className="w-12 h-12" />,
    },
    {
        value: "FOR_PROJECT",
        label: "Pour un projet",
        description: "Vous collectez des fonds pour un projet qui bénéficiera à votre communauté.",
        icon: <img src={peojet} alt="" className="w-12 h-12" />,
    },
]

interface Props {
    onClose: () => void
    onSuccess: () => void
}

const CreateCagnotteModal = ({ onClose, onSuccess }: Props) => {
    const [step, setStep] = useState(1)

    // Form state
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

    const mutation = useCreateCagnotteMutation()
    const { data: tagsData, isLoading: tagsLoading } = useTagsQuery()
    const uploadMutation = useUploadFilesMutation()

    const next = () => { setError(""); setStep((s) => s + 1) }
    const prev = () => { setError(""); setStep((s) => s - 1) }

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
            // Previews locaux
            Array.from(files).forEach((file) => {
                const reader = new FileReader()
                reader.onload = (ev) => {
                    if (ev.target?.result) {
                        setImagePreviews((prev) => [...prev, ev.target!.result as string])
                    }
                }
                reader.readAsDataURL(file)
            })
        } catch {
            setError("Erreur lors de l'upload des images.")
        }
        // Reset input
        if (fileInputRef.current) fileInputRef.current.value = ""
    }

    const removeImage = (i: number) => {
        setImages((prev) => prev.filter((_, idx) => idx !== i))
        setImagePreviews((prev) => prev.filter((_, idx) => idx !== i))
    }

    const handleSubmit = async () => {
        if (!startDate || !endDate) {
            setError("Veuillez renseigner les dates.")
            return
        }
        setError("")
        try {
            await mutation.mutateAsync({
                reason,
                tags,
                country,
                city,
                title,
                description,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                financialObject: Number(financialObject),
                currency,
                images,
                contreparties: contreparties.filter((c) => c.title.trim()),
            })
            onSuccess()
        } catch (err) {
            setError(err instanceof Error ? err.message : "Une erreur est survenue.")
        }
    }

    const progressPercent = Math.round((step / TOTAL_STEPS) * 100)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-8 pt-7 pb-4 border-b border-[#F3F5F7] shrink-0">
                    <div>
                        <p className="text-xs font-semibold text-[#9AA3B2] uppercase tracking-widest mb-1">
                            Étape {step} / {TOTAL_STEPS}
                        </p>
                        <div className="w-48 h-1.5 bg-[#F3F5F7] rounded-full">
                            <div
                                className="h-1.5 bg-[#23C7ED] rounded-full transition-all"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-full bg-[#F3F5F7] flex items-center justify-center hover:bg-[#E5E7EB] transition"
                    >
                        <X className="w-4 h-4 text-[#495460]" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-8 py-6">

                    {/* Step 1 — Raison + Tags */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#0E0E18]">
                                    <span className="text-[#FD8352]">Pour</span> quoi collectez-vous des fonds ?
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {REASON_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setReason(opt.value)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition text-left ${
                                            reason === opt.value
                                                ? "border-[#23C7ED] bg-[#E9F9FF]"
                                                : "border-[#F3F5F7] bg-[#F3F5F7] hover:border-[#23C7ED]"
                                        }`}
                                    >
                                        {opt.icon}
                                        <div>
                                            <p className="font-semibold text-[#0E0E18]">{opt.label}</p>
                                            <p className="text-xs text-[#8296A3] mt-0.5">{opt.description}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            {reason && (
                                <div>
                                    <p className="text-sm font-semibold text-[#0E0E18] mb-3">
                                        Sélectionnez les termes qui décrivent votre objectif
                                    </p>
                                    {tagsLoading ? (
                                        <div className="flex items-center gap-2 text-sm text-[#8296A3]">
                                            <Loader2 className="w-4 h-4 animate-spin" /> Chargement des tags...
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
                        </div>
                    )}

                    {/* Step 2 — Zone géographique */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#0E0E18]">
                                    <span className="text-[#FD8352]">Indiquez où</span> l'action de votre cagnotte aura lieu
                                </h2>
                                <p className="text-sm text-[#8296A3] mt-1">Cela peut encourager les donateurs locaux à vous soutenir.</p>
                            </div>
                            <div className="space-y-3">
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
                        </div>
                    )}

                    {/* Step 3 — Titre + description */}
                    {step === 3 && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#0E0E18]">
                                    <span className="text-[#FD8352]">Expliquez</span> votre besoin aux héros
                                </h2>
                                <p className="text-sm text-[#8296A3] mt-1">
                                    Racontez l'histoire derrière votre cagnotte de façon claire.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-[#F3F5F7] rounded-2xl">
                                    <input
                                        type="text"
                                        placeholder="Nom de la cagnotte"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full py-5 px-5 rounded-2xl focus:outline-none bg-transparent"
                                    />
                                </div>
                                <div className="bg-[#F3F5F7] rounded-2xl">
                                    <textarea
                                        placeholder="Description"
                                        rows={4}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full py-5 px-5 rounded-2xl focus:outline-none bg-transparent resize-none"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4 — Dates */}
                    {step === 4 && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#0E0E18]">
                                    <span className="text-[#FD8352]">Quand</span> souhaitez-vous démarrer votre collecte ?
                                </h2>
                            </div>
                            <div className="space-y-4">
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
                        </div>
                    )}

                    {/* Step 5 — Montant */}
                    {step === 5 && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#0E0E18]">
                                    <span className="text-[#FD8352]">Combien</span> espérez-vous collecter ?
                                </h2>
                                <p className="text-sm text-[#8296A3] mt-1 font-semibold">Soyez réaliste mais ambitieux</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-[#0E0E18] mb-2 block">Montant visé</label>
                                <div className="flex items-center bg-[#F3F5F7] rounded-2xl overflow-hidden">
                                    <input
                                        type="number"
                                        placeholder="Ex: 100000"
                                        value={financialObject}
                                        onChange={(e) => setFinancialObject(e.target.value)}
                                        className="w-full py-5 px-5 bg-transparent focus:outline-none text-gray-700"
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
                        </div>
                    )}

                    {/* Step 6 — Contreparties */}
                    {step === 6 && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#0E0E18]">
                                    <span className="text-[#FD8352]">Offrez plus</span> qu'un simple merci
                                </h2>
                                <p className="text-sm text-[#8296A3] mt-1 font-semibold">
                                    Choisissez des récompenses à offrir à vos donateurs (facultatif)
                                </p>
                            </div>
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
                        </div>
                    )}

                    {/* Step 7 — Images */}
                    {step === 7 && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#0E0E18]">Présentez votre projet</h2>
                                <p className="text-sm text-[#8296A3] mt-1">
                                    Ajoutez des photos pour montrer un aperçu de vos activités.
                                </p>
                            </div>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handleImageUpload}
                            />

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                                        <Loader2 className="w-8 h-8 text-[#23C7ED] animate-spin" />
                                    ) : (
                                        <ImagePlus className="w-8 h-8 text-[#9A9A9A]" />
                                    )}
                                    <p className="text-xs text-[#9A9A9A]">
                                        {uploadMutation.isPending ? "Upload..." : "Ajouter une image"}
                                    </p>
                                </button>
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-8 py-5 border-t border-[#F3F5F7] flex justify-between items-center shrink-0">
                    <button
                        onClick={step === 1 ? onClose : prev}
                        className="border-2 border-[#D9DFE7] px-7 py-3 text-sm font-semibold text-[#495460] rounded-full hover:bg-[#F3F5F7] transition"
                    >
                        {step === 1 ? "Annuler" : "Précédent"}
                    </button>

                    {step === 6 && (
                        <button
                            onClick={next}
                            className="text-sm text-[#6E98A3] font-semibold mr-2"
                        >
                            Ignorer →
                        </button>
                    )}

                    {step < TOTAL_STEPS ? (
                        <button
                            onClick={next}
                            disabled={step === 1 && !reason}
                            className="bg-[#23C7ED] px-7 py-3 text-sm font-semibold text-white rounded-full disabled:opacity-40 hover:opacity-90 transition"
                        >
                            Continuer
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={mutation.isPending}
                            className="bg-[#23C7ED] px-7 py-3 text-sm font-semibold text-white rounded-full disabled:opacity-40 hover:opacity-90 transition"
                        >
                            {mutation.isPending ? "Création..." : "Créer la cagnotte"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreateCagnotteModal
