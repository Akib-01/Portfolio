import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
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

  const headerClasses = `fixed top-0 left-0 right-0 flex z-10 justify-between items-center px-10 py-3 transition-all ${
    isScrolled
      ? "bg-[#1c1a30] bg-opacity-95 drop-shadow text-[#6dc0e1]"
      : "bg-transparent text-[#6dc0e1]"
  }`;

  return (
    <>
      <div className={headerClasses}>
        <div className="w-12 h-12 cursor-pointer">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="w-full h-full " />
          </Link>
        </div>

        <ul className="flex justify-between items-center space-x-8">
          <li className="cursor-pointer hover:text-[#779cca]">About</li>
          <li className="cursor-pointer hover:text-[#779cca]">Skills</li>
          <li className="cursor-pointer hover:text-[#779cca]">Project</li>
          <li className="cursor-pointer hover:text-[#779cca]">Contact</li>
          <li>
            <DownloadButton buttonText="Resume" />
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
