import React from 'react'

export default function EasyHandlingSection() {
  return (
    <div className=" w-full lg:w-10/12 mx-auto grid lg:grid-cols-2 gap-6">
              {/* left section */}
              <div className="flex flex-col gap-20">
                <div className='pl-8 lg:pl-0'>
                  <p className="text-orange-400  text-base font-bold">
                    EASY HANDLING
                  </p>
                  <p className="text-4xl font-bold leading-relaxed">
                    Discover Powerful <br />
                    Features To Boost <br />{" "}
                    <span className="text-orange-400">Productivity</span>
                  </p>
                </div>
                {/* two cards section */}
                <div className="grid grid-cols-2 gap-6">
                  {/* first card */}
                  <div className="bg-[#ede4df] shadow-md px-6 py-8 flex flex-col gap-8 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M13.07 10.41a5 5 0 0 0 0-5.82A3.4 3.4 0 0 1 15 4a3.5 3.5 0 0 1 0 7a3.4 3.4 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4s7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z"
                      />
                    </svg>
                    <p className="font-bold text-lg">Multiple user & management</p>
                    <div className="flex justify-between">
                      <p>Multi User</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                        />
                      </svg>
                    </div>
                  </div>
    
                  {/* second */}
                  <div className="bg-[#ede4df] shadow-md  px-6 py-8 flex flex-col gap-8 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                      </g>
                    </svg>
                    <p className="font-bold text-lg">
                      Editable & highly customizable
                    </p>
                    <div className="flex justify-between">
                      <p>Customization</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* right section */}
              <div>
                {/* upper two cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#ede4df] shadow-md  px-6 py-8 flex flex-col gap-8 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        d="M6.5 14.5h-3v-13h9V7M5 4.5h6m-6 2h4m1.5 3v2L12 13m1.5-1.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    <p className="font-bold text-lg">Advanced online appointment</p>
                    <div className="flex justify-between">
                      <p>Appoinment</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                        />
                      </svg>
                    </div>
                  </div>
    
                  <div className="bg-[#ede4df] shadow-md  px-6 py-8 flex flex-col gap-8 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="currentColor"
                        d="M2048 1280v768H1024v-768h256v-256h512v256zm-640 0h256v-128h-256zm512 384h-128v128h-128v-128h-256v128h-128v-128h-128v256h768zm0-256h-768v128h768zm-355-512q-54-61-128-94t-157-34q-80 0-149 30t-122 82t-83 123t-30 149q0 92-41 173t-116 136q45 23 84 53t73 68v338q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149H0q0-73 20-141t57-129t90-108t118-81q-74-54-115-135t-42-174q0-79 30-149t82-122t122-83t150-30q92 0 173 41t136 116q38-75 97-134t135-98q-74-54-115-135t-42-174q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 92-41 173t-116 136q68 34 123 85t93 118zM512 1408q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20m512-1024q0 53 20 99t55 82t81 55t100 20q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100"
                      />
                    </svg>
                    <p className="font-bold text-lg">Advanced online appointment</p>
                    <div className="flex justify-between">
                      <p>Management</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
    
                {/* lower two cards */}
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div className="bg-[#ede4df] shadow-md  px-6 py-8 flex flex-col gap-8 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M10 3c2.817 0 4.415 1.923 4.647 4.246h.07c1.535 0 2.824 1.083 3.183 2.547a4 4 0 0 0-.531-.273a6 6 0 0 0-.785-.266a2.26 2.26 0 0 0-1.866-1.008h-.071a1 1 0 0 1-.995-.9C13.45 5.325 12.109 4 10 4C7.886 4 6.551 5.316 6.348 7.345a1 1 0 0 1-.995.901h-.07C4.027 8.246 3 9.304 3 10.623C3 11.943 4.028 13 5.282 13H10v1H5.282C3.469 14 2 12.488 2 10.623C2 8.82 3.373 7.347 5.102 7.251l.251-.005C5.587 4.908 7.183 3 10 3m7.471 11.283c-.81.462-1.863.717-2.971.717s-2.16-.255-2.971-.717A4 4 0 0 1 11 13.92V17c0 1.105 1.567 2 3.5 2s3.5-.895 3.5-2v-3.08a4 4 0 0 1-.529.363M14.5 10c-1.933 0-3.5.895-3.5 2s1.567 2 3.5 2s3.5-.895 3.5-2s-1.567-2-3.5-2"
                      />
                    </svg>
                    <p className="font-bold text-lg">Superfast cloud data saved</p>
                    <div className="flex justify-between">
                      <p>Cloud Server</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                        />
                      </svg>
                    </div>
                  </div>
    
                  <div className="bg-[#ede4df] shadow-md  px-6 py-8 flex flex-col gap-8 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path d="M4 12V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H11" />
                        <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20M1.992 19h3m3 0h-3m0 0v-3m0 3v3" />
                      </g>
                    </svg>
                    <p className="font-bold text-lg">
                      User Next Level Interface Site
                    </p>
                    <div className="flex justify-between">
                      <p>Website</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}
