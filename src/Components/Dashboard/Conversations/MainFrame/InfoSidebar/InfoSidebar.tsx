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
  const [isOpen, setIsOpen] = useState(true);

  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  return (
    <>
      {isOpen ? (
        <aside className="outline-[3px] outline-secondary w-[20%] flex flex-col h-full p-2">
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
          } rounded-xl shadow-lg hover:bg-gray-300 transition-all`}
          onClick={() => setIsOpen(true)}
        >
          <ChevronLeftOutlinedIcon />
        </button>
      )}
    </>
  );
};

export default InfoSidebar;
