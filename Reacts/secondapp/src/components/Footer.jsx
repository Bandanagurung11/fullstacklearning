import React from "react";

export default function Footer() {
  const company = [
    {
      id: 1,
      title: "Company Profile",
    },
    {
      id: 2,
      title: "Help Center",
    },
    {
      id: 3,
      title: "Services",
    },
    {
      id: 4,
      title: "Plans & Pricing",
    },
    {
      id: 5,
      title: "Team Members",
    },
    {
      id: 6,
      title: "Contact",
    },
  ];

  const community = [
    {
      id: 1,
      title: "Career",
    },
    {
      id: 2,
      title: "Leadership",
    },
    {
      id: 3,
      title: "Press & Media",
    },
    {
      id: 4,
      title: "Projects",
    },
    {
      id: 5,
      title: "Marketing Services",
    },
    {
      id: 6,
      title: "Challenge Of Project",
    },
  ];

  const Solution = [
    {
      id: 1,
      title: "Small Business",
    },
    {
      id: 2,
      title: "Ebook Library",
    },
    {
      id: 3,
      title: "Free Theme",
    },
    {
      id: 4,
      title: "Affiliates",
    },
    {
      id: 5,
      title: "Testimonial",
    },
    {
      id: 6,
      title: "Themes",
    },
  ];
  return (
    <div className="bg-[#031c1f]">
      <div className=" w-11/12 mx-auto grid  lg:grid-cols-5 gap-12 py-10">
        <div className="flex flex-col gap-6 col-span-2">
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
            <p className="text-2xl text-white font-bold tracking-widest">
              LOXCY
            </p>
          </div>
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
            <p className="opacity-80 text-[#839699] text-lg">
              Greater pleasures el esndures pains avoid <br /> welcomed avoided
              pariatu.
            </p>
          </div>
          <p className="text-white text-xl">Subscribe to our Site :</p>
          <div className="relative">
            <input
              className="h-10 pl-2 w-60"
              type="text"
              placeholder="enter email"
            />
            <svg
              className="absolute -top-2 right-32 lg:right-48 cursor-pointer "
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 21 21"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="orange"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m4.494 5.535l12-.038a2 2 0 0 1 2 1.845l.006.155V13.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V7.535a2 2 0 0 1 1.994-2" />
                <path fill="currentColor" d="m9.5 12.5l3-2l-3-2z" />
              </g>
            </svg>
          </div>

          <p className="text-[#839699]">
            © 2025 Loxcy - Created By{" "}
            <span className="text-white text-lg">Themesdesign</span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-white text-xl "> Company :</p>

          {company.map((item, index) => (
            <div>
              <p className="text-[#839699] text-lg hover:text-white hover:translate-x-2 transition ease-in-out duration-500 cursor-pointer">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-white text-xl">Community :</p>
          {community.map((item, index) => (
            <div>
              <p className="text-[#839699] text-lg hover:text-white hover:translate-x-2 transition ease-in-out duration-500 cursor-pointer">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-white text-xl">Solution : </p>
          {Solution.map((item, index) => (
            <div>
              <p className="text-[#839699] text-lg hover:text-white hover:translate-x-2 transition ease-in-out duration-500 cursor-pointer">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
