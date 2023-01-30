import React, { useRef, useState } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Tooltip } from "@mui/material";
import StyledInput from "../../General/StyledInput";

const ChatKeyboard = ({
  sendMessage,
}: {
  sendMessage: (message: string) => void;
}) => {
  const [messageContent, setMessageContent] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(messageContent);
    setMessageContent("");
  };

  const typeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setMessageContent(e.currentTarget.value);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="w-full flex justify-between p-2">
        <StyledInput
          placeholder="Write a message..."
          type="text"
          onChange={typeHandler}
          value={messageContent}
        />
        <Tooltip title="Send" arrow>
          <button type="submit" className="hover:text-gray-500 transition-all">
            <SendOutlinedIcon fontSize="small" />
          </button>
        </Tooltip>
      </div>
    </form>
  );
};

export default ChatKeyboard;
