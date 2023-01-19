import React, { useState, useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import Options from "./Options";
import SideBar from "./SideBar";

// const categories = [{title: 'General', options: {darkMode : true}, {title: 'User'}];
const categories: string[] = [];

const Settigns = () => {
  const [selectCategory, setSelectCategory] = useState(categories[0]);

  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  return (
    <main
      className={`w-full flex justify-center ${
        darkMode ? "bg-darkSecondary" : "bg-secondary"
      } `}
    >
      <div
        className={`max-w-2xl flex grow p-4 shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)] ${
          darkMode ? "bg-darkPrimary" : "bg-primary"
        } m-12 rounded-lg`}
      >
        <SideBar
          categories={categories}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
        <Options categories={categories} />
      </div>
    </main>
  );
};

export default Settigns;
