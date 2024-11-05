import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top fixed bottom-16 right-2 w-10 h-10 rounded-full bg-primaryBg text-white flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity ease-in duration-1000 "
          onClick={scrollToTop}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={"Scroll to top"}
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
};
