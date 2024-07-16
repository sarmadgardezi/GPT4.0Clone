import { useState } from 'react';
import ConfigSidebar from "@/components/playground/ConfigSidebar";

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center text-white">
      <p onClick={toggleDropdown} className="cursor-pointer">
        Model Options
      </p>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-gray-800 rounded-lg shadow-lg z-10 p-6 w-full mt-2">
          <ConfigSidebar />
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded mt-2"
          >
            Close Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupButton;
