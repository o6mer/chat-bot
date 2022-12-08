import React from "react";
import SectionBreak from "../General/SectionBreak";
import SidebarChatsList from "./ChatList/SidebarChatsList";
import SidebarFilters from "./Filters/SidebarFilters";
import SidebarHeader from "./Header/SidebarHeader";

const SideBar = () => {
  return (
    <aside className="flex flex-col h-full w-[20%] p-2 outline-[3px] outline outline-gray-200">
      <SidebarHeader />

      <SectionBreak />

      <SidebarFilters />

      <SidebarChatsList />
    </aside>
  );
};

export default SideBar
