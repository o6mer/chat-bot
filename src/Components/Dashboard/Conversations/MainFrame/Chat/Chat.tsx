import { TChat, TMessage } from "../../../../../Types/Types";
import ChatHeader from "./Header/ChatHeader";
import ChatKeyboard from "./Keyboard/ChatKeyboard";
import ChatMain from "./Main/ChatMain";
import Divider from "@mui/material/Divider";

const Chat = ({ currentChatData }: { currentChatData?: TChat }) => {
  return (
    <div className="h-full p-2 flex flex-col lg:grow">
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
