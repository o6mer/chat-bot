import { useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../Contexts/DashbaordContext";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import Chat from "./Chat/Chat";
import InfoSidebar from "./InfoSidebar/InfoSidebar";

const MainFrame = () => {
  const { currentChatId, darkMode } = useContext(
    DashboardContext
  ) as TDashbaordContext;
  const { currentChatData } = useContext(SocketContext) as TSocketContext;

  return (
    <section
      className={`relative flex h-full grow ${
        darkMode ? "bg-darkPrimary" : "bg-primary"
      }`}
    >
      {currentChatId ? (
        <>
          <Chat currentChatData={currentChatData} />
          <InfoSidebar currentChatData={currentChatData} />
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          no chat selected
        </div>
      )}
    </section>
  );
};

export default MainFrame;
