import React from "react";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const AddFileKeyboard = () => {
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files;
    console.log(file);
  };

  return (
    <>
      <label htmlFor="fileInput" className="cursor-pointer">
        <AttachFileOutlinedIcon fontSize="small" />
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileSelected}
          accept=".png , .jpg , .jpeg"
        />
      </label>
    </>
  );
};

export default AddFileKeyboard;
