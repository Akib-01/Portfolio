import Lottie from "lottie-react";
import React from "react";
import Hello from "../assets/Hello.json";
import DownloadButton from "./DownloadButton";

export default function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div
        className="pt-16"
        data-aos="fade-right"
        data-aos-easing="cubic"
        data-aos-duration="2800"
      >
        <p className="text-[#34d5eb] text-left leading-[1.5] md:leading-0 md:pr-20">
          Hi, I am
          <br />
          <span className="md:text-[50px] text-[37px] font-bold text-white block md:inline">
            Abdullah-Al-Akib
            <br />
            Full-Stack Web Developer <br />
          </span>
        </p>
        <br />
        <p className="text-[#a7b3c7] text-justify md:pr-20">
          I am a Computer Science graduate who is truly passionate about
          technology and loves solving problems. I have experience in software
          development and working with{" "}
          <span className="text-[#34d5eb]">web technologies</span> to make
          digital web Apps with the latest technologies.
        </p>
        <br />
        <div className="flex justify-center md:justify-start">
          <DownloadButton buttonText="My Resume" />
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="cubic"
        data-aos-duration="3000"
        className="flex justify-center items-center"
      >
        <Lottie animationData={Hello} />
      </div>
    </div>
  );
}
