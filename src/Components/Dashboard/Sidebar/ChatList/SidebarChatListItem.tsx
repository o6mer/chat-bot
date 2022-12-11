import React, { useContext, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { TChat } from "../../../../Types/Types";
import { DashboardContext } from "../../../../Contexts/DashbaordContext";

const SidebarChatListItem = ({ costumerName, isOpen, messages, id }: TChat) => {
  const { setCurrentChatId }: any = useContext(DashboardContext);
  const [opened, setOpened] = useState(isOpen);
  const lastMessage = messages.at(-1);

  const chatSelectHandler = () => {
    setCurrentChatId(id);
    setOpened(true);
  };

  return (
    <li
      className={`flex gap-2 w-full p-2 rounded-md cursor-pointer items-center transition-all hover:bg-slate-200 ${
        opened ? "font-normal" : "font-bold"
      }`}
      onClick={chatSelectHandler}
    >
      <div className="flex items-center">
        <AccountCircleOutlinedIcon />
      </div>
      <div className="flex flex-col w-full">
        <p>{costumerName || "costumer"}</p>
        <div className={`flex justify-between `}>
          <p>{lastMessage?.content || "last message"}</p>
          <p>{lastMessage?.time?.toString() || "00:00"}</p>
        </div>
      </div>
    </li>
  );
};

export default SidebarChatListItem;
