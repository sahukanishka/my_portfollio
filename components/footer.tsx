import React from "react";
import Instagram from "@/icons/instagram";
import Github from "@/icons/github";
import LinkedIn from "@/icons/linkedin";
import Mail from "@/icons/mail";
import Logo from "@/icons/Logo";
import Facebook from "@/icons/facebook";

function footer() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-4 md:px-48 md:py-24 py-24">
        <div className="text-center pb-6">
          <Logo />
        </div>
        <ul className="md:w-50  flex md:flex-row flex-col md:justify-center  items-center   py-8">
          <li className="px-8 md:py-0 py-4 text-gray-500 text-xl hover:text-black">
            About me
          </li>
          <li className="px-8 md:py-0 py-4 text-gray-500 text-xl hover:text-black">
            Projects
          </li>{" "}
          <li className="px-8 md:py-0 py-4 text-gray-500 text-xl hover:text-black">
            Skills
          </li>{" "}
          <li className="px-8 md:py-0 py-4 text-gray-500 text-xl hover:text-black">
            Highlights
          </li>{" "}
          <li className="px-8 md:py-0 py-4 text-gray-500 text-xl hover:text-black">
            Contact{" "}
          </li>
        </ul>

        <ul className="w-50 flex justify-center py-8">
          <a href="#" className="md:px-8 px-4 py-3 ">
            <Facebook width={30} height={30} color={"gray"} />
          </a>
          <a href="#" className="md:px-8 px-4 py-3 ">
            <Instagram width={30} height={30} color={"gray"} />
          </a>
          <a href="#" className="md:px-8 px-4 py-3 ">
            <Github width={30} height={30} color={"gray"} />
          </a>
          <a href="#" className="md:px-8 px-4 py-3 ">
            <LinkedIn width={30} height={30} color={"gray"} />
          </a>
          <a href="#" className="md:px-8 px-4 py-3 ">
            <Mail width={30} height={30} color={"gray"} />
          </a>
        </ul>
        <div className="text-gray-500 pt-2 text-center">
          Made with ❤️ by @kanixsahu
        </div>
        <div className="text-gray-500 pt-2 text-center">
          Hosted with <span className="text-black font-bold">Vercel</span>
        </div>
      </div>
    </div>
  );
}

export default footer;
