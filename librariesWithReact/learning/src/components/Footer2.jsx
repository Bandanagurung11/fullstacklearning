import React from "react";

export default function Footer2() {
  const Overview = [
    {
      id: 1,
      title: "Features",
    },
    {
      id: 2,
      title: "Solutions",
    },
    {
      id: 3,
      title: "Tutorials",
    },
    {
      id: 4,
      title: "Pricing",
    },
    {
      id: 5,
      title: "Release",
    },
  ];

  const aboutus = [
    {
      id: 1,
      title: "Career",
    },
    {
      id: 2,
      title: "Press",
    },
    {
      id: 3,
      title: "News",
    },
    {
      id: 4,
      title: "Media kit",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];
  const blog = [
    {
      id: 1,
      title: "Newsletter",
    },
    {
      id: 2,
      title: "Events",
    },
    {
      id: 3,
      title: "Help centers",
    },
    {
      id: 4,
      title: "Tutorial",
    },
    {
      id: 5,
      title: "suppport",
    },
  ];

  const twitter = [
    {
      id: 1,
      title: "Linkdln",
    },
    {
      id: 2,
      title: "Facebook",
    },
    {
      id: 3,
      title: "Github",
    },
    {
      id: 4,
      title: "Angelist",
    },
    {
      id: 5,
      title: "Dribble",
    },
  ];
  const terms = [
    {
      id: 1,
      title: "Privacy",
    },
    {
      id: 2,
      title: "Cookies",
    },
    {
      id: 3,
      title: "Licenses",
    },
    {
      id: 4,
      title: "Setting",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];

  return (
    <div>
        <div className=" w-10/12 mx-auto mt-12 space-y-8 text-white">
      {/* first section */}
      <div className="bg-[#043aac] rounded-lg">
        <div className=" w-10/12 mx-auto space-y-8 py-12">
          <div className="flex justify-center items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M25.03 29.095c2.881-.867 4.578-5.485 1.873-9.23c-2.438-3.377-8.686-4.23-12.275.01c-2.913 3.443-2.975 9.956.048 13.302c4.559 5.048 12.007 5.09 17 .368c4.818-4.554 5.572-11.556 1.353-17.826c-4.29-6.377-16.33-8.817-24.117-.697C3.08 21.1 3.923 32.255 9.03 37.938c7.52 8.373 19.998 9.117 28.936 0C46.657 29.074 44.913 9.53 28.781 3.5"
              />
            </svg>
            <p className="text-bold">Untitled UI</p>
          </div>
          <div className=" lg:w-6/12 mx-auto grid grid-cols-3 lg:grid-cols-6">
            <p>Overview</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Careers</p>
            <p>Help</p>
            <p>Privacy</p>
          </div>
          <hr />
          <div className="flex justify-between ">
            <div className="relative">
              <input
                className=" h-10 lg:w-60 pl-2"
                placeholder="Enter your email"
                type="text"
              />
              <button className="absolute top-1 left-36 h-8 px-4 bg-[#043aac] text-white">
                Suscribe
              </button>
            </div>
            <p>@2077 Untitled UI. All righst reserved.</p>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="bg-[#043aac] rounded-lg">
        <div className=" w-10/12 mx-auto  py-8">
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-bold">Let's stay in touch!</p>
              <p className="opacity-80">
                {" "}
                we'll send you a nice lette once per week. No spam.
              </p>
            </div>

            <div className="relative">
              <input
                className=" h-10 w-60 pl-2"
                placeholder="Enter your email"
                type="text"
              />
              <button className="absolute top-1 left-36 h-8 px-4 bg-[#043aac] text-white">
                Suscribe
              </button>
            </div>
          </div>
          <div className="mt-24 space-y-8">
            <div className="grid lg:grid-cols-7 gap-8">
              <div className="space-y-8 col-span-2">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M25.03 29.095c2.881-.867 4.578-5.485 1.873-9.23c-2.438-3.377-8.686-4.23-12.275.01c-2.913 3.443-2.975 9.956.048 13.302c4.559 5.048 12.007 5.09 17 .368c4.818-4.554 5.572-11.556 1.353-17.826c-4.29-6.377-16.33-8.817-24.117-.697C3.08 21.1 3.923 32.255 9.03 37.938c7.52 8.373 19.998 9.117 28.936 0C46.657 29.074 44.913 9.53 28.781 3.5"
                    />
                  </svg>
                  <p className="font-bold">Untitled UI</p>
                </div>
                <p className="opacity-80">
                  Design amazing digital experiences that create more happy in
                  the world
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-bold">Overview</p>
                {Overview.map((item, index) => (
                  <p className="opacity-80">{item.title}</p>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Aboutus</p>
                {aboutus.map((item, index) => (
                  <p className="opacity-80">{item.title}</p>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-bold">Blog</p>
                {blog.map((item, index) => (
                  <p className="opacity-80">{item.title}</p>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-bold">Twitter</p>
                {twitter.map((item, index) => (
                  <p className="opacity-80">{item.title}</p>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Terms</p>
                {terms.map((item, index) => (
                  <p className="opacity-80">{item.title}</p>
                ))}
              </div>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>@2077 Untiled UI. All rights reserved</p>
              <div className="flex gap-2 items-center">
                <svg
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
                    d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029"
                    color="currentColor"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.249c-5.484 0-10 4.452-10 10c0 4.387 2.871 8.13 6.871 9.484c.516.097.677-.226.677-.452s0-.87-.032-1.742c-2.774.645-3.355-1.355-3.355-1.355c-.451-1.129-1.129-1.451-1.129-1.451c-.903-.645.033-.645.033-.645c1 .032 1.548 1.032 1.548 1.032c.87 1.548 2.355 1.097 2.903.806c.097-.645.355-1.096.645-1.354c-2.193-.226-4.548-1.097-4.548-4.904c0-1.096.42-1.967 1.032-2.645c-.097-.226-.451-1.258.097-2.645c0 0 .87-.258 2.774 1.032a9.3 9.3 0 0 1 2.516-.355c.871 0 1.742.097 2.516.355c1.904-1.258 2.742-1.032 2.742-1.032c.549 1.355.226 2.42.097 2.645c.645.678 1.032 1.58 1.032 2.645c0 3.807-2.355 4.678-4.548 4.904c.355.322.677.967.677 1.87c0 1.355-.032 2.42-.032 2.742c0 .259.194.549.678.452C19.129 20.314 22 16.604 22 12.185c-.032-5.484-4.516-9.936-10-9.936"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M11 11.5v-1a1.5 1.5 0 0 1 3 0V12" />
                    <path d="M17 12V5.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13" />
                    <path d="M14 10.5a1.5 1.5 0 0 1 3 0V12m-9 1V4.5a1.5 1.5 0 0 1 3 0V12" />
                  </g>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-3.024-6A18 18 0 0 1 42 24h-8.334a2.76 2.76 0 0 0-1.713.595a2.8 2.8 0 0 0-.983 1.526v.003l-.889 3.614a2.84 2.84 0 0 0 .503 2.397a2.76 2.76 0 0 0 2.193 1.084h.438l.99 5.611C31.304 40.83 27.788 42 24 42a17.9 17.9 0 0 1-10.105-3.102l1.53-8.585h1.008a3.55 3.55 0 0 0 2.812-1.378a3.59 3.59 0 0 0 .65-3.067l-1.283-5.163l-.001-.003a3.58 3.58 0 0 0-1.267-1.948A3.55 3.55 0 0 0 15.149 18H7.024C9.495 11.009 16.163 6 24 6c1.344 0 2.654.147 3.915.427l-.433 1.417h-.19a2.293 2.293 0 0 0-2.224 2.844q.024.097.067.187l2.61 5.505A2.29 2.29 0 0 0 29.939 18zm-.847-2A18.06 18.06 0 0 0 29.84 6.969l-.662 2.167a1 1 0 0 1-.956.708h-.93a.294.294 0 0 0-.286.23a.3.3 0 0 0-.006.067l2.588 5.457q.041.088.066.183a.29.29 0 0 0 .282.219zm-6.466 10h8.227a17.96 17.96 0 0 1-5.902 11.427l-.949-5.381a1 1 0 0 0-.984-.827h-1.278a.75.75 0 0 1-.334-.078a.8.8 0 0 1-.273-.225a.82.82 0 0 1-.146-.703l.887-3.609a.8.8 0 0 1 .282-.44a.76.76 0 0 1 .47-.164M6.446 20A18 18 0 0 0 6 24a17.96 17.96 0 0 0 6.11 13.515l1.493-8.377a1 1 0 0 1 .985-.825h1.845a1.56 1.56 0 0 0 1.233-.605a1.59 1.59 0 0 0 .287-1.36l-1.282-5.157v-.002a1.58 1.58 0 0 0-.559-.859a1.55 1.55 0 0 0-.96-.33z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="bg-[#043aac] rounded-lg">
        <div className="w-10/12 mx-auto py-8 space-y-16">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M25.03 29.095c2.881-.867 4.578-5.485 1.873-9.23c-2.438-3.377-8.686-4.23-12.275.01c-2.913 3.443-2.975 9.956.048 13.302c4.559 5.048 12.007 5.09 17 .368c4.818-4.554 5.572-11.556 1.353-17.826c-4.29-6.377-16.33-8.817-24.117-.697C3.08 21.1 3.923 32.255 9.03 37.938c7.52 8.373 19.998 9.117 28.936 0C46.657 29.074 44.913 9.53 28.781 3.5"
                />
              </svg>
              <p>Untitled UI</p>
            </div>
            <div className="relative">
              <input
                className=" h-10 w-60 pl-2"
                placeholder="Enter your email"
                type="text"
              />
              <button className="absolute top-1 left-36 h-8 px-4 bg-[#043aac] text-white">
                Suscribe
              </button>
            </div>
          </div>
          <p className=" text-right">
      @2077 Untitled UI. All rights reserved
    </p>
        </div>
      </div>
    </div>
    </div>
  );
}
