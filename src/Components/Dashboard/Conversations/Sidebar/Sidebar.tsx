import React, { useState } from "react";
import { TChat } from "../../../../Types/Types";
import SidebarChatsList from "./ChatList/SidebarChatsList";
import SidebarFilters from "./Filters/SidebarFilters";
import SidebarHeader from "./Header/SidebarHeader";
import Divider from "@mui/material/Divider";
const SideBar = ({
  chatList,
  deleteAllChats,
  setFilteredChatList,
}: {
  chatList?: Array<TChat>;
  deleteAllChats: () => void;
  setFilteredChatList: (filter: string) => void;
}) => {
  const [sortBy, setSortBy] = useState("new");

  return (
    <aside className="flex flex-col h-full w-[20%] p-2 outline-[3px] outline outline-gray-200 ">
      <SidebarHeader />

      <Divider />

      <SidebarFilters
        setFilteredChatList={setFilteredChatList}
        chatListLength={chatList?.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <SidebarChatsList sortBy={sortBy} chatList={chatList} />
      <button onClick={deleteAllChats}>Delete</button>
    </aside>
  );
};

export default SideBar;
