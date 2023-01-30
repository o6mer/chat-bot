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
      className={`flex flex-col max-w-[80%] w-fit flex-wrap ${
        writer === "Customer" ? "self-end " : ""
      }`}
    >
      <div
        className={`p-2 rounded-md  ${
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
      <div className="flex text-darkThird text-xs">
        <p className="">{writer} - </p>
        <p>{time.toString()}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
