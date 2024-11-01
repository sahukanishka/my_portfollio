import React from "react";

import Logo from "@/icons/Logo";

import { Github, Heart, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@radix-ui/react-context-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { navigation } from "./navigation/index";

function Footer() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-4 md:px-48 md:py-24 py-24">
        <div className="text-center pb-6">
          <Logo />
        </div>
        <ul className="md:w-50  flex md:flex-row flex-col md:justify-center  items-center   py-8">
          {navigation.main.map((el, index) => (
            <li
              key={index}
              className="px-8 md:py-0 py-4 text-gray-500  hover:text-white"
            >
              <Link href={el.path}>{el.name}</Link>
            </li>
          ))}
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
                    href={item.path}
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
      </div>
      <div className="my-3 text-xs text-center text-gray-400">
        <p>Fully open source for you</p>
      </div>
    </div>
  );
}

export default Footer;
