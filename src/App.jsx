import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";

export default function App() {
  return (
    <div className="bg-zinc-900 w-full min-h-screen text-white text-xl">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  );
}
