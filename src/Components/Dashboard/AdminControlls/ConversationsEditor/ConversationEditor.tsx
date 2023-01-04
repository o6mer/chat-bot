import { useContext } from "react";
import Draggable from "react-draggable";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import { TConversation } from "../../../../Types/Types";
import ListItem from "./ListItem";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";

const ConversationEditor = () => {
  const { conversations, createConversation, saveAllConversations } =
    useContext(SocketContext) as TSocketContext;

  const addNewCovnersation = () => {
    createConversation({
      question: "",
      response: "",
      followUp: [],
      position: { x: 0, y: 0 },
    });
  };

  return (
    <div className="w-full grow m-12 p-4 flex flex-col  bg-white shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)] rounded-lg">
      <header className="flex gap-2">
        <button
          className="border px-2 py-1 rounded-lg flex items-center hover:bg-gray-200 transition-all font-bold"
          onClick={addNewCovnersation}
        >
          <AddOutlinedIcon fontSize="small" />
          New
        </button>
        <button
          className="gap-1 flex items-center transition-all bg-green-600 hover:bg-green-500 px-2 py-1 rounded-lg m-w-16 font-bold text-white"
          onClick={saveAllConversations}
        >
          <SaveAltOutlinedIcon fontSize="small" />
          Save
        </button>
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
