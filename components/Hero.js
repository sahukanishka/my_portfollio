import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <div className="bg-gray-100 ">
      <div className="md:px-48 md:py-60">
        <div className="flex md:px-64">
          <div className="rounded">
            <Image
              className="rounded-lg"
              src="/kanix.jpg"
              width={400}
              height={400}
              b
              alt="logo"
            />
          </div>
          <div className=" flex flex-col align-center w-3/5 md:pl-12">
            <div className="md:text-9xl  md:py-6 font-normal">Hi there! ;)</div>
            <div className="text-3xl font-light leading-relaxed	 md:py-6">
              Fuelled by a passion for designing compelling products, I have a
              deep desire to excel and continuously improve in my work. Learn
              more about my journey below.
            </div>
            <div>
              <button className="bg-black text-white rounded-full hover:bg-gray-200 hover:border-2  hover:text-black hover:shadow-sm p-5 text-xl">
                Want to know more..
              </button>
            </div>
          </div>
        </div>
        <div className="text-center md:py-36 animate ">swapie up</div>
      </div>
    </div>
  );
}

export default Hero;
