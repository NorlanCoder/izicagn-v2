import DashboardLayout from "../../components/dashboard/DashboardLayout"

const DashboardReversements = () => {
    return (
        <DashboardLayout title="Reversements">
            <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0E405D] mb-2">
                    Page Reversements en construction
                </h2>
                <p className="text-sm md:text-base text-[#6F7886] max-w-md">
                    Vous pourrez bientôt suivre vos demandes de reversement et leur état
                    de traitement depuis cet espace.
                </p>
            </div>
        </DashboardLayout>
    )
}

export default DashboardReversements

