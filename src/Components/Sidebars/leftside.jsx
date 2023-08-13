import React from "react";
import { Link } from "react-router-dom";
import data from "./sidebardata";

const LeftSide = ({ props, ul }) => {
  return (
    <div className={props}>
      <ul className={ul}>
        {data.map((items) => (
          <li key={items.id} className="p-[10px] ml-8">
            <Link to={items.link} target="_blank">
              <img
                src={items.icon}
                alt={items.name}
                title={items.name}
                className="h-10 w-10 transform hover:scale-110 duration-500"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;
