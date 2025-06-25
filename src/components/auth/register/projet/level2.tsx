

const Level2 = ({ changeLevel }: { changeLevel: () => void }) => {
    return (
        <div className="mt-20">
            <h2 className="text-[32px] text-[#0E0E18] ">Présentez votre projet</h2>
            <p className="text-[15px] text-[#8296A3] ">Présentez la personne, l’équipe ou l'organisation à l'origine de cette initiative, pour que vos soutiens en sachent plus sur votre engagement et vos ambitions</p>

            <div className="mt-10">
                <label htmlFor="nom" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Nom du projet</label>
                <div className="w-full bg-[#F5F8FB] rounded-[12px] mb-3">
                    <input type="text" name="nom" placeholder="----" className=" w-full h-full py-[22px] px-[19px] rounded-[18px] focus:border-none focus:outline-0 placeholder:text-[##A8ACB2]" />
                </div>
            </div>

            <button onClick={changeLevel} className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full absolute bottom-14 right-0 cursor-pointer hover:scale-105 transition">Continuer</button>
                
        </div>
    )
}

export default Level2