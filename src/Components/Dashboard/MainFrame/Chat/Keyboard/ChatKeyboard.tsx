import React from "react";
import ChatKeyboardActions from "./ChatKeyboardActions";

const ChatKeyboard = () => {
  return (
    <form className="w-full h-[25%] flex flex-col p-2 outline outline-gray-200 outline-[1px] rounded-lg">
      <textarea
        className="w-full h-full p-1 focus:outline-gray-200 outline-[1px] rounded-lg  resize-none dashboard-scrollbar "
        placeholder="Write here..."
      />
      <ChatKeyboardActions />
    </form>
  );
};

export default ChatKeyboard;
