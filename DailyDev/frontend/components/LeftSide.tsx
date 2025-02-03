"use client"
import { SquareChevronLeft } from "lucide-react";
import React, { useState } from "react";

import Image from "next/image";
import { CreateFeed } from "./CreateFeed";


export default function LeftSide() {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen)
  return (
    <div className=" fixed h-screen border-r border-r-gray-300 mt-20   w-2/12 space-y-12">
      <div className="space-y-4 p-4">
        <div className="flex gap-24 justify-between">
          <p className="text-lg opacity-70">menu</p>
          <div className=" p-1 rounded-xl hover:bg-gray-300 cursor-pointer">
          <SquareChevronLeft onClick={()=>setIsOpen(!isOpen)} />
          </div>
        </div>
          
          <CreateFeed />
       
      </div>

      <div>
        <div className="flex justify-between  py-2 items-center cursor-pointer hover:bg-[#F2F2F3] transition duration-500 ease-in-out">
          <div className="flex gap-2">
            <div className=" h-6 w-6 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                className="h-6 w-6 object-cover"
                src="https://images.unsplash.com/photo-1737928946596-a9c098b2019d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="thisisprofile"
                height={100}
                width={100}
              ></Image>
            </div>
            <p>my feed</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
