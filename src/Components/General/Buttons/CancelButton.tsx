import React, { MouseEventHandler } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const CancelButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="gap-1 flex items-center transition-all hover:bg-gray-200 border-secondary border border-solid px-2 py-1 rounded-lg m-w-16"
      onClick={onClick}
    >
      <CloseOutlinedIcon fontSize="small" />
      Cancel
    </button>
  );
};

export default CancelButton;
