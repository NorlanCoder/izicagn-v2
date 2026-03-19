import { ReactNode, useState } from "react"
import { Link, NavLink } from "react-router"
import {
    Bell,
    Gift,
    Home,
    Settings,
    Wallet,
    Building2,
    Repeat2,
    Menu,
    X,
    UserCircle2,
    Upload,
} from "lucide-react"
import logo from "/src/assets/Logo-izicagn.svg"
import cagnotteIc from "../../assets/cagnotteic.svg"
import { useAuth } from "../../lib/AuthContext"

type DashboardLayoutProps = {
    title?: string
    children: ReactNode
}

const sidebarSections = [
    {
        id: "main",
        title: "",
        items: [{ id: "accueil", label: "Accueil", to: "/dashboard", icon: Home, iconSrc: undefined }],
    },
    {
        id: "action",
        title: "Mon action",
        items: [
            { id: "cagnottes", label: "Cagnottes", to: "/dashboard/cagnottes", icon: Gift, iconSrc: cagnotteIc },
            {
                id: "contributions",
                label: "Mes contributions",
                to: "/dashboard/contributions",
                icon: Repeat2,
            },
        ],
    },
    {
        id: "wallet",
        title: "Mon portefeuille",
        items: [
            { id: "solde", label: "Solde", to: "/dashboard/solde", icon: Wallet },
            {
                id: "reversements",
                label: "Reversements",
                to: "/dashboard/reversements",
                icon: Repeat2,
            },
        ],
    },
    {
        id: "account",
        title: "Compte",
        items: [
            {
                id: "organisation",
                label: "Mon organisation",
                to: "/dashboard/organisation",
                icon: Building2,
            },
            {
                id: "parametres",
                label: "Paramètres",
                to: "/dashboard/parametres",
                icon: Settings,
            },
        ],
    },
]

