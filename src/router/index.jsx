import App from "../App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import { SignIn } from "../pages/auth/sign-in";
import { Verify } from "../pages/auth/verify";
import { ForgotPassword } from "../pages/auth/forgot-password";
import { ChangePassword } from "../pages/auth/change-password";
import { ErrorComponent } from "../components/error";
import { AuthWrapper } from "./authWrapper";
import { IsLoggedInWrapper } from "./isLoggedInWrapper";
import { IsRedirectWrapper } from "./isRedirectWrapper";
import { PrimaryLayout } from "../components/layout/primary";
import { Dashboard } from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/*",
        element: <ErrorComponent />,
      },
      //protected routes
      {
        path: "/",
        element: <AuthWrapper />,
        children: [
          //   {
          //     path: "user-profile",
          //     element: <UserProfile />,
          //   },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          //   {
          //     path: "notifications",
          //     element: <NotificationDetail />,
          //   },
        ],
      },
      //   isLoggedIn route
      {
        path: "/",
        element: <IsLoggedInWrapper />,
        children: [
          {
            path: "sign-in",
            element: <SignIn />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "verify",
            element: <Verify />,
          },
        ],
      },
      //redirect check
      {
        path: "/",
        element: <IsRedirectWrapper />,
        children: [
          //   {
          //     path: "verify-email",
          //     element: <EmailVerification />,
          //   },
        ],
      },
      // Main Layout Wrapper
      {
        path: "/",
        element: <PrimaryLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export const RouterConfigration = () => {
  return <RouterProvider router={router} />;
};
