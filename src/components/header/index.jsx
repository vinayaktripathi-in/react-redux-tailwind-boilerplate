import { Search } from "../search";
import { Button } from "../buttons";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { headerLinks } from "../../database";
import { HiOutlineUser } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CrossButton } from "../buttons/crossButton";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { RxArrowRight, RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { IconWrapper } from "../wrappers/icon-wrapper";
import { IoSettingsOutline } from "react-icons/io5";
import { useOutsideClick } from "../../utils";
// import { FullScreenButton } from "../fullScreen";
import { ThemeSwitch } from "../theme/switch";
import { capitalize } from "../../utils";
import { Notification } from "../notification";

import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/slices/userLoginSlice";

export const Header = ({ className, collapse, setCollapse }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [signedInMenuPopup, setSignedInMenuPopup] = useState(false);
  const [signOutModalOpen, setSignOutModalOpen] = useState(false);

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // To close when someone clicks outside

  const signedInMenuPopupRef = useRef();

  const handleSignInMenuPopup = () => {
    setSignedInMenuPopup(!signedInMenuPopup);
  };

  useOutsideClick(signedInMenuPopupRef, handleSignInMenuPopup);

  // Dummy variables

  const signedIn = true;
  const profile = false;

  // Handle sidebar collapse

  const handleSidebar = () => {
    setCollapse(!collapse);
  };

  return (
    <header
      className={`${
        className && className
      } bg-headerBg dark:bg-slate-900 px-2 lg:px-4 py-4 z-[1000]`}
    >
      <div className="relative flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to={"/"}>
            <img
              width={0}
              height={0}
              className="block dark:hidden w-36 h-full"
              src="/anacity.svg"
              alt="anacity-logo"
            />
            <img
              width={0}
              height={0}
              className="hidden dark:block w-36 h-full"
              src="/anacity-logo-dark.svg"
              alt="anacity-logo"
            />
            {profile ? (
              <div className="flex justify-end">
                <h1 className="font-bold text-xs uppercase">
                  {capitalize(profile.role)}
                </h1>{" "}
              </div>
            ) : (
              ""
            )}
          </Link>
          {/* <div
            className={`${
              collapse ? "flex justify-center items-center" : "pl-2"
            } pb-4`}
          >
            <button onClick={handleSidebar} className="header-icon">
              {collapse ? (
                <img
                  className={`w-5`}
                  src="/icons/hamburger-close.svg"
                  alt=""
                />
              ) : (
                <img className={`w-5`} src="/icons/hamburger.svg" alt="" />
              )}
            </button>
          </div> */}
          {/* <Search
            label={true}
            placeholder={"Search anything..."}
            isButton={true}
            containerClassName={"hidden xl:flex"}
            inputClassName={"lg:min-w-60 p-2 pl-10 "}
          /> */}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {headerLinks?.map((data, index) => (
            <Link
              className={`${
                window.location.pathname.includes(data.url) && "text-primary"
              } hover:text-primary`}
              to={data.url}
              key={index}
            >
              {data.label}
            </Link>
          ))}
        </div>
        {signedIn ? (
          <div className="flex items-center gap-4">
            <ThemeSwitch />
            {/* <FullScreenButton /> */}
            <Notification />
            <div className="hidden sm:flex relative gap-2">
              <button
                onClick={() => setSignedInMenuPopup(!signedInMenuPopup)}
                className="flex items-center gap-2"
              >
                <img src="/icons/user.png" alt="" />
                <div className="flex flex-col items-start gap-1">
                  <h5 className="font-bold text-[#3D3D47] dark:text-white">
                    {user.email == "superAdmin@gmail.com"
                      ? "Super Admin"
                      : "Runwal Manager"}
                  </h5>
                  <span className="text-xs text-[#767676]  dark:text-white">
                    {user.email == "superAdmin@gmail.com" ? "Admin" : "Manager"}
                  </span>
                </div>
              </button>
              <AnimatePresence>
                {signedInMenuPopup && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    ref={signedInMenuPopupRef}
                    className="p-4 w-full absolute top-16 right-0 bg-white dark:text-white dark:bg-darkPrimary border border-gray-200 dark:border-gray-700 shadow rounded-md z-10 flex flex-col items-start justify-start gap-2"
                  >
                    <Link
                      onClick={() => setSignedInMenuPopup(!signedInMenuPopup)}
                      to={"/user-profile"}
                      className="flex items-center gap-2"
                    >
                      <HiOutlineUser />
                      <p className="text-sm">My Profile</p>
                    </Link>
                    <Link
                      onClick={() => setSignedInMenuPopup(!signedInMenuPopup)}
                      to={"/change-password"}
                      className="flex items-center gap-2"
                    >
                      <IoSettingsOutline />
                      <p className="text-sm">Settings</p>
                    </Link>
                    <button
                      onClick={() => {
                        setSignOutModalOpen(!signOutModalOpen);
                        setSignedInMenuPopup(!signedInMenuPopup);
                        dispatch(clearUser());
                        navigate("/sign-in");
                      }}
                      className="flex items-center"
                    >
                      <FiLogOut />
                      <p className="text-sm px-2">Sign out</p>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* <button
              className="block lg:hidden"
              onClick={() => isOpen(!hamburgerOpen)}
            >
              <GiHamburgerMenu className="text-xl" />
            </button>{" "} */}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <Link v3={true} to={"/sign-in"}>
                Sign in
              </Link>
            </div>
            <button
              className="block lg:hidden"
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
            >
              <GiHamburgerMenu className="text-xl" />
            </button>
          </div>
        )}
        {/* Mobile Hamburger Menu */}
        <AnimatePresence>
          {hamburgerOpen && (
            <motion.div
              initial={{ scale: 0, translateX: 500 }}
              animate={{ scale: 1, translateX: 0 }}
              exit={{ scale: 0, translateX: 500 }}
              className="lg:hidden absolute top-0 left-0 p-4 w-full h-screen bg-white dark:bg-darkPrimary flex flex-col justify-center items-center gap-4 z-[999]"
            >
              <CrossButton onClick={() => setHamburgerOpen(!hamburgerOpen)} />
              <div className="flex flex-col items-center gap-4">
                {headerLinks?.map((data, index) => (
                  <Link
                    className="w-fit hover:text-primary"
                    to={data.url}
                    key={index}
                  >
                    {data.label}
                  </Link>
                ))}
              </div>
              {signedIn ? (
                <div className="relative sm:hidden">
                  <button
                    onClick={() => setSignedInMenu(!signedInMenu)}
                    className="flex items-center gap-2"
                  >
                    <HiOutlineUser className="text-lg" />
                    <p>My Account</p>
                    <IoIosArrowDown />
                  </button>
                  <div className="p-4 w-full absolute top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-darkPrimary border border-[#C6C6C6] shadow rounded-md z-10 flex flex-col items-start justify-start gap-2">
                    <Link to={"/"} className="flex items-center gap-2">
                      <HiOutlineUser />
                      <p className="text-sm">My Profile</p>
                    </Link>
                    <Link to={"/"} className="flex items-center gap-2">
                      <IoSettingsOutline />
                      <p className="text-sm">Settings</p>
                    </Link>
                    <Link to={"/"} className="flex items-center gap-2">
                      <FiLogOut />
                      <p className="text-sm">Sign out</p>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link v3={true} className="w-fit" to={"/signin"}>
                    Sign in
                  </Link>
                  <Link
                    v2={true}
                    className="w-fit px-2 py-1 rounded-lg"
                    to={"/forgot-password"}
                  >
                    Forgot Password
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sign Out Modal */}
        <AnimatePresence>
          {signOutModalOpen && (
            <motion.div
              initial={{ scale: 0, translateY: 500 }}
              animate={{ scale: 1, translateY: 0 }}
              exit={{ scale: 0, translateY: 500 }}
              onClick={() => setSignOutModalOpen(!signOutModalOpen)}
              className="w-full h-full bg-black bg-opacity-50 fixed top-0 bottom-0 left-0 right-0 z-[1005]"
            >
              <div
                className={`w-11/12 sm:w-8/12 lg:w-1/3 h-40 flex flex-col justify-center items-center gap-6 bg-white dark:bg-[#171717] p-1 overflow-hidden rounded-lg shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
              >
                <div className="flex items-center justify-center text-base md:text-xl ">
                  <div>Are you sure you want to signout?</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    // disabled={isLoggingOut}
                    // isLoading={isLoggingOut}
                    // onClick={handleLogout}
                    mainPrimary={true}
                  >
                    Sign Out
                  </Button>
                  <Button
                    onClick={() => setSignOutModalOpen(!signOutModalOpen)}
                    outLine={true}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
