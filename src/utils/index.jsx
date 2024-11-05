import { useEffect } from "react";
// var base64 = require("base-64");

export const iconSize = 18

export function objectToQueryString(obj) {
  let parts = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      if (value !== null && value !== undefined) {
        parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      }
    }
  }
  return parts.join("&");
}

export const capitalize = (word) =>
  `${word?.charAt(0).toUpperCase()}${word?.slice(1)}`;

export const decodeIntoBase64 = (input) => {
  return base64.decode(input);
};
export const incodeIntoBase64 = (input) => {
  return base64.encode(input);
};
export const addParameter = (obj, url, keyword, value) => {
  if (obj[keyword] || obj.hasOwnProperty(keyword)) {
    if (url.includes("?")) {
      url = url + "&" + keyword + "=" + value;
    } else {
      url = url + "?" + keyword + "=" + value;
    }
  }
  return url;
};

export const dateFormated = (originalDate) => {
  const dateObj = new Date(originalDate);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = dateObj.toLocaleDateString("en-US", options);
  const formattedTime = dateObj.toLocaleTimeString("en-US");

  const finalDate = `${formattedDate}`;
  // const finalDateTime = `${formattedDate} ${formattedTime}`;

  return finalDate;
};
export const titleCase = (str) => {
  var splitStr = str?.toLowerCase().split(" ");
  for (var i = 0; i < splitStr?.length; i++) {
    splitStr[i] =
      splitStr[i]?.charAt(0).toUpperCase() + splitStr[i]?.substring(1);
  }
  return splitStr?.join(" ");
};

export function filterNumbers(input) {
  var pattern = /[0-9,;{}|<>[\]_\-+=%$#@!~.?/|*`]/g;
  return input?.replace(pattern, "");
}
export function filterSpecleCahr(input) {
  var pattern = /[,;{}|<>[\]_\-+=%$#@!~.?/|*`]/g;
  return input?.replace(pattern, "");
}

export function updateElement(array, index, newData) {
  const updatedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      const updatedObject = { ...array[i], ...newData };
      updatedArray.push(updatedObject);
    } else {
      updatedArray.push(array[i]);
    }
  }

  return updatedArray;
}

export function checkAllValuesTruthy(obj) {
  for (let value of Object.values(obj)) {
    if (!value) {
      return false;
    }
  }
  return true;
}

export function formatPhoneNumber(phoneNumber) {
  // Remove all non-digit characters from the phone number
  const cleaned = phoneNumber?.replace(/\D/g, "");

  // Apply the desired format
  const match = cleaned?.match(/^(\d{2})(\d{2})(\d{4})(\d{4})$/);
  if (match) {
    return `+${match[1]} ${match[2]}-${match[3]}-${match[4]}`;
  }

  // Return the original phone number if it doesn't match the expected format
  return phoneNumber;
}

export function formatDateIntoInd(dateString) {
  // Split the date string into an array
  const parts = dateString.split("-");

  // Check if the input is valid
  if (parts.length !== 3) {
    throw new Error("Invalid date format");
  }

  // Rearrange the parts and join them in the desired format
  const day = parts[2];
  const month = parts[1];
  const year = parts[0];

  return `${day}-${month}-${year}`;
}

export function formatDate(inputDate) {
  try {
    // Check if the input is in DD/MM/YYYY format
    const dateParts = inputDate.split("/");
    if (dateParts.length === 3) {
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // Months are 0-based in JS Date
      const year = parseInt(dateParts[2], 10);

      // Create a new Date object
      const date = new Date(year, month, day);

      // Check if the created date is valid
      if (
        date.getDate() === day &&
        date.getMonth() === month &&
        date.getFullYear() === year
      ) {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
      }
    }

    // Handle JavaScript Date string format
    const jsDate = new Date(inputDate);
    if (!isNaN(jsDate.getTime())) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return jsDate.toLocaleDateString("en-US", options);
    }

    // If input is not valid or date is not correct
    return "Invalid date";
  } catch (e) {
    return "Invalid date";
  }
}

export function convertToTitleCase(input) {
  if (input.length === 0) return input; // Handle empty string
  let inputTemp = input.toLowerCase()
  return inputTemp.charAt(0).toUpperCase() + inputTemp.slice(1);
}


export function isDateWithinPeriod(futureDate, timePeriodDays) {
  try {
    // Parse the future date
    const future = new Date(futureDate);

    // Check if the future date is valid
    if (isNaN(future.getTime())) {
      return false; // Invalid future date
    }

    // Get today's date
    const today = new Date();

    // Get the end date of the period
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + timePeriodDays + 15);

    // Check if the future date is within the period
    return future <= endDate;
  } catch (e) {
    return false;
  }
}

