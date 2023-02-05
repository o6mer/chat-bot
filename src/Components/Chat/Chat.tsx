import ChatField from "./Field/ChatField";
import ChatHeader from "./Header/ChatHeader";

const Chat = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <main className="w-full max-w-xs bg-primary lg:max-w-sm">
        <ChatHeader handleClose={handleClose} />
        <ChatField />
      </main>
    </div>
  );
};

export default Chat;
