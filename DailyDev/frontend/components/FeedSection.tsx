"use client";
import {
  ArrowBigDown,
  ArrowBigUp,
  BookMarked,
  MessageCircleMore,
  Settings2,
  ShieldX,
  Trash,
} from "lucide-react";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface Ifeed {
  _id: string;
  title: string;
  image: string;
  likeCount: number;
}

export default function FeedSection() {
  const { toast } = useToast();

  const [feeds, setFeeds] = useState<Ifeed[] | undefined>(undefined);
  const [doLike, setDoLike] = useState(false);
  console.log(doLike);
  const [downVote, setDownVote] = useState(false);

  const fetchFeeds = async () => {
    try {
      const receivedFeeds = await axios.get("http://localhost:4000/feeds");
      console.log(receivedFeeds.data);
      setFeeds(receivedFeeds.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  const handleDeleteFeed = async (_id: string) => {
    try {
      // run delete function backend ko
      const response = await axios.delete(`http://localhost:4000/feeds/${_id}`);
      console.log(response);
      toast({
        title: "Post Deleted sucessfully",
      });
      fetchFeeds();
      // window.location.reload(); this is tradtional way not use much though
    } catch (error) {
      console.log("Delete Failed", error);
      toast({
        title: "Post deletion failed",
      });
    }
  };

  const handleLikeCount = async (e: FormEvent<HTMLElement>, _id: string) => {
    e.stopPropagation();
    if (doLike) return;

    try {
      const response = await axios.patch(`http://localhost:4000/feeds/${_id}`, {
        $inc: { likeCount: 1 },
      });
      console.log(response);
      if (response) {
        fetchFeeds();
        setDoLike(true);
      }
    } catch (error) {
      console.log("something went wrong", error);
      toast({
        title: "couldn't like the post",
      });
    }
  };

  const dislikeCount = async (e: FormEvent<HTMLFormElement>, _id: string) => {

    e.stopPropagation();
    if (!doLike) return;

    try {
      const responce = await axios.patch(`http://localhost:4000/feeds/${_id}`, {
        $inc: { likeCount: -1 },
      });
      console.log(responce);
      setDoLike(false);
      fetchFeeds();
    } catch (error) {
      console.log("something went wrong", error);
      toast({
        title: " couldn't remove the upvote",
      });
    }
  };

  const icons = [
    {
      id: 1,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 193"
        >
          <path
            fill="#4285f4"
            d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
          />
          <path
            fill="#34a853"
            d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
          />
          <path
            fill="#ea4335"
            d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
          />
          <path
            fill="#fbbc04"
            d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
          />
          <path
            fill="#c5221f"
            d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2.249c-5.484 0-10 4.452-10 10c0 4.387 2.871 8.13 6.871 9.484c.516.097.677-.226.677-.452s0-.87-.032-1.742c-2.774.645-3.355-1.355-3.355-1.355c-.451-1.129-1.129-1.451-1.129-1.451c-.903-.645.033-.645.033-.645c1 .032 1.548 1.032 1.548 1.032c.87 1.548 2.355 1.097 2.903.806c.097-.645.355-1.096.645-1.354c-2.193-.226-4.548-1.097-4.548-4.904c0-1.096.42-1.967 1.032-2.645c-.097-.226-.451-1.258.097-2.645c0 0 .87-.258 2.774 1.032a9.3 9.3 0 0 1 2.516-.355c.871 0 1.742.097 2.516.355c1.904-1.258 2.742-1.032 2.742-1.032c.549 1.355.226 2.42.097 2.645c.645.678 1.032 1.58 1.032 2.645c0 3.807-2.355 4.678-4.548 4.904c.355.322.677.967.677 1.87c0 1.355-.032 2.42-.032 2.742c0 .259.194.549.678.452C19.129 20.314 22 16.604 22 12.185c-.032-5.484-4.516-9.936-10-9.936"
          />
        </svg>
      ),
    },
    {
      id: 3,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#5865f2" rx="60" />
            <g clip-path="url(#skillIconsDiscord0)">
              <path
                fill="#fff"
                d="M197.308 64.797a165 165 0 0 0-40.709-12.627a.62.62 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.64.64 0 0 0-.655-.31a164.5 164.5 0 0 0-40.709 12.627a.6.6 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.7.7 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.65.65 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86 86 0 0 0 3.098-2.428a.62.62 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.62.62 0 0 1 .655.08a80 80 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.6 102.6 0 0 1-15.609 7.428a.64.64 0 0 0-.339.889a133 133 0 0 0 10.208 16.61a.64.64 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.65.65 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.5.5 0 0 0-.26-.238M94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.973 20.158m66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158"
              />
            </g>
            <defs>
              <clipPath id="skillIconsDiscord0">
                <path fill="#fff" d="M28 51h200v154.93H28z" />
              </clipPath>
            </defs>
          </g>
        </svg>
      ),
    },
    {
      id: 4,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="#A1C3BB"
            stroke-linejoin="round"
            d="M18.38 27.94v-14.4l11.19-6.46c6.2-3.58 17.3 5.25 12.64 13.33"
            stroke-width="1"
          />
          <path
            fill="none"
            stroke="#A1C3BB"
            stroke-linejoin="round"
            d="m18.38 20.94l12.47-7.2l11.19 6.46c6.2 3.58 4.1 17.61-5.23 17.61"
            stroke-width="1"
          />
          <path
            fill="none"
            stroke="#A1C3BB"
            stroke-linejoin="round"
            d="m24.44 17.44l12.47 7.2v12.93c0 7.16-13.2 12.36-17.86 4.28"
            stroke-width="1"
          />
          <path
            fill="none"
            stroke="#A1C3BB"
            stroke-linejoin="round"
            d="M30.5 21.2v14.14L19.31 41.8c-6.2 3.58-17.3-5.25-12.64-13.33"
            stroke-width="1"
          />
          <path
            fill="none"
            stroke="#A1C3BB"
            stroke-linejoin="round"
            d="m30.5 27.94l-12.47 7.2l-11.19-6.46c-6.21-3.59-4.11-17.61 5.22-17.61"
            stroke-width="1"
          />
          <path
            fill="none"
            stroke="#A1C3BB"
            stroke-linejoin="round"
            d="m24.44 31.44l-12.47-7.2V11.31c0-7.16 13.2-12.36 17.86-4.28"
            stroke-width="1"
          />
        </svg>
      ),
    },

    {
      id: 5,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 128 128"
        >
          <path
            fill="#bbb"
            d="M101.072 82.51h11.378V128H10.05V82.51h11.377v34.117h79.644zm0 0"
          />
          <path
            fill="#f58025"
            d="m33.826 79.13l55.88 11.738l2.348-11.166l-55.876-11.745Zm7.394-26.748l51.765 24.1l4.824-10.349l-51.768-24.1Zm14.324-25.384L99.428 63.53l7.309-8.775l-43.885-36.527ZM83.874 0l-9.167 6.81l34.08 45.802l9.163-6.81Zm-51.07 105.254h56.89V93.881h-56.89Zm0 0"
          />
        </svg>
      ),
    },
    {
      id: 6,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#A1C3BB"
            d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className=" mt-24 ml-60 space-y-8 ">
      <div className="space-y-8 flex flex-col items-center ">
        <p className="text-xl font-bold">Choose your most visited sites</p>
        <div className="flex gap-4">
          {icons.map((icon, index) => (
            <div key={index} className="bg-gray-200 p-2 rounded-2xl">
              {icon.svg}
            </div>
          ))}
        </div>
        <div className="flex gap-6">
          <Button className="font-bold bg-gray-200 text-black py-5 px-6 hover:bg-gray-300 opacity-60">
            Skip for now
          </Button>
          <Button className="font-bold shadow hover:shadow-2xl py-5 px-6 transition duration-500 ease-in-out">
            Add shortcuts
          </Button>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <Button className="bg-[#F2F2F3]  text-black opacity-60 font-bold hover:bg-gray-300 hover:shadow-2xl">
          {" "}
          <Settings2 className=" opacity-60 h-8 w-8 " />
          Feed Setting
        </Button>
        <div className="bg-[#F2F2F3] cursor-pointer hover:bg-gray-300 p-2 rounded-xl">
          <ShieldX className=" h-6 w-6" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12">
        {feeds?.map((feed: Ifeed, index: number) => (
          <div
            key={index}
            className="bg-[#F5F8FC] rounded-lg shadow-lg p-4  space-y-4"
          >
            <p>{feed.title} </p>
            <Image
              className="w-full h-44"
              src={feed.image}
              alt="this is image"
              height={100}
              width={100}
            ></Image>
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-2 items-center bg-[#F2F2F3]">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="hover:bg-[#B8E9D2] flex items-center p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg">
                        <ArrowBigUp
                          onClick={(e) => {
                            if (doLike) {
                              dislikeCount(e, feed._id);
                            } else {
                              handleLikeCount(e, feed._id);
                            }
                          }}
                          className="h-6 w-6"
                        />{" "}
                        {feed.likeCount}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p> {doLike ? "Remove Upvote" : "Upvote"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="hover:bg-[#E4BEBF] p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg">
                        <ArrowBigDown
                          onClick={() => setDownVote(!downVote)}
                          className="h-6 w-6"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p> {downVote ? "Remove Downvote" : "Downvote"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="hover:bg-[#BDEFF5] p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg">
                      <Link href={`Post/comment/${feed._id}`}>
                      <MessageCircleMore  />
                      </Link>
                      
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Comments</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                  <div className="hover:bg-[#F7DACA] p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg">
                <BookMarked />
              </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Bookmark</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                  <div className="hover:bg-[#E8C7F9] p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg">
                <Trash onClick={() => handleDeleteFeed(feed._id)} />
              </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete Post</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
