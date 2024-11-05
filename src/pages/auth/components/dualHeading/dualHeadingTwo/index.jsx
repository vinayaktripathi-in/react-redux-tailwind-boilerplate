export const DualHeadingTwo = ({ heading, subHeading, containerClassName }) => {
  return (
    <div className={containerClassName}>
      <h1 className="font-bold text-xl">{heading}</h1>
      <p className="text-[#858585] text-sm pt-3">{subHeading}</p>
    </div>
  );
};
