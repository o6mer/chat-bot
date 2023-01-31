import React from "react";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { Tooltip } from "@mui/material";

const AddFileKeyboard = () => {
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files;
  };

  return (
    <>
      <Tooltip title="Files" arrow>
        <label
          htmlFor="fileInput"
          className="cursor-pointer transition-all hover:text-gray-500"
        >
          <AttachFileOutlinedIcon fontSize="small" />
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileSelected}
            accept=".png , .jpg , .jpeg"
          />
        </label>
      </Tooltip>
    </>
  );
};

export default AddFileKeyboard;
