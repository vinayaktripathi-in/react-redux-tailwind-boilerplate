import { useState } from "react";

export const Toggle = ({ name='',isChecked, onChange }) => {
  

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        name={name}
        className="sr-only peer"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <div
        className={`${
          isChecked == true ? "after:bg-primaryBg" : "after:bg-gray-600"
        } group peer bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-200 rounded-full outline-none duration-1000 after:duration-300 w-12 h-6 shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute  peer-checked:after:rotate-180 after:outline-none after:h-5 after:w-5 after:top-[0.12rem] after:left-1 peer-checked:after:translate-x-5`}
      ></div>
    </label>
  );
};
