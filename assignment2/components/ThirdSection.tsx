import React from "react";
import dash from "../images/dash.webp";
import Image from "next/image";

export default function ThirdSection() {
  const ImageDescription = [
    {
      title: "Mobile & Web Responsive",
      image: dash,
      description:
        "We ensure your website adjusts perfectly and responsively across all devices, providing a seamless user experience.",
    },

    {
      title: "Admin Panel and Sales Report",
      image: dash,
      description:
        "We empower you to manage your online store effortlessly, offering tools for real-time sales tracking and detailed performance insights.",
    },

    {
      title: "Payment Gateway Integration",
      image: dash,
      description:
        "We integrate secure payment gateways to ensure seamless and secure transactions for your online store.",
    },

    {
      title: "Google Analytics Integration",
      image: dash,
      description:
        "We integrate secure payment gateways to ensure seamless and secure transactions for your online store.",
    },

    {
      title: "SEO Optimization",
      image: dash,
      description:
        "We optimize your website for search engines to increase visibility and attract organic traffic, improving your online presence.",
    },

    {
      title: "Social Media Integration",
      image: dash,
      description:
        "We integrate social media platforms to enhance engagement, broaden your audience reach, and strengthen your brand presence.",
    },

    {
      title: "Customized Design",
      image: dash,
      description:
        "We specialize in creating custom website designs that align with your brand identity and resonate with your target audience.",
    },
  ];
  return (
    <div>
      <div className="pt-24 pb-16 space-y-12 px-4">
        <div className="flex items-center justify-center gap-2">
          <p className="text-3xl">
            Trusted by{" "}
            <span className="bg-[#F1EBE7] text-[#CD9217] py-2 px-1">
              businesses
            </span>{" "}
            all{" "}
            <span className="bg-[#F5F7FF] text-[#0D9488] py-2 px-1">
              around Nepal
            </span>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 64 64"
          >
            <path
              fill="#ffdd67"
              d="m56.3 33.4l-1.2-18.1l-8.3 5.1c-4.1-.7-5.2-.7-8.4-2.2c-1.9-.9-4.3-.3-5.5.4c-1.8-1.9-13.5.9-14.8 1.5C14.6 19 9.4 15 9.4 15L7.6 35.4l2.4.6c.2.7.8 2.4.8 2.4c-2.2 2.8.4 6.1 2.9 5c-1.1 2.8 1.8 5.4 4.1 3.6c-.3 2.6 2.4 4.5 4.4 2.7c-.9 3.1 2.6 5.4 4.7 2.9c1.5 1 2.9 1.8 4.1 2.2c2.1.9 4.4-1.1 4-3.6c2.4 2.8 6 .1 5.2-3c2.7 2.1 6-1.4 4.3-4.5c3 1.7 5.6-2.9 2.7-5.9z"
            />
            <g fill="#eba352">
              <path d="M13.9 36.3c1.5.7 2.5 3 .9 5l-.7.8c-.8 1-1.6 1.3-2.4 1.3c.6.3 1.3.3 2 0c.1-.3.3-.7.6-1l.7-.8c.4-.5.9-.9 1.3-1.1c.8-2.1-.6-4.1-2.4-4.2m11.4 9.9c1.6.4 2.8 2.5 1.6 4.8l-.6.9c-.6 1.1-1.4 1.6-2.2 1.7c1.1.3 2.3-.1 3.1-1.6l.6-.9c1.5-2.8-.4-5.1-2.5-4.9m-7-.8l1.6-2.5c-.1-1.4-1.3-2.6-2.5-2.7c1.5.7 2.5 3 .9 5l-.7.8c-.8 1-1.6 1.3-2.5 1.3c.8.4 1.7.3 2.6-.3c.1-.5.3-1.1.6-1.6m4.3-4.5c1.6.5 2.7 2.7 1.3 4.9l-1.9 3c-.7 1.1-1.5 1.5-2.3 1.5c1 .3 2.3 0 3.2-1.4l1.9-3c1.6-2.6-.2-5.1-2.2-5m13.3 2.5c.1 0 1.3-.2 1.7-.2c-1.5-1.5-3.9-.3-5.3-1.1c1 1.7 3.1 1.3 3.3 1.3l2.4 3.1c2 2.5.4 5.4-1.7 5.7c2.2.7 4.4-1.6 3.7-4.1c-.1-.1-4.1-4.7-4.1-4.7m2.4-5.8s1.5-.3 2.8-.3c-1.5-1.2-3.8-.1-5.3-1.1c.6 1.3 1.9 1.3 2.3 1.4l4.6 5.3c2.1 2.4.6 5.3-1.5 5.8c2.4.7 4.7-2.4 3.2-5.1c-1-.4-6.1-6-6.1-6" />
              <path d="M35.1 49.1c-1.5-1.2-3.6-.3-4.5-.9c.5 1.4 2.4 1.1 2.5 1.1c1.7 2.6-.1 5.3-2.2 5.5c2.1.9 4.4-1.1 4-3.6c-.1-.1-1.5-1.9-1.5-1.9c.2-.1 1.3-.2 1.7-.2m20.1-17.4s-1.7 3.5-8.3 5.4c-.9-1.1-2.8-3.3-5-5.2c1.4-.3 2.1-1.4 3.2-1.6c-.4-.4-1.8-.2-2.9.2c-2 .7-6.6-2.5-6.6-2.5l-3.8.5c-2.7 2.6-8.5 4-8.8 0c-.2-2.8 5.9-4.7 7.8-6.5c2.4-2.3 4.5-5.2 8.4-3.2c3.2 1.6 4.5 1.5 8.9 2.3c1.5.3 2.5 1 3.6 2.5c-.9-2.1-2.2-3-3.8-3.3l7-3.3l.1-1.7l-8.3 4.7c-3.8-.6-5.2-.6-8.3-2.1c-2-1-3.6-.7-4.9.1c-2.4-1.4-3.8-1.1-4.7-.9c-2.8.9-7.3 1-11.3 2.6c.7.2 1.4.4 1.9.4c3.9-1.2 8-1.1 9.9-1.8c.6-.2 1.8-.2 3.1.5c-.8.7-1.5 1.5-2.3 2.3c-1.9 1.8-7.7 4.4-7.3 7.7c.2 1.6 2.4 5.8 9.7 1.1l3.1-.4s5.7 2.7 11 8.9c2.1 2.4.8 5-1.3 5.6c2.7.5 5-3.3 2.4-5.9l6.3-3.4z" />
            </g>
            <path
              fill="#3b946f"
              d="m53.4 16.3l3.3 17.1l-2.7 1.2c-1.4-3.7-3.5-12.6-3-16.9z"
            />
            <path
              fill="#eba352"
              d="M11.1 38c-.5-1.2-.8-2.8-.8-2.8l-2.5-1.7l-.2 1.9l2.2.6c.3 1 .6 1.8 1 2.4z"
            />
            <path
              fill="#3b946f"
              d="m6.1 35.1l5.4-18.7l2.5 1.7c.4 2.8-4.2 15.6-5.9 17.5z"
            />
            <path
              fill="#47b892"
              d="M53.3 16.2c-.8.5 2.1 17.8 3.3 17.3c3.8-1.7 5.5-2.2 5.5-2.2V10.7c-.1 0-2.4 1.7-8.8 5.5M2 9v25.5s1.8.3 4.1.8c1.3.3 6-18.5 5.7-18.8C8.4 14.2 2 9 2 9"
            />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl shadow-md cursor-pointer ">
            <Image className="rounded-t-xl" src={dash} alt="thisisimage" />
            <div className="flex gap-2 justify-center items-center py-1">
              <p className="opacity-70">Deliannepal</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-xl shadow-md cursor-pointer ">
            <Image className="rounded-t-xl" src={dash} alt="thisisimage" />
            <div className="flex gap-2 justify-center items-center py-1">
              <p className="opacity-70">Jmilooks</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-xl shadow-md cursor-pointer ">
            <Image className="rounded-t-xl" src={dash} alt="thisisimage" />
            <div className="flex gap-2 justify-center items-center py-1">
              <p className="opacity-70 ">Miniture</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-xl shadow-md cursor-pointer ">
            <Image className="rounded-t-xl" src={dash} alt="thisisimage" />
            <div className="flex gap-2 justify-center items-center py-1">
              <p className="opacity-70 text-sm">Chahana</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-xl shadow-md cursor-pointer ">
            <Image className="rounded-t-xl" src={dash} alt="thisisimage" />
            <div className="flex gap-2 justify-center items-center py-1">
              <p className="opacity-70 text-sm">Deliannepal</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-xl shadow-md cursor-pointer ">
            <Image className="rounded-t-xl" src={dash} alt="thisisimage" />
            <div className="flex gap-2 justify-center items-center py-1">
              <p className="opacity-70 text-sm">Deliannepal</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>




      <div className="space-y-6">
      <div className="flex gap-2 items-center justify-center">
        <p className="text-3xl">
          Unlock your{" "}
          <span className="bg-[#E7EDEA] text-[#27AA57] p-1">e-commerce</span>{" "}
          potential with{" "}
          <span className="bg-[#F2EAE7] text-[#EA5D14] p-1">fenzora</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <g filter="url(#f2532idb)">
              <path
                stroke="#c2c2c6"
                stroke-linecap="round"
                stroke-width="2.75"
                d="M19.445 14.07V8.508c0-2.77 2.207-5.016 4.93-5.016s4.93 2.246 4.93 5.016v1.086"
              />
            </g>
            <path
              stroke="url(#f2532id0)"
              stroke-linecap="round"
              stroke-width="2.75"
              d="M19.445 14.07V8.508c0-2.77 2.207-5.016 4.93-5.016s4.93 2.246 4.93 5.016v1.086"
            />
            <path
              stroke="url(#f2532id1)"
              stroke-linecap="round"
              stroke-width="2.75"
              d="M19.445 14.07V8.508c0-2.77 2.207-5.016 4.93-5.016s4.93 2.246 4.93 5.016v1.086"
            />
            <g stroke-linecap="round" filter="url(#f2532idc)">
              <path
                stroke="url(#f2532id2)"
                d="M19.883 13.758V8.195c0-2.77 2.207-5.015 4.93-5.015s4.93 2.245 4.93 5.015v1.086"
              />
              <path
                stroke="url(#f2532id3)"
                d="M19.883 13.758V8.195c0-2.77 2.207-5.015 4.93-5.015s4.93 2.245 4.93 5.015v1.086"
              />
            </g>
            <g filter="url(#f2532idd)">
              <rect
                width="21.938"
                height="18.844"
                x="2.438"
                y="11.055"
                fill="url(#f2532id7)"
                rx="3"
              />
            </g>
            <rect
              width="21.938"
              height="18.844"
              x="2.438"
              y="11.055"
              fill="url(#f2532id4)"
              rx="3"
            />
            <rect
              width="21.938"
              height="18.844"
              x="2.438"
              y="11.055"
              fill="url(#f2532id8)"
              rx="3"
            />
            <rect
              width="21.938"
              height="18.844"
              x="2.438"
              y="11.055"
              fill="url(#f2532id5)"
              rx="3"
            />
            <g stroke-width="1.75" filter="url(#f2532ide)">
              <path
                stroke="url(#f2532id9)"
                d="M14.805 20.392a2.607 2.607 0 1 0-2.797.017v3.294a1.398 1.398 0 0 0 2.797 0z"
              />
              <path
                stroke="url(#f2532ida)"
                d="M14.805 20.392a2.607 2.607 0 1 0-2.797.017v3.294a1.398 1.398 0 0 0 2.797 0z"
              />
            </g>
            <path
              fill="url(#f2532id6)"
              d="M14.805 20.392a2.607 2.607 0 1 0-2.797.017v3.294a1.398 1.398 0 0 0 2.797 0z"
            />
            <defs>
              <radialGradient
                id="f2532id0"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(-.15625 -5.414 5.80992 -.16767 24.531 8.156)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".556" stop-color="#ab83c0" />
                <stop offset="1" stop-color="#cbbbdc" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="f2532id1"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(0 -2.21875 8.81238 0 29.305 11.406)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".111" stop-color="#b57fd6" />
                <stop offset="1" stop-color="#b57fd6" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="f2532id2"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(-3.67338 3.47071 -4.76862 -5.04709 30.036 4.538)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".216" stop-color="#edecf3" />
                <stop offset="1" stop-color="#edecf3" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="f2532id3"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(-80.102 19.36 -2.728)scale(9.45321 6.82288)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#edecf3" />
                <stop offset="1" stop-color="#edecf3" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="f2532id4"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(-2.18751 -2.40624 5.60574 -5.09619 23.813 29.898)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#ff8650" />
                <stop offset="1" stop-color="#ff8650" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="f2532id5"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(126.254 9.23 11.624)scale(2.32513 5.25171)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff760" />
                <stop offset="1" stop-color="#fff760" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="f2532id6"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(34.061 -24.997 26.914)scale(5.69121 7.82719)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".217" stop-color="#564f80" />
                <stop offset="1" stop-color="#473154" />
              </radialGradient>
              <linearGradient
                id="f2532id7"
                x1="7.563"
                x2="14.5"
                y1="14.117"
                y2="29.898"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#ffc74e" />
                <stop offset="1" stop-color="#f7864e" />
              </linearGradient>
              <linearGradient
                id="f2532id8"
                x1="13.406"
                x2="13.406"
                y1="10.742"
                y2="12.242"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#f3d04e" />
                <stop offset="1" stop-color="#f3d04e" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="f2532id9"
                x1="16.531"
                x2="12.656"
                y1="21.68"
                y2="21.68"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".331" stop-color="#d98a40" />
                <stop offset="1" stop-color="#d98a40" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="f2532ida"
                x1="10.281"
                x2="13"
                y1="20.742"
                y2="20.742"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#ffcd63" />
                <stop offset="1" stop-color="#ffcd63" stop-opacity="0" />
              </linearGradient>
              <filter
                id="f2532idb"
                width="13.609"
                height="13.328"
                x="18.07"
                y="2.117"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="1" />
                <feGaussianBlur stdDeviation=".5" />
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                />
                <feColorMatrix values="0 0 0 0 0.560784 0 0 0 0 0.556863 0 0 0 0 0.576471 0 0 0 1 0" />
                <feBlend in2="shape" result="effect1_innerShadow_18_23558" />
              </filter>
              <filter
                id="f2532idc"
                width="12.359"
                height="13.078"
                x="18.633"
                y="1.93"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_18_23558"
                  stdDeviation=".375"
                />
              </filter>
              <filter
                id="f2532idd"
                width="23.438"
                height="20.344"
                x="1.688"
                y="10.305"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="-.75" />
                <feGaussianBlur stdDeviation=".375" />
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                />
                <feColorMatrix values="0 0 0 0 0.898039 0 0 0 0 0.364706 0 0 0 0 0.423529 0 0 0 1 0" />
                <feBlend in2="shape" result="effect1_innerShadow_18_23558" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="-1" />
                <feGaussianBlur stdDeviation=".375" />
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.772549 0 0 0 0 0.364706 0 0 0 1 0" />
                <feBlend
                  in2="effect1_innerShadow_18_23558"
                  result="effect2_innerShadow_18_23558"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation=".375" />
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0.266667 0 0 0 1 0" />
                <feBlend
                  in2="effect2_innerShadow_18_23558"
                  result="effect3_innerShadow_18_23558"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx=".75" />
                <feGaussianBlur stdDeviation=".375" />
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                />
                <feColorMatrix values="0 0 0 0 0.729412 0 0 0 0 0.478431 0 0 0 0 0.207843 0 0 0 1 0" />
                <feBlend
                  in2="effect3_innerShadow_18_23558"
                  result="effect4_innerShadow_18_23558"
                />
              </filter>
              <filter
                id="f2532ide"
                width="7.965"
                height="12.26"
                x="9.41"
                y="14.217"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_18_23558"
                  stdDeviation=".25"
                />
              </filter>
            </defs>
          </g>
        </svg>
      </div>


      <div className="grid grid-cols-3 p-4 gap-6">
        {
        ImageDescription.map((each, index) => (
          <div key={index} className="rounded-xl p-6 shadow-lg space-y-6">
            <p className="font-bold">{each.title}</p>
            <Image
            className="rounded-md"
              src={each.image}
              alt="dashboard image"
            />
            <p className="opacity-60">{each.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
