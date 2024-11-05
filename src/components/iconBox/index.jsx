import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { iconSize } from "../../utils";

export const IconBox = ({
  to,
  icon,
  child,
  title,
  setPin,
  onClick,
  collapse,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();

  // Handle toggle of  dropdown
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    if (child && child.some((data) => pathname.startsWith(data.to))) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }, [pathname, child]);

  // Function to check if pathname is inside array

  const isPathnameInArray = (pathname, array) => {
    return array?.some((item) => item.to === pathname);
  };

  const isPathnameInArrayResult = isPathnameInArray(pathname, child);

  return (
    <>
      {to ? (
        <Link
          to={to}
          className={`px-2 py-2.5 ${
            pathname == to && "bg-secondaryBg dark:bg-[#392347]"
          }  flex items-center gap-4 text-black dark:text-white`}
          onClick={onClick}
        >
          {/* <img className={`w-5`} src="/icons/home.svg" alt="" /> */}
          {/* <SVG className="stroke-icon" iconId={icon} /> */}
          <span
            className={`${
              pathname == to ? "text-primaryBg" : "text-black dark:text-white"
            } `}
          >
            {icon && icon}
          </span>
          {title && (
            <span
              className={`${
                pathname == to
                  ? "text-primaryText"
                  : "text-black dark:text-white"
              } text-base `}
            >
              {title}
            </span>
          )}
        </Link>
      ) : (
        <button
          onClick={handleDropdown}
          className={`${
            dropdown && "bg-secondaryBg dark:bg-[#392347] "
          } w-full px-2 py-2.5 flex items-center justify-between gap-2 `}
        >
          <p className="flex gap-4 dark:text-white">
            {/* <img className="w-5" src={icon} alt="" /> */}
            {/* <SVG className="stroke-icon" iconId={icon} /> */}
            <span
              className={`${
                isPathnameInArrayResult
                  ? "text-primaryBg dark:text-white"
                  : "text-black dark:text-white"
              }`}
            >
              {icon && icon}
            </span>
            {title && (
              <span
                className={`${
                  isPathnameInArrayResult
                    ? "text-primaryText dark:text-white"
                    : "dark:text-white"
                } text-base`}
              >
                {title}
              </span>
            )}
          </p>
          {!collapse && (
            <span className="flex items-center gap-2">
              <IoIosArrowForward
                className={`${dropdown && "rotate-90"} ${
                  isPathnameInArrayResult
                    ? "text-primaryText"
                    : "dark:text-white"
                }`}
              />
              {/* <button onClick={setPin}>
                <SVG className="stroke-icon dark:text-white" iconId="Pin" />
              </button> */}
              {/* <MdOutlinePushPin /> */}
            </span>
          )}
        </button>
      )}
      {!collapse && (
        <>
          {dropdown && (
            <>
              {child && (
                <>
                  <ul className="mt-2.5 ">
                    {child.map((data, index) => (
                      <li className="px-4 list-none ">
                        <Link
                          to={data.to}
                          key={index}
                          className={`py-1 pl-2 pr-1 rounded-xl flex items-center gap-2 `}
                        >
                          <span className="flex items-center gap-2 ">
                            <IoIosArrowRoundForward
                              className={`${
                                pathname == data.to
                                  ? "fill-primaryText"
                                  : "fill-black dark:fill-white "
                              }`}
                              size={iconSize}
                            />
                            {/* <SVG className="svg-menu" iconId="right-3" /> */}
                            {/* {data.icon && data.icon} */}
                            {data.title && (
                              <span
                                className={`${
                                  pathname == data.to
                                    ? "text-primaryText "
                                    : "text-black dark:text-white"
                                } text-sm  `}
                              >
                                {data.title}
                              </span>
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
