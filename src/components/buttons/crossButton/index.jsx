import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export const CrossButton = ({ className, onClick, icon, iconClassName, disable }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  return (
    <button
      className={`${className ? className : "absolute top-3 right-3"}`}
      onClick={onClick ? onClick : handleClick}
      disabled={disable}
    >
      {icon ? icon : <RxCross2 className={iconClassName} />}
    </button>
  );
};
