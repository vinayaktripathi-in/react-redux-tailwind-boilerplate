export const DualHeadingOne = ({ heading, subHeading }) => {
  const [mainHeading, secondaryHeading] = heading?.split(" ");

  return (
    <>
      <p className="font-bold text-[22px] text-white">
        {mainHeading}
        <br /> {secondaryHeading}
      </p>
      <p className="font-medium text-sm text-[#F9F9F9]">{subHeading}</p>
    </>
  );
};