import { useContext } from "react";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import { TConversation } from "../../../../Types/Types";
import ListItem from "./ListItem";
import SaveButton from "../../../General/Buttons/SaveButton";
import NewButton from "../../../General/Buttons/NewButton";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../Contexts/DashbaordContext";

const ConversationEditor = () => {
  const { conversations, createConversation, saveAllConversations } =
    useContext(SocketContext) as TSocketContext;
  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  const addNewCovnersation = () => {
    createConversation({
      question: "",
      response: "",
      followUp: [],
      position: { x: 0, y: 0 },
    });
  };

  return (
    <div
      className={`w-full grow m-12 p-4 flex flex-col  ${
        darkMode ? "bg-darkPrimary" : "bg-primary"
      }  shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)] rounded-lg`}
    >
      <header className="flex gap-2">
        <NewButton onClick={addNewCovnersation} />
        <SaveButton onClick={saveAllConversations} />
      </header>
      <ul className="flex grow shrink-0 flex-wrap gap-4 box relative">
        {conversations.map((conversation: TConversation) => {
          return (
            <ListItem
              conversation={conversation}
              conversations={conversations}
              key={conversation.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ConversationEditor;
