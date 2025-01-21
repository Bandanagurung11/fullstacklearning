import React from "react";

export default function PricingSection() {
  const firstcard = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
          />
        </svg>
      ),
      title: "limited Encrypts",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
          />
        </svg>
      ),
      title: "2,500 Decrypts",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
          />
        </svg>
      ),
      title: "1,000 Function Runs",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
          />
        </svg>
      ),
      title: "1 Environment",
    },
  ];

  const secondcard = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
          />
        </svg>
      ),
      title: "Unlimited Encrypts",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
          />
        </svg>
      ),
      title: "2,500 Decrypts",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
          />
        </svg>
      ),
      title: "1,000 Function Runs",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
          />
        </svg>
      ),
      title: "1 Environment",
    },
  ];

  return (
    <div id="price" className=" bg-[#fff9f5]  py-8 lg:py-24 ">
      {/* pricing section */}
      <div className=" lg:w-10/12 mx-auto flex flex-col items-center space-y-12">
        {/* first child */}
        <div className=" space-y-8">
          <p className="text-center text-orange-500 text-lg font-bold">
            OUR PRICING
          </p>
          <p className="font-bold text-center lg:text-5xl text-[#0b363d] ">
            Choose The Plan That's <br /> Right For{" "}
            <span className="text-orange-500 leading-relaxed">
              Your Business
            </span>
          </p>
        </div>

        {/* cards section */}
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="bg-[#ffffff] space-y-8 shadow-lg rounded-lg">
            <div className="p-4 space-y-8">
              <div className="bg-[#fff9f5]  p-4 space-y-4">
                <p className=" font-bold text-2xl">Free</p>
                <p className=" opacity-70">
                  Explore the products and power small personal projects.
                </p>
              </div>

              <div className="space-y-4">
                <p className=" font-semibold text-5xl">
                  $0{" "}
                  <span className="text-sm font-bold opacity-60">/ Month</span>
                </p>
                <p>includes:</p>
                {firstcard.map((eachName, index) => (
                  <div className="flex gap-4 items-center ">
                    <p>{eachName.icon} </p>
                    <p className=" opacity-70">{eachName.title} </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#f8f8f8]  flex justify-center p-6">
            <button className="border border-black px-10 py-2 rounded-md shadow hover:shadow-2xl transform hover:translate-y-[-5px] hover:bg-[#0b363d] hover:text-white transition  duration-700 ease-in-out">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-white space-y-8 shadow-2xl">
            <div className="p-4 space-y-8">
              <div className="bg-[#0b363d] text-white rounded-md  p-4 space-y-4">
                <p className=" font-bold text-2xl">Pro</p>
                <p className=" opacity-70">
                  Run production apps with full functionality in best price.
                </p>
              </div>

              <div className="space-y-4">
                <p className=" font-semibold text-5xl">
                  $90{" "}
                  <span className="text-sm font-bold opacity-60">/ Month</span>
                </p>
                <p>includes:</p>
                {secondcard.map((eachName, index) => (
                  <div className="flex gap-4 items-center ">
                    <p>{eachName.icon} </p>
                    <p className=" opacity-70">{eachName.title} </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" bg-[#f8f8f8] flex justify-center p-6">
             <button className="border border-black px-10 py-2 bg-[#0b363d] rounded-md shadow hover:shadow-2xl transform hover:translate-y-[-5px] text-white transition  duration-700 ease-in-out">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg space-y-8">
            <div className="p-4 space-y-8">
              <div className="bg-[#fff9f5]  p-4 space-y-4">
                <p className=" font-bold text-2xl">Enterprise</p>
                <p className=" opacity-70">
                  Run compliant production apps with full functionality
                  onboarding and support.
                </p>
              </div>

              <div className="space-y-4">
                <p className=" font-semibold text-5xl">
                  $190{" "}
                  <span className="text-sm font-bold opacity-60">/ Month</span>
                </p>
                <p>includes:</p>
                {secondcard.map((eachName, index) => (
                  <div className="flex gap-4 items-center ">
                    <p>{eachName.icon} </p>
                    <p className=" opacity-70">{eachName.title} </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#f8f8f8]  flex justify-center p-6">
              <button className="border border-black px-10 py-2 rounded-md shadow hover:shadow-2xl transform hover:translate-y-[-5px] hover:bg-[#0b363d] hover:text-white transition  duration-700 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
