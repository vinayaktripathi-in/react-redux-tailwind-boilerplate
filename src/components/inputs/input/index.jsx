import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

export const Input = ({
  name,
  type,
  value,
  label,
  onBlur,
  touched,
  onChange,
  className,
  placeholder,
  infoContent,
  errorContent,
  autoComplete,
  disabled,
  required,
  containerClassName,
  ...props
}) => {
  const [passwordType, setPasswordType] = useState("password");

  const arrOfNames = ['name', 'companyName', 'unitNumber', 'intercom', 'tenantType', 'electricityConnection', 'waterConnection']
  const arrOfNumbers = ['plotArea', 'terraceArea', 'unitNumber', 'superBuiltUpArea', 'noOfWaterInlets', 'noOfPets', 'connectedEBLoad', 'connectedDGLoad', 'documentCount']

  const viewPassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleChange = (e) => {
    // Prevent more than one space consecutively
    let newValue;
    if (e.target.name === "password") {
      newValue = e.target.value.replace(/\s/g, "");
    } else {
      newValue = e.target.value.replace(/\s{2,}/g, " ");
    }

    if (
      arrOfNames.includes(e.target.name) &&
      e.target.value.length > 50
    ) {
      return;
    }

    const isNumeric = /^\d*$/.test(newValue);

    if (arrOfNumbers.includes(e.target.name)) {
      if (newValue.length > 12) {
        return; // Prevent longer than 12 characters
      }
      if (!isNumeric) {
        e.target.value = ""; // Clear input or handle as needed
        return;
      }
    }
    e.target.value = newValue;
    console.log(isNumeric, newValue, "fds");
    onChange(e);
  };




  return (
    <div className={containerClassName}>
      <div className="w-full flex flex-col gap-1">
        <div className="flex items-center gap-1 relative">
          <label
            className={`${required &&
              "after:content-['*'] after:text-red-500 after:absolute after:-top-1"
              } text-black text-sm dark:text-white`}
          >
            {label}
          </label>
          {infoContent && (
            <IoInformationCircleOutline
              className="text-primary text-sm focus:outline-none  "
              data-tooltip-id="my-tooltip"
              data-tooltip-content={infoContent}
            />
          )}
        </div>
        <div className="w-full relative ">
          <input
            {...props}
            className={`${className} ${errorContent && touched ? "border-error" : "border-[#D6D6D6]"
              } w-full text-black placeholder:text-[#C4C4C4] placeholder:text-xs p-3 bg-pageBodyBg focus:border-focusInputBorderColor h-49 dark:bg-gray-900 dark:text-white rounded-md shadow-sm`}
            type={type === "password" ? passwordType : type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            name={name}
            onBlur={onBlur}
            autoComplete={autoComplete}
            disabled={disabled}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={viewPassword}
              className={`absolute top-1/2 -translate-y-1/2 right-4`}
            // ${
            //   errorContent ? "right-10" : "right-4"
            // }
            >
              {passwordType === "password" ? (
                <FaEye className="text-[#858585]" />
              ) : (
                <FaEyeSlash className="text-[#858585]" />
              )}
            </button>
          )}
        </div>
      </div>
      {errorContent && (
        <div className="h-1 mb-2">
          <p className=" text-error text-xs">{errorContent}</p>
        </div>
      )}
    </div>
  );
};
