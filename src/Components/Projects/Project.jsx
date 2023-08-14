import React from "react";
import { Link } from "react-router-dom";
import Github from "../assets/github.png";
import projectData from "./ProjectData";

export default function Project() {
  return (
    <div className="mt-12 md:mt-24 mx-[5%] md:mx-[10%]">
      <p className="flex items-center justify-center text-[24px] md:text-[30px] font-semibold p-20 md:p-20">
        <span className="border-b-2 p-2 text-[#35dbd3] border-[#edaa82]">
          My Projects
        </span>
      </p>
      <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {projectData.map((items) => (
          <div
            className="flex flex-row group"
            key={items.id}
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="pb-10 relative group">
              <div className="flex flex-col justify-center items-center relative">
                <div className="w-24 h-24 bg-gray-300 rounded-full absolute top-[-60px] left-1/2 transform -translate-x-1/2">
                  <img src={items.icon} alt={items.icon} title={items.title} />
                </div>
              </div>

              <div className="shadow-lg h-96 shadow-[#588285] rounded-lg">
                <p className="text-[#35dbd3] text-center pt-10">
                  {items.title}
                </p>
                <p className="text-justify p-6 text-white">
                  {items.description}
                </p>
              </div>
              <div className="absolute left-0 right-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Link to={items.path} target="_blank">
                  <button className="bg-[#35dbd3] text-white py-2 px-4 rounded-lg transform hover:scale-110 duration-500">
                    View on GitHub
                  </button>
                </Link>
              </div>
              <div className="relative top-[-70px] pl-6 inline-block">
                <Link to={items.path} target="_blank">
                  <img
                    src={Github}
                    alt={Github}
                    className="h-10 w-10 transform hover:scale-110 duration-500"
                  />
                </Link>
                <div className="text-[#35dbd3] text-[12px] flex flex-row justify-end items-end space-x-2 absolute left-[250px] bottom-2 w-24 h-9">
                  {items.libraries.map((libs) => (
                    <ul key={libs.id}>
                      <li className="text-[10px]">{libs.name}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
