import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="bg-[#004D43] py-24 rounded-tl-[20px] font-neue-montreal rounded-tr-[20px] overflow-hidden">
      <motion.div
        className="flex gap-10 items-center p-8 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust duration to control the speed
          ease: "linear",
        }}
      >
        <h1 className="text-[10vw] uppercase font-bold">
          We are ochis We are ochis We are ochis We are ochis
        </h1>
      </motion.div>
    </div>
  );
}
