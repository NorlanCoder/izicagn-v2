import DashboardLayout from "../../components/dashboard/DashboardLayout"

const DashboardOrganisation = () => {
    return (
        <DashboardLayout title="Mon organisation">
            <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0E405D] mb-2">
                    Page Mon organisation en construction
                </h2>
                <p className="text-sm md:text-base text-[#6F7886] max-w-md">
                    Vous pourrez bientôt gérer les informations de votre organisation et
                    de votre profil professionnel ici.
                </p>
            </div>
        </DashboardLayout>
    )
}

export default DashboardOrganisation

