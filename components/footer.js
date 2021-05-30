import React from "react";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import Github from "../icons/github";
import LinkedIn from "../icons/linkedin";
import Mail from "../icons/mail";
import Logo from "../icons/Logo";

function footer() {
  return (
    <div>
      <div className="flex flex-col justify-center md:px-48 md:py-24">
        <div className="text-center pb-3">
          <Logo />
        </div>
        <ul className="w-50 flex justify-center py-8">
          <li className="px-8 text-gray-500 text-xl hover:text-black">
            About me
          </li>
          <li className="px-8 text-gray-500 text-xl hover:text-black">
            Projects
          </li>{" "}
          <li className="px-8 text-gray-500 text-xl hover:text-black">
            Skills
          </li>{" "}
          <li className="px-8 text-gray-500 text-xl hover:text-black">
            Highlights
          </li>{" "}
          <li className="px-8 text-gray-500 text-xl hover:text-black">
            Contact{" "}
          </li>
        </ul>

        <ul className="w-50 flex justify-center py-8">
          <a href="#" className="px-8 py-3 ">
            <Facebook width={30} height={30} color={"gray"} />
          </a>
          <a href="#" className="px-8 py-3 ">
            <Instagram width={30} height={30} color={"gray"} />
          </a>
          <a href="#" className="px-8 py-3 ">
            <Github width={30} height={30} color={"gray"} />
          </a>
          <a href="#" className="px-8 py-3 ">
            <LinkedIn width={30} height={30} color={"gray"} />
          </a>
          <a href="#" className="px-8 py-3 ">
            <Mail width={30} height={30} color={"gray"} />
          </a>
        </ul>
        <div className="text-gray-500 pt-3 text-center">
          Made with ❤️ by @kanixsahu
        </div>
      </div>
    </div>
  );
}

export default footer;
