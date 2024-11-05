import { Input } from "../../../components/inputs";
import { Button } from "../../../components/buttons";
import { CustomAuthLayout } from "../components/layout";
import { MetaTitle } from "../../../components/metaTitle";
import { DualHeadingTwo } from "../components/dualHeading/dualHeadingTwo";
import { CrossButton } from "../../../components/buttons/crossButton";
import { IoKey } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const ForgotPassword = () => {
  return (
    <>
      <MetaTitle title={"Forgot Password"} />
      <CustomAuthLayout subContainerClassName={"max-w-[40rem]"}>
        <div className="relative w-full p-6 flex flex-col justify-center items-center">
          <IoKey
            size={40}
            color="#884EA7"
            className=" bg-[#884ea731] items-center flex justify-center rounded-full p-2 mb-3"
          />
          <DualHeadingTwo
            containerClassName={"text-center"}
            heading={"Forgot Password"}
            subHeading={"Enter Your Email id to receive OTP for verification."}
          />
          <CrossButton />
          <form className="w-full sm:w-[50%] mt-7 flex flex-col gap-2">
            <Input
              label={"Email Id"}
              placeholder={"Enter your email id"}
              type={"email"}
              infoContent={"Your email Id"}
            />
            <Button
              v1={true}
              mainPrimary={true}
              type="submit"
              className={
                "font-bold w-full mt-4 mb-2 py-3 rounded-lg flex items-center justify-center"
              }
            >
              Continue
            </Button>
            
            <div className="flex  justify-center items-center gap-2">
              <FaLongArrowAltLeft size={20} />
              <span className="font-medium ">Back to log in </span>
            </div>
          </form>
        </div>
      </CustomAuthLayout>
    </>
  );
};
