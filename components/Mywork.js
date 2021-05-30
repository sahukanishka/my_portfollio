import React from "react";

function Mywork() {
  return (
    <div className="svg-background">
      <div className="px-48 py-96 ">
        <div className="flex px-12">
          <div className="">
            <div className="text-8xl font-bold leading-normal ">
              A developer passionate about creating
              <span className="gradient-text">{" beautiful"}</span> user
              friendly products
            </div>
          </div>
        </div>
        <div className="flex px-12 py-12">
          <button className="bg-black text-white rounded-full hover:bg-gray-200 hover:border-2  hover:text-black hover:shadow-sm px-6 py-3 text-2xl">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mywork;
