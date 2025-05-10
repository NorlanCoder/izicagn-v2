import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CountryDropdown = ({ options, defaultOption }: {options: string[], defaultOption: string}) => {
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
        <div ref={dropdownRef} className="relative w-[180px]">
            <div
                className="flex items-center justify-between px-[20px] py-[14px] bg-gray-100 rounded-[15px] cursor-pointer w-[128px] h-[46px]"
                onClick={toggleDropdown}
            >
                <span className='font-bold'>{selected}</span>
                <ChevronDown size={18} />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute w-auto mt-2 bg-white shadow-lg overflow-hidden z-10 p-[4px] rounded-[15px] "
                    >
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={`p-3 cursor-pointer ${
                                    option === selected ? 'text-[#0988B1] bg-[#F5F6F7]' : ''
                                } hover:bg-[#F5F6F7] font-bold rounded-[15px] mb-1 w-[128px] flex items-center justify-between`}
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

export default CountryDropdown;

