
const Level5 = () => {
    return (
        <div className="mt-20">
            <div className='max-w-[560px] pb-18'>
                <h2 className="text-[32px] text-[#0E0E18] font-semibold"><span className='text-[#FD8352]' >Combien</span>  espérez-vous collecter</h2>
                <p className="text-[15px] text-[#8296A3] font-semibold">Soyez réaliste mais ambitieux</p>
            </div>


            <label className='text-[15px] font-semibold' htmlFor="">Montant visé</label>
             <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3 flex flex-row items-center mt-4">
                    <input type="text" name="investissement" id="investissement" placeholder="----" className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" />
                    <p className="text-white uppercase bg-[#95A3B0] rounded-[13px] p-2 relative right-3 font-bold ">fcfa</p>
                </div>
           
            <div className="flex justify-between pt-5 space-y-24">
                <div><p className="text-[13px] text-[#07AED8]">Montant final estimé : <span className="font-semibold">475.000 Fcfa</span></p></div>
                <div className="flex  justify-center"><img className="w-[16px] h-[16px] flex pr-1" src="src/assets/cagnotte/fluent_question-circle-12-regular.png" alt="" /><p className="text-[13px] font-semibold text-[#5F6364]">Quels sont les tarifs ?</p></div>
            </div>


            <div>
                <p className="text-[12px] text-[#8B8B8B]">Il semble que vous êtes au Bénin, votre devise est FCFA(XOF). <span className="text-[#0E0E18] font-bold underline cursor-pointer">Changer de pays et/ou devise.</span></p>
            </div>
    
            <div className="flex justify-end items-center md:gap-4 gap-12 pt-10 bottom-8 md:bottom-14 right-0">
                    <button className="border-2 border-[#D9DFE7CC] md:px-[34px] md:py-[16px] text-black font-semibold rounded-full hover:scale-105 transition">
                         Précédent
                    </button>

                    <button className="bg-[#23C7ED] md:px-[34px] md:py-[16px] text-white rounded-full hover:scale-105 transition">
                        Continuer
                    </button>
            </div>
                
        </div>
    )
}

export default Level5