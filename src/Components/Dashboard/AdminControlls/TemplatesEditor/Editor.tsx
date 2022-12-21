import React, { useContext, useEffect, useState } from "react";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { TTemplate } from "../../../../Types/Types";
import { SocketContext } from "../../../../Contexts/SocketContext";
import { TSocketContext } from "../../../../Contexts/SocketContext";

const Editor = ({
  selectedTemplate,
  setSelectedTemplate,
}: {
  selectedTemplate: TTemplate;
  setSelectedTemplate: React.Dispatch<
    React.SetStateAction<TTemplate | undefined>
  >;
}) => {
  const [title, setTitle] = useState(selectedTemplate?.title || "");
  const [content, setContent] = useState(selectedTemplate?.content || "");

  useEffect(() => {
    setTitle(selectedTemplate?.title || "");
    setContent(selectedTemplate?.content || "");
  }, [selectedTemplate]);

  const { updateTemplate, deleteTemplate } = useContext(
    SocketContext
  ) as TSocketContext;

  const onSaveClicked = () => {
    const template = {
      title,
      content,
      id: selectedTemplate?.id,
    };

    updateTemplate(template);
  };

  const onDeleteClicked = () => {
    deleteTemplate(selectedTemplate?.id);
    setSelectedTemplate(undefined);
  };

  const onCancelClicked = () => {
    setSelectedTemplate(undefined);
    setTitle("");
    setContent("");
  };

  return (
    <main className="flex flex-col justify-between w-full grow p-6 ">
      <section className="flex flex-col gap-4 grow py-4">
        <div className="flex flex-col w-full  justify-start gap-2">
          <label htmlFor="template-title_input" className="text-lg">
            Title:
          </label>
          <input
            className="border grow rounded-lg"
            type="text"
            id="template-title_input"
            placeholder={"Current Title"}
            value={title}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setTitle(e.currentTarget.value)
            }
          />
        </div>
        <div className="flex flex-col gap-2 grow">
          <label htmlFor="template-content_textarea" className="text-lg">
            Content:
          </label>
          <textarea
            name=""
            id="template-content_textarea"
            placeholder="Current Content"
            className="flex self-stretch resize-none border rounded-lg h-full"
            value={content}
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
              setContent(e.currentTarget.value)
            }
          ></textarea>
        </div>
      </section>
      <section className="flex justify-between font-bold">
        <button
          className="gap-1 flex items-center transition-all bg-red-600 hover:bg-red-500 px-2 py-1 rounded-lg m-w-16"
          onClick={onDeleteClicked}
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
          Delete
        </button>
        <div className="flex gap-2">
          <button
            className="gap-1 flex items-center transition-all hover:bg-gray-200 border px-2 py-1 rounded-lg m-w-16"
            onClick={onCancelClicked}
          >
            <CloseOutlinedIcon fontSize="small" />
            Cancel
          </button>
          <button
            className="gap-1 flex items-center transition-all bg-green-600 hover:bg-green-500 px-2 py-1 rounded-lg m-w-16 text-white"
            onClick={onSaveClicked}
          >
            <SaveAltOutlinedIcon fontSize="small" />
            Save
          </button>
        </div>
      </section>
    </main>
  );
};

export default Editor;
