import { ImSpinner2 } from "react-icons/im";

export const Button = ({
  simpleLink,
  outLine,
  mainPrimary,
  gradientBtn,
  children,
  type,
  className,
  onClick,
  disabled,
  isLoading,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`font-inter ${className ? className : "px-8 py-2"}
      ${disabled || (isLoading && "!bg-[#ADADAD] hover:bg-slate-500 rounded")} ${simpleLink &&
        !disabled &&
        !isLoading &&
        "text-primaryText font-medium  hover:text-gray-700 rounded"
        } ${outLine && !disabled && !isLoading && "rounded text-primaryText"} ${mainPrimary &&
        !disabled &&
        !isLoading &&
        "border border-primaryText bg-primaryBg text-white hover:bg-primaryBg hover:bg-opacity-80 hover:border-secondaryBg rounded"
        } ${gradientBtn &&
        !disabled &&
        !isLoading &&
        "bg-gradient-to-r from-primaryBg to-secondaryBg text-white hover:bg-opacity-80 px-7 hover:bg-gradient-to-l rounded"
        } border border-primaryText dark:border-gray-700 flex justify-center items-center gap-2 transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out disabled:cursor-not-allowed disabled:border-gray-400`}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
      {isLoading ? (
        <ImSpinner2 className="animate-spin text-white !text-xl" />
      ) : (
        ""
      )}
    </button>
  );
};
