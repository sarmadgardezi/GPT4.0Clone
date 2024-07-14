import React, { useState } from 'react';

export const Faqs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // List of FAQs
  const faqs = [
    {
      question: "How is this theme different from others in the market?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      question: "What is your policy on distribution of Devjoy assets?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      question: "How can I contribute to Devjoy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      question: "What other themes do you have?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
  ]; 

  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
           
        <h1 className="text-7xl bricolage font-bold bg-gradient-heading text-center">FAQ's</h1> 
        </div>
        <div className="mt-10 flex w-full max-w-4xl flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative my-3 w-full rounded-md border border-gray-300 px-12 py-8"
            >
              <div className="max-w-3xl">
                <h2 className="text-xl font-bold text-text">{faq.question}</h2>
                {openFAQ === index && (
                  <p className="font-inter mt-4 text-base font-light text-text">
                    {faq.answer}
                  </p>
                )}
              </div>
              <button
                className="absolute right-5 top-9 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white"></circle>
                  <path
                    d="M7.04688 11.9999H16.9469"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 7.05005V16.95"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${
                      openFAQ === index ? 'opacity-0' : 'opacity-100'
                    } transition-opacity duration-100 ease-in-out`}
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
        <p className="font-inter mx-auto mt-12 text-base text-white text-center">
          Can’t find the answer you’re looking for? Reach out to our
          <a href="#" className="text-indigo-500 font-bold">
            {" "}
            customer support team.
          </a>
        </p>
      </div>
    </section>
  );
};
