import React from 'react';
import { Link } from 'react-router';
import logo from "../logo.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
// practice\first\src\logo.svg

export default function Navbar() {

  
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // console.log(isSidebarOpen);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-[#0B363D]">
        <div className=" flex items-center justify-between lg:w-8/12 mx-auto    text-white p-2 ">
          <img className=" h-10" src={logo} alt="" />

          <div className="hidden lg:block">
            <div className="flex gap-10 font-semibold ">
              <Link to="/" className=" hover:text-orange-500 duration-300 cursor-pointer ">
                Home
              </Link>
              <Link to={"/About"} className=" hover:text-orange-500 duration-300 cursor-pointer  ">
                About
              </Link>
              <Link to="/Contact" className=" hover:text-orange-500 duration-300 cursor-pointer ">
                Contact
              </Link>
              <Link to="/Service" className=" hover:text-orange-500 duration-300 cursor-pointer ">
                Service
              </Link>
              <Link to="/Pricing" className=" hover:text-orange-500 duration-300 cursor-pointer  ">
                Price
              </Link>
            </div>
          </div>
  
           

          <div className="flex items-center gap-4">
            
            <>
            <svg
            onClick={toggleDrawer}
            className="block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"
              />
            </svg>
            {/* <button className="block md:hidden" onClick={toggleDrawer}>Show</button> */}
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div className="bg-gray-600 text-white h-full">
                <p className=" hover:text-orange-500 duration-300 cursor-pointer ">
                Home
              </p>
              <p className=" hover:text-orange-500 duration-300 cursor-pointer  ">
                About
              </p>
              
              <p className=" hover:text-orange-500 duration-300 cursor-pointer ">
                Service
              </p>
              <p className=" hover:text-orange-500 duration-300 cursor-pointer  ">
                Price
              </p>
              <p className=" hover:text-orange-500 duration-300 cursor-pointer ">
                Contact
              </p>

              <button className=" bg-orange-600 pl-8 pr-8 pt-2 pb-2 font-semibold rounded-xl mt-10">
            Login
          </button>

                </div>
            </Drawer>
        </>
            <button className=" hidden md:block bg-orange-600 pl-8 pr-8 pt-2 pb-2 font-semibold ">
            Login
          </button>
          </div>
        </div>
      </nav>
  )
}
