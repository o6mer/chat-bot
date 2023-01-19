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
      className={`gap-1 flex items-center transition-all ${
        darkMode
          ? "bg-darkPrimary hover:bg-darkSecondary"
          : "bg-primary hover:bg-secondary"
      }  border-secondary border border-solid px-2 py-1 rounded-lg m-w-16`}
      onClick={onClick}
    >
      <CloseOutlinedIcon fontSize="small" />
      Cancel
    </button>
  );
};

export default CancelButton;
