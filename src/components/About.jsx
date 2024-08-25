import React from "react";
import TextPart from "./About/TextPart";
import ParagraphPart from "./About/ParagraphPart";

export default function About() {
  return (
    <>
      <div className="bg-[#CDEA68] w-full py-20 px-12 rounded-tl-[20px] rounded-tr-[20px] font-neue-montreal text-black">
        <TextPart />
        <hr className="mt-6 border-black" />
        <ParagraphPart />
        <hr className="mt-6 border-black" />
      </div>
    </>
  );
}
