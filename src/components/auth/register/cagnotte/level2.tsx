import { MapPin } from 'lucide-react'; 
// import location from  "/src/assets/cagnotte/fluent_location-16-filled.png"
const Level2 = ({ changeLevel , previousLevel } : { changeLevel: () => void; previousLevel: () => void }) => {
    return (
        <div className="mt-20 flex flex-col justify-center">
            <div className='max-w-[560px] pb-18'>
                <h2 className="md:text-[32px] text-[18px] text-[#0E0E18] font-semibold"><span className='text-[#FD8352]' >Indiquez où</span> l'action de votre cagnotte aura lieu.</h2>
                <p className="text-[15px] text-[#8296A3] ">Cela peut encourager les donateurs locaux à vous soutenir.</p>
            </div>


            <label className='text-[15px] font-semibold ' htmlFor="">Zone géographique</label>
            <div className="flex items-center md:w-full w-64 border border-gray-200 rounded-[18px] shadow-sm px-4 py-2 bg-white ">
            <MapPin className="w-4 h-4 text-blue-500 mr-2" />
            
            <input
                name='text'
                type="text"
                placeholder="Text"
                className="md:w-full  h-[40px] outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
            />
            </div>

    
            <div className="flex justify-center md:justify-end items-center gap-4  bottom-14 pt-32 right-0">
                    <button onClick={previousLevel} className="border-2 border-[#D9DFE7CC] md:px-[34px] px-[20px] py-[16px] text-black font-semibold rounded-full hover:scale-105 transition">
                         Précédent
                    </button>

                    <button onClick={changeLevel} className="bg-[#23C7ED] md:px-[34px] px-[20px] py-[16px] text-white rounded-full hover:scale-105 transition">
                        Continuer
                    </button>
            </div>
                
        </div>
    )
}

export default Level2