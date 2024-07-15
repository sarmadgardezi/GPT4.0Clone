import { useState } from 'react';

import ConfigSidebar from "@/components/playground/ConfigSidebar";

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center  text-white">
      <p
        onClick={togglePopup}
      >
   
        Model Options
      
      </p>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-75 fixed inset-0"></div>
          <div className="bg-gray-800 rounded-lg shadow-lg z-10 p-6 max-w-sm mx-auto">
          <ConfigSidebar />
            <button
              onClick={togglePopup}
              className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded"
            >
              Close Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupButton;
