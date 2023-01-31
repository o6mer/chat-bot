import { MouseEventHandler, useContext } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../Contexts/DashbaordContext";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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
      <EditOutlinedIcon fontSize="small" />
      Edit
    </button>
  );
};

export default NewButton;
