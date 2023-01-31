import { TChat } from "../../../../../Types/Types";
import ChatHeader from "./Header/ChatHeader";
import ChatKeyboard from "./Keyboard/ChatKeyboard";
import ChatMain from "./Main/ChatMain";
import Divider from "@mui/material/Divider";

const Chat = ({ currentChatData }: { currentChatData?: TChat }) => {
  return (
    <div className="flex h-full flex-col p-2 lg:grow">
      <ChatHeader
        customerName={currentChatData?.customerName}
        chatStatus={currentChatData?.status}
      />
      <Divider />
      <ChatMain messages={currentChatData?.messages} />
      <ChatKeyboard />
    </div>
  );
};

export default Chat;
