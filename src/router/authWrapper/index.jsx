import { useNavigate } from "react-router-dom";
import { PrimaryLayout } from "../../components/layout/primary";
import { useEffect } from "react";

export const AuthWrapper = () => {
  return <PrimaryLayout />;
  // const navigate = useNavigate();
  // const token = window.localStorage.getItem("token");
  // useEffect(() => {
  //   if (token) {
  //     return <PrimaryLayout />;
  //   } else navigate("/sign-in"); 
  // }, [token]);
};         
