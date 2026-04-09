import { ReactNode, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
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
  TriangleAlert,
} from "lucide-react";
import logo from "/src/assets/Logo-izicagn.svg";
import cagnotteIc from "../../assets/cagnotteic.svg";
import contributionIc from "../../assets/contribution-icon.svg";
import { useAuth } from "../../lib/AuthContext";
import { useLogoutMutation } from "../../features/auth/mutations";

type DashboardLayoutProps = {
  title?: string;
  children: ReactNode;
};

const sidebarSections = [
  {
    id: "main",
    title: "",
    items: [
      {
        id: "accueil",
        label: "Accueil",
        to: "/dashboard",
        icon: Home,
        iconSrc: undefined,
      },
    ],
  },
  {
    id: "action",
    title: "Mon action",
    items: [
      {
        id: "cagnottes",
        label: "Cagnottes",
        to: "/dashboard/cagnottes",
        icon: Gift,
        iconSrc: cagnotteIc,
      },
      {
        id: "contributions",
        label: "Mes contributions",
        to: "/dashboard/contributions",
        icon: Repeat2,
        iconSrc: contributionIc,
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
];

const DashboardLayout = ({ title, children }: DashboardLayoutProps) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [kycBannerVisible, setKycBannerVisible] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();
  const logoutMutation = useLogoutMutation();

  const fullName = user
    ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim()
    : "";
  const email = user?.email ?? "";
  const initials = fullName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch {
      // déconnexion côté client même si l'API échoue
    } finally {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

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
            <span className="text-sm font-semibold text-[#1078EF]">
              {initials}
            </span>
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
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.id}
                      to={item.to}
                      end={item.id === "accueil"}
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
                        {item.iconSrc ? (
                          <img src={item.iconSrc} className="w-4 h-4" alt="" />
                        ) : (
                          <Icon className="w-4 h-4" />
                        )}
                      </span>
                      <span className="text-[15px] font-medium">
                        {item.label}
                      </span>
                    </NavLink>
                  );
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
                <span className="text-sm font-semibold text-[#1078EF]">
                  {initials}
                </span>
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
                      const Icon = item.icon;
                      return (
                        <NavLink
                          key={item.id}
                          to={item.to}
                          end={item.id === "accueil"}
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
                            {item.iconSrc ? (
                              <img
                                src={item.iconSrc}
                                className="w-4 h-4"
                                alt=""
                              />
                            ) : (
                              <Icon className="w-4 h-4" />
                            )}
                          </span>
                          <span className="text-[15px] font-medium">
                            {item.label}
                          </span>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <button
            type="button"
            className="flex-1 bg-black/30"
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>
      )}

      {/* Colonne principale */}
      <div className="h-full md:pl-64 flex flex-col bg-[#FFFFFF]">
        <header className="fixed top-0 left-0 right-0 md:left-64 bg-white z-20 shadow-sm">
          <div className="flex flex-row flex-nowrap items-center justify-between gap-3 px-4 lg:px-8 py-4">
            {/* Titre + menu mobile */}
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

            {/* KYC desktop */}
            {kycBannerVisible && (
              <div className="flex-1 min-w-0 hidden lg:flex justify-center md:px-4">
                <div className="w-full lg:w-[700px] bg-[#FEF3EF] rounded-full border border-[#FBBEB8] px-2 py-1 flex flex-row items-center gap-2">
                  <TriangleAlert className="w-4 h-4 text-[#E65100] shrink-0" />
                  <p className="flex-1 text-[12px] text-[#1E2224] font-[400] truncate">
                    <span className="font-semibold">Téléversez vos documents</span>{" "}
                    d&apos;identité pour vérifier votre compte
                  </p>
                  <button
                    type="button"
                    onClick={() => setKycBannerVisible(false)}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FD8352] shrink-0 shadow-sm hover:bg-orange-50 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Icônes à droite */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
              {/* KYC mobile */}
              {kycBannerVisible && (
                <button
                  type="button"
                  className="lg:hidden w-[36px] h-[36px] rounded-full bg-[#FEF3EF] border border-[#FBBEB8] flex items-center justify-center text-[#E65100]"
                >
                  <TriangleAlert className="w-4 h-4" />
                </button>
              )}

              {/* Cloche */}
              <button
                type="button"
                className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full bg-[#110C22]/5 border border-[#110C22]/12 flex items-center justify-center text-[#4F4B5C] shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
              >
                <Bell className="w-4 h-4" />
              </button>

              {/*  Profile avec dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileMenuOpen((prev) => !prev)}
                  className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full bg-[#000000] overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex items-center justify-center"
                >
                  <span className="text-sm font-semibold text-[#1078EF]">
                    {initials}
                  </span>
                </button>

                {profileMenuOpen && (
                  <>
                    {/* Overlay transparent pour fermer */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setProfileMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-[12px] shadow-lg border border-[#E1E5EB] z-20 overflow-hidden">
                      {/* Infos utilisateur */}
                      <div className="px-4 py-3 border-b border-[#F3F5F7]">
                        <p className="text-[13px] font-semibold text-[#001829] truncate">
                          {fullName}
                        </p>
                        <p className="text-[11px] text-[#5C6F84] truncate">
                          {email}
                        </p>
                      </div>
                      {/* Options */}
                      <div className="py-1">
                        <button
                          type="button"
                          onClick={handleLogout}
                          disabled={logoutMutation.isPending}
                          className="w-full text-left px-4 py-[10px] text-[13px] text-red-500 font-semibold hover:bg-red-50 transition disabled:opacity-50 flex items-center gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                            />
                          </svg>
                          {logoutMutation.isPending
                            ? "Déconnexion..."
                            : "Se déconnecter"}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 lg:px-8 pt-[112px] pb-6 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-[#F8FBFB] p-4 sm:p-6 md:p-8 h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
