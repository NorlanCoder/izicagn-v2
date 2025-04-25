import Photo from '../../../../assets/auth/Group.png'
import Boy from '../../../../assets/auth/boy.png'
import Close from '../../../../assets/auth/close-circle.png'

const Level3 = () => {
  return (
    <div className="mt-20 w-full">
            <h2 className="text-[32px] text-[#0E0E18] font-bold ">Présentez votre projet</h2>
            <p className="text-[15px] text-[#8296A3] ">Présentez la personne, l’équipe ou l'organisation à l'origine de cette initiative, pour que vos soutiens en sachent plus sur votre engagement et vos ambitions</p>

            <div className="mt-10 w-full">
                <label htmlFor="resumer" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Résumez en quelques phrases ce qu’est votre projet</label>
                <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3">
                    <textarea name="resumer" id="" placeholder="Description courte" rows={4} className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"></textarea>
                    {/* <input type="text" name="price" placeholder="----"  /> */}
                </div>
            </div>

            <div className="mt-10 w-full">
                <label htmlFor="objectifs" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Indiquez les objectifs du projet</label>
                <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3">
                    <textarea name="objectifs" id="" placeholder="Objectifs" rows={4} className=" w-full h-full py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"></textarea>
                    {/* <input type="text" name="price" placeholder="----"  /> */}
                </div>
            </div>

            <div className="mt-10 w-full">
                <label htmlFor="photo" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Ajoutez des photos pour montrer un aperçu de vos activités.</label>
                <div className='flex flex-col items-center justify-center'>
                <div className="w-full rounded-[12px] grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mb-3">
                    <div className="w-[209px] h-[146px] rounded-[12px] relative">
                      <img src={Boy} alt="" />
                      <button className=' absolute top-2 right-2'><img src={Close} alt="" /></button>
                    </div>
                    <div className="w-[209px] h-[146px] bg-[#F3F5F7] rounded-[12px] flex justify-center items-center">
                      <div className=' space-y-2'>
                        <div className=' pl-9'><img src={Photo} alt="" /></div>
                        <p className='text-[#9A9A9A] text-[12.39px]'>Ajouter une image</p>
                      </div>
                    </div>
                    <div className="w-[209px] h-[146px] bg-[#F3F5F7] rounded-[12px] flex justify-center items-center">
                      <div className=' space-y-2'>
                        <div className=' pl-9'><img src={Photo} alt="" /></div>
                        <p className='text-[#9A9A9A] text-[12.39px]'>Ajouter une image</p>
                      </div>
                    </div>
                </div>
                </div>
            </div>


            <button className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full mt-10 absolute right-0 cursor-pointer hover:scale-105 transition">Continuer</button>
                
        </div>
  )
}

export default Level3