import React, { useRef } from "react";
import Divider from "@mui/material/Divider";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";

const SideBar = ({
  categories,
  selectCategory,
  setSelectCategory,
}: {
  categories: Array<string>;
  selectCategory: string;
  setSelectCategory: (title: string) => void;
}) => {
  return (
    <aside className="w-[15%] h-full">
      <header className="p-2">
        <p className="font-bold text-xl">Settings</p>
      </header>
      <Divider />
      <ul className="h-full flex flex-col p-2">
        {categories.map((setting: string) => (
          <SettignsListItem
            title={setting}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />
        ))}
      </ul>
    </aside>
  );
};

const SettignsListItem = ({
  title,
  selectCategory,
  setSelectCategory,
}: {
  title: string;
  selectCategory: string;
  setSelectCategory: (title: string) => void;
}) => {
  const rippleRef = useRef<any>(null);

  return (
    <li
      className={`p-2 cursor-pointer hover:bg-slate-200 relative rounded-md ${
        title === selectCategory && "bg-gray-200 hover:bg-gray-300"
      } transition-all`}
      onClick={() => {
        setSelectCategory(title);
      }}
      onMouseDown={(e) => rippleRef.current.start(e)}
      onMouseUp={(e) => rippleRef.current.stop(e)}
    >
      <TouchRipple ref={rippleRef} center={false} />

      {title}
    </li>
  );
};

export default SideBar;
