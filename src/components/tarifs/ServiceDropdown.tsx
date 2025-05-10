import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ServiceDropdown = ({ options, defaultOption }: {options: string[], defaultOption: string}) => {
  const [selected, setSelected] = useState(defaultOption);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string) => {
        setSelected(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-11/12">
            <div
                className="flex items-center justify-between cursor-pointer w-full"
                onClick={toggleDropdown}
            >
                <span className='uppercase text-[20px] lg:text-[20px] text-[#EC320A] montserrat-bold'>{selected}</span>
                <ChevronDown size={25} className='text-[#EC320A]' />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute w-full mt-2 bg-white shadow-lg overflow-hidden z-10 p-[4px] rounded-[15px] "
                    >
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={`p-2 px-4 cursor-pointer ${
                                    option === selected ? 'text-[#0988B1] bg-[#F5F6F7]' : ''
                                } hover:bg-[#F5F6F7]  rounded-[14px] mb-1 flex items-center justify-between`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServiceDropdown;