const DashboardLayout = ({ title, children }: DashboardLayoutProps) => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const { user } = useAuth()

    const fullName = user ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() : ""
    const email = user?.email ?? ""
    const initials = fullName.charAt(0).toUpperCase()

    return (
        <div className="h-screen w-full bg-[#F6F8FB] overflow-hidden">
            {/* Sidebar fixe totalement à gauche, qui ne scrolle pas */}
            <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 bg-[#F6F8FB] py-6 px-5 flex-col z-30">
                {/* Logo */}
                <div className="mb-6">
                    <Link to="/">
                        <img src={logo} alt="Izicagn" className="h-7 w-auto" />
                    </Link>
                </div>

                {/* Carte utilisateur */}
                <div className="mb-10 h-[62px] rounded-[16px] bg-[#EBF9FF] px-4 py-3 flex items-center space-x-3 border border-[#C1E1F5]">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#000000] overflow-hidden flex items-center justify-center">
                        <span className="text-sm font-semibold text-[#1078EF]">{initials}</span>
                    </div>
                    <div className="flex-1 w-[127px]">
                        <p className="text-[14] font-[800] text-[#000000] line-clamp-1">
                            {fullName}
                        </p>
                        <p className="text-[10px] text-[#5C6F84] font-[400] line-clamp-1">
                            {email}
                        </p>
                    </div>
                    {/* <ChevronDown className="w-4 h-4 text-[#6F7886]" /> */}
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto pr-1 text-sm space-y-5">
                    {sidebarSections.map((section) => (
                        <div key={section.id} className="space-y-2">
                            {section.title && (
                                <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#9AA3B2]">
                                    {section.title}
                                </p>
                            )}
                            <div className="space-y-1">
                                {section.items.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <NavLink
                                            key={item.id}
                                            to={item.to}
                                            end={item.id === "accueil"} // Seul le lien "Accueil" doit être actif sur la route "/dashboard"
                                            className={({ isActive }) =>
                                                [
                                                    "flex items-center p-[10px] rounded-[10px] transition-colors",
                                                    isActive
                                                        ? "bg-[#68E0F8] text-[#001829] font-semibold"
                                                        : "text-[#495460] hover:bg-[#68E0F8]",
                                                ].join(" ")
                                            }
                                        >
                                            <span className="mr-1 flex h-7 w-7 items-center justify-center text-[#495460]">
                                                {item.iconSrc
                                                    ? <img src={item.iconSrc} className="w-4 h-4" alt="" />
                                                    : <Icon className="w-4 h-4" />}
                                            </span>
                                            <span className="text-[15px] font-medium">
                                                {item.label}
                                            </span>
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                <div className="pt-4 text-[11px] text-[#9AA3B2]">
                    <p>
                        Gérez vos cagnottes, contributions et reversements en toute
                        simplicité.
                    </p>
                </div>
            </aside>

            {/* Sidebar mobile en overlay */}
            {mobileSidebarOpen && (
                <div className="fixed inset-0 z-40 flex md:hidden">
                    <div className="w-64 bg-[#F6F8FB] py-6 px-5 flex flex-col shadow-xl">
                        <div className="flex items-center justify-between mb-6">
                            <Link to="/" onClick={() => setMobileSidebarOpen(false)}>
                                <img src={logo} alt="Izicagn" className="h-7 w-auto" />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileSidebarOpen(false)}
                                className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow"
                            >
                                <X className="w-4 h-4 text-[#495460]" />
                            </button>
                        </div>

                        <div className="mb-6 rounded-[16px] bg-[#EBF9FF] px-4 py-3 flex items-center space-x-3 border border-[#C1E1F5]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#000000] overflow-hidden flex items-center justify-center">
                                <span className="text-sm font-semibold text-[#1078EF]">{initials}</span>
                            </div>
                            <div className="flex-1 w-[127px]">
                                <p className="text-[14] font-[800] text-[#000000] line-clamp-1">
                                    {fullName}
                                </p>
                                <p className="text-[10px] text-[#5C6F84] font-[400] line-clamp-1">
                                    {email}
                                </p>
                            </div>
                        </div>

                        <nav className="flex-1 overflow-y-auto pr-1 text-sm space-y-5">
                            {sidebarSections.map((section) => (
                                <div key={section.id} className="space-y-2">
                                    {section.title && (
                                        <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#9AA3B2]">
                                            {section.title}
                                        </p>
                                    )}
                                    <div className="space-y-1">
                                        {section.items.map((item) => {
                                            const Icon = item.icon
                                            return (
                                                <NavLink
                                                    key={item.id}
                                                    to={item.to}
                                                    onClick={() => setMobileSidebarOpen(false)}
                                                    className={({ isActive }) =>
                                                        [
                                                            "flex items-center p-[10px] rounded-[10px] transition-colors",
                                                            isActive
                                                                ? "bg-[#68E0F8] text-[#001829] font-semibold"
                                                                : "text-[#495460] hover:bg-[#68E0F8]",
                                                        ].join(" ")
                                                    }
                                                >
                                                    <span className="mr-1 flex h-7 w-7 items-center justify-center text-[#495460]">
                                                        {item.iconSrc
                                                            ? <img src={item.iconSrc} className="w-4 h-4" alt="" />
                                                            : <Icon className="w-4 h-4" />}
                                                    </span>
                                                    <span className="text-[15px] font-medium">
                                                        {item.label}
                                                    </span>
                                                </NavLink>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Overlay sombre cliquable pour fermer */}
                    <button
                        type="button"
                        className="flex-1 bg-black/30"
                        onClick={() => setMobileSidebarOpen(false)}
                    />
                </div>
            )}

            {/* Colonne principale (navbar fixe + contenu scrollable) */}
            <div className="h-full md:pl-64 flex flex-col bg-[#FFFFFF]">
                {/* Navbar du dashboard, fixée en haut */}
                <header className="fixed top-0 left-0 right-0 md:left-64 bg-white z-20 shadow-sm">
                    <div className="flex flex-row flex-nowrap items-center justify-between gap-3 px-4 lg:px-8 py-4">
                        {/* Bloc titre + menu mobile */}
                        <div className="flex items-center gap-3 md:w-auto shrink-0">
                            <button
                                type="button"
                                className="md:hidden w-9 h-9 rounded-full bg-white border border-[#E1E5EB] flex items-center justify-center text-[#495460] shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
                                onClick={() => setMobileSidebarOpen(true)}
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <h1 className="text-[16px] md:text-base font-semibold text-[#6E777E] tracking-[-0.04em] uppercase truncate">
                                {title || "Tableau de bord"}
                            </h1>
                        </div>

                        {/* Espace flexible au centre (et KYC en version desktop seulement) */}
                        <div className="flex-1 min-w-0 hidden md:flex justify-center md:px-4">
                            <div className="w-full md:w-[600px] lg:w-[700px] bg-gradient-to-r from-[#FDF0EE] to-[#FFFAF9] text-[#A35A15] rounded-full border border-[#FBBEB8] shadow-sm px-4 py-[8px] flex flex-row items-center justify-between gap-2">
                                <p className="text-[12px] text-[#1E2224] font-[400] mr-2 truncate">
                                    <span className="font-semibold">Téléversez vos documents</span>{" "}
                                    d&apos;identité pour finaliser votre inscription
                                </p>
                                <button className="ml-2 px-[8px] py-[6px] rounded-full bg-[#001829] text-white text-[12px] font-semibold whitespace-nowrap flex items-center justify-center shrink-0">
                                    <Upload className="w-4 h-4 mr-2" />
                                    <span>Téléverser</span>
                                </button>
                            </div>
                        </div>

                        {/* Icônes à droite */}
                        <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
                            {/* Icône KYC seule sur mobile */}
                            <button
                                type="button"
                                className="md:hidden w-[36px] h-[36px] rounded-full bg-[#FDF0EE] border border-[#FBBEB8] flex items-center justify-center text-[#A35A15]"
                            >
                                <Upload className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full bg-[#110C22]/5 border border-[#110C22]/12 flex items-center justify-center text-[#4F4B5C] shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
                            >
                                <Bell className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full bg-[#110C22]/5 border border-[#110C22]/12 overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex items-center justify-center"
                            >
                                <UserCircle2 className="w-5 h-5 text-[#6F7886]" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Contenu qui scrolle sous la navbar */}
                <main className="flex-1 px-4 lg:px-8 pt-[112px] pb-6 overflow-y-auto">
                    <div className="bg-white rounded-3xl border border-[#F8FBFB] p-4 sm:p-6 md:p-8 h-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout

