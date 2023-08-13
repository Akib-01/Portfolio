import React from "react";
import About from "../About/About";
import Footer from "../Footer/footer";
import Side from "../Sidebars/leftside";
import Skills from "../Skills/skills";
import HeroSection from "./HeroSection";
export default function Home() {
  return (
    <>
      <div className="font-Poppins">
        <Side
          props="fixed hidden md:block z-10"
          ul="space-y-3 flex flex-col mt-44 h-screen md:py-4"
        />
        <div className="mt-32 mb-48 m-[145px] md:ml-[220px] md:mr-[150px]">
          <HeroSection />
        </div>
        <About />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
