import React, { useState } from "react";
import MainFrame from "./MainFrame/MainFrame";
import SideBar from "./Sidebar/Sidebar";

const Conversations = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <div className="flex grow relative z-0">
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <MainFrame isSideBarOpen={isSideBarOpen} />
    </div>
  );
};

export default Conversations;
