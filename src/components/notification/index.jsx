import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { iconSize, useOutsideClick } from "../../utils";
import { IoMdNotificationsOutline } from "react-icons/io";

import { IconWrapper } from "../wrappers/icon-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { IoCheckmarkDone } from "react-icons/io5";

export const Notification = ({ closeButton }) => {
  const [notification, setNotification] = useState(false);
  const [read, setRead] = useState("");
  const [markAsReadClicked, setMarkAsReadClicked] = useState(false);

  const notificationData = [
    {
      notificationTitle: "Welcome to Anarock",
      notification:
        "Please review and sign your lease agreement to secure your new home. We’re excited to have you join us!",
      is_read: 0,
      updated_at: "October 20, 2024",
    },
    {
      notificationTitle: "Welcome to Anarock",
      notification:
        "Please review and sign your lease agreement to secure your new home. We’re excited to have you join us!",
      is_read: 1,
      updated_at: "October 20, 2024",
    },
  ];

  const handleMarkAsRead = () => {};

  // Outside click

  const notificationPopupRef = useRef();
  const handleNotification = () => {
    setNotification(!notification);
  };
  useOutsideClick(notificationPopupRef, handleNotification);

  return (
    <>
      <IconWrapper className={"cursor-pointer"} onClick={handleNotification}>
        <button className="header-icon">
          <IoMdNotificationsOutline size={iconSize} className="text-xl" />
        </button>
      </IconWrapper>
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            ref={notificationPopupRef}
            className={`absolute right-0 lg:right-40 top-12 z-10 md:min-w-[20rem] max-w-[20rem] max-h-[80vh] bg-gray-50 dark:bg-[#1E293B] border dark:border-gray-700 rounded-lg shadow divide-y divide-gray-100 dark:divide-gray-600`}
          >
            <div className="px-2 py-3">
              <div className="flex justify-between">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold dark:text-white">
                  Notifications
                </h3>
                <button onClick={handleNotification}>
                  <RxCross2 className="font-bold text-xl dark:text-white" />
                </button>
              </div>
            </div>
            {notificationData?.slice(0, 3)?.map((data, i) => {
              return (
                <div
                  className={`${
                    data.is_read === 0
                      ? "bg-[#e3e2e2] dark:bg-[#0F172A] text-white"
                      : ""
                  } p-2 border-t`}
                  key={i}
                >
                  <div className="flex justify-between items-center">
                    <h5
                      className={`text-gray-950 dark:text-gray-200 ${
                        data.is_read === 0 ? "text-black" : "dark:text-gray-300"
                      }`}
                    >
                      {data.notificationTitle}
                    </h5>
                    {data.is_read === 0 && (
                      <span className="w-2 h-2 rounded-full bg-[#FBB03B]"></span>
                    )}
                  </div>
                  <p
                    className={`text-xs text-gray-950  ${
                      data.is_read === 0 ? "text-white" : "dark:text-gray-500"
                    }`}
                  >
                    {data.notification}
                  </p>
                  <div className="py-2 flex justify-between">
                    <p className="font-normal text-xs text-[#888]">
                      {data.updated_at}
                    </p>
                    {/* {data.is_read === 0 ? (
                      <span className="w-2 h-2 rounded-full bg-[#FBB03B]"></span>
                    ) : (
                      <></>
                    )} */}
                  </div>
                </div>
              );
            })}
            {notificationData?.length === 0 ? (
              <div className="bg-[#FFF3E0] p-2">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-xl dark:text-black">
                    Hi {"Mehul"},
                  </h1>
                </div>
                <p className="text-sm  dark:text-black">Welcome to Anarock!</p>
                <div className="pt-2 flex justify-between">
                  <p className="font-normal text-xs text-[#888]"></p>
                  <p className="font-normal text-xs text-[#888]"></p>
                </div>
              </div>
            ) : (
              <div className="p-2 flex justify-between gap-4 font-smibold text-sm bg-primary text-white">
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmarkDone />
                  <button
                    className="text-sm text-black dark:text-white"
                    onClick={handleMarkAsRead}
                  >
                    Mark as read
                  </button>
                </div>
                <Link
                  className="text-sm text-black dark:text-white"
                  onClick={closeButton}
                  to={`notifications`}
                >
                  View All Notification
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
