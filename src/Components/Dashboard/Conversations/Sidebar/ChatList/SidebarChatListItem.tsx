import React, { useContext, useRef, useState } from "react";
import { TChat, TMessage } from "../../../../../Types/Types";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../../Contexts/DashbaordContext";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import { Avatar } from "@mui/material";

const SidebarChatListItem = ({
  customerName,
  status,
  isSeen,
  messages,
  id,
  assignedAdmin,
}: TChat) => {
  const { currentChatId, setCurrentChatId, darkMode } = useContext(
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

  const renderMessage = (
    type: string | undefined,
    content: TMessage["content"]
  ) => {
    if (type === "text") return <p>{content || "No messages yet"}</p>;

    if (type === "multiple")
      return <p>{content.response || "No messages yet"}</p>;

    return <p>No messages yet</p>;
  };

  return (
    <li
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
      className={`flex gap-2 w-full p-2 rounded-md cursor-pointer items-center transition-all relative 
      ${
        currentChatId === id
          ? darkMode
            ? "bg-darkSecondary hover:bg-darkThird"
            : "bg-secondary hover:bg-third "
          : darkMode
          ? "bg-darkPrimary"
          : "bg-primary"
      }  ${darkMode ? "hover:bg-darkSecondary" : "hover:bg-secondary"} ${
        seen ? "font-normal" : "font-bold"
      }`}
      onClick={chatSelectHandler}
    >
      <TouchRipple ref={rippleRef} center={false} />

      <div className="flex items-center">
        <Avatar
          sx={{
            fontWeight: "normal",
            width: "1.8rem",
            height: "1.8rem",
            backgroundColor: "rgb(34 197 94 / 1)",
            text: "white",
            fontSize: 14,
          }}
        >
          {assignedAdmin?.slice(0, 2)}
        </Avatar>
      </div>
      <div className="flex flex-col w-full ">
        <p>{customerName || "New Customer"}</p>
        <div className={`flex justify-between   `}>
          {renderMessage(lastMessage?.type, lastMessage?.content)}
          <p>{lastMessage?.time?.toString()}</p>
        </div>
      </div>
    </li>
  );
};

export default SidebarChatListItem;
