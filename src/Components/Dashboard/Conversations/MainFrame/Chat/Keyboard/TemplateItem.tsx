import React from "react";
import { TTemplate } from "../../../../../../Types/Types";

const TemplateItem = ({
  title,
  content,
  id,
  setSelectedTemplate,
  submitTemplate,
}: {
  title?: string;
  content?: string;
  id?: string;
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
      className="w-full p-1 cursor-pointer hover:bg-gray-200"
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
