import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import DownloadButton from "../Home/DownloadButton";
import logo from "../assets/logo2.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 flex z-10 justify-between items-center px-6 md:px-10 py-3 transition-all ${
    isScrolled
      ? "bg-[#1c1a30] bg-opacity-95 drop-shadow text-[#6dc0e1]"
      : "bg-transparent text-[#6dc0e1]"
  }`;

  return (
    <>
      <div className={headerClasses}>
        <div
          className="w-10 h-10 cursor-pointer"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <ScrollLink to="hero" smooth={true} duration={500} offset={-70}>
            <img src={logo} alt="Logo" className="w-full h-full" />
          </ScrollLink>
        </div>

        <ul className="flex justify-between items-center space-x-4 md:space-x-8">
          <li
            className="cursor-pointer hover:text-[#779cca]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              About
            </ScrollLink>
          </li>
          <li
            className="cursor-pointer hover:text-[#779cca]"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
              Skills
            </ScrollLink>
          </li>
          <li
            className="cursor-pointer hover:text-[#779cca]"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <ScrollLink to="project" smooth={true} duration={500} offset={-70}>
              Project
            </ScrollLink>
          </li>
          <li
            className="cursor-pointer hover:text-[#779cca]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              Contact
            </ScrollLink>
          </li>
          <li data-aos="zoom-in" data-aos-duration="2500">
            <DownloadButton buttonText="Resume" />
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
