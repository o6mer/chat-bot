import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Collapse from "@mui/material/Collapse";

const InfoSidebarConvoInfo = ({
  id,
  creationTime,
}: {
  id?: string;
  creationTime?: Date | string;
}) => {
  const [isExpand, setIsExpand] = useState(true);

  const toggleExpand = () => {
    setIsExpand((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col grow">
      <header className="w-full flex justify-between items-center p-2">
        <p className="text-sm font-bold">Conversation Details</p>
        <button type="button" onClick={toggleExpand}>
          {isExpand ? (
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownOutlinedIcon fontSize="small" />
          )}
        </button>
      </header>
      <Collapse in={isExpand} timeout="auto" unmountOnExit>
        <div className="w-full p-2 flex flex-col  text-sm">
          <div className="w-full flex justify-between items-center p-2 gap-2">
            <p>id</p>
            <p>{id}</p>
          </div>
          <div className="w-full flex justify-between items-center p-2">
            <p>Creation Time</p>
            <p>{creationTime?.toString()}</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default InfoSidebarConvoInfo;
