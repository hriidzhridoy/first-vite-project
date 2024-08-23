import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-zinc-900 w-full h-screen pt-1 flex items-center">
      <div className="textstructure  px-20">
        {["We Created", "Eye Opening", "Presentation"].map((text, index) => (
          <div
            key={index}
            className="font-bold text-6xl my-3 px-8 uppercase leading-none tracking-tighter font-founders-grotesk"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
