import React from "react";
import { TChat } from "../../../Types/Types";
import SectionBreak from "../General/SectionBreak";
import SidebarChatsList from "./ChatList/SidebarChatsList";
import SidebarFilters from "./Filters/SidebarFilters";
import SidebarHeader from "./Header/SidebarHeader";

const SideBar = ({
  chatList,
  deleteAllChats,
  setFilteredChatList,
}: {
  chatList?: Array<TChat>;
  deleteAllChats: () => void;
  setFilteredChatList: (filter: string) => void;
}) => {
  return (
    <aside className="flex flex-col h-full w-[20%] p-2 outline-[3px] outline outline-gray-200">
      <SidebarHeader />

      <SectionBreak />

      <SidebarFilters setFilteredChatList={setFilteredChatList} />

      <SidebarChatsList chatList={chatList} />
      <button onClick={deleteAllChats}>Delete</button>
    </aside>
  );
};

export default SideBar;
