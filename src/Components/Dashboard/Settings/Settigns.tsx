import { useState, useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import Options from "./Options";
import SideBar from "./SideBar";

const Settigns = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  return (
    <main
      className={` flex grow justify-center ${
        darkMode ? "bg-darkSecondary" : "bg-secondary"
      } `}
    >
      <div
        className={`flex max-h-min max-w-full grow p-4 shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)] lg:max-w-2xl ${
          darkMode ? "bg-darkPrimary" : "bg-primary"
        } m-1 rounded-lg lg:m-12`}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Options selectedCategory={selectedCategory} />
      </div>
    </main>
  );
};

export default Settigns;
