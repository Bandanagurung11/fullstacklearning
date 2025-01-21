import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pricing() {
  return (
    <div className="space-y-12">
      <p className="text-center text-lg lg:text-3xl">
        Affordable{" "}
        <span className="bg-[#E7EDEA] p-1 text-[#1CA34A]">pricing</span> for
        your <span className="bg-[#FDF7E6] text-[#CA8A04] p-1">business</span>
      </p>

      <Tabs defaultValue="account" className="">
        <div className="flex justify-center">
          <TabsList className="lg:py-6 lg:px-6 bg-[#D7D9E0]">
            <TabsTrigger value="account" className="text-lg">
              Monthly
            </TabsTrigger>
            <TabsTrigger value="password" className="text-lg">
              Yearly
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="account">
          {/* for monthly */}
          <div className="p-4">
          <div className="grid lg:grid-cols-3 gap-8 px-2">
            {/* first */}
            <div className=" bg-[#FCFCFC] shadow-lg space-y-12 p-4 rounded-xl ">
              <div className="space-y-3">
                <p className="text-lg font-bold">For Learners</p>
                <p className="text-4xl font-bold">Custom</p>
                <p className="text-sm opacity-60">
                  Essential features you need to get started
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 1</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 2</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 3</p>
                </div>
              </div>
              <button className="bg-[#3D61FF] py-1 rounded-md text-white w-full text-sm"> Get Started</button>
            </div>
{/* second */}
            <div className="shadow-lg space-y-12 p-4 rounded-xl border border-blue-600 ">
              <div className="space-y-4">
                <p className="text-lg font-bold">Pro</p>
                <p className=""><span  className="text-3xl font-bold">$25</span>
                 {" "}/ month</p>
                <p className="text-sm opacity-60">
                Perfect for owners of small & medium businessess
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 1</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 2</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 3</p>
                </div>
              </div>
              <button className="bg-[#3D61FF] py-1 rounded-md text-white text-sm w-full"> Get Started</button>
            </div>
{/* third */}
            <div className="shadow-lg bg-[#FCFCFC]  space-y-12 p-4 rounded-xl ">
              <div className="space-y-4">
                <p className="text-lg font-bold">Enterprise</p>
                <p className="text-3xl font-bold">Custom</p>
                <p className="text-sm opacity-60">
                Dedicated support and infrastructure to fit your needs
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 1</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 2</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 3</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Super Exclusive Feature</p>
                </div>
              </div>
              <button className="bg-[#3D61FF] py-1 rounded-md text-white text-sm w-full"> Contact Sales</button>
            </div>

{/* fourth */}
            <div className="shadow-lg bg-[#FCFCFC]  space-y-12 p-4 rounded-xl ">
              <div className="space-y-4">
                <p className="text-md font-bold">Custom</p>
                <p className="text-2xl font-bold">Custom</p>
                <p className="text-sm opacity-60">
                Dedicated support and infrastructure to fit your needs
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 1</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 2</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 3</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Super Exclusive Feature</p>
                </div>
              </div>
              <button className="bg-[#3D61FF] py-1 rounded-md w-full text-white text-sm"> Contact Sales</button>
            </div>
          </div>
          </div>
        </TabsContent>
        <TabsContent value="password">

          {/* for yearly */}

        <div className="p-4">
          <div className="grid lg:grid-cols-3 gap-8 px-2">
            {/* first */}
            <div className=" bg-[#FCFCFC] shadow-lg space-y-12 p-4 rounded-xl ">
              <div className="space-y-3">
                <p className="text-lg font-bold">For Learners</p>
                <p className="text-4xl font-bold">Custom</p>
                <p className="text-sm opacity-60">
                  Essential features you need to get started
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 1</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 2</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 3</p>
                </div>
              </div>
              <button className="bg-[#3D61FF] py-1 rounded-md text-white w-full text-sm"> Get Started</button>
            </div>
{/* second */}
            <div className="shadow-lg space-y-12 p-4 rounded-xl border border-blue-600 ">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                <p className="text-lg font-bold">Pro</p>
                <p className="opacity-60">Save $50</p>
                </div>
                <p className=""><span  className="text-3xl font-bold">$250</span>
                 {" "}/ month</p>
                <p className="text-sm opacity-60">
                Perfect for owners of small & medium businessess
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 1</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 2</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 3</p>
                </div>
              </div>
              <button className="bg-[#3D61FF] py-1 rounded-md text-white text-sm w-full"> Get Started</button>
            </div>
{/* third */}
            <div className="shadow-lg bg-[#FCFCFC]  space-y-12 p-4 rounded-xl ">
              <div className="space-y-4">
                <p className="text-lg font-bold">Enterprise</p>
                <p className="text-3xl font-bold">Custom</p>
                <p className="text-sm opacity-60">
                Dedicated support and infrastructure to fit your needs
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 1</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 2</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 3</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Super Exclusive Feature</p>
                </div>
              </div>
              <button className="bg-[#3D61FF] py-1 rounded-md text-white text-sm w-full"> Contact Sales</button>
            </div>

{/* fourth */}
            <div className="shadow-lg bg-[#FCFCFC]  space-y-12 p-4 rounded-xl ">
              <div className="space-y-4">
                <p className="text-md font-bold">Custom</p>
                <p className="text-2xl font-bold">Custom</p>
                <p className="text-sm opacity-60">
                Dedicated support and infrastructure to fit your needs
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 1</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 2</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Example Feature Number 3</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                  <p className="text-sm opacity-60">Super Exclusive Feature</p>
                </div>
              </div>
              <button className="bg-[#3D61FF] py-1 rounded-md w-full text-white text-sm"> Contact Sales</button>
            </div>
          </div>
          </div>
            
        </TabsContent>
      </Tabs>
    </div>
  );
}
