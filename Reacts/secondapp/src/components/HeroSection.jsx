import React from 'react'

export default function HeroSection() {
  return (
    <div className=" lg:w-8/12 mx-auto mt-24 flex flex-col gap-9 items-center">
              <h1 className=" text-2xl lg:text-6xl text-[#0b363d] text-center font-bold leading-loose">
                Make Your Business Flourish with{" "}
                <span className=" text-orange-500">Digital Marketing</span>
              </h1>
              <p className=" text-center opacity-60">
                Save time on creating a website from scratch. Use a rich collection
                of ready-made websites to get your project off to a fast start
                opposed to using 'Content here, content here', making it look like
                readable English.
              </p>
              <div className=" space-x-4 lg:space-x-8">
                <button className=" bg-slate-800 text-white p-4 lg:px-8 rounded-md lg:py-3">
                  Try 30 Days Trial
                </button>
                <button className=" border border-slate-800 rounded-md p-4 lg:px-8 lg:py-3 ">
                  Schedule a call
                </button>
              </div>
            </div>
  )
}
