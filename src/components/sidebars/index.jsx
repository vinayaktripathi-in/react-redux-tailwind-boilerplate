import { IconBox } from "../iconBox";
import { GoDotFill } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
// import "./sidebar.scss";
import { useState } from "react";
import {
  LuAlignJustify,
  LuDatabase,
  LuHome,
  LuPanelLeftClose,
  LuSettings,
  LuUsers,
} from "react-icons/lu";

import { useSelector } from "react-redux";
import { iconSize } from "../../utils";

export const Sidebar = ({ className, collapse, setCollapse }) => {
  const user = useSelector((state) => state.user.user);

  const initialSidebarItems = [
    {
      id: 0,
      title: "Dashboard",
      icon: <LuHome size={iconSize} />,
      to: "/dashboard",
      isPinned: false,
    },
    {
      id: 1,
      title: "My Data",
      icon: <LuDatabase size={iconSize} />,
      child: [
        { title: "Properties", to: "/properties", icon: <GoDotFill /> },
        { title: "Unit", to: "/unit", icon: <GoDotFill /> },
        { title: "Lease", to: "/lease/lease-active", icon: <GoDotFill /> },
      ],
      isPinned: false,
    },
    {
      id: 2,
      title: "Users",
      icon: <LuUsers size={iconSize} />,
      child: [
        { title: "Members", to: "/members", icon: <GoDotFill /> },
        // { title: "Tenants", to: "/tenants", icon: <GoDotFill /> },
        // { title: "Owner", to: "/owner", icon: <GoDotFill /> },
      ],
      isPinned: false,
    },
    // {
    //   id: 3,
    //   title: "Master Setting",
    //   icon: <LuSettings size={iconSize} />,
    //   child: [
    //     { title: "Assign Role", to: "/assign-role", icon: <GoDotFill /> },
    //     { title: "Companies", to: "/companies", icon: <GoDotFill /> },
    //   ],
    //   isPinned: false,
    // },
  ];

  if (user && user.email == "superAdmin@gmail.com") {
    initialSidebarItems.push({
      id: 3,
      title: "Master Setting",
      icon: <LuSettings size={iconSize} />,
      child: [
        { title: "Assign Role", to: "/assign-role", icon: <GoDotFill /> },
        { title: "Companies", to: "/companies", icon: <GoDotFill /> },
      ],
      isPinned: false,
    });
  }

  const [items, setItems] = useState(initialSidebarItems);

  // Handler to toggle the pin status of an item
  const handlePinToggle = (title) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.title === title ? { ...item, isPinned: !item.isPinned } : item
      );

      // Separate pinned and non-pinned items
      const pinnedItems = updatedItems.filter((item) => item.isPinned);
      const nonPinnedItems = updatedItems.filter((item) => !item.isPinned);

      // Reinsert non-pinned items to their initial positions
      nonPinnedItems.sort((a, b) => a.id - b.id);

      return [...pinnedItems, ...nonPinnedItems];
    });
  };

  const handleSidebar = () => {
    setCollapse(!collapse);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ left: "-50%" }}
        animate={{ left: 0, transition: { duration: 0.3 } }}
        exit={{ left: "-50%", transition: { duration: 0.3 } }}
        className={`${
          className ? className : ""
        } shadow-xl dark:dark:bg-slate-900`}
      >
        <div
          className={`${
            collapse ? "flex justify-center items-center" : "pl-2"
          } pb-4`}
        >
          <button onClick={handleSidebar}>
            {!collapse ? (
              <LuPanelLeftClose className="dark:text-white" size={iconSize} />
            ) : (
              <LuAlignJustify className="dark:text-white" size={iconSize} />
            )}
          </button>
        </div>
        {items?.map((item, index) => (
          <IconBox
            containerClassName="px-4 py-2"
            titleClassName={
              item.to == null && "font-semibold text-primary uppercase "
            }
            key={index}
            to={item.to}
            icon={item.icon}
            title={!collapse ? item.title : ""}
            child={item.child}
            setPin={() => handlePinToggle(item.title)}
            collapse={collapse}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
