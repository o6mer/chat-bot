import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const ChatHeader = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <section className="flex items-center justify-between bg-darkPrimary px-4 py-2 text-white ">
      <div className="flex items-center">
        <SupportAgentOutlinedIcon fontSize="medium" />
        <p className="text-lg">Helpster</p>
      </div>
      <button
        className="cursor-pointer transition-all hover:text-third"
        onClick={handleClose}
      >
        <CloseOutlinedIcon fontSize="medium" />
      </button>
    </section>
  );
};

export default ChatHeader;
