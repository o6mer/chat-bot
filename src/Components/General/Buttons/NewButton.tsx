import React, { MouseEventHandler } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const NewButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="border-secondary border-1 border-solid px-2 py-1 rounded-lg flex items-center hover:bg-gray-200 transition-all font-bold"
      onClick={onClick}
    >
      <AddOutlinedIcon fontSize="small" />
      New
    </button>
  );
};

export default NewButton;
