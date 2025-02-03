import React from "react";
import { Input } from "@/components/ui/input";
import {
  Bell,
  CircleDashed,
  LayoutGrid,
  SearchCode,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  return (
    <div className="bg-slate-100 flex p-4 justify-between fixed top-0 w-full border border-b-gray-300">
      <div className="flex gap-12">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex gap-2 items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 144"
                >
                  <path
                    fill="#7c7c7d"
                    d="m219.833 71.7l-28.26-28.32l14.123-28.309l45.916 46.013c5.85 5.863 5.85 15.368 0 21.23l-56.514 56.634c-5.85 5.862-15.336 5.862-21.187 0c-5.85-5.863-5.85-15.368 0-21.23z"
                  />
                  <path
                    fill="#151618"
                    d="M173.922 4.396c5.85-5.863 15.338-5.86 21.189.002l10.595 10.618L82.09 138.892c-5.85 5.863-15.339 5.86-21.189-.002l-10.596-10.618zm-52.98 38.934L99.75 64.566l-28.26-28.32l-35.323 35.398l28.26 28.319l-14.123 28.309L4.388 82.259c-5.85-5.862-5.85-15.368 0-21.23L60.9 4.399c5.85-5.863 15.338-5.866 21.189-.003z"
                  />
                </svg>
                <p>
                  <span className="font-bold">daily</span>
                  <span className="opacity-60 text-sm">.dev</span>
                </p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="relative flex">
          <SearchCode className="absolute left-2 top-1 font-normal" />
          <Input
            className="bg-gray-200 pl-12 hover:shadow-2xl h-10 w-[400px]"
            type="email"
            placeholder="Search"
          />
          <div className=" absolute right-2 top-1 flex gap-2  items-center">
            <p className="border border-gray-300 p-1 rounded-lg shadow-sm text-sm">
              Ctrl
            </p>
            <p>+</p>
            <p className="border border-gray-300 py-1 px-2 rounded-lg shadow-sm text-sm">
              k
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <div>
          <Button className="bg-[#EA2654] text-lg hover:shadow-2xl hover:bg-[#EA2654]  text-white pl-8 w-32">
            <Sparkles className=" fill-white" /> Upgrade
          </Button>
        </div>


        <div className="bg-[#E8E8E8] hover:bg-gray-300 p-1 rounded-md">
          <LayoutGrid className="opacity-60 cursor-pointer" />
        </div>


        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="bg-[#E8E8E8] hover:bg-gray-300 p-1 rounded-md">
                <Bell className="opacity-60" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex items-center rounded-xl gap-6 bg-gray-200 p-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="hover:bg-gray-300 p-2 rounded-xl">
                <CircleDashed stroke="#FB5A91" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Current Streak</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="bg-[#4E2CD7] p-1 rounded-full">
                  <Zap stroke="white" className="h-4 w-4" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Profile Setting</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="h-8 w-8 rounded-xl overflow-hidden">
            <Image
              className="h-8 w-8 object-cover"
              src="https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="thisisprofile"
              height={100}
              width={100}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
