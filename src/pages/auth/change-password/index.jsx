import { Input } from "../../../components/inputs";
import { Button } from "../../../components/buttons";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const ChangePassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted with data:", { ...data });
  };

  return (
    <div className="w-full p-4">
      <p className="font-medium text-2xl text-black">Change Password</p>
      <p className="text-sm text-[#4E4E4E]">
        Change your password to keep account secure.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mt-4 w-full md:w-1/3 flex flex-col gap-4">
          <Controller
            name="oldPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label={"Old Password"}
                type={"password"}
                placeholder={"Enter your password e.g. Johndoe@564"}
                errorContent={errors.oldPassword}
              />
            )}
          />
          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label={"New Password"}
                type={"password"}
                placeholder={"Enter your password e.g. Johndoe@564"}
                errorContent={errors.newPassword}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label={"Confirm Password"}
                type={"password"}
                placeholder={"Enter your password e.g. Johndoe@564"}
                errorContent={errors.oldPassword}
              />
            )}
          />
          <div className="flex justify-end items-center gap-3">
            <Button
              type={"submit"}
              className={"px-4 py-1.5 rounded-lg"}
              mainPrimary={true}
              //   disabled={isValid}
            >
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
