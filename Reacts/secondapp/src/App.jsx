import React from "react";
import logo from "./favicon.ico";
import Dash from "./Dashboard.png";
import google from "./google.svg";
import lenovo from "./lenovo.svg";
import amazon from "./amazon.svg";
import shopify from "./shopify.svg";
import spotify from "./spotify.svg";
import paypal from "./paypal.svg";

export default function App() {
  return (
    <div>
      {/* navbar */}
      {/* ? bg-[#000000] - it's not use much though for using color properties */}

      <div className=" bg-slate-500">
        <div className="flex items-center justify-between text-white p-2 md:w-9/12 mx-auto">
          <div>
            <img className="h-" src={logo} alt="" />
          </div>

          <div className="hidden lg:block">
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
          </div>
          <button className=" bg-orange-600 pl-8 pr-8 pt-2 pb-2 font-semibold">
            login
          </button>
        </div>
      </div>

      {/* hero section */}
      <div className=" lg:w-7/12 mx-auto mt-24 flex flex-col gap-9 items-center">
        <h1 className=" text-3xl lg:text-5xl text-center font-semibold leading-relaxed" >Make Your Business Flourish with <span className=" text-orange-500">Digital Marketing</span></h1>
        <p className=" text-center">Save time on creating a website from scratch. Use a rich collection of ready-made websites to get your project off to a
        fast start opposed to using 'Content here, content here', making it look like readable English.</p>
        <div className=" lg:space-x-8">
          <button className=" bg-slate-800 text-white px-8 py-3">Try 30 Days Trial</button>
          <button className=" border border-slate-800 px-8 py-3">Schedule a call</button>

        </div>
        
     

        
      </div>

      {/* image section */}
      {/* <div className="relative">
      <img className="border p-4 rounded-2xl bg-gray-50 mt-28 w-9/12 mx-auto" src={Dash} alt="dashboard"/> */}
      {/* <svg
        className="absolute -bottom-32 left-0 w-full  "
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        // style="transform: rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 370"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop
              stop-color="rgba(245.49, 245.49, 245.49, 1)"
              offset="0%"
            ></stop>
            <stop
              stop-color="rgba(231.829, 223.382, 204.708, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
        style={{ transform: "translate(0, 0px)", opacity: "1" }}
          // style="transform: translate(0, 0px); opacity: 1"
          fill="url(#sw-gradient-0)"
          d="M0,74L120,104.8C240,136,480,197,720,222C960,247,1200,234,1440,203.5C1680,173,1920,123,2160,92.5C2400,62,2640,49,2880,37C3120,25,3360,12,3600,6.2C3840,0,4080,0,4320,18.5C4560,37,4800,74,5040,104.8C5280,136,5520,160,5760,178.8C6000,197,6240,210,6480,228.2C6720,247,6960,271,7200,265.2C7440,259,7680,222,7920,178.8C8160,136,8400,86,8640,67.8C8880,49,9120,62,9360,92.5C9600,123,9840,173,10080,160.3C10320,148,10560,74,10800,49.3C11040,25,11280,49,11520,98.7C11760,148,12000,222,12240,265.2C12480,308,12720,321,12960,283.7C13200,247,13440,160,13680,129.5C13920,99,14160,123,14400,123.3C14640,123,14880,99,15120,117.2C15360,136,15600,197,15840,197.3C16080,197,16320,136,16560,129.5C16800,123,17040,173,17160,197.3L17280,222L17280,370L17160,370C17040,370,16800,370,16560,370C16320,370,16080,370,15840,370C15600,370,15360,370,15120,370C14880,370,14640,370,14400,370C14160,370,13920,370,13680,370C13440,370,13200,370,12960,370C12720,370,12480,370,12240,370C12000,370,11760,370,11520,370C11280,370,11040,370,10800,370C10560,370,10320,370,10080,370C9840,370,9600,370,9360,370C9120,370,8880,370,8640,370C8400,370,8160,370,7920,370C7680,370,7440,370,7200,370C6960,370,6720,370,6480,370C6240,370,6000,370,5760,370C5520,370,5280,370,5040,370C4800,370,4560,370,4320,370C4080,370,3840,370,3600,370C3360,370,3120,370,2880,370C2640,370,2400,370,2160,370C1920,370,1680,370,1440,370C1200,370,960,370,720,370C480,370,240,370,120,370L0,370Z"
        ></path>
      </svg> */}
      {/* </div> */}

      {/* five logo section */}
      {/* <div className="w-10/12 mx-auto grid grid-cols-6 space-x-16 mt-20">
        <img src={amazon} alt="amazon-logo"/>
        <img src={google} alt="google-logo"/>
        <img src={lenovo} alt="lenovo-logo"/>
        <img src={paypal} alt="paypal-logo"/>
        <img src={shopify} alt="shopify-logo"/>
        <img src={spotify} alt="apotify-logo"/>

      </div> */}
    </div>
  );
}
