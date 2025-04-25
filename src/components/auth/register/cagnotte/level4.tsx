

const Level1 = () => {
    return (
        <div className="mt-20">
            <h2 className="text-[32px] text-[#0E0E18] ">Présentez votre projet</h2>
            <p className="text-[15px] text-[#8296A3] ">Présentez la personne, l’équipe ou l'organisation à l'origine de cette initiative, pour que vos soutiens en sachent plus sur votre engagement et vos ambitions</p>

            <div className="mt-10">
                <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3">
                    <input type="text" name="nom" placeholder="Nom de la cagnotte" className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0" />
                </div>
            </div>

            <div className="mt-5 w-full">
                <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3">
                    <textarea name="description" id="" placeholder="Description" rows={4} className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"></textarea>
                    {/* <input type="text" name="price" placeholder="----"  /> */}
                </div>
            </div>

            <button className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full absolute bottom-14 right-0 cursor-pointer hover:scale-105 transition">Continuer</button>
                
        </div>
    )
}

export default Level1