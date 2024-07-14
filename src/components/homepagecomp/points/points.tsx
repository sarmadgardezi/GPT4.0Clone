import React, { useState } from 'react';

const Points: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <h1 className="text-7xl bricolage font-bold bg-gradient-heading text-center">AI OpenAi</h1>
      <div className="container relative mx-auto flex flex-col gap-16 px-4 py-16 text-center lg:flex-row lg:gap-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
          <div className="lg:flex lg:w-1/2 lg:items-center">
            <div>
              <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 border-gray-600/50 bg-gray-700/50 text-gray-200">
                v6.0 Latest Version
              </div>
              <h1 className="mb-4 text-5xl font-black  text-white">
                Next generation
                <span className="text-blue-600 ">
                  website builder
                </span>
              </h1>
              <h2 className="text-xl font-medium leading-relaxed  text-white">
                Super fast and easy to use software to power your next idea or
                build your client’s web projects. Get it today and profit.
              </h2>
                        </div>
          </div>
          <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <div className="relative mx-5 lg:w-96">
              <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border lg:size-72 border-blue-900" />
              <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border  lg:size-72 border-blue-950" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border lg:size-72 border-blue-900" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border  lg:size-72 border-blue-950" />
              <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl  bg-gray-800" />
              <div className="absolute inset-0 -m-6 rotate-1 rounded-xl  shadow-inner " />
              <img
                src="/img/aipoints.png"
                className="relative mx-auto rounded-lg shadow-lg"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
    </>
  );
};

export default Points;
