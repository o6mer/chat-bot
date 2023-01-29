import React from "react";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const ChatHeader = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <section className="flex justify-between items-center bg-darkPrimary text-white px-4 py-2 ">
      <div className="flex items-center">
        <SupportAgentOutlinedIcon fontSize="medium" />
        <p className="text-lg">Helpster</p>
      </div>
      <button
        className="cursor-pointer hover:text-third transition-all"
        onClick={handleClose}
      >
        <CloseOutlinedIcon fontSize="medium" />
      </button>
    </section>
  );
};

export default ChatHeader;
