import React from "react";
import LogoC from "./LogoC";

export default function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex items-center justify-between bg-teal-900 font-neue-montreal">
      <div>
        <LogoC />
      </div>
      <div className="flex text-white gap-10">
        {["Services", "Our work", "About us", "Insights", "Contact"].map(
          (each, index) => (
            <a
              key={index}
              className={`text-md capitalize font-light ${
                index === 4 && "ml-32"
              }`}
            >
              {each}
            </a>
          )
        )}
      </div>
    </div>
  );
}
