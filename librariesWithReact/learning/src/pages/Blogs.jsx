import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const fecthBlogs = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
    setBlogs(response.data);
  };

  useEffect(() => {
    fecthBlogs();
  }, []);

  return (
    <div className="bg-[#ace7f7]">
      <div className="text-center space-y-6 py-12">
        <p className="text-3xl font-bold text-[#406ebd] tracking-widest">Blogs</p>
        <p className="text-lg opacity-60 font-bold text-red text-[#406ebd]">
          All news about Blogi in one Place
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-3 gap-12">
        {blogs?.map((blog, index) => (
          <div className="border bg-[#4b8aad] shadow-lg p-4 space-y-6 rounded-md">
            <p className="text-xl text-white text-center font-bold">{blog.title} </p>
            <img
              src="https://images.unsplash.com/photo-1736185669739-36a8e70cb6c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
              alt="photoo"
            />
            <p className="text-white opacity-80">{blog.body} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
