import React, { useState, useEffect, useContext } from "react";
import { Menu } from "@mui/material";
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
      <button
        type="button"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BookOutlinedIcon fontSize="small" />
      </button>
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
        <div className="w-96 flex flex-col p-2 gap-2">
          <input
            className="border"
            type="text"
            placeholder="Search template..."
            onKeyDown={(e: any) => {
              e.stopPropagation();
            }}
            value={search}
            onChange={handleSearch}
          />
          <div className="flex justify-between gap-2 ">
            <ul className=" flex flex-col w-[30%]">
              {filteredTemplateList?.length ? (
                filteredTemplateList?.map((template, index, arr) => (
                  <TemplateItem
                    {...template}
                    setSelectedTemplate={setSelectedTemplate}
                    submitTemplate={submitTemplate}
                    key={index}
                  />
                ))
              ) : (
                <p>template not found...</p>
              )}
            </ul>
            <div className="flex flex-wrap grow">
              {filteredTemplateList?.length ? selectedTemplate?.content : ""}
            </div>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default TemplatesKeyboard;
