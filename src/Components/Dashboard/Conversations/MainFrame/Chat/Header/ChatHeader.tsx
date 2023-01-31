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
    <header className="flex w-full items-center justify-between p-2 text-lg font-bold">
      <p>{customerName || "New Customer"}</p>
      <div className="flex items-center gap-2">
        {chatStatus !== "close" && (
          <div
            className={`flex cursor-pointer items-center justify-between gap-1 rounded-lg px-2 py-1 text-white transition-all ${
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
            className={`rounded-lg bg-green-600 px-2 py-1 text-white transition-all  hover:bg-green-500 ${
              chatStatus === "open" ? "hidden" : "flex"
            } cursor-pointer items-center justify-between gap-1`}
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
