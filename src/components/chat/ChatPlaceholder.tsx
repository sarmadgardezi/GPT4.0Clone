import React from "react";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full bg-dk w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
      <h1 className="text-7xl bricolage font-bold bg-gradient-heading text-center">Chatbot by OpenAi</h1> 
        <p className="mt-4 text-lg">
         Use Free GPT 3.5 Turbo to generate human-like text.
        </p>
        <div className="m-4 flex items-center justify-center">
        
        </div>
       

        <div className="p-4">
        
        </div>
      </div>
    </div>
  );
}
