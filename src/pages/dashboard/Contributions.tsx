import DashboardLayout from "../../components/dashboard/DashboardLayout"

const DashboardContributions = () => {
    return (
        <DashboardLayout title="Mes contributions">
            <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0E405D] mb-2">
                    Vous n&apos;avez encore aucune contribution
                </h2>
                <p className="text-sm md:text-base text-[#6F7886] max-w-md">
                    Lorsque vous participerez à des cagnottes, elles apparaîtront ici
                    pour un suivi simple et rapide.
                </p>
            </div>
        </DashboardLayout>
    )
}

export default DashboardContributions

