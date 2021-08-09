import React from "react";

export default function ProgressBar({ data, title }) {
  const intData = parseInt(data.substring(0, data.length - 1));
  const percentage = intData >= 100 ? "100%" : data;
  const formatedTitle = title
    .split("_")
    .map((item) => item.charAt(0).toUpperCase() + item.substring(1))
    .join(" ");
  return (
    <div className="flex flex-col mb-4 static">
      <span>{formatedTitle}</span>
      <div className="bg-purple-100 w-full h-8 rounded-lg static">
        <span className="text-xs absolute mt-2 mx-2">{percentage}</span>
        <div
          className="flex bg-purple-400 h-8 z-10 rounded-lg text-black items-center justify-center"
          style={{ width: percentage }}
        ></div>
      </div>
    </div>
  );
}
