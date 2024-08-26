import React from "react";

export default function Featured() {
  return (
    <div className="font-neue-montreal p-12">
      <h1 className="text-6xl">Featured projects</h1>
      <div className="border-t-[1px] border-gray-200 w-full mt-10"></div>
      <div className="flex justify-between p-5 mt-4 gap-10">
        <div className="flex flex-col gap-4">
          <p>Cardboard spaceship</p>
          <div className="w-[40vw] h-[40vw] bg-red-500 rounded-md">
            <img
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt="Cardboard spaceship project"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex gap-2 uppercase text-sm">
            <p className="rounded-full border p-2">branded template</p>
            <p className="rounded-full border p-2">sales deck</p>
            <p className="rounded-full border p-2">social media templates</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>Cardboard spaceship</p>
          <div className="w-[40vw] h-[40vw] bg-red-500 rounded-md">
            <img
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt="Cardboard spaceship project"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex gap-2 uppercase text-sm">
            <p className="rounded-full border p-2">Facebook template</p>
            <p className="rounded-full border p-2">pitch deck</p>
          </div>
        </div>
      </div>
    </div>
  );
}
