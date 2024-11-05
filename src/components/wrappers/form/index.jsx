export const FormWrapper = ({header, children, containerClassName, ...props }) => {
  return (
    <div
      {...props}
      className={`${
        containerClassName && containerClassName
      } card bg-themeDefault dark:bg-gray-800`}
    >
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
};