export function convertBooleanToNumber(value) {
  return value === true ? 1 : 0;
}

export function checkValueInUrl(url, valueToCheck) {
  const urlParts = url.split("/");
  return urlParts.includes(valueToCheck);
}
export const getValueLabel = (param) => {
  if (param === 0) {
    return "No";
  } else if (param === 1) {
    return "Yes";
  } else {
    return "Invalid parameter"; // Handle other cases if needed
  }
};

export const getCountryNameById = (countryId, countryListData) => {
  try {
    const country = countryListData?.find(
      (item) => item?.country_id == countryId
    );
    if (country) {
      return country?.country;
    } else {
      throw new Error(`Country with ID ${countryId} not found.`);
    }
  } catch (error) {
    return null;
  }
};

export function convertToDecimalYears(years, months) {
  const totalMonths = years * 12 + months;
  const decimalYears = totalMonths / 12;

  return parseFloat(decimalYears.toFixed(1));
}

export function ensureHttps(url) {
  if (!/^(https?:\/\/)/.test(url)) {
    url = `https://${url}`;
  }

  return url;
}

export function removeExtraSpaces(input) {
  // Replace consecutive spaces with a single space and trim
  return input?.replace(/\s{2,}/g, " ").trim();
}

export function checkNumberLength(number) {
  // Convert the number to a string and get its length
  var numberLength = number?.toString()?.length;

  // Check if the length is greater than or equal to 10 and less than or equal to 12
  if (numberLength >= 9 && numberLength <= 20) {
    // If true, return true
    return true;
  } else {
    // If false, return false
    return false;
  }
}

export function isBothValid(isValid, numberCheck) {
  // Check if both isValid and numberCheck are true
  return isValid && numberCheck;
}

// Function to listen for sign-out events
export const listenForSignOut = () => {
  window.addEventListener("storage", (event) => {
    if (event.key === "signOutEvent") {
      // Reload the page or perform any action
      window.location.reload();
    }
  });
};

export const listenForLogin = () => {
  window.addEventListener("storage", (event) => {
    if (event.key === "loginEvent") {
      // Reload the page or perform any action
      window.location.reload();
    }
  });
};

// export function convertToCustomFormat(inputDate) {
//   const date = new Date(inputDate);

//   // Get individual components
//   const year = date.getFullYear();
//   const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//   const day = date.getDate().toString().padStart(2, '0');
//   const hours = date.getHours().toString().padStart(2, '0');
//   const minutes = date.getMinutes().toString().padStart(2, '0');
//   const seconds = date.getSeconds().toString().padStart(2, '0');

//   // Format the result
//   const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

//   return formattedDate;
// }
// Example usage
// const inputTimestamp = '2024-01-05T15:00:00.000Z';
// const formattedTimestamp = convertTimestamp(inputTimestamp);
// console.log(formattedTimestamp);

export function convertToCustomFormat(inputDate) {
  const date = new Date(inputDate);

  // Adjust for time zone offset
  const timezoneOffsetInMinutes = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - timezoneOffsetInMinutes);

  // Get individual components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Format the result
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}

// const inputDateString = "Thu Dec 07 2023 16:22:47 GMT+0530 (India Standard Time)";
// const formattedDate = convertToCustomFormat(inputDateString);

// console.log(formattedDate);

export function convertDateFormat(inputDate) {
  // Parse the input date string
  const parsedDate = new Date(inputDate);

  // Format the date without adjusting for the local time zone
  const formattedDate = parsedDate
    ?.toISOString()
    ?.replace("T", " ")
    ?.replace(/\.\d{3}Z$/, "");

  return formattedDate;
}

// Helper function to pad single-digit numbers with leading zero
function padZero(num) {
  return num < 10 ? "0" + num : num;
}
export const isObjectValid = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !obj[key]) {
      return false;
    }
  }
  return true;
};

// Example usage:
// const inputDate = 'Thu Dec 07 2023 21:42:50 GMT+0530 (India Standard Time)';
// const outputDate = convertDateFormat(inputDate);
// console.log(outputDate);

export function removeAfterFirstWhitespace(inputString) {
  // If there's no whitespace, return the first character
  if (!/\s/.test(inputString)) {
    return inputString.slice(0, 1); // Return the first character
  }

  let parts = inputString.split(/\s+/);
  return parts[0];
}

