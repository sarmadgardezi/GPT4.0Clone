import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-28">
      <div className="flex-col justify-center items-center md:w-1/2"> 
        <Image className="mx-auto" src="/img/aichatgpt.png" alt="Hero" width={200} height={200} /> 
        <h1 className="herofont bricolage font-bold text-white text-center">Gpt Ai Bot</h1> 
        <h1 className="text-7xl bricolage font-bold bg-gradient-heading text-center">Chatbot by OpenAi</h1> 
        
        <p className="text-white md:text-base pt-5 pr-10 pl-10">
          
          Use the OpenAI neural network for free and without registration. ChatGPT is a chatbot with artificial intelligence. It can generate texts of any complexity and subject matter, compose essays and reports, write a funny story or suggest ideas for new projects.
        </p>
        <div className="flex justify-center mt-8"> {/* Button container */}
          <Link href="/gpt">
          <button
        
            className="text-center px-6 py-3 text-white font-bold bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-md hover:shadow-lg focus:outline-none md:w-48" // Responsive width
          >
            Try GPT Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
