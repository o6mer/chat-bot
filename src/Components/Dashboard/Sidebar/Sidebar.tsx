import React from "react";
import SectionBreak from "../General/SectionBreak";
import SidebarChatsList from "./SidebarChatList/SidebarChatsList";
import SidebarFilters from "./SidebarFilters/SidebarFilters";
import SidebarHeader from "./SidebarHeader/SidebarHeader";

const SideBarChats = () => {
  return (
    <aside className="flex flex-col h-full w-[20%] p-2 outline-[3px] outline outline-gray-200">
      <SidebarHeader />

      <SectionBreak />

      <SidebarFilters />

      <SidebarChatsList />
    </aside>
  );
};

export default SideBarChats;
