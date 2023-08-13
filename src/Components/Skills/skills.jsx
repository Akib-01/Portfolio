import Lottie from "lottie-react";
import React from "react";
import work from "../assets/work.json";
import skills from "./skillsdata";

export default function Skills() {
  const splitSkills = (skills) => {
    const midpoint = Math.ceil(skills.length / 2);
    return [skills.slice(0, midpoint), skills.slice(midpoint)];
  };

  const [firstSkills, secondSkills] = splitSkills(skills);

  return (
    <div className="grid md:grid-cols-2 m-[145px] md:ml-[220px] md:mr-[150px]">
      <div className="rounded-lg">
        <Lottie animationData={work} />
      </div>
      <div className="flex flex-col space-y-4 mt-8 md:mt-0 text-[#35dbd3]">
        <h2 className="text-2xl font-bold text-center">
          <span className="border-b p-4 border-[#edaa82]">My Skills</span>
        </h2>
        <div className="flex space-x-8 justify-center items-center p-10">
          <SkillList skills={firstSkills} />
          <SkillList skills={secondSkills} />
        </div>
      </div>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <ul className="flex flex-col space-y-4">
      {skills.map((skill) => (
        <li key={skill.title} className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={skill.logo}
              alt={skill.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">{skill.title}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
