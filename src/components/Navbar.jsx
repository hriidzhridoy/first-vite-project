import React from "react";
import LogoC from "./LogoC";

export default function Navbar() {
  return (
    <div className="w-full  px-6 py-8">
      <div>
        <LogoC />
      </div>
      <div className="flex">
        {["Services", "Our work", "about us", "Insights", "contact"].map(
          (each, index) => {
            <a key={index} className="text-xl capitalize text-teal-50 ">
              {each}
            </a>;
          }
        )}
      </div>
    </div>
  );
}
