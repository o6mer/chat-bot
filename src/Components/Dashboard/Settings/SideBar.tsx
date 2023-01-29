import React, { useContext, useRef } from "react";
import Divider from "@mui/material/Divider";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";

const SideBar = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: (title: string) => void;
}) => {
  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  return (
    <aside className="w-[15%] h-full">
      <header className="p-2">
        <p className="font-bold text-xl">Settings</p>
      </header>
      <Divider />
      <ul className="h-full flex flex-col p-2">
        <li
          className={`p-2 cursor-pointer ${
            "general" === selectedCategory
              ? darkMode
                ? "bg-darkSecondary hover:bg-darkThird"
                : "bg-secondary hover:bg-third"
              : darkMode
              ? "bg-darkPrimary hover:bg-darkSecondary"
              : "bg-primary hover:bg-secondary"
          } relative rounded-md transition-all`}
          onClick={() => {
            setSelectedCategory("general");
          }}
        >
          General
        </li>
        <li
          className={`p-2 cursor-pointer ${
            "user" === selectedCategory
              ? darkMode
                ? "bg-darkSecondary hover:bg-darkThird"
                : "bg-secondary hover:bg-third"
              : darkMode
              ? "bg-darkPrimary hover:bg-darkSecondary"
              : "bg-primary hover:bg-secondary"
          } relative rounded-md transition-all`}
          onClick={() => {
            setSelectedCategory("user");
          }}
        >
          User
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
