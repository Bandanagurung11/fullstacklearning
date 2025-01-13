import React from "react";

export default function Footer() {
  const companylinks = [
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

  const communitylinks = [
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
  
  const solutionlinks = [
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
    <div className=" bg-[#031b1e] ">
      <div className=" w-10/12 mx-auto text-white py-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="space-y-6">
        <div className="flex items-center">
          <svg
          className="text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="m218.12 209.56l-61-95.8l59.72-65.69a12 12 0 0 0-17.76-16.14l-55.27 60.84l-37.69-59.21A12 12 0 0 0 96 28H48a12 12 0 0 0-10.12 18.44l61 95.8l-59.76 65.69a12 12 0 1 0 17.76 16.14l55.31-60.84l37.69 59.21A12 12 0 0 0 160 228h48a12 12 0 0 0 10.12-18.44M166.59 204L69.86 52h19.55l96.73 152Z"
            />
          </svg>
          <p className="text-lg font-semibold text-white">
          LOXY
        </p>
        </div>
        
        <div className="flex items-center gap-2">
            🤦‍♂️
            <p className="text-sm opacity-60">Greater pleasures el esndures pains avoid welcomed avoided pariatu.</p>
        </div>
        <p className="font-semibold">Subscribe to our Site :</p>
        <input type="text" className="w-32 lg:w-44 pl-2" placeholder="enter email" />
        <p><span className="opacity-60">© 2025 Loxcy - Created By</span> <span className=" underline text-white">Themesdesign</span></p>
      </div>

      <div>
        <p className="text-xl font-semibold mb-4">Company :</p>

        {companylinks.map((item, index) => (
          <p className="font-semibold opacity-60 mb-4 cursor-pointer hover:translate-x-4 duration-500 hover:opacity-100">
            {item.title}
          </p>
        ))}
      </div>

      <div>
        <p className="text-xl font-semibold mb-4">Community :</p>
        {communitylinks.map((item, index) => (
          <p className="font-semibold opacity-60 mb-4 cursor-pointer hover:translate-x-4 duration-500 hover:opacity-100">
            {item.title}
          </p>
        ))}
      </div>

      <div>
        <p className="text-xl font-semibold mb-4">Solution :</p>
        {solutionlinks.map((item, index) => (
          <p className="font-semibold opacity-60 mb-4 cursor-pointer hover:translate-x-4 duration-500 hover:opacity-100">
            {item.title}
          </p>
        ))}
      </div>
      </div>
    </div>
    
  );
}
