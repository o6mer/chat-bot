import React, { useContext } from "react";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { DashboardContext } from "../../../../../Contexts/DashbaordContext";

const ChatHeader = ({
  customerName,
  setChatStatus,
}: {
  customerName?: string;
  setChatStatus: (status: string, id: string) => void;
}) => {
  const { currentChatId }: any = useContext(DashboardContext);

  return (
    <header className="w-full text-lg p-2 font-bold flex justify-between items-center">
      <p>{customerName || "New Customer"}</p>
      <div className="flex items-center gap-2">
        <div
          className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-between items-center gap-1 cursor-pointer"
          onClick={() => setChatStatus("snooze", currentChatId)}
        >
          <BedtimeIcon fontSize="small" />
          <p>Snooze</p>
        </div>
        <div
          className="px-2 py-1 bg-black hover:bg-gray-900 rounded-lg text-white flex justify-between items-center gap-1 cursor-pointer"
          onClick={() => setChatStatus("close", currentChatId)}
        >
          <BeenhereOutlinedIcon fontSize="small" />
          <p>Close</p>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
