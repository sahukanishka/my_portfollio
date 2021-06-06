import React, { useState } from "react";
import Logo from "../icons/Logo";
import Menuicon from "../icons/menuicon";

const logotext = "< Kanishkasahu />";

function Header() {
  const [ismenuOpen, setIsmenuOpen] = useState(false);

  function handleMenuClick(e) {
    e.preventDefault();
    setIsmenuOpen(!ismenuOpen);
  }
  console.log(ismenuOpen);
  return (
    <div className="bg-gray-100 md:px-12">
      <div className="flex md:py-8 py-4 px-2 md:px-48 justify-between justify-items-center	">
        <div className="flex-1 md:text-3xl p-2 ">
          <Logo />
        </div>

        <div className="flex-1 hidden md:block space-x-4 ">
          <div className="mb-2 md:mb-0 bg-transprant  px-5 py-2  tracking-wider text-black rounded-full hover:bg-black hover:text-white inline-flex items-center space-x-2 ">
            About Me
          </div>
          <div className="mb-2 md:mb-0 bg-transprant  px-5 py-2  tracking-wider text-black rounded-full hover:bg-black hover:text-white inline-flex items-center space-x-2 ">
            My Projects
          </div>
          <div className="mb-2 md:mb-0 bg-transprant  px-5 py-2  tracking-wider text-black rounded-full hover:bg-black hover:text-white inline-flex items-center space-x-2 ">
            Tech Stack
          </div>
          <div className="mb-2 md:mb-0 bg-transprant  px-5 py-2  tracking-wider text-black rounded-full hover:bg-black hover:text-white inline-flex items-center space-x-2 ">
            Highlights
          </div>
          <div className="mb-2 md:mb-0 bg-transprant  px-5 py-2  tracking-wider text-black rounded-full hover:bg-black hover:text-white inline-flex items-center space-x-2 ">
            Contact
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={(e) => handleMenuClick(e)} className="p-2">
            <Menuicon width={30} height={30} color={"black"} />
          </button>
        </div>
      </div >
      { ismenuOpen ? <MobileMenu /> : ""
      }
    </div >
  );
}

const MobileMenu = () => {
  return (
    <div className="h-screen w-screen items-center justify-center flex flex-col">
      <div className="text-3xl font-bold  py-4 px-6  hover:text-gray-400 ">
        About Me
      </div>
      <div className="text-3xl font-bold  py-4 px-6  hover:text-gray-400 ">
        My Projects
      </div>
      <div className="text-3xl font-bold  py-4 px-6  hover:text-gray-400 ">
        Tech Stack
      </div>
      <div className="text-3xl font-bold  py-4 px-6  hover:text-gray-400 ">
        Highlights
      </div>
      <div className="text-3xl font-bold  py-4 px-6  hover:text-gray-400 ">
        Contact
      </div>
    </div>
  );
};

export default Header;
