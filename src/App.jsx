import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <div className="bg-zinc-900 w-full h-screen text-white text-xl">
      <Navbar />
      <LandingPage />
    </div>
  );
}
