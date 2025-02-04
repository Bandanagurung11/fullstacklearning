"use client"
import { Eye, Flame, SquareChevronLeft, Users } from "lucide-react";
import React, { useState } from "react";

import Image from "next/image";
import { CreateFeed } from "./CreateFeed";

const list=[
  {
    icon:<Users className="h-5 w-5" />,
    name: "Following"
  },
  {
    icon:<Flame className="h-5 w-5" />,
    name: "Explore"
  },
  {
    icon:<Eye className="h-5 w-5" />,
    name: "History"
  }
]


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
        <div className="flex flex-col space-y-4 p-2  ">
          <div>
          <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className=" h-5 w-5 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                className="h-5 w-5 object-cover"
                src="https://images.unsplash.com/photo-1737928946596-a9c098b2019d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="thisisprofile"
                height={100}
                width={100}
              ></Image>
            </div>
            <p>my feed</p>
          </div>
          </div>
          {
            list.map((eachItems, index)=>(
              <div key={index} className="flex gap-2 items-center cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out">
              <p>{eachItems.icon}</p>
              <p >{eachItems.name}</p>
            </div>

            ))
          }
          
        </div>
      </div>
    </div>
  );
}
