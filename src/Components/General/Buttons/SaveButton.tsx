import { MouseEventHandler } from "react";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";

const SaveButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="gap-1 flex items-center transition-all bg-green-600 hover:bg-green-500 px-2 py-1 rounded-lg m-w-16 font-bold text-white"
      onClick={onClick}
    >
      <SaveAltOutlinedIcon fontSize="small" />
      Save
    </button>
  );
};

export default SaveButton;
