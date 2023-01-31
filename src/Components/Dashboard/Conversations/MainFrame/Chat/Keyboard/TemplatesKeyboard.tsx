import React, { useState, useContext } from "react";
import { Menu, Tooltip } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { TTemplate } from "../../../../../../Types/Types";
import TemplateItem from "./TemplateItem";
import {
  SocketContext,
  TSocketContext,
} from "../../../../../../Contexts/SocketContext";

const TemplatesKeyboard = ({
  setMessage,
}: {
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<
    TTemplate | undefined
  >();
  const [search, setSearch] = useState<string>("");

  const { templateList } = useContext(SocketContext) as TSocketContext;
  const [filteredTemplateList, setFilteredTemplateList] =
    useState(templateList);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const submitTemplate = () => {
    setMessage((prev) => `${prev || ""}${selectedTemplate?.content}`);
    handleClose();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    setSearch(searchValue);
    setFilteredTemplateList(() => {
      let list: Array<TTemplate> = [];
      templateList?.forEach((template: TTemplate) => {
        if (template?.title?.includes(searchValue)) list.push(template);
      });
      return list;
    });
  };

  return (
    <>
      <Tooltip title="Templates" arrow>
        <button
          type="button"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="transition-all hover:text-gray-500"
        >
          <BookOutlinedIcon fontSize="small" />
        </button>
      </Tooltip>
      <Menu
        sx={{ translate: "0 -2rem" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className="flex h-80 w-96 flex-col gap-2 p-2">
          <div>
            <input
              className="w-full border border-solid border-secondary"
              type="text"
              placeholder="Search template..."
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                e.stopPropagation();
              }}
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="flex overflow-y-hidden">
            <ul className=" dashboard-scrollbar flex w-[30%] flex-col overflow-y-scroll px-1">
              {filteredTemplateList?.length ? (
                filteredTemplateList
                  ?.sort((a: TTemplate, b: TTemplate) => {
                    if (a?.title < b?.title) {
                      return -1;
                    }
                    if (a?.title > b?.title) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((template, index, arr) => (
                    <TemplateItem
                      {...template}
                      selectedTemplate={selectedTemplate}
                      setSelectedTemplate={setSelectedTemplate}
                      submitTemplate={submitTemplate}
                      key={index}
                    />
                  ))
              ) : (
                <p>template not found...</p>
              )}
            </ul>
            <div className="flex grow flex-wrap p-2">
              {filteredTemplateList?.length ? selectedTemplate?.content : ""}
            </div>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default TemplatesKeyboard;
