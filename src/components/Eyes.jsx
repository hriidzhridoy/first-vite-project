import React, { useEffect, useRef } from "react";

export default function Eyes() {
  const eyeRef1 = useRef(null);
  const eyeRef2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = [eyeRef1.current, eyeRef2.current];

      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeX;
        const dy = e.clientY - eyeY;
        const angle = Math.atan2(dy, dx);

        const radius = rect.width / 4;
        const moveX = Math.cos(angle) * radius;
        const moveY = Math.sin(angle) * radius;

        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-white relative flex  justify-center items-center">
      <div className="object-contain absolute inset-0 ">
        <img
          src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* Eye 1 */}
      <div
        className="absolute w-40 h-40 bg-white rounded-full flex justify-center items-center"
        style={{ left: "37%", top: "45%" }}
      >
        <div ref={eyeRef1} className="w-16 h-16 bg-black rounded-full"></div>
      </div>
      {/* Eye 2 */}
      <div
        className="absolute w-40 h-40 bg-white rounded-full flex justify-center items-center"
        style={{ left: "53%", top: "45%" }}
      >
        <div ref={eyeRef2} className="w-16 h-16 bg-black rounded-full"></div>
      </div>
    </div>
  );
}
