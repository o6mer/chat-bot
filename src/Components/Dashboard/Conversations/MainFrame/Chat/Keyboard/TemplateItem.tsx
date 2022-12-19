import React from "react";
import { TTemplate } from "../../../../../Types/Types";

const TemplateItem = ({
  header,
  content,
  id,
  setSelectedTemplate,
  submitTemplate,
}: {
  header?: string;
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

export default TemplateItem;
