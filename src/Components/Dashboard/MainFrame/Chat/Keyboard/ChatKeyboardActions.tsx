import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EmojiKeyboard from "./EmojiKeyboard";
import TemplatesKeyboard from "./TemplatesKeyboard";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const ChatKeyboardActions = ({
  setMessage,
}: {
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="w-full flex justify-between  items-centerp-2 text-gray-600">
      <div className="flex gap-1">
        <button type="button">
          <AttachFileOutlinedIcon fontSize="small" />
        </button>
        <EmojiKeyboard setMessage={setMessage} />
        <TemplatesKeyboard setMessage={setMessage} />
      </div>
      <div>
        <button type="submit">
          <SendOutlinedIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default ChatKeyboardActions;
