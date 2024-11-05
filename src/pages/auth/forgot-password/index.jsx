import { Input } from "../../../components/inputs";
import { Button } from "../../../components/buttons";
import { CustomAuthLayout } from "../components/layout";
import { MetaTitle } from "../../../components/metaTitle";
import { DualHeadingTwo } from "../components/dualHeading/dualHeadingTwo";
import { CrossButton } from "../../../components/buttons/crossButton";
import { IoKey } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaGoogle,
  FaInstagramSquare,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <>
      <MetaTitle title={"Forgot Password"} />
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <img className="py-10 sm:w-52 w-52" src="/public/anacity.svg" alt="" />
        <div className="p-5 sm:p-10 w-full sm:max-w-md bg-[#ffffff] flex flex-col justify-center items-center sm:rounded-xl sm:shadow-lg">
          <div className="w-full flex flex-col gap-6">
            <DualHeadingTwo
              containerClassName={"text-center"}
              heading={"Forgot Password"}
              subHeading={
                "Enter Your Email id to receive OTP for verification."
              }
            />
            <div className="flex flex-col gap-3">
              {/* <Heading>Sign in</Heading> */}
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
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <FaLongArrowAltLeft size={20} />
                <Link to="/sign-in">
                  <span className="font-medium ">Back to sign in </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
