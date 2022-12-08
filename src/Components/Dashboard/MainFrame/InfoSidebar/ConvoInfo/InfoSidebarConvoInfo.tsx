import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const InfoSidebarConvoInfo = () => {
  return (
    <div className="w-full flex flex-col grow">
      <header className="w-full flex justify-between items-center p-2">
        <p className="text-sm font-bold">Conversation Details</p>
        <button type="button">
          <KeyboardArrowDownOutlinedIcon fontSize="small" />
        </button>
      </header>
      <div className="w-full p-2 flex flex-col  text-sm">
        <div className="w-full flex justify-between items-center p-2 gap-2">
          <p>key</p>
          <p>value value </p>
        </div>
        <div className="w-full flex justify-between items-center p-2">
          <p>key</p>
          <p>value</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSidebarConvoInfo;
