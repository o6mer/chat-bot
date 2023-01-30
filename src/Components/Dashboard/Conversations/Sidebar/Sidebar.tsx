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
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const SideBar = ({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (b: boolean) => void;
}) => {
  const [sortBy, setSortBy] = useState("new");

  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;
  const { chatList } = useContext(SocketContext) as TSocketContext;

  return (
    <>
      {isSideBarOpen ? (
        <aside
          className={`flex flex-col h-full w-[90%] absolute lg:static left-0 z-20 lg:w-[20%] p-2 outline-[3px] outline-secondary  ${
            darkMode ? "bg-darkPrimary" : "bg-primary"
          }`}
        >
          <SidebarHeader setIsSideBarOpen={setIsSideBarOpen} />

          <Divider />

          <SidebarFilters
            chatListLength={chatList?.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <SidebarChatsList sortBy={sortBy} chatList={chatList} />
        </aside>
      ) : (
        <button
          className={`absolute top-[50%] left-0 p-1 z-10 ${
            darkMode ? "bg-darkSecondary" : "bg-secondary "
          } rounded-xl shadow-lg hover:bg-gray-300 transition-all`}
          onClick={() => setIsSideBarOpen(true)}
        >
          <ChevronRightOutlinedIcon />
        </button>
      )}
    </>
  );
};

export default SideBar;
