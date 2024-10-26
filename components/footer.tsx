import React from "react";

import Logo from "@/icons/Logo";

import { Github, Linkedin, Twitter } from "lucide-react";

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

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="text-gray-500 pt-2 text-center">
          Made with ❤️ by @kanixsahu
        </div>
        <div className="text-gray-500 pt-2 text-center">
          Hosted with <span className="text-black font-bold">Vercel</span>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
