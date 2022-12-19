import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EmojiKeyboard from "./EmojiKeyboard";
import TemplatesKeyboard from "./TemplatesKeyboard";
import AddFileKeyboard from "./AddFileKeyboard";

const ChatKeyboardActions = ({
  setMessage,
}: {
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="w-full flex justify-between  items-centerp-2 text-gray-600">
      <div className="flex gap-1">
        <AddFileKeyboard />
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
