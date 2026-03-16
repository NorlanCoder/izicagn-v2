import DashboardLayout from "../../components/dashboard/DashboardLayout"

const DashboardHome = () => {
    return (
        <DashboardLayout title="Tableau de bord">
            <div className="space-y-6">
                <div>
                    <h2 className="text-lg md:text-xl font-semibold text-[#0E405D]">
                        Bienvenue sur votre espace izicagn
                    </h2>
                    <p className="text-sm md:text-base text-[#6F7886] max-w-xl mt-2">
                        Suivez ici vos cagnottes, contributions, reversements et gérez
                        votre organisation en toute simplicité.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-[#E4E8EE] bg-[#F8FBFF] p-4">
                        <p className="text-xs uppercase text-[#9AA3B2] mb-1">
                            Cagnottes actives
                        </p>
                        <p className="text-2xl font-semibold text-[#0E405D]">0</p>
                    </div>
                    <div className="rounded-2xl border border-[#E4E8EE] bg-[#F8FFFB] p-4">
                        <p className="text-xs uppercase text-[#9AA3B2] mb-1">
                            Montant collecté
                        </p>
                        <p className="text-2xl font-semibold text-[#0E405D]">
                            0 €
                        </p>
                    </div>
                    <div className="rounded-2xl border border-[#E4E8EE] bg-[#FFF8F2] p-4">
                        <p className="text-xs uppercase text-[#9AA3B2] mb-1">
                            Contributions
                        </p>
                        <p className="text-2xl font-semibold text-[#0E405D]">0</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default DashboardHome

