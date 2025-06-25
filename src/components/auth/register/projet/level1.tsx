import Chevron from "../../../../assets/auth/Chevron.svg"

const Level1 = ({ changeLevel }: { changeLevel: () => void }) => {
    return (
        <div className="mt-20 w-full">
            <h2 className="text-[32px] text-[#0E0E18] font-bold max-w-[551px] ">Commençons par <span className=" text-[#FD8352]">configurer votre projet.</span></h2>
            <p className="text-[15px] text-[#8296A3] ">Sélectionnez la catégorie et la sous-catégorie principales de votre projet.</p>

            <div className="mt-10 w-full flex flex-col md:flex-row space-x-10">
                <div className="w-full md:w-1/2">
                    <label htmlFor="catégorie" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Catégorie</label>
                    <div className="relative bg-[#F5F8FB] rounded-[18px] mb-3 flex flex-row items-center px-[19px]">
                        {/* <input type="text" name="price" placeholder="----" className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" /> */}
                        <select
                            name="catégorie"
                            id="catégorie"
                            className="my_select w-full h-full py-[22px] rounded-[18px] focus:border-none focus:outline-0 text-[##A8ACB2]"
                        >
                            <option value="">Sélectionnez</option>
                            <option value="Art et Culture">Art et Culture</option>
                            <option value="Agriculture et Agrobusiness">Agriculture et Agrobusiness</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Énergies">Énergies</option>
                            <option value="Environnement">Environnement</option>
                            <option value="Éducation">Éducation</option>
                            <option value="Immobilier">Immobilier</option>
                            <option value="Mode">Mode</option>
                            <option value="Technologie">Technologie</option>
                            <option value="Santé et Bien-être">Santé et Bien-être</option>
                            <option value="Services">Services</option>
                        </select>

                        <div className="absolute right-5 pointer-events-none">
                            <img src={Chevron} alt="" />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <label htmlFor="sous-catégorie" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Sous-catégorie</label>
                    <div className="bg-[#F5F8FB] rounded-[18px] mb-3 flex flex-row items-center px-[19px]">
                        {/* <input type="text" name="price" placeholder="----" className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" /> */}
                        <select name="sous-catégorie" id="sous-catégorie" className="my_select w-full h-full py-[22px] rounded-[18px] focus:border-none focus:outline-0">
                            <option value="">Sélectionnez</option>
                            <option value="Services">Services</option>
                            <option value="Projet cinématographiques">Projet cinématographiques</option>
                            <option value="Projet audiovisuel">Projet audiovisuel</option>
                        </select>

                        <div className="absolute right-5 pointer-events-none">
                            <img src={Chevron} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <button onClick={changeLevel} className="bg-[#23C7ED] px-[34px] py-[16px] mt-48 text-white rounded-full absolute right-0 cursor-pointer hover:scale-105 transition">Continuer</button>
                
        </div>
    )
}

export default Level1