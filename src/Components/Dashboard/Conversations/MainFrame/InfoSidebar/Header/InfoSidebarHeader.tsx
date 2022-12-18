import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const InfoSidebarHeader = () => {
  return (
    <header className="w-full flex justify-between items-center p-2">
      <p className="font-bold text-lg">Details</p>
      <button>
        <CloseOutlinedIcon fontSize="small" />
      </button>
    </header>
  );
};

export default InfoSidebarHeader;
