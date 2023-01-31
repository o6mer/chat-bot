import { MouseEventHandler, useContext } from "react";
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
      className={`flex items-center rounded-lg border border-solid border-secondary px-2 py-1 font-bold transition-all ${
        darkMode
          ? "bg-darkPrimary hover:bg-darkSecondary"
          : "bg-primary hover:bg-secondary"
      }`}
      onClick={onClick}
    >
      <AddOutlinedIcon fontSize="small" />
      New
    </button>
  );
};

export default NewButton;
