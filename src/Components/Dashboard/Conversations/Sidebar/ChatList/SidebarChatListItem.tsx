import React, { useContext, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { TChat } from "../../../../../Types/Types";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../../Contexts/DashbaordContext";

const SidebarChatListItem = ({
  customerName,
  status,
  isSeen,
  messages,
  id,
}: TChat) => {
  const { currentChatId, setCurrentChatId } = useContext(
    DashboardContext
  ) as TDashbaordContext;
  const [seen, setSeen] = useState(isSeen);
  const lastMessage = messages.at(-1);

  const chatSelectHandler = () => {
    setCurrentChatId(id);
    setSeen(true);
  };

  return (
    <li
      className={`flex gap-2 w-full p-2 rounded-md cursor-pointer items-center transition-all  ${
        currentChatId === id ? "bg-slate-200 hover:bg-slate-300 " : "bg-white"
      } hover:bg-slate-200 ${seen ? "font-normal" : "font-bold"}`}
      onClick={chatSelectHandler}
    >
      <div className="flex items-center">
        <AccountCircleOutlinedIcon />
      </div>
      <div className="flex flex-col w-full">
        <p>{customerName || "New Customer"}</p>
        <div className={`flex justify-between `}>
          <p>{lastMessage?.content || "No messages yet"}</p>
          <p>{lastMessage?.time?.toString()}</p>
        </div>
      </div>
    </li>
  );
};

export default SidebarChatListItem;
