import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <div className="bg-gray-100 ">
      <div className="md:px-48 md:py-48 px-4 py-8">
        <div className="flex md:px-64 md:flex-row flex-col items-center px-16">
          <div className="rounded">
            <Image
              className="rounded-lg"
              src="/kanixdp.jpg"
              width={400}
              height={400}
              alt="logo"
            />
          </div>
          <div className=" flex flex-col align-center md:w-3/5 md:pl-12">
            <div className="md:text-8xl text-5xl py-6  md:py-6 font-normal">
              Hi there! ;)
            </div>
            <div className="md:text-2xl  text-xl font-light leading-relaxed	 md:py-6">
              Fuelled by a passion for designing compelling products, I have a
              deep desire to excel and continuously improve in my work. Learn
              more about my journey below.
            </div>
            <div className="py-6">
              <button className="mb-2 md:mb-0 bg-black px-5 py-2 shadow-sm tracking-wider border text-white rounded-full hover:bg-gray-100 hover:text-black inline-flex items-center space-x-2 ">
                Want to know more..
              </button>
            </div>
          </div>
        </div>
        <div className="text-center py-6 pt-16 animate ">swapie up</div>
      </div>
    </div>
  );
}

export default Hero;
