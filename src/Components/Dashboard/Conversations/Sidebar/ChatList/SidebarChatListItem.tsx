import React, { useContext, useRef, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { TChat } from "../../../../../Types/Types";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../../Contexts/DashbaordContext";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";

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

  const rippleRef = useRef<any>(null);
  const onRippleStart = (e: any) => {
    rippleRef.current.start(e);
  };
  const onRippleStop = (e: any) => {
    rippleRef.current.stop(e);
  };

  return (
    <li
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
      className={`flex gap-2 w-full p-2 rounded-md cursor-pointer items-center transition-all relative ${
        currentChatId === id ? "bg-slate-200 hover:bg-slate-300 " : "bg-white"
      } hover:bg-slate-200 ${seen ? "font-normal" : "font-bold"}`}
      onClick={chatSelectHandler}
    >
      <TouchRipple ref={rippleRef} center={false} />

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
