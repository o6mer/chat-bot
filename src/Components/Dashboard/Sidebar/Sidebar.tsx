import React from "react";
import { TChat } from "../../../Types/Types";
import SectionBreak from "../General/SectionBreak";
import SidebarChatsList from "./ChatList/SidebarChatsList";
import SidebarFilters from "./Filters/SidebarFilters";
import SidebarHeader from "./Header/SidebarHeader";

const SideBar = ({
  chatList,
  deleteAllChats,
}: {
  chatList?: Array<TChat>;
  deleteAllChats: () => void;
}) => {
  return (
    <aside className="flex flex-col h-full w-[20%] p-2 outline-[3px] outline outline-gray-200">
      <SidebarHeader />

      <SectionBreak />

      <SidebarFilters />

      <SidebarChatsList chatList={chatList} />
      <button onClick={deleteAllChats}>Delete</button>
    </aside>
  );
};

export default SideBar;
