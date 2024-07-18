import React, { useState } from "react";
import { useRouter } from "next/router";
import { MdAdd, MdDeleteOutline, MdBuild, MdHome } from "react-icons/md";
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
  const { clearConversations, conversations } = useOpenAI();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLimitExceededPopup, setShowLimitExceededPopup] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNewChat = () => {
    if (Object.keys(conversations).length >= 2) {
      setShowLimitExceededPopup(true);
    } else {
      router.push('/gpt/').then(() => router.reload());
    }
  };

  const homee = () => {
    router.push('/');
  };

  return (
    <div className="dark left-0 top-0 h-full max-h-screen flex-col bg-gray-900 text-primary md:fixed md:flex md:w-[260px]">
      <div className="flex h-full flex-col items-stretch p-2">
        <span className="pb-5 pt-5 w-full">
          <ButtonContainer onClick={homee}>
            <MdHome />
            HOME
          </ButtonContainer>
        </span>
        <button
          onClick={handleNewChat}
          className="flex items-center gap-3 rounded border border-white/20 p-4 transition-colors bg-gradient-to-r from-purple-500 to-indigo-500"
        >
          <MdAdd />
          New chat
        </button>

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
                  className="px-4 py-2 bg-red-500 hover:bg-red-700 mt-2 w-full"
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

        {showLimitExceededPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-custom-gradient p-4 rounded shadow">
              <p>You have reached the limit of 2 chat windows. Please delete an existing chat to create a new one.</p>
              <p>If you want more Chat Windows Contact Support Team!</p>
              <button
                onClick={() => setShowLimitExceededPopup(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <span className="text-center text-primary/80 pt-10">
          2024 Copyright All Rights Reserved
        </span>
      </div>
    </div>
  );
}
