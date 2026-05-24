import { useState, useEffect, useMemo } from "react"
import { useNavigate, useLocation } from "react-router"
import Footer from "../../components/general/footer"
import ImgDeco from '../../assets/imgdeco.png'
import WinIcon from '../../assets/goal.png'
import Navbar from "../../components/general/navbar"
import { useAuth } from "../../lib/AuthContext"
import {
    useDonatePublicMutation,
    useDonateAuthMutation,
    usePublicPotDetailQuery,
    useCountriesQuery,
    useTelecomsQuery,
} from "../../features/pot/mutations"

const PRESET_AMOUNTS = [10000, 20000, 50000, 100000]

const FormPayment = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { isAuthenticated, user } = useAuth()

    const state = location.state as { potId?: string; amount?: number } | null
    const potId = state?.potId ?? ""
    const prefilledAmount = state?.amount ?? null
    const { data: pot } = usePublicPotDetailQuery(potId)
    const { data: countriesData } = useCountriesQuery()

    const collectedAmount = pot?.collectedAmount ?? 0
    const financialObject = Number(pot?.financialObject) || 0
    const remaining = Math.max(0, financialObject - collectedAmount)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [anonymous, setAnonymous] = useState(false)
    const [isOrganization, setIsOrganization] = useState(false)
    const isPreset = prefilledAmount !== null && PRESET_AMOUNTS.includes(prefilledAmount)
    const [selectedAmount, setSelectedAmount] = useState<number | null>(isPreset ? prefilledAmount : null)
    const [customAmount, setCustomAmount] = useState(!isPreset && prefilledAmount ? String(prefilledAmount) : "")
    const [message, setMessage] = useState("")
    const [operator, setOperator] = useState("")
    const [country, setCountry] = useState("BJ")
    const [paymentPhone, setPaymentPhone] = useState("")
    const [acceptTerms, setAcceptTerms] = useState(false)

    // Trouve le countryId à partir du countryCode sélectionné
    const selectedCountry = useMemo(
        () => countriesData?.data.find((c) => c.countryCode === country),
        [countriesData, country]
    )

    // Devise = celle du pays sélectionné (pas celle de la cagnotte)
    const currency = selectedCountry?.currency ?? pot?.currency ?? "XOF"
    const { data: telecomsData } = useTelecomsQuery()

    // Filtrage côté client : telecoms du pays sélectionné
    const telecoms = useMemo(
        () => (telecomsData?.data ?? []).filter((t) => t.country.id === selectedCountry?.id),
        [telecomsData, selectedCountry]
    )

    // Quand les telecoms changent, reset l'opérateur sur le premier disponible
    useEffect(() => {
        if (telecoms.length > 0) {
            setOperator(telecoms[0].operatorCode)
        }
    }, [telecoms])

    useEffect(() => {
        if (isAuthenticated && user) {
            setFirstName(user.firstName as string ?? "")
            setLastName(user.lastName as string ?? "")
            setEmail(user.email as string ?? "")
            setPhone(user.phone as string ?? "")
        }
    }, [isAuthenticated, user])

    useEffect(() => {
        if (pot?.country) setCountry(pot.country)
    }, [pot])

    const donatePublic = useDonatePublicMutation()
    const donateAuth = useDonateAuthMutation()
    const donateMutation = isAuthenticated ? donateAuth : donatePublic

    const finalAmount = customAmount ? Number(customAmount) : (selectedAmount ?? 0)

    // L'API n'accepte que XOF, USD, EUR — normalisation des autres devises africaines
    const ACCEPTED_CURRENCIES = ["XOF", "USD", "EUR"]
    const payloadCurrency = ACCEPTED_CURRENCIES.includes(currency) ? currency : "XOF"

    const handleSubmit = () => {
        if (!potId || finalAmount <= 0 || !paymentPhone || !operator) return
        donateMutation.mutate(
            {
                potId,
                firstName,
                lastName,
                email,
                phone,
                anonymous,
                isOrganization,
                amount: finalAmount,
                currency: payloadCurrency,
                message,
                operator,
                country,
                paymentPhone,
            },
            {
                onSuccess: () =>
                    navigate("/cagnotte/paiement/success", { state: { pot }, replace: true }),
            }
        )
    }

    return (
        <div className='px-5 w-full'>
            <Navbar />

            <section className="pt-24 mb-8 flex flex-col items-center gap-y-4">

                {/* Resume Block */}
                <div className="flex sm:flex-row flex-col items-center sm:space-y-0 space-y-5 sm:space-x-5 p-[20px] md:w-[699px] border border-[#EDEDF3] rounded-[17px] shadow shadow-[#1929470A]">
                    <img
                        src={pot?.images?.[0] ?? ImgDeco}
                        className="sm:w-[165px] w-1/2 h-[123px] rounded-[17px] object-cover"
                        alt="Cagnotte Image Resume"
                    />
                    <div className="flex flex-col space-y-2 justify-evenly">
                        <p className="text-[#858585] text-[13px]">
                            Vous allez soutenir{" "}
                            <span className="text-black font-bold">
                                {pot?.person ? `${pot.person.firstName} ${pot.person.lastName}` : "—"}
                            </span>{" "}
                            dans la cause :
                        </p>
                        <h1 className="text-[22px] font-bold">{pot?.title ?? "—"}</h1>
                        {pot?.city && (
                            <p className="text-[#858585] text-[13px]">
                                {pot.city}{pot.country ? `, ${pot.country}` : ""}
                            </p>
                        )}
                    </div>
                </div>

                {/* Form */}
                <div className="flex flex-col p-[20px] md:w-[699px] border border-[#EDEDF3] rounded-[17px] shadow shadow-[#1929470A]">

                    {/* Montant */}
                    <div className="mb-5">
                        <h2 className="text-[18px] font-bold mb-2">Montant du don</h2>
                        {financialObject > 0 && (
                            <div className="my-5 bg-[#EEF7FD] rounded-[10px] py-[18px] px-[6px] flex flex-row items-start space-x-3">
                                <div className="w-[42px] h-[42px] rounded-[100px] bg-white flex flex-row justify-center items-center">
                                    <img src={WinIcon} alt="" />
                                </div>
                                <div>
                                    <h2 className="text-[#0C2A8C] text-[14px] font-bold">
                                        {remaining.toLocaleString()} {currency} restant pour atteindre l'objectif
                                    </h2>
                                    <p className="text-[#4C545D] text-[12px]">
                                        Montant visé {financialObject.toLocaleString()} {currency}
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className='flex flex-row flex-wrap gap-3 mb-4'>
                            {PRESET_AMOUNTS.map((preset) => (
                                <button
                                    key={preset}
                                    type="button"
                                    onClick={() => { setSelectedAmount(preset); setCustomAmount("") }}
                                    className={`py-[12px] px-[24px] border rounded-[10px] cursor-pointer text-[15px] font-semibold transition-all ${selectedAmount === preset && !customAmount ? 'bg-[#07AED8] border-[#07AED8] text-white' : 'border-[#E8E8EC] bg-white text-black hover:border-[#07AED8]'}`}
                                >
                                    {preset.toLocaleString()} {currency}
                                </button>
                            ))}
                        </div>
                        <div className='relative mt-10 mb-5'>
                            <div className='w-2/5 h-16 rounded-[18px] border border-[#DFE3E6CC] absolute z-0 left-0 -top-3'></div>
                            <input
                                type="number"
                                value={customAmount}
                                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
                                className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0'
                                placeholder='Autre montant'
                            />
                        </div>
                    </div>

                    {/* Informations personnelles */}
                    <div className="mb-4">
                        <h2 className="text-[18px] font-bold mb-2">Vos informations personnelles</h2>
                        <div className='relative mt-5 mb-5 flex flex-row space-x-4'>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-1/2 relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0'
                                placeholder='Nom'
                            />
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-1/2 relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0'
                                placeholder='Prénoms'
                            />
                        </div>
                        <div className='flex flex-row items-start space-x-2 pl-2 mb-5'>
                            <input
                                type="checkbox"
                                id="entreprise"
                                checked={isOrganization}
                                onChange={(e) => setIsOrganization(e.target.checked)}
                                className='w-[18px] h-[18px] mt-0.5'
                            />
                            <label htmlFor="entreprise" className="text-[13px] cursor-pointer">Je suis une organisation/entreprise</label>
                        </div>
                        <div className='relative mb-5'>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0'
                                placeholder='Email'
                            />
                        </div>
                        <div className='relative mb-5'>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0'
                                placeholder='Téléphone'
                            />
                        </div>
                        <div className='flex flex-row items-start space-x-2 pl-2 mb-2'>
                            <input
                                type="checkbox"
                                id="anonyme"
                                checked={anonymous}
                                onChange={(e) => setAnonymous(e.target.checked)}
                                className='w-[18px] h-[18px] mt-0.5'
                            />
                            <label htmlFor="anonyme" className="text-[13px] cursor-pointer">Je souhaite que mon don reste anonyme sur izicagn</label>
                        </div>
                    </div>

                    {/* Paiement Mobile Money */}
                    <div className="mb-4">
                        <h2 className="text-[18px] font-bold mb-4">Informations de paiement</h2>
                        {/* Pays */}
                        <div className='relative mb-5'>
                            <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full focus:outline-0 cursor-pointer'
                            >
                                {countriesData?.data.map((c) => (
                                    <option key={c.id} value={c.countryCode}>
                                        {c.countryName} ({c.countryCode})
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='relative mb-5'>
                            <input
                                type="tel"
                                value={paymentPhone}
                                onChange={(e) => setPaymentPhone(e.target.value)}
                                className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full relative z-10 hover:outline-3 hover:outline-[#9FEAFD4D] focus:outline-0'
                                placeholder='Numéro Mobile Money'
                            />
                        </div>
                        {/* Opérateur — filtré par pays */}
                        <div className='relative mb-5'>
                            <select
                                value={operator}
                                onChange={(e) => setOperator(e.target.value)}
                                className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full focus:outline-0 cursor-pointer'
                                disabled={telecoms.length === 0}
                            >
                                {telecoms.length === 0 && (
                                    <option value="">Aucun opérateur disponible</option>
                                )}
                                {telecoms.map((t) => (
                                    <option key={t.id} value={t.operatorCode}>
                                        {t.operatorName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='relative mb-5'>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='py-[21px] px-[19px] rounded-[18px] border bg-white border-[#DFE3E6CC] w-full h-[100px] resize-none focus:outline-0 hover:outline-3 hover:outline-[#9FEAFD4D]'
                                placeholder='Message de soutien (optionnel)'
                            />
                        </div>
                    </div>

                    <div className='flex flex-row items-start space-x-2 pl-2 mb-5'>
                        <input
                            type="checkbox"
                            id="information"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            className='w-[18px] h-[18px] mt-0.5'
                        />
                        <label htmlFor="information" className="text-[13px] cursor-pointer">
                            J'accepte de fournir mes informations à cette association pour qu'elle puisse m'informer des autres moyens me permettant d'apporter mon aide. Je comprends que je peux me désabonner à tout moment en contactant l'association.
                        </label>
                    </div>

                    {donateMutation.isError && (
                        <p className="text-red-500 text-sm mb-3">Une erreur est survenue. Veuillez réessayer.</p>
                    )}

                    <div className='flex flex-row mt-5'>
                        <button
                            onClick={handleSubmit}
                            disabled={donateMutation.isPending || finalAmount <= 0 || !paymentPhone || !acceptTerms}
                            className='bg-[#07AED8] disabled:opacity-50 text-white rounded-full w-full font-bold text-[20px] px-[30px] py-[12px] cursor-pointer'
                        >
                            {donateMutation.isPending ? "Envoi en cours..." : "Envoyer mon soutien"}
                        </button>
                    </div>

                    <div className="flex flex-row justify-center mt-4">
                        <p className="md:w-4/5 text-[#37373A] text-center">
                            En confirmant, vous acceptez les <span className="underline">Conditions d'utilisation</span> de Izicagn et reconnaissez notre <span className="underline">Avis de confidentialité</span>.
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center mb-8">
                <div className="flex flex-row items-center justify-center space-x-1">
                    <p className="text-[#37373A] text-center">Comment sont gérés mes dons chez izicagn</p>
                </div>
                <p className="text-[#979797] text-center md:w-2/3 mt-8">
                    Izicagn est un établissement autorisé par .............................. à fournir des services de paiement, en vertu de la réglementation Payment Services Regulations 2017
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default FormPayment
