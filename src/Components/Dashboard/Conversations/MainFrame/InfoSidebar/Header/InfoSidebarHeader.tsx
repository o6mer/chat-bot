import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const InfoSidebarHeader = ({
  setIsOpen,
}: {
  setIsOpen: (open: boolean) => void;
}) => {
  return (
    <header className="w-full flex justify-between items-center p-3">
      <p className="font-bold text-lg">Details</p>
      <button onClick={() => setIsOpen(false)}>
        <CloseOutlinedIcon fontSize="small" />
      </button>
    </header>
  );
};

export default InfoSidebarHeader;
