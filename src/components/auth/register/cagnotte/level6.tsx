

const Level6 = ({ changeLevel , previousLevel } : { changeLevel: () => void; previousLevel: () => void }) => {
    return (
        <div className="mt-20">
            <button className="text-[12px] text-[#6E98A3] font-semibold absolute right-44  top-0 cursor-pointer -mt-8">
            Ignorer et poursuivre →
            </button>
            <div className='max-w-[560px] pb-18'>
                <h2 className="text-[32px] text-[#0E0E18] font-semibold"><span className='text-[#FD8352]' >Offrez plus</span> qu'un simple merci aux donateurs </h2>
                <p className="text-[15px] text-[#8296A3] font-semibold">Choisissez des récompenses à offrir à vos donateurs en fonction du montant de leur don. (facultatif)</p>
            </div>

            <div className="flex items-center gap-3">
                <div>
                    <label className='md:text-[15px] text-[12px] font-semibold' htmlFor="">Contrepartie</label>
                    <div className="flex items-center w-full border border-gray-200 rounded-[18px] shadow-sm px-4 py-2 bg-[#F5F8FB]">
                    <input
                        name='intiule'
                        type="text"
                        placeholder="Intitulé"
                        className="w-full h-[40px] outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                    />
                    </div>
                </div>
                <div>
                    <label className='md:text-[15px] text-[12px] font-semibold' htmlFor="">Montant min</label>
                        <div className="flex items-center w-full border border-gray-200 rounded-[18px] shadow-sm px-4 py-2 bg-[#F5F8FB]">
                        <input
                            name='montant_min'
                            type="number"
                            placeholder="----"
                            className="w-full h-[40px] outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                        />
                        </div>
                    </div>
                <div>
                    <button className="bg-[#FCF9F9] border-gray-200 border  mt-6 p-4 cursor-pointer"   style={{ borderRadius: "50%" }}>
                        <img src="src/assets/cagnotte/ion_close.png" alt="" />
                    </button>
                </div>
               
            </div>

            <div className=" pt-5">
                <button className="text-white bg-[#032F3F] text-[12px] p-3 rounded-full cursor-pointer">
                    + Ajouter une contrepartie
                </button>
            </div>


           
    
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

export default Level6