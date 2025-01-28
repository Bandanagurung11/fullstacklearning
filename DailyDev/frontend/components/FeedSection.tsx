"use client"
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
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

export default function FeedSection() {
    const { toast } = useToast()


    const [feeds, setFeeds] = useState([]);
  
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
  
    const handleDeleteFeed = async (_id) => {
      try {
        // run delete function backend ko
        const response = await axios.delete(`http://localhost:4000/feeds/${_id}`);
        console.log(response);
        toast({
          title: "Post Deleted sucessfully"
         
        })
        fetchFeeds();
        // window.location.reload(); this is tradtional way not use much though
      } catch (error) {
        console.log("Delete Failed", error);
        toast({
          title: "Post deletion failed",
        })
      }
    };
  
  return (
    <div className=" mt-32 ml-60 space-y-8 ">
      <div className="flex gap-6 items-center">
        <Button className="bg-[#F2F2F3] text-black text-lg font-bold hover:bg-[#F2F2F3] hover:shadow-2xl">
          {" "}
          <Settings2 className=" h-8 w-8 " />
          Feed Setting
        </Button>
        <div className="bg-[#F2F2F3] p-2 rounded-xl">
        <ShieldX className=" h-8 w-8" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-12">
      {feeds?.map((feed, index) => (
            <div key={index} className="bg-[#F5F8FC] rounded-lg shadow-lg p-4  space-y-4">
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
              <div className="hover:bg-[#B8E9D2] p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg" >
              <ArrowBigDown className="h-6 w-6" />
              </div>
  
              <div className="hover:bg-[#E4BEBF] p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg" >
              <ArrowBigUp className="h-6 w-6" />
              </div>
              </div>
              
              <div className="hover:bg-[#BDEFF5] p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg" >
              <MessageCircleMore />
              </div>
  
              <div className="hover:bg-[#F7DACA] p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg" >
              <BookMarked />
              </div>
              
              <div className="hover:bg-[#E8C7F9] p-1 transition duration-500 ease-in-out cursor-pointer rounded-lg" >
              <Trash onClick={()=>handleDeleteFeed(feed._id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
