import React from "react";

const ChatHeader = ({ costumerName }: { costumerName?: string }) => {
  return (
    <header className="w-full text-lg p-2 font-bold flex justify-between items-center">
      <p>{costumerName || "New Costumer"}</p>
      <div>Actions</div>
    </header>
  );
};

export default ChatHeader;
