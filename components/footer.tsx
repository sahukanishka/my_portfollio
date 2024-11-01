import React from "react";

import Logo from "@/icons/Logo";

import { Github, Heart, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@radix-ui/react-context-menu";
import Link from "next/link";
import { Button } from "./ui/button";
const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Timeline", href: "/timeline" },
    { name: "Media", href: "/media" },
    { name: "Stack", href: "/stack" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
  ],
};
function Footer() {
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

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-4">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-transform"
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Made with Love */}
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" />
            <span>by @Kanishka</span>
          </div>
        </div>

        <div className="mt-8 text-xs text-center text-gray-400">
          <p>Fully open source for you</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
