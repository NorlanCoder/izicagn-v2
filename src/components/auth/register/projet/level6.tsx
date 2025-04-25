

const Level6 = () => {
    return (
        <div className="mt-20 w-full">
            <h2 className="text-[32px] text-[#0E0E18] ">Retour sur investissement</h2>
            <p className="text-[15px] text-[#8296A3] ">Précisez ce que les investisseurs recevront en échange de leur participation</p>

            <div className="mt-10 w-full">
                <label htmlFor="gain" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Gain des investisseurs</label>
                <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3 flex flex-row items-center px-[19px]">
                    {/* <input type="text" name="price" placeholder="----" className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" /> */}
                    <select name="gain" id="gain" className=" w-full h-full py-[22px] rounded-[12px] focus:border-none focus:outline-0">
                        <option value="">Sélectionnez</option>
                        <option value="Actions">Actions</option>
                        <option value="Obligations">Obligations</option>
                        <option value="Prêts ou dettes convertibles">Prêts ou dettes convertibles</option>
                        <option value="Participation au capital">Participation au capital</option>
                    </select>
                </div>
            </div>

            <div className="mt-10 w-full">
                <label htmlFor="investissement" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Investissement minimum</label>
                <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3 flex flex-row items-center">
                    <input type="number" name="investissement" id="investissement" placeholder="----" className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" />
                    <p className="text-white uppercase bg-[#95A3B0] rounded-[13px] p-2 relative right-3 font-bold ">fcfa</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-[#8B8B8B] text-[13px]">Il semble que vous êtes au Bénin, votre devise est FCFA(XOF).<span className="font-bold underline text-black"> Changer de pays et/ou devise.</span></p>
                </div>
            </div>

            <button className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full mt-10 absolute right-0 cursor-pointer hover:scale-105 transition">Continuer</button>
                
        </div>
    )
}

export default Level6