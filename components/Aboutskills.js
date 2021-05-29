import React from "react";

function Aboutskills() {
  return (
    <div>
      <div className="px-48 py-12">
        <div className="flex">
          <div className="flex-1">
            <div className="font-normal text-7xl py-12">My Career So Far</div>
            <div className="font-light text-2xl leading-relaxed">
              Always up for a challenge, I have worked for lean start-ups and
              was a member of the first New Zealand start-up to attend Y
              Combinator, the largest start-up accelerator in the world. From
              there, I worked my way up to Art Director and Team Lead at Appster
              where I oversaw the design of 30+ mobile and desktop apps.
              Currently, I lead UI/UX design at SaaS start-up VideoMyJob.
            </div>
          </div>
          <div className="flex-1 py-12">
            <div>
              <div className="flex justify-around ">
                <div className="font-normal text-2xl">ReactJS</div>
                <span className="hover:bg-black  hover:text-white px-48 rounded-lg  py-3 border-2 border-gray-300 text-black">
                  ReactJS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutskills;
