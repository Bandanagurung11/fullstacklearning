import React from "react";
import logo from "./favicon.ico";
import Dash from "./Dashboard.png"

export default function App() {
  return (
    <div>
      {/* navbar */}
      {/* ? bg-[#000000] - it's not use much though for using color properties */}

      <div className=" bg-slate-500">
        <div className="flex items-center justify-between text-white p-2 w-9/12 mx-auto">
          <div>
            <img src={logo} alt="" />
          </div>

          <div className="flex gap-10 font-semibold">
            <p className=" cursor-pointer text-orange-600">home</p>
            <p className=" hover:text-orange-500 duration-300 cursor-pointer">
              about
            </p>
            <p className=" hover:text-orange-500 duration-300 cursor-pointer">
              services
            </p>
            <p className=" hover:text-orange-500 duration-300 cursor-pointer">
              price
            </p>
            <p className=" hover:text-orange-500 duration-300 cursor-pointer">
              contacts
            </p>
          </div>
          <button className=" bg-orange-600 pl-8 pr-8 pt-2 pb-2 font-semibold">
            login
          </button>
        </div>
      </div>

      {/* hero section */}
      <div className="w-7/12 mx-auto mt-24 flex flex-col gap-9 items-center">
        <h1 className="text-5xl text-center font-semibold leading-relaxed" >Make Your Business Flourish with <span className=" text-orange-500">Digital Marketing</span></h1>
        <p className=" text-center">Save time on creating a website from scratch. Use a rich collection of ready-made websites to get your project off to a
        fast start opposed to using 'Content here, content here', making it look like readable English.</p>
        <div className=" space-x-8">
          <button className=" bg-slate-800 text-white px-8 py-3">Try 30 Days Trial</button>
          <button className=" border border-slate-800 px-8 py-3">Schedule a call</button>

        </div>

        <img className="border p-4 rounded-2xl bg-gray-50" src={Dash} alt="dashboard"/>
        

      </div>
    </div>
  );
}
