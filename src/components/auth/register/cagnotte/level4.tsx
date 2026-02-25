import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import { useState } from "react";
const Level4 = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    return (
        <div className="mt-20">
            <div className='max-w-[560px] pb-18'>
                <h2 className="text-[32px] text-[#0E0E18] font-semibold"><span className='text-[#FD8352]' >Quand</span>  souhaitez démarrer votre collecte de fonds</h2>
            </div>

         <div className="space-y-8">
            <div className="flex items-center w-full border border-gray-200 rounded-[18px] shadow-sm px-4 py-2 bg-[#F5F8FB]">
            <Calendar className="w-4 h-4 text-blue-500 mr-2" />
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Date de début"
                className="w-full h-[40px] outline-none text-sm text-gray-700 bg-transparent"
                
            />
            <input type="hidden" name="date_debut" value={startDate ? startDate.toISOString() : ''} />
            </div>

            <div className="flex items-center w-full border border-gray-200 rounded-[18px] shadow-sm px-4 py-2 bg-[#F5F8FB]">
            <Calendar className="w-4 h-4 text-blue-500 mr-2" />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Date de fin"
                className="w-full h-[40px] outline-none text-sm text-gray-700 bg-transparent"
                
            />
            <input type="hidden" name="date_fin" value={startDate ? startDate.toISOString() : ''} />
            </div>
        </div>

            <div className="flex justify-end items-center gap-4 pt-20 bottom-14 right-0">
                
                    <button className="border-2 border-[#D9DFE7CC] px-[34px] py-[16px] text-black font-semibold rounded-full hover:scale-105 transition">
                         Précédent
                    </button>

                    <button className="bg-[#23C7ED] px-[34px] py-[16px] text-white rounded-full hover:scale-105 transition">
                        Continuer
                    </button>
            </div>
                
        </div>
    )
}

export default Level4