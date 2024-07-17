import React from "react";
import { MdMenu } from "react-icons/md";
import ChatSidebar from "@/components/chat/sidebar/ChatSidebar";
import { Transition } from "@headlessui/react";
import AddTokenModal from "./../auth/AddTokenModal";

type Props = {};

export default function ChatHeader({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="dark top-0 flex h-[50px] justify-between bg-dk px-4 text-2xl text-primary md:hidden">
        <button className="p-2" onClick={() => setIsOpen(true)}>
          <MdMenu />
        </button>

      </div>
      {/* Animate slide in from left */}
      <Transition
        show={isOpen}
        className="absolute z-30 h-[calc(100%-50px)] w-full"
        enter="transition ease-out duration-300"
        enterFrom="transform -translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition ease-in duration-300"
        leaveFrom="transform translate-x-0"
        leaveTo="transform -translate-x-full"
      >
        <div className="absolute z-40 h-full w-2/3 bg-custom-gradient">
          <ChatSidebar />
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 z-20 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </Transition>
    </>
  );
}
