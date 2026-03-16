import DashboardLayout from "../../components/dashboard/DashboardLayout"

const DashboardSolde = () => {
    return (
        <DashboardLayout title="Solde">
            <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0E405D] mb-2">
                    Page Solde en construction
                </h2>
                <p className="text-sm md:text-base text-[#6F7886] max-w-md">
                    Vous pourrez bientôt consulter le solde de votre portefeuille izicagn
                    directement depuis cette page.
                </p>
            </div>
        </DashboardLayout>
    )
}

export default DashboardSolde

