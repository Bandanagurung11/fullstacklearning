import React from "react";

export default function HeroSection() {
  return (
    <div className=" pt-36 pb-16 space-y-12">
      <p className="text-6xl text-center w-8/12 mx-auto">
        Take your business online with personalized e-commerce solution
      </p>
      <p className="w-6/12 mx-auto text-center">
        Launch your online store in 60 seconds.{" "}
        <span className="bg-[#EEE8F3] shadow-sm px-2 py-1 rounded-full text-[#C79BEF]">
          Build
        </span>{" "}
        <span className="bg-[#EEE8F3] shadow-sm px-2 py-1 rounded-full text-[#71C38F]">
          customize
        </span>{" "}
        <span className="bg-[#EEE8F3] shadow-sm px-2 py-1 rounded-full text-[#628DED]">
          sell
        </span>{" "}
        and{" "}
        <span className="bg-[#EEE8F3] shadow-sm px-2 py-1 rounded-full text-[#EA5C13]">
          manage
        </span>
        —all in one powerful ecommerce platform in Nepal.
      </p>

      <div className="flex gap-6 justify-center">
        <button className="bg-[#5070FF] px-4 py-2 rounded-md flex items-center gap-2 text-sm font-bold text-white ">
          Create Store{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22 5c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.424c.618-.735 1-1.692 1-2.746zm-2 0v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1M10 4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831zm6 14v-3h4v3zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.131q.382.102.787.125A3.99 3.99 0 0 0 9 10.643c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357a3.99 3.99 0 0 0 3.213 1.351q.406-.023.787-.125V19z"
            />
          </svg>
        </button>
        <button className="px-4 py-2 rounded-md shadow-sm border font-sm flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 256 180"
          >
            <path
              fill="#f00"
              d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
            />
            <path
              fill="#fff"
              d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
            />
          </svg>
          Watch demo
        </button>
      </div>
    </div>
  );
}
