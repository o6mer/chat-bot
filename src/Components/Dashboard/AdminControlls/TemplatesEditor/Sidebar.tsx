import { TTemplate } from "../../../../Types/Types";
import Divider from "@mui/material/Divider";
import { useEffect, useRef, useState, useContext } from "react";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import NewButton from "../../../General/Buttons/NewButton";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../../../Contexts/DashbaordContext";
import StyledInput from "../../../General/StyledInput";

const Sidebar = ({
  templateList,
  selectedTemplate,
  setSelectedTemplate,
}: {
  templateList?: Array<TTemplate>;
  selectedTemplate?: TTemplate;
  setSelectedTemplate: (template?: TTemplate) => void;
}) => {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState(templateList);

  useEffect(() => {
    setFilteredList(templateList);
  }, [templateList]);

  const onNewTemplate = () => {
    setSelectedTemplate({ title: "" });
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    setSearch(searchValue);
    setFilteredList(() => {
      const list: Array<TTemplate> = [];
      templateList?.forEach((template: TTemplate) => {
        if (template.title?.includes(searchValue)) list.push(template);
      });
      return list;
    });
  };

  return (
    <aside className="flex h-full w-[22%]  flex-col gap-2 ">
      <div className="flex w-full gap-2 px-2">
        <StyledInput
          placeholder="Search template..."
          onChange={onSearch}
          value={search}
          type="text"
        />
        <NewButton onClick={onNewTemplate} />
      </div>
      <Divider />
      <ul className="text-md dashboard-scrollbar flex h-0 grow list-none flex-col overflow-y-scroll px-2">
        {filteredList
          ?.sort((a: TTemplate, b: TTemplate) => {
            if (a?.title < b?.title) {
              return -1;
            }
            if (a?.title > b?.title) {
              return 1;
            }
            return 0;
          })
          ?.map((template: TTemplate) => (
            <TemplateListItem
              template={template}
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
              key={template.id}
            />
          ))}
      </ul>
    </aside>
  );
};

const TemplateListItem = ({
  template,
  selectedTemplate,
  setSelectedTemplate,
}: {
  template: TTemplate;
  selectedTemplate?: TTemplate;
  setSelectedTemplate: (template: TTemplate) => void;
}) => {
  const { darkMode } = useContext(DashboardContext) as TDashbaordContext;
  const rippleRef = useRef<any>(null);

  return (
    <li
      className={`relative cursor-pointer rounded-md p-2 hover:bg-slate-200 
      ${
        template.id === selectedTemplate?.id
          ? darkMode
            ? "bg-darkSecondary hover:bg-darkThird"
            : "bg-secondary hover:bg-third "
          : darkMode
          ? "bg-darkPrimary"
          : "bg-primary"
      }  ${darkMode ? "hover:bg-darkSecondary" : "hover:bg-secondary"}
      
      
      transition-all`}
      onClick={() => {
        setSelectedTemplate(template);
      }}
      onMouseDown={(e) => rippleRef.current.start(e)}
      onMouseUp={(e) => rippleRef.current.stop(e)}
    >
      <TouchRipple ref={rippleRef} center={false} />

      {template.title}
    </li>
  );
};

export default Sidebar;
