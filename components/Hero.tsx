"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navigation } from "./navigation";
function Hero() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 pt-32 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <div className=" ">
              <div className="">
                <div className="flex md:px-12 md:flex-row flex-col items-center px-16">
                  <div className="rounded">
                    <Image
                      className="rounded-lg"
                      src="/kanixdp.jpg"
                      width={400}
                      height={400}
                      alt="logo"
                    />
                  </div>
                  <div className=" flex flex-col align-center md:pl-12">
                    <div className="md:text-3xl text-5xl lg:py-2 font-normal">
                      Hi there! ;)
                    </div>
                    <div className="lg:text-1xl text-md text-xl font-light leading-relaxed	 md:py-6">
                      Building my dreams, automating cool things, and chasing
                      big ideas. From apps to voice agents, I love creating and
                      solving problems. I have a passion for adventure,
                      startups, and dogs.
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                      <Button asChild size="lg">
                        <Link href="/projects">
                          View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link href="/contact">Get in Touch</Link>
                      </Button>
                    </div>
                    <div className="flex space-x-4">
                      {navigation.social.map((item: any, index) => {
                        const Icon = item.icon;
                        return (
                          <Button
                            key={index}
                            variant="ghost"
                            size="icon"
                            asChild
                          >
                            <Link href={item.path} target="_blank">
                              <Icon className="h-5 w-5" />
                            </Link>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="text-center py-6 pt-16 animate ">swapie up</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
