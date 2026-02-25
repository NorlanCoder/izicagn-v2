import Question from "../../../../assets/auth/Question.svg"


const Level5 = ({ changeLevel , previousLevel } : { changeLevel: () => void; previousLevel: () => void }) => {
    return (
        <div className="mt-20 w-full">
            <h2 className="text-[32px] text-[#0E0E18] ">Détails financiers</h2>
            <p className="text-[15px] text-[#8296A3] ">Sélectionnez le pays d'identification fiscale de votre entreprise</p>

            <div className="mt-10 w-full">
                <label htmlFor="price" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Montant visé</label>
                <div className="w-full bg-[#F5F8FB] rounded-[12px] mb-3 flex flex-row items-center">
                    <input type="text" name="price" placeholder="----" className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" />
                    <p className="text-white uppercase bg-[#95A3B0] rounded-[13px] p-2 relative right-3 font-bold ">fcfa</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-[#FF8364] text-[13px]">Montant final estimé : <span className="font-bold">475.000 Fcfa</span></p>
                    <div className="flex items-center space-x-1 text-[13px] ">
                        <img src={Question} alt="" />
                        <span>Quels sont les tarifs ?</span>
                    </div>
                </div>
            </div>

            <div className="mt-10 w-full">
                <label htmlFor="description" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Expliquez comment vous comptez utiliser l'argent levé</label>
                <div className="w-full bg-[#F5F8FB] rounded-[12px] mb-3">
                    <textarea name="description" id="" placeholder="Description courte" rows={4} className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"></textarea>
                    {/* <input type="text" name="price" placeholder="----"  /> */}
                </div>
            </div>
            
            <div className="flex justify-center md:justify-end items-center gap-4 bottom-14 pt-32 right-0">
                <button onClick={previousLevel} className="border-2 border-[#D9DFE7CC] md:px-[34px] px-[20px] py-[16px] text-black font-semibold rounded-full hover:scale-105 transition">
                    Précédent
                </button>
            <button onClick={changeLevel} className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full cursor-pointer hover:scale-105 transition">Continuer</button>
            </div>
            
                
        </div>
    )
}

export default Level5