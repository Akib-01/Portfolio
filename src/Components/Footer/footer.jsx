import React from "react";
import Side from "../Sidebars/leftside";

export default function footer() {
  return (
    <>
      <Side
        props="block md:hidden"
        ul="flex flex-row justify-center items-center"
      />
      <div className="text-center text-[#35dbd3] text-[14px] p-4 pb-4">
        <p className="uppercase">Copyright © 2023 Abdullah Al Akib</p>
        <p className="uppercase">All rights reserved</p>
      </div>
    </>
  );
}
