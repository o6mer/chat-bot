import { useState, useContext } from "react";
import {
  SocketContext,
  TSocketContext,
} from "../../../../Contexts/SocketContext";
import { TTemplate } from "../../../../Types/Types";
import Editor from "./Editor";
import Sidebar from "./Sidebar";

const TemplateEditor = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<TTemplate>();

  const { templateList } = useContext(SocketContext) as TSocketContext;

  return (
    <div className="flex w-full p-4 shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)] bg-white m-12 rounded-lg">
      <Sidebar
        templateList={templateList}
        setSelectedTemplate={setSelectedTemplate}
      />
      {selectedTemplate ? (
        <Editor
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      ) : (
        <div className="flex grow h-full justify-center items-center">
          Please Select a Template
        </div>
      )}
    </div>
  );
};

export default TemplateEditor;
