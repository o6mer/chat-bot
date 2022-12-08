import React, { useContext } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { TChat } from "../../../../Types/Types";
import { GeneralContext } from "../../../../Contexts/GeneralContext";

const SidebarChatListItem = ({ costumer, isOpen, messages, _id }: TChat) => {
  const { setCurrentChatId }: any = useContext(GeneralContext);

  const lastMessage = messages.at(-1);

  const chatSelectHandler = () => {
    setCurrentChatId(_id);
  };

  return (
    <li
      className={`flex gap-2 w-full p-2 rounded-md cursor-pointer items-center transition-all hover:bg-slate-200 ${
        isOpen || "font-bold"
      }`}
      onClick={chatSelectHandler}
    >
      <div className="flex items-center">
        <AccountCircleOutlinedIcon />
      </div>
      <div className="flex flex-col w-full">
        <p>{costumer.name || "costumer"}</p>
        <div className={`flex justify-between `}>
          <p>{lastMessage?.content || "last message"}</p>
          <p>{lastMessage?.time?.toString() || "00:00"}</p>
        </div>
      </div>
    </li>
  );
};

export default SidebarChatListItem;
