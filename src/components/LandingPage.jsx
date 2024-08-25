import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function LandingPage() {
  return (
    <div className="bg-zinc-900 w-full h-screen pt-1  items-center">
      <div className="textstructure mt-52 px-20">
        {["We Created", "Eye Opening", "Presentation"].map((text, index) => (
          <div
            key={index}
            className={`font-bold text-6xl my-3 px-8 uppercase leading-none tracking-tighter font-neue-montreal text-white`}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-24  w-full flex justify-between items-center px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <div key={index} className="text-lg font-light  my-3">
            {item}
          </div>
        ))}
        <div className="flex items-center font-light uppercase ">
          <div className="p-5 border border-zinc-500 rounded-full m-3 h-9 flex items-center justify-center">
            Start the project
          </div>
          <div className="rounded-full border border-zinc-500 w-9 h-9 flex items-center justify-center">
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}
