import React from "react";
import { Input } from "@/components/ui/input";
import { Bell, SearchCode, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex p-4 justify-between fixed top-0 w-full border border-b-gray-300">
      <div className="flex gap-12">
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
        <div className="relative">
          <SearchCode className="absolute left-2 top-1 font-normal" />
          <Input
            className="bg-[#F5F8FC] pl-12 hover:shadow-2xl"
            type="email"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div>
          
          <Button className="bg-[#EA2654] text-lg hover:shadow-2xl hover:bg-[#EA2654]  text-white pl-8 w-32">
          <Sparkles className=" fill-white" /> Upgrade
          </Button>
        </div>
        <Bell className="bg-[#EAEBEC]" />
      </div>
    </div>
  );
}
