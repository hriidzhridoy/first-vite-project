import React from "react";

export default function ParagraphPart() {
  return (
    <>
      <div className="flex  py-10">
        <div className="w-1/2">
          <p>What you can expect</p>
        </div>
        <div className="w-1/2 flex   justify-start gap-16 items-center">
          <div className="text-[15px] tracking-tight leading-6 flex flex-col w-[40%]  gap-6 ">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className=" text-sm underline">
            <p>Instagram</p>
            <p>Behance</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </>
  );
}
