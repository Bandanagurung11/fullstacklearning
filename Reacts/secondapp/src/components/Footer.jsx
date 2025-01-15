import React from 'react';
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <div className="bg-slate-500">
        <div className=" w-11/12 mx-auto grid grid-cols-4 gap-4 py-10">
          <div className="flex flex-col gap-6">
            <img className="h-12 w-12" src={logo} alt="logo" />
            <div className=" flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="yellow"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029"
                  color="currentColor"
                />
              </svg>
              <p className="opacity-70">
                Greater pleasures el esndures pains avoid welcomed avoided
                pariatu.
              </p>
            </div>
            <p className="text-white">Subscribe to our Site :</p>
            <input
              className="h-8 w-42 bg-slate-400"
              type="text"
              placeholder="enter email"
            />
            <p>
              © 2025 Loxcy - Created By{" "}
              <span className="text-white text-lg">Themesdesign</span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white "> Company :</p>
            <p>CompanyProfile</p>
            <p>Services</p>
            <p>Plans & Pricing</p>
            <p>Team Members</p>
            <p>Contact</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white">Community :</p>
            <p>Career </p>
            <p>Leadership</p>
            <p>Press & Media</p>
            <p>Projects</p>
            <p>Marketing</p>
            <p>Marketing</p>
            <p>Challenge Of Project</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white">Solution : </p>
            <p>Small Business</p>
            <p>Ebook Library </p>
            <p>Free Theme</p>
            <p>Affiliates</p>
            <p>Testimonial Themes</p>
          </div>
        </div>
      </div>
  )
}
