import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const TemplateEditor = () => {
  return (
    <div className="flex w-full p-4 shadow-[0px_0px_25px_3px_rgba(0,0,0,0.07)]">
      <aside className="flex w-[30%] flex-col grow gap-2 h-full ">
        <div className="px-2">
          <input
            type="text"
            className="border block w-full p-1  rounded-lg"
            placeholder="Search Template..."
          />
        </div>
        <ul className="list-none text-md flex flex-col grow h-0 overflow-y-scroll dashboard-scrollbar px-2">
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
          <TemplateListItem />
        </ul>
      </aside>
      <main className="flex flex-col justify-between w-full grow p-6 ">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col w-full  justify-start gap-2">
            <label htmlFor="template-title_input" className="text-lg">
              Title:
            </label>
            <input
              className="border grow "
              type="text"
              id="template-title_input"
              placeholder={"Current Title"}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="template-content_textarea" className="text-lg">
              Content:
            </label>
            <textarea
              name=""
              id="template-content_textarea"
              placeholder="Current Content"
              className="resize-none"
            ></textarea>
          </div>
        </section>
        <section className="flex justify-between">
          <button className="gap-1 flex items-center transition-all hover:bg-red-400 bg-red-500 px-2 py-1 rounded-lg m-w-16">
            <DeleteOutlineOutlinedIcon fontSize="small" />
            Delete
          </button>
          <div className="flex gap-2">
            <button className="gap-1 flex items-center transition-all hover:bg-gray-200 border px-2 py-1 rounded-lg m-w-16">
              <CloseOutlinedIcon fontSize="small" />
              Cancel
            </button>
            <button className="gap-1 flex items-center transition-all bg-green-500 hover:bg-green-400 px-2 py-1 rounded-lg m-w-16">
              <SaveAltOutlinedIcon fontSize="small" />
              Save
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

const TemplateListItem = ({}) => {
  return (
    <li className=" p-2 cursor-pointer hover:bg-slate-200 transition-all">
      template
    </li>
  );
};

export default TemplateEditor;
