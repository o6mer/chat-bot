import { TChat } from "../../../../../Types/Types";
import InfoSidebarConvoInfo from "./ConvoInfo/InfoSidebarConvoInfo";
import InfoSidebarHeader from "./Header/InfoSidebarHeader";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../../Contexts/DashbaordContext";

const InfoSidebar = ({ currentChatData }: { currentChatData?: TChat }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  return (
    <>
      {isOpen ? (
        <aside
          className={`${
            darkMode ? "bg-darkPrimary" : "bg-primary"
          } absolute right-0 z-20 flex h-full w-[90%] flex-col p-2 outline-[3px] outline-secondary lg:static lg:w-[20%]`}
        >
          <InfoSidebarHeader setIsOpen={setIsOpen} />

          <Divider />

          <InfoSidebarConvoInfo
            id={currentChatData?.id}
            creationTime={currentChatData?.creationTime}
          />
        </aside>
      ) : (
        <button
          className={`absolute top-[50%] right-0 p-1 ${
            darkMode ? "bg-darkSecondary" : "bg-secondary "
          } rounded-xl shadow-lg transition-all hover:bg-gray-300`}
          onClick={() => setIsOpen(true)}
        >
          <ChevronLeftOutlinedIcon />
        </button>
      )}
    </>
  );
};

export default InfoSidebar;
