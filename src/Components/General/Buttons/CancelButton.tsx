import React, { MouseEventHandler, useContext } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";

const CancelButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  return (
    <button
      className={`flex items-center gap-1 transition-all ${
        darkMode
          ? "bg-darkPrimary hover:bg-darkSecondary"
          : "bg-primary hover:bg-secondary"
      }  m-w-16 rounded-lg border border-solid border-secondary px-2 py-1`}
      onClick={onClick}
    >
      <CloseOutlinedIcon fontSize="small" />
      Cancel
    </button>
  );
};

export default CancelButton;
