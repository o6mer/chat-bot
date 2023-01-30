import { useContext } from "react";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../../../Contexts/DashbaordContext";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import {
  SocketContext,
  TSocketContext,
} from "../../../../../../Contexts/SocketContext";
const ChatHeader = ({
  customerName,
  chatStatus,
}: {
  customerName?: string;
  chatStatus?: string;
}) => {
  const { currentChatId, darkMode } = useContext(
    DashboardContext
  ) as TDashbaordContext;
  const { setChatStatus } = useContext(SocketContext) as TSocketContext;

  return (
    <header className="w-full text-lg p-2 font-bold flex justify-between items-center">
      <p>{customerName || "New Customer"}</p>
      <div className="flex items-center gap-2">
        {chatStatus !== "close" && (
          <div
            className={`px-2 py-1 transition-all rounded-lg flex justify-between items-center gap-1 cursor-pointer text-white ${
              darkMode
                ? "bg-darkSecondary hover:bg-darkThird"
                : "bg-darkPrimary hover:bg-darkSecondary"
            }`}
            onClick={() => setChatStatus("close", currentChatId)}
          >
            <BeenhereOutlinedIcon fontSize="small" />
            <p>Close</p>
          </div>
        )}
        {chatStatus !== "open" && (
          <div
            className={`px-2 py-1 bg-green-600 text-white hover:bg-green-500 transition-all  rounded-lg ${
              chatStatus === "open" ? "hidden" : "flex"
            } justify-between items-center gap-1 cursor-pointer`}
            onClick={() => setChatStatus("open", currentChatId)}
          >
            <LockOpenOutlinedIcon fontSize="small" />
            <p>Open</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default ChatHeader;
