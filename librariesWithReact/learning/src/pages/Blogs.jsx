import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Blogs() {


    const [blogs, setBlogs]= useState([]);


    const fecthBlogs = async ()=>{
    const  response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    setBlogs(response.data);
    };

    useEffect(() => {
      fecthBlogs();
    }, [])
    

  return (
    <div>
        <div className='grid grid-cols-3 gap-6'>
            {
                blogs?.map((blog,index)=>(
                    <div className='border shadow-md'>
                        <p className='text-2xl font-bold'>{blog.title} </p>
                        <p>{blog.body} </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
