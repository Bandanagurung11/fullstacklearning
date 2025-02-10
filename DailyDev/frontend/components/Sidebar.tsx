"use client";
import {
  Atom,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Eye,
  FileText,
  Flame,
  Globe,
  Hash,
  Link,
  MessageCircleMore,
  MessageCirclePlus,
  MessageSquareWarning,
  PanelRightOpen,
  Plus,
  SquareChevronRight,
  Users,
} from "lucide-react";
import React, { useState } from "react";

import Image from "next/image";
import { CreateFeed } from "./CreateFeed";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "./SidebarContext";

const list = [
  {
    icon: <Users className="h-5 w-5" />,
    name: "Following",
  },
  {
    icon: <Flame className="h-5 w-5" />,
    name: "Explore",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    name: "History",
  },
];

const bookmarks = [
  {
    icon: <Bookmark className="h-5 w-5" />,
    name: "Quick saves",
  },
  {
    icon: <MessageCirclePlus className="h-5 w-5" />,
    name: "Read it later",
  },
  {
    icon: <Plus className="h-5 w-5" />,
    name: "New folder",
  },
];

const discover = [
  {
    icon: <Hash className="h-5 w-5" />,
    name: "Tags",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    name: "Sources",
  },
  {
    icon: <Users className="h-5 w-5" />,
    name: "Leaderboard",
  },
  {
    icon: <MessageCircleMore className="h-5 w-5" />,
    name: "Discussions",
  },
  {
    icon: <Link className="h-5 w-5" />,
    name: "Submit a link",
  },
];

const resources = [
  {
    icon: <FileText className="h-5 w-5" />,
    name: "Docs",
  },
  {
    icon: <SquareChevronRight className="h-5 w-5" />,
    name: "Changelog",
  },
  {
    icon: <MessageSquareWarning className="h-5 w-5" />,
    name: "Feedback",
  },
];

