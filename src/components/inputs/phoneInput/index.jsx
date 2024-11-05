import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import "/src/css/phoneInput.css";
import { IoInformationCircleOutline } from "react-icons/io5";

export const PhoneNumberInput = ({
  country,
  value,
  setFieldValue,
  touched,
  onBlur,
  onChange,
  inputProps,
  containerClassName,
  containerClass,
  inputClass,
  searchClass,
  buttonClass,
  dropdownClass,
  label,
  infoContent,
  errorContent,
  required,
  ...restProps
}) => {
  return (
    <div>
      <div className={`${containerClassName} w-full flex flex-col gap-1`}>
        <div className="flex items-center gap-1 relative">
          <label
            className={`${
              required &&
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
        <div>
          <PhoneInput
            {...restProps}
            // placeholder={placeholder}
            country={country} // Country code for formatting (United States in this example)
            value={value}
            onChange={onChange}
            // containerClass={`${
            //   containerClass && containerClass
            // } w-full border-none`}
            inputClass={`${
              inputClass && inputClass
            } !w-full h-[49px] !bg-pageBodyBg dark:!bg-gray-900 rounded-md shadow-sm dark:text-white ${
              errorContent && touched ? "border-error" : "border-[#D6D6D6]"
            }`}
            searchClass={`${
              searchClass && searchClass
            } bg-bee-paleGray dark:bg-bee-ebonyGem`}
            buttonClass={`${
              buttonClass && buttonClass
            } bg-bee-paleGray dark:bg-bee-ebonyGem`}
            dropdownClass={`${
              dropdownClass && dropdownClass
            } bg-bee-paleGray dark:bg-bee-ebonyGem`}
            onBlur={onBlur}
            inputProps={inputProps}
          />
        </div>
      </div>
      <div className="h-1 mb-2">
        {errorContent && touched && (
          <p className="text-error text-xs">{errorContent}</p>
        )}
      </div>
    </div>
  );
};
