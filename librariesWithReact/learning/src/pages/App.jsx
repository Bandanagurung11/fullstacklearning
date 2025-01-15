import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router";
import PricingSection from "../components/PricingSection";
import Faq from "../components/Faq";
import PeopleJoinSection from "../components/PeopleJoinSection";
import LogoSection from "../components/Faq";
import HeroSection from "../components/HeroSection";


export default function App() {
  const [blogs, setBlogs] = useState();

  const fetchBlog = async () => {
    const fetchedBlogs = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(fetchedBlogs.data);
    setBlogs(fetchedBlogs.data);
  };

  const students = [
    {
      id: 1,
      name: "sita",
    },
    {
      id: 2,
      name: "gita",
    },
    {
      id: 3,
      name: "hari",
    },
    {
      id: 4,
      name: "ram",
    },
  ];

  const boxes = [
    {
      icon: "iconify1",
      title: "this is title two",
    },

    {
      icon: "iconify3",
      title: "this is title three",
    },

    {
      icon: "iconify4",
      title: "this is title four",
    },

    {
      icon: "iconify5",
      title: "this is title five",
    },
  ];

  // hooks

  // 1. useState hooks
  // useEffect
  // useRef
  // useContext

  const [winner, setWinner] = useState("none ");
  // console.log(winner);
  return (
    <div className="overflow-x-hidden">
      <HeroSection/>
      <LogoSection/>
      <PricingSection />
      <Faq />
      <PeopleJoinSection/>
      {/* <button onClick={fetchBlog}>get Blogs</button> */}

      {/* using hook state */}
      {/* <p className="text-2xl font-bold">the winner is 🎉 {winner}</p> */}

      {/* <div className="grid grid-cols-3 lg:grid-cols-6 text-white gap-8 my-12">
        {winner === "Hari" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("Hari")}
          >
            hari
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("Hari")}
          >
            hari
          </p>
        )}

        {winner === "ram" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("ram")}
          >
            ram
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("ram")}
          >
            ram
          </p>
        )}

        {winner === "sham" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("sham")}
          >
            sham
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("sham")}
          >
            sham
          </p>
        )}

        {winner === "jayanti" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("jayanti")}
          >
            jayanti
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("jayanti")}
          >
            jayanti
          </p>
        )}

        {winner === "sita" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("sita")}
          >
            sita
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("sita")}
          >
            sita
          </p>
        )}

        {winner === "gita" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("gita")}
          >
            gita
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("gita")}
          >
            gita
          </p>
        )}
      </div> */}

      {/* starting section */}

      {/* people join */}
      

      

      {/* office address */}

      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div className="flex items-center gap-4 bg-orange-100 p-6 rounded-md">
          <svg
            className=" animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"
            />
            <path
              fill="currentColor"
              d="M11.42 21.814a1 1 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"
            />
          </svg>
          <p>
            <span className="text-2xl font-bold">Office address</span> <br />2
            Holt Street, Surry Hills, Australia.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-orange-100 p-6 rounded-md">
          <svg
            className="animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.93 21q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T3 6.07q0-.458.3-.763T4.05 5h2.473q.408 0 .712.257q.303.257.411.659L8.142 8.3q.07.42-.025.733t-.333.513l-2.193 2.046q.615 1.117 1.36 2.076t1.59 1.817q.87.87 1.875 1.62q1.003.749 2.203 1.414l2.139-2.177q.244-.263.549-.347t.674-.033l2.104.43q.407.1.661.411t.254.712v2.435q0 .45-.306.75t-.763.3M5.12 10.654l1.92-1.765q.095-.077.124-.212q.03-.135-.01-.25l-.444-2.12q-.038-.153-.134-.23T6.327 6H4.275q-.115 0-.192.077t-.077.192q.029 1.025.321 2.14t.794 2.245m8.45 8.334q1.014.502 2.16.743q1.148.24 2 .257q.115 0 .192-.077T18 19.72v-2.008q0-.153-.077-.25q-.077-.096-.23-.134l-1.85-.379q-.116-.039-.202-.01q-.087.03-.183.125zM12.5 4q-.213 0-.356-.144T12 3.499t.144-.356T12.5 3h8q.213 0 .356.144t.144.357t-.144.356T20.5 4zm0 3.385q-.213 0-.356-.144Q12 7.097 12 6.884t.144-.356t.356-.143h8q.213 0 .356.144t.144.356t-.144.356t-.356.144zm0 3.384q-.213 0-.356-.144T12 10.27t.144-.356t.356-.144h8q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143z"
            />
          </svg>
          <p>
            <span className="text-2xl font-bold">Telephone number</span> <br />
            1-888-452-1505
          </p>
        </div>

        <div className="flex items-center gap-4 bg-orange-100 p-6 rounded-md">
          <svg
            className="animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="m3 7l9 6l9-6" />
            </g>
          </svg>
          <p>
            <span className="text-2xl font-bold">Mail address</span> <br />
            supprot22@gmail.com
          </p>
        </div>
      </div>
{/* 
      <div className="grid  grid-cols-2 lg:grid-cols-5 gap-8 mx-auto mt-32">
        {boxes.map((box) => (
          <div className="bg-white shadow-2xl p-6 rounded-xl text-red-400">
            {box.icon}
            <p className="text-2xl text-green-500">{box.title} </p>
          </div>
        ))}
      </div> */}

      <div className="  w-7/12"></div>
      {/* 
      <div className="grid grid-cols-5 gap-8 mx-auto mt-32">
        {students.map((student) => (
          <button onClick={
            ()=>setWinner(student.name)
          } className="border bg-slate-600 text-white"> {student.name}</button>
        ))}
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-6 text-white gap-8 my-12">
        {winner === "Hari" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("Hari")}
          >
            hari
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("Hari")}
          >
            hari
          </p>
        )}

        {winner === "ram" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("ram")}
          >
            ram
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("ram")}
          >
            ram
          </p>
        )}

        {winner === "sham" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("sham")}
          >
            sham
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("sham")}
          >
            sham
          </p>
        )}

        {winner === "jayanti" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("jayanti")}
          >
            jayanti
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("jayanti")}
          >
            jayanti
          </p>
        )}

        {winner === "sita" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("sita")}
          >
            sita
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("sita")}
          >
            sita
          </p>
        )}

        {winner === "gita" ? (
          <p
            className="bg-gray-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("gita")}
          >
            gita
          </p>
        ) : (
          <p
            className="bg-orange-600 px-8 py-2 font-semibold"
            onClick={() => setWinner("gita")}
          >
            gita
          </p>
        )}
      </div> */}

      {/* fetched blog card */}

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 space-y-10 p-20 bg-orange-200">
        {blogs?.map((blog) => (
          <div className="bg-orange-50/50 border border-yellow-300 shadow-xl rounded-lg flex flex-col gap-8 p-6 ">
            <p className="text-xl font-bold text-center">{blog.title}</p>
            <p className="text-center">{blog.body}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
