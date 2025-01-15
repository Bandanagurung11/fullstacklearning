import React from 'react'

export default function Faq() {
  return (
    <div className="bg-orange-50/50 py-20">
        <div className="w-10/12 mx-auto flex flex-col gap-20">
          <div className="leading-loose">
            <p className="text-center text-orange-400 font-bold">
              NEED SUPPORT
            </p>
            <p className="text-center text-4xl">
              Frequently asked{" "}
              <span className="text-orange-400">Questions</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
            {/* left */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12.438 17V7L9 9.5"
                    />
                  </svg>
                  <p className="text-lg">
                    How Benefit That I Got When Choose Basic Plan
                  </p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  Contrary to this, individuals above this tax bracket of <br />{" "}
                  30% can benefit from low basic pay. This is because <br /> the
                  or retirement benefits have to be approximately <br /> 27% of
                  the basic pay.
                </p>
              </div>

              <div>
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8.75 9.92c0-3.894 5.77-3.894 5.77 0c0 2.94-3.77 5.476-5.77 7.08c0 0 3.75-.625 6.25 0"
                    />
                  </svg>
                  <p className="text-lg">How Do I Organize My Notes?</p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  Try using coloured paper so that all related notes are <br />{" "}
                  made on sheets of the same colour. Some notebooks <br /> have
                  different colours and have the advantage of <br /> keeping all
                  your notes in one place.
                </p>
              </div>

              <div>
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8.75 9.493c0-3.324 6.25-3.324 6.25 0c0 0 0 2.507-3.125 2.507C15 12 15 14.507 15 14.507c0 3.324-6.25 3.324-6.25 0"
                    />
                  </svg>
                  <p className="text-lg">How Long For A Standard Project</p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  Typically, an average project will take in the region of{" "}
                  <br /> three four months. Some of our projects are small,{" "}
                  <br /> fully specified and are completed in four six weeks.{" "}
                  <br />
                  Others can take six months or much longer
                </p>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12.917 7c-1.042 3.75-4.167 6.875-4.167 6.875H15M13.438 17v-5"
                    />
                  </svg>
                  <p className="text-lg">
                    How Do I Change My Email or Password?
                  </p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  You can change your Webmail password in the <br /> one.com
                  control panel under Email if you have <br /> forgotten it.
                  Here you can manage all email accounts <br /> on your domain.
                </p>
              </div>

              <div>
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M14.375 7c-2.5.625-5.625 0-5.625 0v3.566h3.473c1.534 0 2.777 1.064 2.777 2.377v1.399c0 3.522-6.25 3.566-6.25 0"
                    />
                  </svg>
                  <p className="text-lg">Can I Lock My Note App?</p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  Through the collaboration with customers in <br /> discussing
                  needs and demand, we're able to attain <br /> mutual
                  understanding, gain customer trust to offer <br /> appropriate
                  advice.
                </p>
              </div>

              <div>
                <div className="flex gap-2">
                  <svg
                    className="bg-cyan-100/50 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.75 7H12.5a3.75 3.75 0 0 0-3.75 3.75v3.125m0 0a3.125 3.125 0 1 0 6.25 0c0-1.726-1.4-2.5-3.125-2.5s-3.125.774-3.125 2.5"
                    />
                  </svg>
                  <p className="text-lg">
                    {" "}
                    Can My Premium License Be Used For All Devices?
                  </p>
                </div>
                <p className="opacity-60 pl-7 mt-2">
                  The Remote Access License is an endpoint-based <br /> license
                  designated for a single user. It allows to the <br /> user
                  remotely connect to a maximum of 3 devices <br /> from an
                  unlimited number of devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
