"use client";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

import React, { use, useEffect, useState } from "react";

interface Ipost {
  title: string;
  _id: string;
  image: string;
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    // const { id } = await params for server components
  console.log(id);
  const [singlePost, setSinglePost] = useState<Ipost | null>(null);
  console.log(singlePost);

  const fetchSinglePost = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:4000/feeds/${id}`);
      console.log(response);
      setSinglePost(response.data);
    } catch (error) {
      console.log("something went wrong", error);
      toast({
        title: "something went wrong while fetching data from database",
      });
    }
  };

  useEffect(() => {
    if(id)
    {
        fetchSinglePost(id);
    }
  }, [id]);

  return <div>comments page</div>;
}
