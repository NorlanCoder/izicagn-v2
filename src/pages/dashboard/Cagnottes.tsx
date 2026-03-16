import DashboardLayout from "../../components/dashboard/DashboardLayout"

const DashboardCagnottes = () => {
    return (
        <DashboardLayout title="Mes cagnottes">
            <div className="flex flex-col items-center justify-center text-center py-12 md:py-20">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#E9F9FF] flex items-center justify-center mb-8">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] flex items-center justify-center">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#23C7ED] border-dashed flex items-center justify-center">
                            <span className="text-[#23C7ED] font-semibold text-sm">
                                €
                            </span>
                        </div>
                    </div>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold text-[#0E405D] mb-3">
                    Vous n&apos;avez encore créé aucune cagnotte
                </h2>
                <p className="text-sm md:text-base text-[#6F7886] max-w-md mb-8">
                    Créez votre première cagnotte pour collecter des fonds pour une
                    cause, un proche ou un projet personnel.
                </p>

                <button className="px-6 md:px-8 py-3 rounded-full bg-[#23C7ED] text-white font-semibold text-sm md:text-base shadow-[0_10px_20px_rgba(35,199,237,0.35)] hover:shadow-none transition-shadow">
                    Créer une cagnotte
                </button>
            </div>
        </DashboardLayout>
    )
}

export default DashboardCagnottes

