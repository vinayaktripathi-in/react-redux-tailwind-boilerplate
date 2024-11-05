import { Link } from "react-router-dom";
import { CrossButton } from "../buttons/crossButton";
// import { SVG } from "../svg";
import { useEffect } from "react";
// import { FaArdivLeftLong } from "react-icons/fa6";

export const Heading = ({ parent, mainTitle, className, sectionLink }) => {
  const projectName = "AnaRock";
  useEffect(() => {
    document.title = ` ${mainTitle} - ${projectName}`;
    window.scrollTo(0, 0);
  }, [mainTitle]);

  return (
    <div className="page-title flex flex-col items-start md:gap-2">
      <nav class="flex md:justify-start items-center" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to={`/dashboard`}>
              <img className="w-4" src="/icons/home-color.svg" alt="" />
              {/* <SVG iconId="Home" className="svg-divor" /> */}
            </Link>
          </li>
          <li class="breadcrumb-item sm:text-base text-xs">
            <Link to={sectionLink}>{parent}</Link>
          </li>
          <li class="active breadcrumb-item dark:!text-white text-xs sm:text-base">
            {mainTitle}
          </li>
        </ol>
      </nav>
      <h3 className={`${className} dark:text-white `}> {mainTitle}</h3>
    </div>
  );
};

export const PageHeading = ({ children, divClassName, className, disable }) => {
  return (
    <div className={`${divClassName} flex items-center gap-2 `}>
      {/* <CrossButton
        className={"p-0"}
        icon={<FaArdivLeftLong className="text-black" />}
        iconClassName={"text-xl"}
        disable={disable}
      /> */}
      <Heading className={className}>{children}</Heading>
    </div>
  );
};
