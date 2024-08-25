import React from "react";

export default function ImagePart() {
  return (
    <>
      <div className="flex  p-10 gap-10">
        <div className=" w-1/2 flex flex-col justify-start items-start p-10 rounded-lg shadow-lg">
          <p className="text-4xl font-bold text-white mb-4">Our Approach</p>
          <button className="bg-black text-white px-8 py-4 whitespace-nowrap w-[180px] rounded-full hover:bg-gray-800 transition duration-300">
            Read More
          </button>
        </div>
        <div className="bg-purple-300 w-1/2 rounded-lg shadow-lg object-cover">
          <img
            className="rounded-lg"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
