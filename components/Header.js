import React from "react";
import Logo from "../icons/Logo";

const logotext = "< Kanishkasahu />";

function Header() {
  return (
    <div className="bg-gray-100 px-12">
      <div className="flex py-8 px-48 justify-between justify-items-center	">
        <div className="flex-1 text-3xl p-2 -text ">
          <Logo />
        </div>
        <div className="flex-1 flex justify-between justify-items-center	">
          <div className="text-xl  py-3 px-3 hover:bg-black hover:text-white rounded-lg">
            About Me
          </div>
          <div className="text-xl  py-3 px-3 hover:bg-black hover:text-white rounded-lg">
            My Projects
          </div>
          <div className="text-xl  py-3 px-3 hover:bg-black hover:text-white rounded-lg">
            Tech Stack
          </div>
          <div className="text-xl  py-3 px-3 hover:bg-black hover:text-white rounded-lg">
            Highlights
          </div>
          <div className="text-xl  py-3 px-3 hover:bg-black hover:text-white rounded-lg">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
