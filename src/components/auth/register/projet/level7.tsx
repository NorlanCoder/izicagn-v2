import Presentation from '../../../../assets/auth/presentation.png'
import Files from '../../../../assets/auth/file.png'

const Level7 = ({ changeLevel }: { changeLevel: () => void }) => {
  return (
    <div className="mt-20 w-full">
            <h2 className="text-[32px] text-[#0E0E18] font-bold ">Téléchargez votre Business Plan</h2>
            <p className="text-[15px] text-[#8296A3] ">Précisez ce que les investisseurs recevront en échange de leur participation</p>

            <div className="mt-10 w-full">
                <label htmlFor="plan" className="font-bold text-[15px] text-[#0E405D] mb-3 flex">Ajoutez une copie de votre plan d’affaire</label>
                <div className="w-full h-[223px] bg-[#F8FAFB] rounded-[12px] mb-3 border border-dashed border-[#4E5E62] flex items-center justify-center">
                    <div className='flex flex-col items-center justify-center space-y-4'>
                      <button className='px-[34px] py-[15px] bg-[#032F3F] rounded-full text-white font-bold flex items-center gap-[7px] shadow-2xl'>
                        <img src={Files} alt="" />
                        Télécharger</button>
                      <p className='text-[#8B8B8B] font-medium text-center'>Formats acceptés: PDF,DOCK</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between mt-10 w-full bg-[#EDF9FB] rounded-[14px] p-3">
              <div className='flex items-center space-x-2'>
                <img src={Presentation} alt="" />
                <h3 className='font-bold'>Besoin d’aide pour rédiger votre plan d’affaire ?</h3>
              </div>
              <button className="bg-[#FD8352] px-[18px] py-[8px] text-white font-bold rounded-full">Obtenir mon plan</button>
            </div>


            <button onClick={changeLevel} className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full mt-10 absolute right-0 cursor-pointer hover:scale-105 transition">Continuer</button>
                
        </div>
  )
}

export default Level7