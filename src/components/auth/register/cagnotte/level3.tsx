

const Level3= () => {
    return (
        <div className="mt-20">
            <h2 className="md:text-[32px] text-[16px] w-36 md:w-full text-[#0E0E18] font-semibold"><span className="text-[#FD8352]">Expliquez</span>  de votre besoin au héros</h2>
            <p className="md:text-[15px] text-[8px] w-36 md:w-full text-[#454A58] pt-6">Racontez l’histoire derrière votre cagnotte de façon claire  pour expliquer aux donateurs pourquoi vous avez besoin de leurs contributions.</p>

            <div className="mt-10">
                <div className="md:w-full w-32 bg-[#F3F5F7] rounded-[12px] mb-3">
                    <input type="text" name="nom" placeholder="Nom de la cagnotte" className=" md:w-full w-32 h-full md:py-[22px] py-[10px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" />
                </div>
            </div>

            <div className="mt-5 w-full">
                <div className="md:w-full w-32 bg-[#F3F5F7] rounded-[12px] mb-3">
                    <textarea  name="description" id="" placeholder="Description"  rows={4} className=" md:w-full w-32 h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"></textarea>
        
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 pt-14 bottom-14 right-0">
                    <button className="border-2 border-[#D9DFE7CC] md:px-[34px] px-[15px] md:py-[24px] py-[8px] text-black font-semibold rounded-full hover:scale-105 transition">
                         Précédent
                    </button>

                    <button className="bg-[#23C7ED] md:px-[34px] px-[15px] md:py-[24px] py-[8px] text-white rounded-full hover:scale-105 transition">
                        Continuer
                    </button>
            </div>
                
        </div>
    )
}

export default Level3