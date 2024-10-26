"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
                    <div className="md:text-4xl text-5xl py-6  md:py-6 font-normal">
                      Hi there! ;)
                    </div>
                    <div className="md:text-2xl text-md text-xl font-light leading-relaxed	 md:py-6">
                      Fuelled by a passion for designing compelling products, I
                      have a deep desire to excel and continuously improve in my
                      work. Learn more about my journey below.
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
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="https://github.com" target="_blank">
                          <Github className="h-5 w-5" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="https://linkedin.com" target="_blank">
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="https://twitter.com" target="_blank">
                          <Twitter className="h-5 w-5" />
                        </Link>
                      </Button>
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
