import { GoDotFill } from "react-icons/go";

const color = [
  "bg-red-200 text-red-700 fill-red-700",
  "bg-pink-200 text-pink-700 fill-pink-700",
  "bg-green-200 text-green-700 fill-green-700",
  "bg-blue-200 text-blue-700 fill-blue-700",
  "bg-purple-200 text-purple-700 fill-purple-700",
  "bg-yellow-200 text-yellow-700, fill-yellow-700",
];

let colors = "";

for (let i = 0; i < color.length; i++) {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  colors = color[randomNumber];
}

export const IconWrapper = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={` + ${className}`}
      // md:bg-[#F4F5F8] md:dark:bg-[#22262C] lg:p-2 md:p-2 sm:bg-transparent sm:p-1 flex justify-center items-center
    >
      {children}
    </div>
  );
};

export const BadgeWrapper = ({ children, customColor, textCustomColor }) => {
  return (
    <div
      className={`${
        customColor ? customColor : colors
      } px-2 py-1 rounded-full flex justify-center items-center gap-1`}
    >
      <GoDotFill className={`${textCustomColor ? textCustomColor : colors} text-xs rounded-full`} />
      <p className={`${textCustomColor ? textCustomColor : ""} font-medium text-xs`}>{children}</p>
    </div>
  );
};
