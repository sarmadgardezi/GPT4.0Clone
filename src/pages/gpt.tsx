import ChatMessages from "@/components/chat/ChatMessages";
import ChatSidebar from "@/components/chat/sidebar/ChatSidebar";
import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import { useOpenAI } from "@/context/OpenAIProvider";
import ChatHeader from "@/components/chat/ChatHeader";

export default function Gpt() {
  const { clearConversation } = useOpenAI();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility
  const sidebarRef = useRef(null);

  useEffect(() => {
    clearConversation();
  }, []);

  const handleOutsideClick = (e: MouseEvent) => {
    if (sidebarRef.current && (sidebarRef.current as HTMLElement).contains(e.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Mobile devices

    if (isSidebarOpen && mediaQuery.matches) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <React.Fragment>
      <Head>
        <title>OpenAI</title>
        <meta name="description" content="A clone of OpenAI playground." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen relative h-screen max-h-screen w-screen overflow-hidden">
        <ChatHeader setIsSidebarOpen={setIsSidebarOpen} />
        <ChatMessages />
        <div ref={sidebarRef}>
          <ChatSidebar setIsOpen={setIsSidebarOpen} isOpen={isSidebarOpen} />
        </div>
      </div>
    </React.Fragment>
  );
}
