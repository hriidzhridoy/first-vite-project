import React from "react";
import LogoC from "./LogoC";

export default function Navbar() {
  return (
    <div className="w-full px-20 py-8 flex items-center justify-between font-neue-montreal">
      <div>
        <LogoC />
      </div>
      <div className="flex text-white gap-10">
        {["Services", "Our work", "About us", "Insights", "Contact"].map(
          (each, index) => (
            <a
              key={index}
              className={`text-xl capitalize text-teal-50 ${
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
