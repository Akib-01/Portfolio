import React from "react";
import About from "../About/About";
import Footer from "../Footer/footer";
import Project from "../Projects/Project";
import Side from "../Sidebars/leftside";
import Skills from "../Skills/skills";
import ContactForm from "../contact/contact";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div className="font-Poppins">
      <Side
        props="fixed hidden md:block z-10"
        ul="space-y-3 flex flex-col mt-44 h-screen md:py-4"
      />
      <div id="hero">
        <div className="mt-32 mb-48 m-[145px] md:ml-[220px] md:mr-[150px]">
          <HeroSection />
        </div>
      </div>
      <div
        id="about"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div
        id="contact"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
