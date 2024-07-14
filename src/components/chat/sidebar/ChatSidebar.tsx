import Link from "next/link";
import React from "react";
import { MdAdd, MdDeleteOutline, MdBuild } from "react-icons/md";
import { useOpenAI } from "@/context/OpenAIProvider";
import Github from "../../misc/Github";
import ThemeButton from "./buttons/ThemeButton";
import ButtonContainer from "./buttons/ButtonContainer";
import Conversations from "./conversation/Conversations";
import ApiKey from "./buttons/ApiKey";
import CurrentModel from './buttons/CurrentModel';
import Image from "next/image";
import ConfigSidebar from "@/components/playground/ConfigSidebar";

type Props = {};

export default function ChatSidebar({}: Props) {
  const { clearConversations } = useOpenAI();

  return (
    <div className="dark left-0 top-0 h-full max-h-screen flex-col bg-gray-900 text-primary md:fixed md:flex md:w-[260px]">
      <div className="flex h-full flex-col items-stretch p-2">
      <Image className="mx-auto" src="/img/aichatgpt.png" alt="Hero" width={100} height={100} />  
      <Link href="/" className="text-center flex items-center gap-3 rounded border border-white/20 p-4 transition-colors hover:bg-gray-500/10">BACK HOME</Link>
      <br/>
        <Link
          href="/gpt"
          className="flex items-center gap-3 rounded border border-white/20 p-4 transition-colors hover:bg-gray-500/10"
        >
          <MdAdd />
          New chat
        </Link>

        <Conversations />

        <div className="flex flex-col gap-y-2 border-y border-white/10 py-2">
          <div className="flex flex-col border-b border-white/10 gap-y-2">
            <CurrentModel />
          
          </div>
          <ConfigSidebar />
{/*            
          <Link
            className="flex items-center gap-3 rounded p-3 transition-colors hover:bg-gray-500/10"
            href="/playground"
          >
            <MdBuild />
            Playground
          </Link>
              */}
          <ButtonContainer onClick={clearConversations}>
            <MdDeleteOutline />
            Clear Conversations
          </ButtonContainer>

         
        </div>
<p className="pb-32"></p>
       
      </div>
    </div>
  );
}
