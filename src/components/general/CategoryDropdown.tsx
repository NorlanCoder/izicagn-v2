import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const CategoryDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-[20px] py-[12px] rounded-full border-[0.5px] border-[#E8EAEC] group hover:border-[#07AED8] hover:bg-[#07AED8]/20 transition-all w-[200px]"
      >
        <span className="group-hover:text-[#07AED8] text-[#37373A] text-[14px] tracking-[-1px] font-[500] ">Autres catégories</span>
        <ChevronDown
          size={16}
          className={`ml-2 transition-transform ${open ? "rotate-180" : "rotate-0"} group-hover:text-[#07AED8] group-hover:font-bold`}
        />
      </button>

      {open && (
        <div className="absolute mt-2 w-[200px] bg-white border border-gray-200 rounded-md shadow-md z-10">
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Éducation</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Santé</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Culture</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Environnement</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
