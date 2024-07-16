import React from "react";
import { MdMenu } from "react-icons/md";
import { Transition } from "@headlessui/react";
import ChatSidebar from "./sidebar/ChatSidebar";

type Props = {
  setIsSidebarOpen: (isOpen: boolean) => void;
};

export default function ChatHeader({ setIsSidebarOpen }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsOpen(true);
    setIsSidebarOpen(true);
  };

  return (
    <>
    <div className="dark top-0 flex h-[50px] justify-between bg-primary px-4 text-2xl text-primary md:hidden">
      <button className="p-2" onClick={handleMenuClick}>
        <MdMenu />
      </button>
    </div>
    <Transition
      show={isOpen}
      className="absolute z-30 h-[calc(100%-50px)] w-full md:hidden"
      enter="transition ease-out duration-300"
      enterFrom="transform -translate-x-full"
      enterTo="transform translate-x-0"
      leave="transition ease-in duration-300"
      leaveFrom="transform translate-x-0"
      leaveTo="transform -translate-x-full"
    >
      <div className="shadow-4xl h-full w-2/3">
        <ChatSidebar setIsOpen={setIsSidebarOpen} isOpen={isOpen} />
      </div>
    </Transition>
  </>
  );
}
