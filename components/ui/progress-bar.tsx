// ProgressBar.jsx
import React from "react";

const ProgressBar = ({
  label,
  percentage,
  bgColor = "bg-pink-200",
  textColor = "text-pink-600",
}: any) => (
  <div className="relative pt-1">
    <div className="flex mb-2 items-center justify-between">
      <div>
        <span className="text-xs  inline-block py-1 px-2  rounded-full text-gray-600 bg-gray-200">
          {label}
        </span>
      </div>
      <div className="text-right">
        <span className={`text-xs font-semibold inline-block ${textColor}`}>
          {percentage}%
        </span>
      </div>
    </div>
    <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded ${bgColor}`}>
      <div
        style={{ width: `${percentage}%` }}
        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center g-bg-pink-blue"
      ></div>
    </div>
  </div>
);

export default ProgressBar;
