import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const InfoSidebarHeader = ({
  setIsOpen,
}: {
  setIsOpen: (open: boolean) => void;
}) => {
  return (
    <header className="flex w-full items-center justify-between p-3">
      <p className="text-lg font-bold">Details</p>
      <button onClick={() => setIsOpen(false)}>
        <CloseOutlinedIcon fontSize="small" />
      </button>
    </header>
  );
};

export default InfoSidebarHeader;
