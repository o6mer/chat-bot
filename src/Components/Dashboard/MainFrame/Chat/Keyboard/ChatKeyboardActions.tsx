import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
const ChatKeyboardActions = () => {
  return (
    <div className="w-full flex justify-between  items-centerp-2 text-gray-600">
      <div className="flex gap-1">
        <button type="button">
          <EmojiEmotionsOutlinedIcon fontSize="small" />
        </button>
        <button type="button">
          <AttachFileOutlinedIcon fontSize="small" />
        </button>
        <button type="button">
          <BookOutlinedIcon fontSize="small" />
        </button>
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
