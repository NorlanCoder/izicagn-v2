

const Level7 = ({ changeLevel , previousLevel } : { changeLevel: () => void; previousLevel: () => void }) => {
    return (
        <div className="mt-20">
            <div className='max-w-[560px] pb-8 space-y-8'>
                <h2 className="text-[32px] text-[#0E0E18] font-semibold">Vous y êtes presque !</h2>
                <p className="text-[15px] text-[#8296A3] font-semibold">Votre cagnotte sera bientôt disponible ! Créez vos identifiants pour accéder</p>
            </div>

            <form className="space-y-4  mx-auto">
            <div className="flex space-x-4">
                <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="date"
                name="date_naissance"
                placeholder="Date de naissance"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <h3 className="font-semibold mt-6">Créez un mot de passe sécurisé</h3>

            <input
                type="password"
                name="password"
                placeholder="Entrez le mot de passe"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="password"
                name="password_confirmation"
                placeholder="Confirmez votre mot de passe"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </form>

           
    
            <div className="flex justify-end items-center md:gap-4 gap-12 pt-18 bottom-8 md:bottom-14 right-0">
                    <button onClick={previousLevel} className="border-2 border-[#D9DFE7CC] md:px-[34px] md:py-[16px] text-black font-semibold rounded-full hover:scale-105 transition">
                         Précédent
                    </button>

                    <button onClick={changeLevel} className="bg-[#23C7ED] md:px-[34px] md:py-[16px] text-white rounded-full hover:scale-105 transition">
                        Continuer
                    </button>
            </div>
                
        </div>
    )
}

export default Level7