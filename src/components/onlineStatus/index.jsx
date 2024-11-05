import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const OnlineStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
      toast.success("You are online");
    };
    const handleOffline = () => {
      setOnline(false);
      toast.error("You are offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [online]);

  return <>{online && <Toaster />}</>;
};