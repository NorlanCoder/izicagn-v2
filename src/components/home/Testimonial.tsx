import { useState } from 'react';
import Testi1 from '../../assets/home/testimonial/testi_1.svg'
import Testi2 from '../../assets/home/testimonial/testi_2.svg'
import Testi3 from '../../assets/home/testimonial/testi_3.svg'
import Testi4 from '../../assets/home/testimonial/testi_4.svg'
import { AnimatePresence, motion } from 'motion/react'
import BlueChat from '../../assets/home/testimonial/blue-white-ball.png'

export const TesimoniItems = [
    {
        id: 'T001',
        image: Testi1,
        text: "“Grâce à Izicagn, nous avons pu réunir les fonds nécessaires pour l'opération de ma fille. La générosité des contributeurs a été incroyable, et nous avons atteint notre objectif en moins d'un mois.”",
        name: "Marie Dansou",
        date: "Cotonou, Bénin",
    },
    {
        id: 'T002',
        image: Testi2,
        text: "“Grâce à Izicagn, nous avons pu réunir les fonds nécessaires pour l'opération de ma fille. La générosité des contributeurs a été incroyable, et nous avons atteint notre objectif en moins d'un mois.”",
        name: "Marie Dansou",
        date: "Cotonou, Bénin",
    },
    {
        id: 'T003',
        image: Testi3,
        text: "“Grâce à Izicagn, nous avons pu réunir les fonds nécessaires pour l'opération de ma fille. La générosité des contributeurs a été incroyable, et nous avons atteint notre objectif en moins d'un mois.”",
        name: "Marie Dansou",
        date: "Cotonou, Bénin",
    },
    {
        id: 'T004',
        image: Testi4,
        text: "“Grâce à Izicagn, nous avons pu réunir les fonds nécessaires pour l'opération de ma fille. La générosité des contributeurs a été incroyable, et nous avons atteint notre objectif en moins d'un mois.”",
        name: "Marie Dansou",
        date: "Cotonou, Bénin",
    },
];

const Testimonial = () => {

    const [active, setActive] = useState<string>('T001');

    return (
        <div className='flex flex-row space-x-1 flex-wrap'>
            
            {
                TesimoniItems.map((item)=> (
                    <div key={item.id} className={` ${active==item.id?'testimony_bg':''} flex flex-row rounded-[20px] space-x-2 p-2 relative`} onClick={()=>setActive(item.id)}>
                        <div>
                            <img src={item.image} alt="" className='md:h-[392.47px] h-auto' />
                        </div>
                        <AnimatePresence>
                            {
                                active==item.id && (
                                    
                                        <motion.div initial={{opacity: 0, width: 0}} animate={{opacity: 1, width: 357.89, transition:{duration: 0.5, delay: 0.2, ease: 'easeIn'}}} exit={{opacity: 0, width: 0, transition: {duration: 0.2, delay: 0.1, ease: 'linear'}}} className="glass2 bg-[#FDFAF8] border border-white self-stretch w-[357.89px] md:h-[392.47px] h-auto rounded-[20px] p-8 relative z-20">
                                            <p className='text-white md:text-[20px] text-[15px]'>{item.text} </p>
                                            <h1 className='text-white text-[20px] font-bold mt-6'>{item.name} </h1>
                                            <h2 className='text-[#FFFFFF8F] text-[15px] font-extralight'>{item.date} </h2>
                                        </motion.div>
                                
                                )
                                
                            }
                         </AnimatePresence>
                         {
                            active==item.id && (<img src={BlueChat} alt="" className='absolute bottom-0 right-0 z-0' />)
                         }
                    </div>
                ))
            }
        </div>
    )
}

export default Testimonial