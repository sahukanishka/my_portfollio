import React from "react";

const progressbar = () => {
  const howmuch = props.length;
  return (
    <div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
              {props.title}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-pink-600">
              30%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
          <div
            style={{ width: howmuch }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default progressbar;
