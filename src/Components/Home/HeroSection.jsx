import Lottie from "lottie-react";
import React from "react";
import Hello from "../assets/Hello.json";
import DownloadButton from "./DownloadButton";
export default function HeroSection() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="pt-16">
        <p className="text-[#34d5eb] text-justify leading-[60px]">
          Hi, I am
          <br />
          <span className="md:text-[46px] text-[37px] font-bold text-white">
            Abdullah-Al-Akib
            <br />
            Full-Stack Web Developer <br />
          </span>
        </p>
        <br />
        <p className="text-[#a7b3c7] text-justify">
          I am a Computer Science graduate who is truly passionate about
          technology and loves solving problems. I have experience in software
          development and working with
          <span className="text-[#34d5eb]"> web technologies</span> to make
          digital web Apps with latest technologies.
        </p>
        <br />
        <div>
          <DownloadButton buttonText="My Resume" />
        </div>
      </div>
      <div>
        <Lottie animationData={Hello} />
      </div>
    </div>
  );
}
