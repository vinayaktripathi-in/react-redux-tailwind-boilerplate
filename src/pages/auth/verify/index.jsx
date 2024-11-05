import { useEffect, useRef, useState } from "react";
import { Input } from "../../../components/inputs";
import { Button } from "../../../components/buttons";
import { CustomAuthLayout } from "../components/layout";
import { MetaTitle } from "../../../components/metaTitle";
import { DualHeadingTwo } from "../components/dualHeading/dualHeadingTwo";
import { CrossButton } from "../../../components/buttons/crossButton";
import { useDispatch } from "react-redux";

export const Verify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(0);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const dispatch = useDispatch();
  const inputRefs = useRef([]);

  useEffect(() => {
    setTimer(30);
  }, []);

  // Function to handle OTP submission

  const validateOtp = (enteredOtp) => {
    if (enteredOtp.trim().length != 4) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log(enteredOtp);
  };

  // Function to handle input change
  const handleChange = (index, value) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 4) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Function to handle backspace key press
  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index >= 0) {
      const newOtp = [...otp];
      newOtp[index] = ""; // Clear the digit at the current index
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleResendOtp = (event) => {
    event.preventDefault();
    setTimer(30);
    dispatch(
      resendOtp({
        email: email,
      })
    );
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    if (/^\d{4}$/.test(paste)) {
      // Check if the pasted content is exactly 5 digits
      const newOtp = paste.split("");
      setOtp(newOtp);

      // Delay focusing and blurring to allow state update
      setTimeout(() => {
        newOtp.forEach((_, index) => {
          inputRefs.current[index].focus();
          inputRefs.current[index].blur();
        });

        inputRefs.current[4].focus(); // Focus the last input field
      }, 0);
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (timer === 0) {
      setIsResendDisabled(false); // Enable the resend button when the timer reaches 0
    } else if (timer > 0) {
      setIsResendDisabled(true);
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const isVerification = false;
  const error = false;

  return (
    <>
      <MetaTitle title={"Verify"} />
      <CustomAuthLayout subContainerClassName={"max-w-[40rem]"}>
        <div className="relative w-full p-6 flex flex-col justify-center items-center">
          <DualHeadingTwo
            containerClassName={"text-center"}
            heading={"Enter verification code"}
            subHeading={
              isVerification ? (
                <>
                  OTP is sent to <strong>{email}</strong>
                </>
              ) : (
                "Enter the verification code sent to your email address."
              )
            }
          />
          <CrossButton />
          <form className="w-full sm:w-[50%] mt-12 flex flex-col gap-2">
            <div className="flex justify-center items-center gap-4">
              {otp.map((digit, index) => (
                <input
                  className={`${
                    error ? "border-error" : "border-[#B7B7B7]"
                  } w-[10%] h-12 font-bold border rounded-lg text-center`}
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleBackspace(index, e)}
                  onPaste={index === 0 ? handlePaste : null}
                />
              ))}
            </div>
            <div className="h-1">
              {/* {error && <p className="text-error text-xs">{errorContent}</p>} */}
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <button
                className={`text-xs text-primary disabled:text-[#8D8D8D]`}
                onClick={handleResendOtp}
                type="button"
              >
                {timer > 0 ? (
                  <p className="text-[#8D8D8D]">
                    Resend Code <span className="text-primary">00:{timer}</span>{" "}
                  </p>
                ) : (
                  "Resend Code"
                )}
              </button>
              <Button
                mainPrimary={true}
                className="bg-gradient-to-r from-[#343299] to-[#5753FF] font-bold w-1/2 mt-4 px-10 py-2 rounded-lg flex items-center justify-center"
                type={"submit"}
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      </CustomAuthLayout>
    </>
  );
};
