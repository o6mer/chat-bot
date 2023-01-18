import React, { useState } from "react";
import Options from "./Options";
import SideBar from "./SideBar";

// const categories = [{title: 'General', options: {darkMode : true}, {title: 'User'}];
const categories: string[] = [];

const Settigns = () => {
  const [selectCategory, setSelectCategory] = useState(categories[0]);

  return (
    <main className="w-full flex justify-center bg-gray-100">
      <div className="max-w-2xl flex grow p-4 shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)] bg-white m-12 rounded-lg">
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
