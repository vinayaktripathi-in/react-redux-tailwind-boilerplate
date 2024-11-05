import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../../components/inputs";
import { Button } from "../../../components/buttons";
import { Heading } from "../../../components/heading";
import { MetaTitle } from "../../../components/metaTitle";
// import { signinValidator } from "../../../validation/auth-validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaFacebookSquare, FaGoogle, FaInstagramSquare } from "react-icons/fa";
import { DualHeadingTwo } from "../components/dualHeading/dualHeadingTwo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/userLoginSlice";

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    // resolver: yupResolver(signinValidator),
    mode: "onChange",
  });

  const handleBlur = async (field) => {
    await trigger(field);
  };

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSubmit = (data) => {

    const superAdmin = {
      email: 'superAdmin@gmail.com',
      password: 'Super@1234'
    }
    const manager = {
      email: 'runwallManager@gmail.com',
      password: 'Manager@1234'
    }
    // Reset error message
    setError("");



    if (data.email === superAdmin.email && data.password === superAdmin.password) {
      dispatch(setUser(superAdmin));
      navigate('/lease')
    } else if (data.email === manager.email && data.password === manager.password) {
      dispatch(setUser(manager));
      navigate('/lease')
    } else {
      setError("Wrong email or password");
    }

  }

  return (
    <>
      <MetaTitle title={"Sign In"} />
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <img className="py-10 sm:w-52 w-52" src="/public/anacity.svg" alt="Anarock Logo" />
        <div className="p-5 sm:p-10 w-full sm:max-w-md bg-white flex flex-col justify-center items-center rounded-xl shadow-lg">
          <div className="w-full flex flex-col gap-6">
            <DualHeadingTwo
              containerClassName={"text-center"}
              heading={"Welcome to Anarock!"}
              subHeading={"Sign into your account"}
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    className={"bg-[#f9fafc]"}
                    label={"Email"}
                    type={"email"}
                    placeholder={"Enter your email e.g. johndoe@gmail.com"}
                    errorContent={errors?.email?.message}
                    onBlur={() => handleBlur("email")}
                  />
                )}
              // rules={{ required: "Email Address is required" }}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    className={"bg-[#f9fafc]"}
                    label={"Password"}
                    type={"password"}
                    placeholder={"Enter your password e.g. Johndoe@564"}
                    // errorContent={errors.password}
                    onBlur={() => handleBlur("password")}
                  />
                )}
              // rules={{ required: "Password is required" }}
              />
              <Button
                type={"submit"}
                v2={true}
                mainPrimary={true}
                className={"mt-2 py-2 w-full rounded-lg"}
                disabled={!isValid}
              >
                Submit
              </Button>
              {error && <div className="text-red-500 mt-2 text-center">{error}</div>}

            </form>
            {/* Uncomment if needed
            <div className="text-center">
              Don't have an account?{" "}
              <span className="font-bold text-base underline cursor-pointer hover:text-primary hover:no-underline text-primaryBg">
                Sign up for free
              </span>
            </div>
            <div className="flex text-center justify-center items-center font-semibold text-[#858181]">
              <MdOutlineHorizontalRule />
              <MdOutlineHorizontalRule />
              <MdOutlineHorizontalRule />
              Or Sign up With
              <MdOutlineHorizontalRule />
              <MdOutlineHorizontalRule />
              <MdOutlineHorizontalRule />
            </div>
            <div className="flex cursor-pointer justify-center items-center gap-3 text-2xl">
              <FaFacebookSquare color="#884EA7" />
              <FaGoogle color="#884EA7" />
              <FaInstagramSquare color="#884EA7" />
            </div>
            */}
          </div>
        </div>
      </section>
    </>
  );
};
