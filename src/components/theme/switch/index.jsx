import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { IconWrapper } from "../../wrappers/icon-wrapper";


export const ThemeSwitch = () => {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState(loadTheme());

  function loadTheme() {
    return localStorage.getItem("theme") || "light";
  }

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("bg-[#1E293B]");
      document.body.classList.add("bg-[#1E293B]");
    } else {
      element.classList.remove("dark");
      element.classList.remove("bg-[#1E293B]");
      document.body.classList.remove("bg-[#1E293B]");
    }
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setClick(!click);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <IconWrapper className={"cursor-pointer"} onClick={handleThemeChange}>
      <button
        data-tooltip-id="my-tooltip"
        // data-tooltip-content={`theme ${
        //   click ? "light" : "dark"
        // } "mode" `}
        onClick={handleThemeChange}
        className="header-icon "
      >
        {click ? (
          <p>Dark</p>
          // <SVG className="stroke-icon dark:fill-white" iconId="Sun" />
        ) : (
          <p>Dark</p>
          // <SVG className="stroke-icon" iconId="Moon" />
        )}
      </button>
    </IconWrapper>
  );
};
