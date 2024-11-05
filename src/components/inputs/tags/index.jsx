import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoInformationCircleOutline } from "react-icons/io5"; // Ensure you import IoInformationCircleOutline if not already

export const TagsInput = ({
  name,
  type,
  value,
  label,
  onBlur,
  isMulti,
  touched,
  onChange,
  className,
  placeholder,
  infoContent,
  errorContent,
  autoComplete,
  disabled,
  maxTagLength = 15,
  ...props
}) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const trimmedInput = inputValue.trim();

      if (isMulti) {
        if (!tags.includes(trimmedInput)) {
          setTags([...tags, trimmedInput]);
          setInputValue("");
          setError("");
        }
      } else {
        if (tags.length === 0) {
          setTags([trimmedInput]);
          setInputValue("");
          setError("");
        }
      }
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue.length <= maxTagLength) {
      setInputValue(newValue);
      setError(""); // Clear error when valid input
    } else {
      setError(`Tag cannot be longer than ${maxTagLength} characters.`);
    }
  };

  const handleRemove = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleClear = () => {
    setTags([]);
  };

  return (
    <div className="overflow-hidden">
      <div className="w-full flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-black text-sm dark:text-white">{label}</label>
          {infoContent && (
            <IoInformationCircleOutline
              className="text-primary text-sm focus:outline-none"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={infoContent}
            />
          )}
        </div>
        <div className="relative flex items-center gap-1 text-black placeholder:text-[#C4C4C4] placeholder:text-xs p-3 bg-pageBodyBg focus:border-focusInputBorderColor min-h-[49px] dark:bg-gray-900 dark:text-white rounded-md shadow-sm">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center px-1 py-0.5 bg-gray-300 rounded"
              >
                <p>{tag}</p>
                <button
                  className="ml-1 p-1 bg-gray-300 rounded"
                  onClick={() => handleRemove(index)}
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>
          <input
            className="bg-pageBodyBg dark:bg-gray-900 flex-1 outline-none"
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={
              (tags.length == 0 && placeholder) ||
              (tags.length > 1 && placeholder)
            }
            disabled={disabled || (!isMulti && tags.length > 0)}
          />
          {isMulti && tags.length > 0 && (
            <button
              className="absolute top-1/2 -translate-y-1/2 right-2"
              onClick={handleClear}
            >
              <RxCross2 />
            </button>
          )}
        </div>
        {error && (
          <div className="text-error text-xs mt-1">
            <p>{error}</p>
          </div>
        )}
      </div>
      {errorContent && !error && (
        <div className="h-1 mb-2">
          <p className="text-error text-xs">{errorContent}</p>
        </div>
      )}
    </div>
  );
};
