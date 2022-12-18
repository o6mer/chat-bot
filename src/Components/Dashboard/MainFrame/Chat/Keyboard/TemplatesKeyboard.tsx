import React, { useState, useEffect } from "react";
import { Menu } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { TTemplate } from "../../../../../Types/Types";

const templateList = [
  {
    header: "template",
    content: "content content content content content ",
    id: "1",
  },
  {
    header: "template2",
    content: "content2 content2 content2 content2 content2 ",
    id: "2",
  },
];

const TemplatesKeyboard = ({
  setMessage,
}: {
  setMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [filteredTemplateList, setFilteredTemplateList] =
    useState<Array<TTemplate>>(templateList);
  const [selectedTemplate, setSelectedTemplate] = useState<TTemplate>();
  const [search, setSearch] = useState<string>();

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
    setSearch(e.target.value);
  };

  useEffect(() => {
    //filter template list logic
  }, [search]);

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
        <div className="w-max max-w-lg flex flex-col p-2 gap-2">
          <input
            type="text"
            placeholder="Search template..."
            onChange={handleSearch}
            value={search}
          />
          <div className="flex justify-between gap-2 ">
            <ul className="w-max flex flex-col">
              {filteredTemplateList?.map((template, index) => (
                <TemplateItem
                  {...template}
                  setSelectedTemplate={setSelectedTemplate}
                  submitTemplate={submitTemplate}
                  key={index + template.header}
                />
              ))}
            </ul>
            <div className="flex flex-wrap">{selectedTemplate?.content}</div>
          </div>
        </div>
      </Menu>
    </>
  );
};

const TemplateItem = ({
  header,
  content,
  id,
  setSelectedTemplate,
  submitTemplate,
}: {
  header: string;
  content: string;
  id: string;
  setSelectedTemplate: React.Dispatch<
    React.SetStateAction<TTemplate | undefined>
  >;
  submitTemplate: () => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.detail === 2) {
      submitTemplate();
    }
  };

  return (
    <li
      key={id}
      className="w-max cursor-pointer hover:bg-gray-200"
      onClick={(e) => {
        handleClick(e);

        const template: TTemplate = { header, content, id };
        setSelectedTemplate(template);
      }}
    >
      {header}
    </li>
  );
};

export default TemplatesKeyboard;
