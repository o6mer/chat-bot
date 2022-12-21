import React from "react";
import { TTemplate } from "../../../../../../Types/Types";

const TemplateItem = ({
  title,
  content,
  id,
  selectedTemplate,
  setSelectedTemplate,
  submitTemplate,
}: {
  title: string;
  content?: string;
  id?: string;
  selectedTemplate?: TTemplate;
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
      className={`w-full p-1 cursor-pointer hover:bg-gray-200 transition-all ${
        selectedTemplate?.id === id && "bg-gray-200 hover:bg-gray-300"
      }`}
      onClick={(e) => {
        handleClick(e);
        const template: TTemplate = { title, content, id };
        setSelectedTemplate(template);
      }}
    >
      {title}
    </li>
  );
};

export default TemplateItem;
