import { useContext } from "react";
import Divider from "@mui/material/Divider";
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
    <aside className="hidden h-full w-[15%] lg:block">
      <header className="p-2">
        <p className="text-xl font-bold">Settings</p>
      </header>
      <Divider />
      <ul className="flex h-full flex-col p-2">
        <li
          className={`cursor-pointer p-2 ${
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
          className={`cursor-pointer p-2 ${
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