export function removeAfterFourthWhitespace(inputString) {
  if (!/\s/.test(inputString)) {
    return inputString.slice(0, 20) + "..."; // Return the first 20 characters
  }

  let parts = inputString.split(/\s+/);
  return parts.slice(0, 4).join(" ") + "...";
}

export function removeAfterTenthWhitespace(inputString) {
  if (!/\s/.test(inputString)) {
    return inputString.slice(0, 20) + ".."; // Return the first 20 characters
  }

  let parts = inputString.split(/\s+/);
  return parts.slice(0, 10).join(" ") + "..";
}

export function removeAfterTwentiethWhitespace(inputString) {
  if (!/\s/.test(inputString)) {
    return inputString.slice(0, 20) + "..."; // Return the first 20 characters
  }

  let parts = inputString.split(/\s+/);
  return parts.slice(0, 20).join(" ") + "...";
}

export function removeAfterFortiethWhitespace(inputString) {
  if (!/\s/.test(inputString)) {
    return inputString.slice(0, 20) + "..."; // Return the first 20 characters
  }

  let parts = inputString.split(/\s+/);
  return parts.slice(0, 40).join(" ") + "...";
}

export function removeAfterTenthCharacters(inputString) {
  // If the string is longer than 10 characters, truncate it and add "..."
  if (inputString.length > 10) {
    return inputString.slice(0, 10) + "...";
  }
  return inputString; // Return the original string if it's 10 characters or less
}
export function removeAfterTwentyCharacters(inputString) {
  // If the string is longer than 20 characters, truncate it and add "..."
  if (inputString.length > 20) {
    return inputString.slice(0, 20) + "...";
  }
  return inputString; // Return the original string if it's 20 characters or less
}

export const processDataByStatus = (responseData) => {
  // Initial states for different application statuses
  const rejectedApplications = [];
  const hiredApplications = [];
  const interviewApplications = [];
  const offerApplication = [];
  const shortlistedApplication = [];

  // Iterate through the response data and distribute based on application status
  responseData.forEach((application) => {
    switch (application.applicationStatus) {
      case "Rejected":
        rejectedApplications.push(application);
        break;
      case "Hired":
        hiredApplications.push(application);
        break;
      case "Interview":
        interviewApplications.push(application);
        break;
      case "Offer":
        offerApplication.push(application);
        break;
      case "Shortlisted":
        shortlistedApplication.push(application);
        break;
      // Add more cases for other application statuses as needed
      default:
        // Handle default case if needed
        break;
    }
  });

  // Return an object containing the distributed data
  return {
    rejectedApplications,
    hiredApplications,
    interviewApplications,
    offerApplication,
    shortlistedApplication,
    isSubstringAvailable,
    // Add more properties for other application statuses as needed
  };
};

export function isSubstringAvailable(mainString, searchString) {
  // Check if the mainString contains the searchString
  return typeof mainString === "string" && mainString.includes(searchString);
}

export const generateID = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
};

export const getInitials = (name) => {
  // Split the name by spaces
  const words = name?.trim()?.split(" ");

  // Get the first letter of each word and join them together
  const initials = words
    ?.map((word) => word?.charAt(0)?.toUpperCase())
    ?.join("");

  return initials;
};

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};

export const periodToDays = (valueOne, valueTwo) => {
  const monthsToDays = (months) => months * 30; // Rough estimate: 1 month = 30 days
  return monthsToDays(Number(valueOne)) + Number(valueTwo || 0); // Default to 0 if valueTwo is undefined
};

export const getMaxContractStartDate = () => {
  const now = new Date();
  const maxDate = new Date(now.setMonth(now.getMonth() + 8));
  return maxDate;
};

export function convertToDateObjectString(dateString) {
  const [datePart, timePart = "00:00:00"] = dateString.split(" ");

  const [year, month, day] = datePart.split("-").map(Number);

  const [hours, minutes, seconds] = timePart?.split(":").map(Number);

  const date = new Date(year, month - 1, day, hours, minutes, seconds);

  return date.toString();
}

export function convertDateToISOFormat(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const timeString = "00:00:00";

  return `${formattedDate} ${timeString}`;
}

export const convertDateToISO = (date) => {
  if (date && typeof date == "object") {
    return date.toISOString();
  } else if (date && typeof date == "string") {
    let dateVal = new Date(date);
    return dateVal.toISOString();
  } else {
    return null;
  }
};
export const convertISOToDate = (dateString) =>
  dateString ? new Date(dateString) : null;

export const createOptions = (array, firstVal, secondVal) => {
  let communitiesOptions = array?.map((obj) => ({
    label: obj.firstVal,
    value: obj.secondVal,
  }));
};
