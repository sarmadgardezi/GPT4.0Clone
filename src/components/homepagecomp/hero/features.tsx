import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <>
    {/* Features Section: Boxes with Icons */}
    <div className=" to-teal-900 text-gray-100">
  <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border  p-5 shadow-sm transition  md:p-7 xl:p-10 border-gray-800 bg-gray-800  hover:border-blue-400">
      <Image src="/img/1.png" alt="Hero" width={350} height={250} />
        <h4 className="mb-2 text-lg font-bold">1. UI Components Library</h4>
        <p className="leading-relaxed  text-gray-400">
          We carefully handcrafted a vast collection of UI components to build
          all kinds of web applications and websites. We keep designing and
          adding new ones with each update.
        </p>
      </div>
      <div className="rounded-lg border  p-5 shadow-sm transition  md:p-7 xl:p-10 border-gray-800 bg-gray-800  hover:border-blue-400">
      <Image src="/img/1.png" alt="Hero" width={350} height={250} />
        <h4 className="mb-2 text-lg font-bold">2. Self-Hosted Web App</h4>
        <p className="leading-relaxed text-gray-400  ">
          You’ll love working with the Tailkit web app! It’s a compiled Vue.js
          based app which you can host on your own and use to explore and use
          all available UI components.
        </p>
      </div>
      <div className="rounded-lg border p-5 shadow-sm transition  sm:col-span-2 md:p-7 lg:col-span-1 xl:p-10 border-gray-800 bg-gray-800  hover:border-blue-400">
      <Image src="/img/1.png" alt="Hero" width={350} height={250} />
        <h4 className="mb-2 text-lg font-bold">3. Helper Tools</h4>
        <p className="leading-relaxed  text-gray-400">
          Search and copy SVG icons, build your button markup or copy your
          favorite color classes with powerful tools. More are under development
          to give you superpowers.
        </p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Features
