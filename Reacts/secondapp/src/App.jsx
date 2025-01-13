import React from "react";
import logo from "./assets/images/logo.png";
import Dash from "./Dashboard.png";
import google from "./google.svg";
import lenovo from "./lenovo.svg";
import amazon from "./amazon.svg";
import shopify from "./shopify.svg";
import spotify from "./spotify.svg";
import paypal from "./paypal.svg";
import dashboard from "./dashbord-3.png";
import dashboard2 from "./dashbord-4.png";

export default function App() {
  return (
    <div>
      {/* navbar */}
      {/* ? bg-[#000000] - it's not use much though for using color properties */}
      <div className="bg-[url('./assets/images/banner-2.jpg')] ">
        <nav className=" bg-slate-700 py-2">
          <div className="flex items-center justify-between text-white p-2 md:w-9/12 lg:w-11/12 mx-auto">
            <div className="flex gap-2 items-center">
              {/* <img src={logo} alt="logoimage" className="bg-transparent block text-white"   /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="orange"
                  fill-rule="evenodd"
                  d="M7 18.25a2.5 2.5 0 0 0-1.875-2.421V5.4l6.125 6.613l-.22.213C9.692 13.522 8.19 14.976 8.25 17c.044 1.456.95 3.782 3.75 3.75c2.8-.03 3.75-2.13 3.75-3.75c0-2.268-1.456-3.625-2.988-4.987c.445-.477 1.283-1.287 1.842-1.828c.305-.295.528-.51.559-.547l.003-.005c.117-.142.461-.563.115-.989c-.281-.344-.706-.212-.9-.112L12 10.782C9.875 8.55 5.644 4.032 5.319 3.657c-.313-.363-.582-.42-.675-.407a.776.776 0 0 0-.769.713v11.866A2.501 2.501 0 1 0 7 18.25M18.875 8.172V20.05c.019.244.162.725.644.7c.475-.025.606-.475.606-.7V8.172a2.501 2.501 0 1 0-1.25 0m1.562-2.422a.938.938 0 1 1-1.875 0a.938.938 0 0 1 1.875 0M9.5 16.844c0-1.35 1.625-2.844 2.5-3.594c.831.762 2.5 2.406 2.5 3.594c0 1.569-.857 2.593-2.519 2.656c-1.656.063-2.481-1.313-2.481-2.656m-5 2.343a.937.937 0 1 0 0-1.875a.937.937 0 0 0 0 1.875"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="text-2xl font-bold tracking-widest">LOXCY</p>
            </div>

            <div className="hidden lg:block">
              <div className="flex gap-10 font-semibold">
                <p className=" cursor-pointer text-orange-600">Home</p>
                <p className=" hover:text-orange-500 duration-300 cursor-pointer">
                  About
                </p>
                <p className=" hover:text-orange-500 duration-300 cursor-pointer">
                  Services
                </p>
                <p className=" hover:text-orange-500 duration-300 cursor-pointer">
                  Price
                </p>
                <p className=" hover:text-orange-500 duration-300 cursor-pointer">
                  Contacts
                </p>
              </div>
            </div>
            <button className=" bg-orange-600 pl-8 pr-8 pt-2 pb-2 font-semibold rounded-md">
              Login
            </button>
          </div>
        </nav>

        {/* hero section */}
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

        <div className="w-10/12 mx-auto grid grid-cols-2 gap-6 my-20">
          {/* left section */}
          <div className="flex flex-col gap-20">
            <div>
              <p className="text-orange-400 text-base font-bold">
                EASY HANDLING
              </p>
              <p className="text-4xl font-bold leading-relaxed">
                Discover Powerful <br />
                Features To Boost <br />{" "}
                <span className="text-orange-400">Productivity</span>
              </p>
            </div>
            {/* two cards section */}
            <div className="grid grid-cols-2 gap-6">
              {/* first card */}
              <div className="bg-[#fff9f5] px-6 py-8 flex flex-col gap-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.07 10.41a5 5 0 0 0 0-5.82A3.4 3.4 0 0 1 15 4a3.5 3.5 0 0 1 0 7a3.4 3.4 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4s7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z"
                  />
                </svg>
                <p className="font-bold text-lg">Multiple user & management</p>
                <div className="flex justify-between">
                  <p>Multi User</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                    />
                  </svg>
                </div>
              </div>

              {/* second */}
              <div className="bg-orange-100 px-6 py-8 flex flex-col gap-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                  </g>
                </svg>
                <p className="font-bold text-lg">
                  Editable & highly customizable
                </p>
                <div className="flex justify-between">
                  <p>Customization</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* right section */}
          <div>
            {/* upper two cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-100 px-6 py-8 flex flex-col gap-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    d="M6.5 14.5h-3v-13h9V7M5 4.5h6m-6 2h4m1.5 3v2L12 13m1.5-1.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
                  />
                </svg>
                <p className="font-bold text-lg">Advanced online appointment</p>
                <div className="flex justify-between">
                  <p>Appoinment</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                    />
                  </svg>
                </div>
              </div>

              <div className="bg-orange-100 px-6 py-8 flex flex-col gap-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 2048 2048"
                >
                  <path
                    fill="currentColor"
                    d="M2048 1280v768H1024v-768h256v-256h512v256zm-640 0h256v-128h-256zm512 384h-128v128h-128v-128h-256v128h-128v-128h-128v256h768zm0-256h-768v128h768zm-355-512q-54-61-128-94t-157-34q-80 0-149 30t-122 82t-83 123t-30 149q0 92-41 173t-116 136q45 23 84 53t73 68v338q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149H0q0-73 20-141t57-129t90-108t118-81q-74-54-115-135t-42-174q0-79 30-149t82-122t122-83t150-30q92 0 173 41t136 116q38-75 97-134t135-98q-74-54-115-135t-42-174q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 92-41 173t-116 136q68 34 123 85t93 118zM512 1408q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20m512-1024q0 53 20 99t55 82t81 55t100 20q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100"
                  />
                </svg>
                <p className="font-bold text-lg">Advanced online appointment</p>
                <div className="flex justify-between">
                  <p>Management</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* lower two cards */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="bg-orange-100 px-6 py-8 flex flex-col gap-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M10 3c2.817 0 4.415 1.923 4.647 4.246h.07c1.535 0 2.824 1.083 3.183 2.547a4 4 0 0 0-.531-.273a6 6 0 0 0-.785-.266a2.26 2.26 0 0 0-1.866-1.008h-.071a1 1 0 0 1-.995-.9C13.45 5.325 12.109 4 10 4C7.886 4 6.551 5.316 6.348 7.345a1 1 0 0 1-.995.901h-.07C4.027 8.246 3 9.304 3 10.623C3 11.943 4.028 13 5.282 13H10v1H5.282C3.469 14 2 12.488 2 10.623C2 8.82 3.373 7.347 5.102 7.251l.251-.005C5.587 4.908 7.183 3 10 3m7.471 11.283c-.81.462-1.863.717-2.971.717s-2.16-.255-2.971-.717A4 4 0 0 1 11 13.92V17c0 1.105 1.567 2 3.5 2s3.5-.895 3.5-2v-3.08a4 4 0 0 1-.529.363M14.5 10c-1.933 0-3.5.895-3.5 2s1.567 2 3.5 2s3.5-.895 3.5-2s-1.567-2-3.5-2"
                  />
                </svg>
                <p className="font-bold text-lg">Superfast cloud data saved</p>
                <div className="flex justify-between">
                  <p>Cloud Server</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                    />
                  </svg>
                </div>
              </div>

              <div className="bg-orange-100 px-6 py-8 flex flex-col gap-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="M4 12V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H11" />
                    <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20M1.992 19h3m3 0h-3m0 0v-3m0 3v3" />
                  </g>
                </svg>
                <p className="font-bold text-lg">
                  User Next Level Interface Site
                </p>
                <div className="flex justify-between">
                  <p>Website</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STRUCTURE section */}
      <div className="bg-orange-100/50 py-20">
        <div className="  w-11/12 mx-auto  grid grid-cols-2 gap-10">
          {/* left section */}
          <div className="flex flex-col gap-8">
            <p className="text-orange-400 text-lg font-bold">STRUCTURE</p>
            <p className="text-4xl leading-normal">
              Discover All{" "}
              <span className="text-orange-400">
                Our <br /> Features
              </span>
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio <br />
              cumque nihil impedit quo minus id quod maxime placeat <br />{" "}
              facere possimus, omnis voluptas assumenda est, omnis <br /> dolor
              repellendus temporibus autem.
            </p>

            <div className="flex gap-20">
              <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="orange"
                      d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                    />
                  </svg>
                  <p>Trends Tracking</p>
                </div>

                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="orange"
                      d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                    />
                  </svg>
                  <p>Vendor Management</p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="orange"
                      d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                    />
                  </svg>
                  <p>Loyalty Programs</p>
                </div>

                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="orange"
                      d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                    />
                  </svg>
                  <p>Billing</p>
                </div>
              </div>
            </div>
            <button className="border rounded-xl py-2 px-6 bg-slate-700 text-white shadow-xl w-full mx-auto ">
              All categories
            </button>
          </div>

          {/* right section */}
          <div>
            <img src={dashboard} alt="dashboard image" />
          </div>
        </div>
      </div>

      {/* picture section */}

      <div className="bg-orange-50/50 py-16">
        <div className=" w-10/12 mx-auto grid grid-cols-2 gap-20">
          {/* left section */}
          <div>
            <img src={dashboard2} alt="dashboard-image" />
          </div>

          {/* right section */}
          <div className="flex flex-col gap-8">
            <p className="text-orange-400 text-lg font-bold">
              PERFORMANCE METRICS
            </p>
            <p className="text-4xl font-bold">
              Grow Up Your Business <br /> With{" "}
              <span className="text-orange-400 font-bold">In 5 Minutes</span>
            </p>
            <p className=" opacity-60">
              The passage experienced a surge in popularity during the <br />{" "}
              1960s when Letraset used it on their dry-transfer sheets, <br />{" "}
              and again during the 90s as desktop publishers bundled the <br />{" "}
              text with their software.
            </p>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-2xl font-bold">200K</p>
                <p>
                  Active user from the <br /> community
                </p>
              </div>
              <div>
                <p>
                  <span className="text-2xl font-bold">90%</span> (Positive
                  Reating){" "}
                </p>

                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="orange"
                      d="m9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569c-.002 0-.646 3.113-1.074 5.19a.496.496 0 0 0 .734.534c1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029a.5.5 0 0 0 .195-.505l-1.071-5.191l3.919-3.566a.499.499 0 0 0-.28-.865c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83a.499.499 0 0 0-.909 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="orange"
                      d="m9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569c-.002 0-.646 3.113-1.074 5.19a.496.496 0 0 0 .734.534c1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029a.5.5 0 0 0 .195-.505l-1.071-5.191l3.919-3.566a.499.499 0 0 0-.28-.865c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83a.499.499 0 0 0-.909 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="orange"
                      d="m9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569c-.002 0-.646 3.113-1.074 5.19a.496.496 0 0 0 .734.534c1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029a.5.5 0 0 0 .195-.505l-1.071-5.191l3.919-3.566a.499.499 0 0 0-.28-.865c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83a.499.499 0 0 0-.909 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="orange"
                      d="m9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569c-.002 0-.646 3.113-1.074 5.19a.496.496 0 0 0 .734.534c1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029a.5.5 0 0 0 .195-.505l-1.071-5.191l3.919-3.566a.499.499 0 0 0-.28-.865c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83a.499.499 0 0 0-.909 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="orange"
                      d="m12 .63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.259 9.161l8.839-.18zm0 6.092l-1.47 4.23l-4.478.091l3.569 2.706l-1.297 4.287L12 15.478l3.676 2.558l-1.296-4.287l3.568-2.706l-4.477-.09z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="orange"
                    d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                  />
                </svg>
                <p>Get Overview at a glance.</p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="orange"
                    d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                  />
                </svg>
                <p>Deposite funds easily, security.</p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="orange"
                    d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                  />
                </svg>
                <p>First Working Process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* people join */}
      <div className=" bg-slate-700 py-6 ">
        <div className=" w-10/12  mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16">
          <div className=" space-y-6 flex flex-col items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M21.053 20.8c-1.132-.453-1.584-1.698-1.584-1.698s-.51.282-.51-.51s.51.51 1.02-2.548c0 0 1.413-.397 1.13-3.68h-.34s.85-3.51 0-4.7c-.85-1.188-1.188-1.98-3.057-2.547s-1.188-.454-2.547-.396s-2.492.793-2.492 1.19c0 0-.85.056-1.188.396c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.625l-.337.114c-.284 3.283 1.13 3.68 1.13 3.68c.51 3.058 1.02 1.756 1.02 2.548s-.51.51-.51.51s-.452 1.245-1.584 1.698s-7.416 2.886-7.927 3.396c-.512.51-.454 2.888-.454 2.888H29.43s.06-2.377-.452-2.888c-.51-.51-6.795-2.944-7.927-3.396zm-12.47-.172c-.1-.18-.148-.31-.148-.31s-.432.24-.432-.432s.432.432.864-2.16c0 0 1.2-.335.96-3.118h-.29s.144-.59.238-1.334a10 10 0 0 1 .037-.996l.038-.426c-.02-.492-.107-.94-.312-1.226c-.72-1.007-1.008-1.68-2.59-2.16c-1.584-.48-1.01-.384-2.16-.335c-1.152.05-2.112.672-2.112 1.01c0 0-.72.047-1.008.335c-.27.27-.705 1.462-.757 1.885v.28c.048.654.26 2.45.47 2.873l-.286.096c-.24 2.782.96 3.118.96 3.118c.43 2.59.863 1.488.863 2.16s-.432.43-.432.43s-.383 1.058-1.343 1.44l-.232.092v5.234h.575c-.03-1.278.077-2.927.746-3.594c.357-.355 1.524-.94 6.353-2.862zm22.33-9.056c-.04-.378-.127-.715-.292-.946c-.718-1.008-1.007-1.68-2.59-2.16s-1.007-.384-2.16-.335c-1.15.05-2.11.672-2.11 1.01c0 0-.72.047-1.008.335c-.27.272-.71 1.472-.758 1.89h.033l.08.914c.02.23.022.435.027.644c.09.666.21 1.35.33 1.59l-.286.095c-.24 2.782.96 3.118.96 3.118c.432 2.59.863 1.488.863 2.16s-.43.43-.43.43s-.054.143-.164.34c4.77 1.9 5.927 2.48 6.28 2.833c.67.668.774 2.316.745 3.595h.48V21.78l-.05-.022c-.96-.383-1.344-1.44-1.344-1.44s-.433.24-.433-.43s.433.43.864-2.16c0 0 .804-.23.963-1.84V14.66q0-.026-.003-.05h-.29s.216-.89.293-1.862z"
                />
              </svg>
            </div>
            <p className="text-white text-4xl font-bold">
              100,000+ <br />{" "}
              <span className=" text-gray-400 text-base">
                No. of People Join
              </span>
            </p>
          </div>

          <div className=" space-y-6 flex flex-col items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2zm.5 6.5L9 12l2 2l4.5-4.5L17 11l-6 6z"
                />
              </svg>
            </div>
            <p className="text-white text-4xl font-bold text-center">
              120+ <br />
              <span className=" text-gray-400 text-base">
                Countries Reached
              </span>
            </p>
          </div>

          <div className=" space-y-6 flex flex-col items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15 8v8H5V8zm1-2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4V7a1 1 0 0 0-1-1"
                />
              </svg>
            </div>
            <p className="text-white text-4xl font-bold">
              425,000+ <br />
              <span className=" text-gray-400 text-base">
                No. of Sessions Given
              </span>
            </p>
          </div>

          <div className=" space-y-6 flex flex-col items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M255.656 22.75c-131.173 0-237.72 33.326-237.72 74.344c.002 22.39 32.41 42.59 82.564 56.22c-17.407-8.91-27.53-19.216-27.53-30.47c0-32.128 81.75-58.53 182.686-58.53s183.25 26.4 183.25 58.53c0 11.194-10.3 21.59-27.53 30.47c49.843-13.627 81.968-33.91 81.968-56.22c0-41.018-106.514-74.344-237.688-74.344M147.47 103.094v30.094h216.28v-30.094zm4.374 48.78V361.94h18.687V151.875h-18.686zm39.125 0c.698 61.812 25.325 96.435 52.81 103.814c-27.847 7.475-52.776 42.9-52.843 106.25h128.188c-.066-63.353-24.952-98.766-52.78-106.25c27.468-7.386 52.05-41.998 52.75-103.813H190.968zm147.936 0V361.94h18.688V151.875h-18.688zM100.5 360.72c-50.153 13.626-82.563 33.827-82.563 56.217c0 41.018 106.546 74.344 237.72 74.344s237.687-33.325 237.687-74.342c0-22.31-32.125-42.593-81.97-56.22c17.232 8.88 27.532 19.244 27.532 30.438c0 32.13-82.313 58.563-183.25 58.563S72.97 423.283 72.97 391.155c0-11.254 10.123-21.528 27.53-30.437zm46.97 19.905v30.063h216.28v-30.063z"
                />
              </svg>
            </div>
            <p className="text-white text-4xl font-bold text-center">
              500K <br />{" "}
              <span className=" text-gray-400 text-base">Hour of work</span>
            </p>
            <p></p>
          </div>
        </div>
      </div>

      {/* pricing section */}
      <div className=" bg-orange-100/50 py-16 ">
        {/* pricing section */}
        <div className=" lg:w-8/12 mx-auto flex flex-col items-center space-y-8">
          {/* first child */}
          <div className=" space-y-8">
            <p className="text-center text-orange-500 font-bold">OUR PRICING</p>
            <p className="font-semibold text-center lg:text-5xl leading-normal">
              Choose The Plan That's Right For <br />{" "}
              <span className="text-orange-500">Your Business</span>
            </p>
          </div>

          {/* cards section */}
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white space-y-8">
              <div className="p-4 space-y-8">
                <div className="bg-orange-100  p-4 space-y-4">
                  <p className=" font-bold text-lg">Free</p>
                  <p className=" opacity-70">
                    Explore the products and power small personal projects.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className=" font-semibold text-5xl">
                    $0 <span className="text-sm">/Month</span>
                  </p>
                  <p>includes:</p>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-400 flex justify-center p-4">
                <button className="border border-orange-500 px-8 py-1">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white space-y-8">
              <div className="p-4 space-y-8">
                <div className="bg-orange-100  p-4 space-y-4">
                  <p className=" font-bold text-lg">Free</p>
                  <p className=" opacity-70">
                    Explore the products and power small personal projects.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className=" font-semibold text-5xl">
                    $0 <span className="text-sm">/Month</span>
                  </p>
                  <p>includes:</p>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-400 flex justify-center p-4">
                <button className="border border-orange-500 px-8 py-1">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white space-y-8">
              <div className="p-4 space-y-8">
                <div className="bg-orange-100  p-4 space-y-4">
                  <p className=" font-bold text-lg">Free</p>
                  <p className=" opacity-70">
                    Explore the products and power small personal projects.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className=" font-semibold text-5xl">
                    $0 <span className="text-sm">/Month</span>
                  </p>
                  <p>includes:</p>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-400 flex justify-center p-4">
                <button className="border border-orange-500 px-8 py-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* need support */}
      <div className="bg-orange-50/50 py-20">
        <div className="w-10/12 mx-auto flex flex-col gap-20">
          <div className="leading-loose">
            <p className="text-center text-orange-400 font-bold">
              NEED SUPPORT
            </p>
            <p className="text-center text-4xl">
              Frequently asked{" "}
              <span className="text-orange-400">Questions</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
            {/* left */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12.438 17V7L9 9.5"
                    />
                  </svg>
                  <p className="text-lg">
                    How Benefit That I Got When Choose Basic Plan
                  </p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  Contrary to this, individuals above this tax bracket of <br />{" "}
                  30% can benefit from low basic pay. This is because <br /> the
                  or retirement benefits have to be approximately <br /> 27% of
                  the basic pay.
                </p>
              </div>

              <div>
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8.75 9.92c0-3.894 5.77-3.894 5.77 0c0 2.94-3.77 5.476-5.77 7.08c0 0 3.75-.625 6.25 0"
                    />
                  </svg>
                  <p className="text-lg">How Do I Organize My Notes?</p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  Try using coloured paper so that all related notes are <br />{" "}
                  made on sheets of the same colour. Some notebooks <br /> have
                  different colours and have the advantage of <br /> keeping all
                  your notes in one place.
                </p>
              </div>

              <div>
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8.75 9.493c0-3.324 6.25-3.324 6.25 0c0 0 0 2.507-3.125 2.507C15 12 15 14.507 15 14.507c0 3.324-6.25 3.324-6.25 0"
                    />
                  </svg>
                  <p className="text-lg">How Long For A Standard Project</p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  Typically, an average project will take in the region of{" "}
                  <br /> three four months. Some of our projects are small,{" "}
                  <br /> fully specified and are completed in four six weeks.{" "}
                  <br />
                  Others can take six months or much longer
                </p>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12.917 7c-1.042 3.75-4.167 6.875-4.167 6.875H15M13.438 17v-5"
                    />
                  </svg>
                  <p className="text-lg">
                    How Do I Change My Email or Password?
                  </p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  You can change your Webmail password in the <br /> one.com
                  control panel under Email if you have <br /> forgotten it.
                  Here you can manage all email accounts <br /> on your domain.
                </p>
              </div>

              <div>
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M14.375 7c-2.5.625-5.625 0-5.625 0v3.566h3.473c1.534 0 2.777 1.064 2.777 2.377v1.399c0 3.522-6.25 3.566-6.25 0"
                    />
                  </svg>
                  <p className="text-lg">Can I Lock My Note App?</p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  Through the collaboration with customers in <br /> discussing
                  needs and demand, we're able to attain <br /> mutual
                  understanding, gain customer trust to offer <br /> appropriate
                  advice.
                </p>
              </div>

              <div>
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.75 7H12.5a3.75 3.75 0 0 0-3.75 3.75v3.125m0 0a3.125 3.125 0 1 0 6.25 0c0-1.726-1.4-2.5-3.125-2.5s-3.125.774-3.125 2.5"
                    />
                  </svg>
                  <p className="text-lg">
                    {" "}
                    Can My Premium License Be Used For All Devices?
                  </p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  The Remote Access License is an endpoint-based <br /> license
                  designated for a single user. It allows to the <br /> user
                  remotely connect to a maximum of 3 devices <br /> from an
                  unlimited number of devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* office address */}
      <div className="bg-orange-300/50">
        <div className="  w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
          <div className="flex items-center gap-4 bg-orange-100 p-6 rounded-md">
            <svg
              className=" animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"
              />
              <path
                fill="currentColor"
                d="M11.42 21.814a1 1 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"
              />
            </svg>
            <p>
              <span className="text-2xl font-bold">Office address</span> <br />2
              Holt Street, Surry Hills, Australia.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-orange-100 p-6 rounded-md">
            <svg
              className="animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.93 21q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T3 6.07q0-.458.3-.763T4.05 5h2.473q.408 0 .712.257q.303.257.411.659L8.142 8.3q.07.42-.025.733t-.333.513l-2.193 2.046q.615 1.117 1.36 2.076t1.59 1.817q.87.87 1.875 1.62q1.003.749 2.203 1.414l2.139-2.177q.244-.263.549-.347t.674-.033l2.104.43q.407.1.661.411t.254.712v2.435q0 .45-.306.75t-.763.3M5.12 10.654l1.92-1.765q.095-.077.124-.212q.03-.135-.01-.25l-.444-2.12q-.038-.153-.134-.23T6.327 6H4.275q-.115 0-.192.077t-.077.192q.029 1.025.321 2.14t.794 2.245m8.45 8.334q1.014.502 2.16.743q1.148.24 2 .257q.115 0 .192-.077T18 19.72v-2.008q0-.153-.077-.25q-.077-.096-.23-.134l-1.85-.379q-.116-.039-.202-.01q-.087.03-.183.125zM12.5 4q-.213 0-.356-.144T12 3.499t.144-.356T12.5 3h8q.213 0 .356.144t.144.357t-.144.356T20.5 4zm0 3.385q-.213 0-.356-.144Q12 7.097 12 6.884t.144-.356t.356-.143h8q.213 0 .356.144t.144.356t-.144.356t-.356.144zm0 3.384q-.213 0-.356-.144T12 10.27t.144-.356t.356-.144h8q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143z"
              />
            </svg>
            <p>
              <span className="text-2xl font-bold">Telephone number</span>{" "}
              <br />
              1-888-452-1505
            </p>
          </div>

          <div className="flex items-center gap-4 bg-orange-100 p-6 rounded-md">
            <svg
              className="animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="m3 7l9 6l9-6" />
              </g>
            </svg>
            <p>
              <span className="text-2xl font-bold">Mail address</span> <br />
              supprot22@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* footer section last section */}

      <div className="bg-slate-500">
        <div className=" w-11/12 mx-auto grid grid-cols-4 gap-4 py-10">
          <div className="flex flex-col gap-6">
            <img className="h-12 w-12" src={logo} alt="logo" />
            <div className=" flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="yellow"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029"
                  color="currentColor"
                />
              </svg>
              <p className="opacity-70">
                Greater pleasures el esndures pains avoid welcomed avoided
                pariatu.
              </p>
            </div>
            <p className="text-white">Subscribe to our Site :</p>
            <input
              className="h-8 w-42 bg-slate-400"
              type="text"
              placeholder="enter email"
            />
            <p>
              © 2025 Loxcy - Created By{" "}
              <span className="text-white text-lg">Themesdesign</span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white "> Company :</p>
            <p>CompanyProfile</p>
            <p>Services</p>
            <p>Plans & Pricing</p>
            <p>Team Members</p>
            <p>Contact</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white">Community :</p>
            <p>Career </p>
            <p>Leadership</p>
            <p>Press & Media</p>
            <p>Projects</p>
            <p>Marketing</p>
            <p>Marketing</p>
            <p>Challenge Of Project</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white">Solution : </p>
            <p>Small Business</p>
            <p>Ebook Library </p>
            <p>Free Theme</p>
            <p>Affiliates</p>
            <p>Testimonial Themes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
