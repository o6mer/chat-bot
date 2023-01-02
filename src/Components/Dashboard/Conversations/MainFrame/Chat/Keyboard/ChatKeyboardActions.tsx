import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EmojiKeyboard from "./EmojiKeyboard";
import TemplatesKeyboard from "./TemplatesKeyboard";
import AddFileKeyboard from "./AddFileKeyboard";
import { Tooltip } from "@mui/material";

const ChatKeyboardActions = ({
  setMessage,
}: {
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="w-full flex justify-between  items-center text-gray-600">
      <div className="flex gap-1">
        <AddFileKeyboard />
        <EmojiKeyboard setMessage={setMessage} />
        <TemplatesKeyboard setMessage={setMessage} />
      </div>
      <Tooltip title="Send" arrow>
        <button type="submit" className="hover:text-gray-500 transition-all">
          <SendOutlinedIcon fontSize="small" />
        </button>
      </Tooltip>
    </div>
  );
};

export default ChatKeyboardActions;
