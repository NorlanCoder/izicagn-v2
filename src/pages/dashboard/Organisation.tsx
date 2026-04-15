import { useState } from "react"
import DashboardLayout from "../../components/dashboard/DashboardLayout"
import ProfileTab from "../../components/dashboard/acount/ProfileTab"
import KycTab from "../../components/dashboard/acount/KycTab"
import PayoutTab from "../../components/dashboard/acount/PayoutTab"

const DashboardOrganisation = () => {

    const [activeTab, setActiveTab] = useState("profile")

    const tabs = [
        { id: "profile", label: "Profil" },
        { id: "kyc", label: "Vérification KYC" },
        { id: "payout", label: "Moyens de reversement" },
    ]

    return (
        <DashboardLayout title="Compte">
            <div className="">

                <h1 className="text-2xl font-semibold text-[#0E405D] mb-6">
                    Mon compte
                </h1>

                {/* Tabs header */}
                <div className="flex gap-6  mb-6">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-3 px-4 text-sm font-semibold uppercase transition
                                ${activeTab === tab.id
                                    ? "border-b-2 border-[#00BCD4] text-[#024442]"
                                    : "text-[#B1B5B9] hover:text-[#0E405D]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tabs content */}
                {activeTab === "profile" && <ProfileTab />}
                {activeTab === "kyc" && <KycTab />}
                {activeTab === "payout" && <PayoutTab />}

            </div>
        </DashboardLayout>
    )
}

export default DashboardOrganisation