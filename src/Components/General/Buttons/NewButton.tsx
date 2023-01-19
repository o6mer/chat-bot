import React, { MouseEventHandler, useContext } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";

const NewButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;

  return (
    <button
      className={`border-secondary border-1 border-solid px-2 py-1 rounded-lg flex items-center ${
        darkMode
          ? "bg-darkPrimary hover:bg-darkSecondary"
          : "bg-primary hover:bg-secondary"
      }} transition-all font-bold`}
      onClick={onClick}
    >
      <AddOutlinedIcon fontSize="small" />
      New
    </button>
  );
};

export default NewButton;
