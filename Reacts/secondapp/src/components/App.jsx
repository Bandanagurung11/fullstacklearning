import React from "react";

import Dash from "../assets/images/Dashboard.png";
import google from "../assets/images/google.svg";
import lenovo from "../assets/images/lenovo.svg";
import amazon from "../assets/images/amazon.svg";
import shopify from "../assets/images/shopify.svg";
import spotify from "../assets/images/spotify.svg";
import paypal from "../assets/images/paypal.svg";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import EasyHandlingSection from "./EasyHandlingSection";
import StructureSection from "./StructureSection";
import Performance from "./Performance";
import PeopleJoin from "./PeopleJoin";
import PricingSection from "./PricingSection";
import Faq from "./Faq";
import OfficeAddress from "./OfficeAddress";

export default function App() {
  return (
    <div>
      {/* ? bg-[#000000] - it's not use much though for using color properties */}
      <div className="bg-[url('./assets/images/banner-2.jpg')] ">
        {/* navbar */}
        <Navbar />

        {/* hero section */}
        <HeroSection />

        {/* image section */}
        <div className="relative">
          <img
            className=" border overflow-hidden p-4 rounded-2xl bg-gray-50 mt-28 w-9/12 mx-auto block"
            src={Dash}
            alt="dashboard"
          />
          <svg
            className="absolute -bottom-8 lg:-bottom-16 w-full "
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
          </svg>
        </div>
      </div>

      <div className="bg-[#f2f0ec] py-20 space-y-48">
        {/* five logo section */}
        <div className="w-10/12 mx-auto grid grid-cols-3 lg:grid-cols-6 space-x-16 ">
          <img className="h-8" src={amazon} alt="amazon-logo" />
          <img className="h-8" src={google} alt="google-logo" />
          <img className="h-8" src={lenovo} alt="lenovo-logo" />
          <img className="h-8" src={paypal} alt="paypal-logo" />
          <img className="h-8" src={shopify} alt="shopify-logo" />
          <img className="h-8" src={spotify} alt="apotify-logo" />
        </div>

        {/* easy handling section */}
        <EasyHandlingSection />
      </div>

      {/* STRUCTURE section */}
      <StructureSection />

      {/* picture section */}
      <Performance />

      {/* people join */}
      <PeopleJoin />

      {/* pricing section */}
      <PricingSection />

      {/* need support */}
      <Faq />

      {/* office address */}
      <OfficeAddress />
    </div>
  );
}
