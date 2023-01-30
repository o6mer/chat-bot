import React, { useContext, useEffect, useState } from "react";
import ChatField from "./Field/ChatField";
import ChatHeader from "./Header/ChatHeader";
import { Socket } from "socket.io-client";

const Chat = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <main className="max-w-xs lg:max-w-sm bg-primary">
        <ChatHeader handleClose={handleClose} />
        <ChatField />
      </main>
    </div>
  );
};

export default Chat;
