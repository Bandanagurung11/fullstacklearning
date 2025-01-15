import React from 'react'

export default function PricingSection() {
  return (
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
  )
}
