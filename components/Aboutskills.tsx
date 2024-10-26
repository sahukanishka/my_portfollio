import React from "react";
import ProgressBar from "./ui/progress-bar";

function Aboutskills() {
  return (
    <div className="bg-gray-150">
      <div className="md:px-16 md:py-80 pb-8">
        <div className="flex md:flex-row flex-col px-12">
          <div className="flex-1">
            <div className="font-normal text-4xl font-light py-12">
              My Career So Far
            </div>
            <div className="font-light text-xl leading-relaxed">
              Always up for a challenge, I have worked for lean start-ups and
              was a member of the first New Zealand start-up to attend Y
              Combinator, the largest start-up accelerator in the world. From
              there, I worked my way up to Art Director and Team Lead at Appster
              where I oversaw the design of 30+ mobile and desktop apps.
              Currently, I lead UI/UX design at SaaS start-up VideoMyJob.
            </div>
          </div>
          <div className="flex-1 md:py-12 py-12">
            <div className="md:pl-16">
              <div className="justify-around">
                <ProgressBar label="React JS" percentage={90} />
                <ProgressBar label="HTML & CSS" percentage={87} />
                <ProgressBar label="JavaScript" percentage={85} />
                <ProgressBar label="Python" percentage={80} />
                <ProgressBar label="Redux" percentage={75} />
                <ProgressBar label="NodeJS" percentage={67} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutskills;