export default function LeftSide() {
  const { isExpanded, toggleSidebar } = useSidebar();
  const [isExpaned, setIsExpaned] = useState<{ [key: string]: boolean }>({
    list: true,
    bookmarks: true,
    discover: true,
    resources: true,
    network: true,
    custom: true,
    //this is doing because when clicking in on arrow don't reflect to another section cause we are using same usestate variables for all section
  });

  const setter = (section: string) => {
    setIsExpaned((currentState) => ({
      ...currentState,
      [section]: !currentState[section],
    }));
  };

  return (
    <div className= {`pb-24 fixed h-full overflow-y-auto scrollbar-hide  border-r border-r-gray-300 mt-20 space-y-4 ${isExpanded? "w-60" : "w-12" }`}>
      <div className={`space-y-4 ${isExpanded? "p-4" : "p-2"}`}>
        <div className="flex items-center justify-between">
          {isExpanded && <p className=" opacity-70">Menu</p>}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className=" p-1 rounded-lg hover:bg-gray-300 cursor-pointer">
                  <PanelRightOpen className= "h-5 w-5" onClick={toggleSidebar} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                {isExpanded?
                <p>Close sidebar</p>
              :
              <p>Open sidebar</p>
              }
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CreateFeed />
      </div>

      {/* user and following section */}

      <div>
        <div className="flex flex-col ">
          <div className={`hover:bg-gray-300 transition duration-500 ease-in-out ${isExpanded? "p-2" : "p-3"}`}>
            <div className="flex gap-2 items-center cursor-pointer ">
              <div className=" h-5 w-5 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  className="h-5 w-5 object-cover"
                  src="https://images.unsplash.com/photo-1737928946596-a9c098b2019d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="thisisprofile"
                  height={100}
                  width={100}
                ></Image>
              </div>
              {isExpanded&&<p className="text-sm">my feed</p>}
            </div>
          </div>
          {list.map((eachItems, index) => (
            <div
              key={index}
              className={`hover:bg-gray-300 transition duration-500 ease-in-out ${isExpanded? "p-2": "p-3" }`}
            >
              <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out">
                <p>{eachItems.icon}</p>
                {isExpanded&& <p className="text-sm">{eachItems.name}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* custom Section */}
      <div>
        <div className="p-2 flex items-center justify-between">
          {isExpanded&&<p className="opacity-70">Custom feeds</p>}
         {isExpanded&& <div
            className="hover:bg-gray-300 cursor-pointer rounded-lg"
            onClick={() => setter("custom")}
          >
            {isExpaned["custom"] ? (
              <ChevronUp className="h-5 w-5 opacity-60" />
            ) : (
              <ChevronDown className="h-5 w-5 opacity-60" />
            )}
          </div>}
        </div>
        {isExpaned["custom"] && (
          <div className={`${isExpanded? "p-2" :  "p-3"} hover:bg-gray-300 cursor-pointer`}>
            <div className="flex gap-4 items-center ">
              <Plus className="h-5 w-5" />
             {isExpanded&& <p className="text-sm">Custom feed</p>}
            </div>
          </div>
        )}
      </div>

      {/* network section */}
      <div>
        <div className="p-2 flex items-center justify-between">
          {isExpanded&& <p className="opacity-70 ">Network</p>}
          {isExpanded && <div
            className="hover:bg-gray-300 cursor-pointer rounded-lg"
            onClick={() => setter("network")}
          >
            {isExpaned["network"] ? (
              <ChevronUp className="h-5 w-5 opacity-60" />
            ) : (
              <ChevronDown className="h-5 w-5 opacity-60" />
            )}
          </div>}
        </div>
        {isExpaned["network"] && (
          <div>
            <div className={`${isExpanded? "p-2" : "p-3"} hover:bg-gray-300 cursor-pointer`}>
              <div className=" flex gap-4 items-center ">
                <Atom className="h-5 w-5" />
                {isExpanded&&<p className="text-sm">Find Squads</p>}
              </div>
            </div>
            <div className={`${isExpanded? "p-2" : "p-3"} hover:bg-gray-300 cursor-pointer`}>
              <div className=" flex gap-4 items-center ">
                <Plus className="h-5 w-5" />
               {isExpanded && <p className="text-sm">New Squads</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* bookmarks section */}
      <div>
        <div className="p-2 flex items-center justify-between">
          {isExpanded&& <p className="opacity-70">Bookmarks</p>}
          {isExpanded&& <div
            className="hover:bg-gray-300 cursor-pointer rounded-lg"
            onClick={() => setter("bookmarks")}
          >
            {isExpaned["bookmarks"] ? (
              <ChevronUp className="h-5 w-5 opacity-60" />
            ) : (
              <ChevronDown className="h-5 w-5 opacity-60" />
            )}
          </div>}
        </div>
        {isExpaned["bookmarks"] && (
          <div>
            {bookmarks.map((eachItems, index) => (
              <div key={index} className={`${isExpanded? "p-2" : "p-3"} hover:bg-gray-300 cursor-pointer`}>
                <div className="flex gap-4 items-center ">
                  <p>{eachItems.icon}</p>
                 {isExpanded&& <p className="text-sm">{eachItems.name}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* descover section */}
      <div>
        <div className="p-2 flex items-center justify-between">
          {isExpanded &&<p className="opacity-70">Descover</p>}
         {isExpanded&& <div
            className="hover:bg-gray-300 cursor-pointer rounded-lg"
            onClick={() => setter("discover")}
          >
            {isExpaned["discover"] ? (
              <ChevronUp className="h-5 w-5 opacity-60" />
            ) : (
              <ChevronDown className="h-5 w-5 opacity-60" />
            )}
          </div>}
        </div>
        {isExpaned["discover"] && (
          <div>
            {discover.map((eachItems, index) => (
              <div
                key={index}
                className={`hover:bg-slate-300 cursor-pointer ${isExpanded? "p-2" : "p-3"}`}
              >
                <div className="flex gap-4 items-center ">
                  <p>{eachItems.icon}</p>
                  {isExpanded&& <p className="text-sm">{eachItems.name}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* resources section */}
      <div>
        <div className="p-2 flex items-center justify-between">
          {isExpanded&& <p className="opacity-70">Resources</p>}
          {isExpanded&& <div
            className="hover:bg-gray-300 cursor-pointer rounded-lg"
            onClick={() => setter("resources")}
          >
            {isExpaned["resources"] ? (
              <ChevronUp className="h-5 w-5 opacity-60" />
            ) : (
              <ChevronDown className="h-5 w-5 opacity-60" />
            )}
          </div>}
        </div>
        {isExpaned["resources"] && (
          <div>
            {resources.map((eachItems, index) => (
              <div key={index} className={`hover:bg-gray-300 cursor-pointer ${isExpanded? "p-2" : "p-3"}`}>
                <div className="flex gap-4 items-center ">
                  <p>{eachItems.icon}</p>
                  {isExpanded &&<p className="text-sm">{eachItems.name}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
