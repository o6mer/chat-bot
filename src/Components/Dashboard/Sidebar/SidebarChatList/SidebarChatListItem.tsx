import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const SidebarChatListItem = () => {
  return (
    <div className="flex gap-2 w-full p-2 rounded-md cursor-pointer items-center transition-all hover:bg-slate-200">
      <div className="flex items-center">
        <AccountCircleOutlinedIcon />
      </div>
      <div className="flex flex-col w-full">
        <p>Name</p>
        <div className="flex justify-between">
          <p>Last Message</p>
          <p>00:00</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarChatListItem;
