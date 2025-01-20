import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-[#FFFFFF] border shadow-lg w-6/12 mx-auto p-2 rounded-2xl items-center fixed left-80 ">
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3D61FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          //   class="lucide lucide-box h-8 w-8"
        >
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
          <path d="m3.3 7 8.7 5 8.7-5"></path>
          <path d="M12 22V12"></path>
        </svg>
        <p className="text-[#3D61FF] font-bold ">Fenzora</p>
      </div>

      <div className="flex gap-4 text-sm opacity-60 font-semibold">
        <p className="hover:text-[#3f4cd3] cursor-pointer">About</p>
        <p className="hover:text-[#5070FF] cursor-pointer">Trusted By</p>
        <p className="hover:text-[#5070FF] cursor-pointer">Features</p>
        <p className="hover:text-[#5070FF] cursor-pointer">Contact</p>
      </div>

      <div className="flex  gap-2">
      <button className="px-3 py-1 cursor-pointer border shadow-sm hover:bg-slate-400/50 rounded-md text-xs flex items-center">
        Login
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11.98 20v-1H19V5h-7.02V4H20v16zm-.71-4.461l-.703-.72l2.32-2.319H4.019v-1h8.868l-2.32-2.32l.702-.718L14.808 12z"
          />
        </svg>
      </button>
      <button className="bg-[#5070FF] px-3 py-1 rounded-md flex items-center gap-2 text-xs text-white ">
        Create Store{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22 5c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.424c.618-.735 1-1.692 1-2.746zm-2 0v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1M10 4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831zm6 14v-3h4v3zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.131q.382.102.787.125A3.99 3.99 0 0 0 9 10.643c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357a3.99 3.99 0 0 0 3.213 1.351q.406-.023.787-.125V19z"
          />
        </svg>
      </button>
      </div>
    </div>
  );
}
