import React from 'react'

export default function Navbar() {
  return (
    <nav className=" bg-slate-700 py-2">
              <div className="flex items-center justify-between text-white p-2 w-full md:w-9/12 lg:w-11/12 mx-auto">
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
                  <p className="text-2xl font-bold tracking-widest">LOXCY</p>
                </div>
    
                <div className="hidden lg:block">
                  <div className="flex gap-10 font-semibold">
                    <p className=" cursor-pointer text-orange-600">Home</p>
                    <p className=" hover:text-orange-500 duration-300 cursor-pointer">
                      About
                    </p>
                    <p className=" hover:text-orange-500 duration-300 cursor-pointer">
                      Services
                    </p>
                    <p className=" hover:text-orange-500 duration-300 cursor-pointer">
                      Price
                    </p>
                    <p className=" hover:text-orange-500 duration-300 cursor-pointer">
                      Contacts
                    </p>
                  </div>
                </div>
                <button className=" bg-orange-600 pl-8 pr-8 pt-2 pb-2 font-semibold rounded-md">
                  Login
                </button>
              </div>
            </nav>
  )
}
