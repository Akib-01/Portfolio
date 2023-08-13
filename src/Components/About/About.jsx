import React from "react";
import DownloadButton from "../Home/DownloadButton";
import pic from "../assets/pic.jpg";
export default function About() {
  return (
    <div className="grid md:grid-cols-2 m-[145px] md:mx-[220px] md:my-[100px] rounded-lg">
      <div className="opacity-50 hover:opacity-90 bg-[#18454b70]">
        <img src={pic} alt="pic" className="rounded-lg" />
      </div>
      <div className="text-[#FFFFFF] p-2 pr-6 bg-[#18454b70] rounded-lg">
        <p className="font-bold text-xl text-center mt-6 ">
          <span className="border-b-2 p-2 text-[#35dbd3] border-[#edaa82]">
            About Me
          </span>
        </p>
        <p className="text-justify mt-5 text-base">
          I am a Computer Science graduate who is truly passionate about
          technology and loves solving problems. With a solid foundation in
          programming languages like JavaScript, Java, and C++, I have
          experience in software development and working with web technologies
          such as React, Node.js, Next.js, Nest.js, Spring MVC and .Net MVC etc.
          My expertise extends to algorithms, data structures, and database
          management systems. Combined these modern technology I can make fast,
          well-designed and responsive Web Apps.
        </p>
        <ul className="flex flex-row space-x-40 mt-2">
          <li className="items-start justify-start ml-14 text-center">
            <p>
              <span className="text-[#35dbd3]">Name</span> <br />
              Abdullah Al Akib
            </p>
          </li>
          <li className="items-end justify-end text-center">
            <p>
              <span className="text-[#35dbd3]">Phone</span> <br />
              01795849553
            </p>
          </li>
        </ul>
        <p className="text-center mt-2">
          <span className="text-[#35dbd3]">Email</span> <br />
          abdullahakib1999@gmail.com
        </p>
        <div className="flex items-center justify-center mt-6">
          <DownloadButton buttonText="Check Out My Resume" />
        </div>
      </div>
    </div>
  );
}
