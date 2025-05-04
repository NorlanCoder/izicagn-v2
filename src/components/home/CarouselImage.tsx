import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import CarouselImg1 from '../../assets/home/slide/slide-img-1.png';
import CarouselImg2 from '../../assets/home/slide/slide-img-2.png';
import CarouselImg3 from '../../assets/home/slide/slide-img-3.png';

const images = [CarouselImg1, CarouselImg2, CarouselImg3];

const CarouselImage = () => {
    const [current, setCurrent] = useState(0);

    // boucle automatique toutes les 5 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='self-stretch h-[453px] lg:w-[768px] flex flex-col space-y-6 md:mt-0 mt-8'>
            <div className='h-[348px] bg-[#DDDCDC66] grow rounded-[40px] overflow-hidden relative'>

                <AnimatePresence mode="wait">
                    <motion.img
                        key={current}
                        src={images[current]}
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full object-cover rounded-[40px] absolute top-0 left-0"
                    />
                </AnimatePresence>

                {/* Pagination */}
                <div className='flex flex-row justify-center w-full absolute bottom-5 left-0'>
                    <div className='w-[80px] h-[28px] glass p-2 border border-l-[#F5C3A240] border-t-[#F5C3A240] border-r-white border-b-white rounded-full flex justify-center items-center space-x-2'>
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${index === current ? 'bg-[#FD8342]' : 'bg-white'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselImage;
