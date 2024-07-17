import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-8 md:pt-28 px-4 md:px-20">
      <div className="md:w-1/5 flex justify-center md:justify-end mb-8 md:mb-0">
        <Image src="/img/1.png" alt="Hero" width={350} height={250} />
      </div>
      <div className="flex flex-col justify-center items-center md:w-1/2 text-center md:text-left md:pl-10">
        <h1 className="herofont bricolage font-bold text-white text-6xl sm:text-6xl md:text-6xl">Gpt Ai Bot</h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl bricolage font-bold bg-gradient-heading">Chatbot by OpenAi</h1>
        <p className="text-white text-base sm:text-lg md:text-base pt-5 px-4 md:px-0">
          Use the OpenAI neural network for free and without registration. ChatGPT is a chatbot with artificial intelligence. It can generate texts of any complexity and subject matter compose essays and reports, write a funny story or suggest ideas for new projects.
        </p>
        <div className="flex justify-center md:justify-start mt-8">
          <Link href="/gpt">
            <button className=" px-6 py-3 text-white font-bold bg-gradient-to-r from-purple-500 to-indigo-500 rounded shadow-md hover:shadow-lg focus:outline-none md:w-48">
              Try GPT Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
