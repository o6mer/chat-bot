import { useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../Contexts/DashbaordContext";
import { TMessage } from "../../Types/Types";

const ChatMessage = ({ writer, time, children }: TMessage) => {
  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  return (
    <div
      className={`flex flex-col max-w-[80%] w-max py-1 px-2 rounded-md ${
        writer === "Customer"
          ? darkMode
            ? "self-end bg-darkSecondary"
            : "self-end bg-secondary"
          : darkMode
          ? "bg-darkThird"
          : "bg-blue-200"
      }`}
    >
      <div className="flex justify-between gap-4 items-center">
        <p>{writer}</p>
        <p>{time.toString()}</p>
      </div>
      <>{children}</>
    </div>
  );
};

export default ChatMessage;
