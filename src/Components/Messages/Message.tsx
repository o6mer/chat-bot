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
      className={`flex w-fit max-w-[80%] flex-col flex-wrap ${
        writer === "Customer" ? "self-end " : ""
      }`}
    >
      <div
        className={`rounded-md p-2  ${
          writer === "Customer"
            ? darkMode
              ? "bg-darkSecondary"
              : "bg-secondary"
            : darkMode
            ? "bg-darkThird"
            : "bg-secondary"
        }`}
      >
        <>{children}</>
      </div>
      <div className="flex text-xs text-darkThird">
        <p className="">{writer} - </p>
        <p>{time.toString()}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
