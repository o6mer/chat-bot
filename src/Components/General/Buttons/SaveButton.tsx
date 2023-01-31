import { MouseEventHandler } from "react";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";

const SaveButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="m-w-16 flex items-center gap-1 rounded-lg bg-green-600 px-2 py-1 font-bold text-white transition-all hover:bg-green-500"
      onClick={onClick}
    >
      <SaveAltOutlinedIcon fontSize="small" />
      Save
    </button>
  );
};

export default SaveButton;
