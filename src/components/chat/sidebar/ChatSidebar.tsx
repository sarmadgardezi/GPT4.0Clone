import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { MdAdd, MdDeleteOutline, MdBuild } from "react-icons/md";
import { useOpenAI } from "@/context/OpenAIProvider";
import Github from "../../misc/Github";
import ThemeButton from "./buttons/ThemeButton";
import ButtonContainer from "./buttons/ButtonContainer";
import Conversations from "./conversation/Conversations";
import ApiKey from "./buttons/ApiKey";
import CurrentModel from './buttons/CurrentModel';
import ConfigSidebar from "@/components/playground/ConfigSidebar";

type Props = {};

export default function ChatSidebar({}: Props) {
  const { clearConversations } = useOpenAI();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dark left-0 top-0 h-full max-h-screen flex-col bg-gray-900 text-primary md:fixed md:flex md:w-[260px]">
      <div className="flex h-full flex-col items-stretch p-2">
        <Link
          href="/gpt/"
          className="flex items-center gap-3 rounded border border-white/20 p-4 transition-colors bg-gradient-to-r from-purple-500 to-indigo-500"
        >
          <MdAdd />
          New chat
        </Link>

        <Conversations />

        <div className="flex flex-col gap-y-2 border-y border-white/10 py-2">
          <div className="flex flex-col border-b border-white/10 gap-y-2">
            <ButtonContainer>
              <MdBuild />
              <p onClick={toggleDropdown} className="cursor-pointer">Model Options</p>
            </ButtonContainer>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden bg-white ${isDropdownOpen ? 'max-h-screen' : 'max-h-0'}`}>
              <div className="w-full mt-2">
                <ConfigSidebar />
                <button
                  onClick={toggleDropdown}
                  className="px-4 py-2 bg-red-500 hover:bg-red-700  mt-2 w-full"
                >
                  Close Options
                </button>
              </div>
            </div>
          </div>

          <ButtonContainer onClick={clearConversations}>
            <MdDeleteOutline />
            Clear Conversations
          </ButtonContainer>
        </div>

        <span className="text-center text-primary/80 pt-10">
          2024 Copyright All Rights Reserved
        </span>
      </div>
    </div>
  );
}
