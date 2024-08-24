import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="bg-[#004D43] py-24 rounded-tl-[20px]  rounded-tr-[20px] overflow-hidden">
      <div className="flex gap-10 items-center  p-8">
        <motion.h1
          className="text-[10vw] uppercase font-bold  whitespace-nowrap"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        >
          We are ochis
        </motion.h1>
        <motion.h1
          className="text-[10vw] uppercase font-bold whitespace-nowrap"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        >
          We are ochis
        </motion.h1>
      </div>
    </div>
  );
}
