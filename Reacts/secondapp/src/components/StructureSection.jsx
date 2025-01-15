import React from 'react';
import dashboard from "../assets/images/dashbord-3.png";

export default function StructureSection() {
  return (
    <div className="bg-orange-100/50 py-20">
            <div className="  w-11/12 mx-auto  grid grid-cols-2 gap-10">
              {/* left section */}
              <div className="flex flex-col gap-8">
                <p className="text-orange-400 text-lg font-bold">STRUCTURE</p>
                <p className="text-4xl leading-normal">
                  Discover All{" "}
                  <span className="text-orange-400">
                    Our <br /> Features
                  </span>
                </p>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio <br />
                  cumque nihil impedit quo minus id quod maxime placeat <br />{" "}
                  facere possimus, omnis voluptas assumenda est, omnis <br /> dolor
                  repellendus temporibus autem.
                </p>
    
                <div className="flex gap-20">
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="orange"
                          d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                        />
                      </svg>
                      <p>Trends Tracking</p>
                    </div>
    
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="orange"
                          d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                        />
                      </svg>
                      <p>Vendor Management</p>
                    </div>
                  </div>
    
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="orange"
                          d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                        />
                      </svg>
                      <p>Loyalty Programs</p>
                    </div>
    
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="orange"
                          d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
                        />
                      </svg>
                      <p>Billing</p>
                    </div>
                  </div>
                </div>
                <button className="border rounded-xl py-2 px-6 bg-slate-700 text-white shadow-xl w-full mx-auto ">
                  All categories
                </button>
              </div>
    
              {/* right section */}
              <div>
                <img src={dashboard} alt="dashboard image" />
              </div>
            </div>
          </div>
    
  )
}
