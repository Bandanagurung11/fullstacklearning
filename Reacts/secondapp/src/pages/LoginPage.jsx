import React from "react";
import ime from "../assets/images/Login-rafiki.png";

export default function LoginPage() {
  return (
    <div className="bg-[#fff9f5] pt-24">
      <div className="bg-[#163b47] lg:w-11/12 mx-auto border-4 rounded-xl border-orange-600 grid lg:grid-cols-2 gap-24 py-12 px-8 lg:px-16 ">
        <div className="bg-white rounded-xl p-10 space-y-8">
          <div className="flex gap-2 items-center">
            {/* <img src={logo} alt="logoimage" className="bg-transparent block text-white"   /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="orange"
                fill-rule="evenodd"
                d="M7 18.25a2.5 2.5 0 0 0-1.875-2.421V5.4l6.125 6.613l-.22.213C9.692 13.522 8.19 14.976 8.25 17c.044 1.456.95 3.782 3.75 3.75c2.8-.03 3.75-2.13 3.75-3.75c0-2.268-1.456-3.625-2.988-4.987c.445-.477 1.283-1.287 1.842-1.828c.305-.295.528-.51.559-.547l.003-.005c.117-.142.461-.563.115-.989c-.281-.344-.706-.212-.9-.112L12 10.782C9.875 8.55 5.644 4.032 5.319 3.657c-.313-.363-.582-.42-.675-.407a.776.776 0 0 0-.769.713v11.866A2.501 2.501 0 1 0 7 18.25M18.875 8.172V20.05c.019.244.162.725.644.7c.475-.025.606-.475.606-.7V8.172a2.501 2.501 0 1 0-1.25 0m1.562-2.422a.938.938 0 1 1-1.875 0a.938.938 0 0 1 1.875 0M9.5 16.844c0-1.35 1.625-2.844 2.5-3.594c.831.762 2.5 2.406 2.5 3.594c0 1.569-.857 2.593-2.519 2.656c-1.656.063-2.481-1.313-2.481-2.656m-5 2.343a.937.937 0 1 0 0-1.875a.937.937 0 0 0 0 1.875"
                clip-rule="evenodd"
              />
            </svg>
            <p className="text-2xl text-[#163b47] font-bold tracking-widest">
              LOXCY
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-bold">Login in to your Account</p>
            <p className="opacity-60 text-lg">
              Welcome back! Select method to log in:
            </p>
          </div>
          {/* button section */}
          <div className="space-y-4">
            <button className="flex items-center gap-2 border border-black shadow-md px-14 py-3 rounded-md hover:-translate-y-1 transition ease-in-out duration-700 hover:shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ffc107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                />
                <path
                  fill="#ff3d00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                />
                <path
                  fill="#4caf50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                />
                <path
                  fill="#1976d2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                />
              </svg>
              Google
            </button>
            <div className="pl-4">
              <button className="flex items-center gap-2 border border-black  shadow-md px-14 py-3 rounded-md hover:-translate-y-1 transition ease-in-out duration-700 hover:shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#1877f2"
                    d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  />
                  <path
                    fill="#fff"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                  />
                </svg>
                Google
              </button>
            </div>
          </div>

          <p className="opacity-60 mt-8">
            -----------------{"  "} or continue with email -------------
          </p>

          <form action="" className="space-y-2 ">
            <div className="flex ">
              <div className="bg-slate-200/50 p-2 rounded-l-md shadow-md flex items-center border ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"
                  />
                </svg>
              </div>
              <input
                className="shadow-md pl-4  h-12 w-full rounded-r-md border"
                type="text"
                placeholder="Enter email"
              />
            </div>
            <br />

            <div className="flex">
              <div className="bg-slate-200/50 p-2 shadow-md rounded-l-md flex items-center border ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21V9h3V7q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7v2h3v12zm1-1h12V10H6zm6-3.5q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066T12 13.5t-1.066.434Q10.5 14.367 10.5 15t.434 1.066q.433.434 1.066.434M9 9h6V7q0-1.25-.875-2.125T12 4t-2.125.875T9 7zM6 20V10z"
                  />
                </svg>
              </div>
              <input
                className="shadow-lg pl-4  h-12 w-full rounded-r-md border"
                type="password"
                placeholder="Enter password"
              />
            </div>
          </form>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p> Forgot Password?</p>
          </div>
          <button className=" w-full py-2 bg-[#0b363d] text-white rounded-md font-bold hover:-translate-y-1 shadow hover:shadow-2xl transition duration-700 ease-in-out ">
            Log in
          </button>
          <p className="text-center">
            <span className="opacity-60">Don't have an account?</span> Sign Up !
          </p>
        </div>

        <div>
          <img src={ime} alt="" />
          <p className="text-center text-white">
            © 2025 Loxcy -{" "}
            <span className="opacity-60 text-xl">Themesdesign</span>
          </p>
        </div>
      </div>
    </div>
  );
}
