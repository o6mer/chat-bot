import { useState, useContext } from "react";
import SidebarChatsList from "./ChatList/SidebarChatsList";
import SidebarFilters from "./Filters/SidebarFilters";
import SidebarHeader from "./Header/SidebarHeader";
import Divider from "@mui/material/Divider";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../Contexts/DashbaordContext";

const SideBar = () => {
  const [sortBy, setSortBy] = useState("new");

  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;
  const { chatList, deleteAllChats } = useContext(
    SocketContext
  ) as TSocketContext;

  return (
    <aside
      className={`flex flex-col h-full w-[20%] p-2 outline-[3px] outline-secondary resize-x ${
        darkMode ? "bg-darkPrimary" : "bg-primary"
      }`}
    >
      <SidebarHeader />

      <Divider />

      <SidebarFilters
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
