import React from "react";

const ChatHeader = () => {
  return (
    <section className="flex justify-between items-center bg-gray-400 px-4 py-2 rounded-t-lg">
      <p>Chat Name</p>
      <div className="cursor-pointer">X</div>
    </section>
  );
};

export default ChatHeader;
