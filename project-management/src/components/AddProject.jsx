import { useState } from "react";

export default function AddProject({ onSubmit, onCancel }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    dueDate: undefined,
    tasks: [],
  });

  function handleProjectFieldUpdate(field, newValue) {
    setProject((prevProject) => {
      return {
        ...prevProject,
        [field]: newValue,
      };
    });
  }

  return (
    <>
      <form className="flex flex-col items-center gap-6 justify-start">
        <div className="flex items-center justify-end gap-6 w-full">
          <button onClick={onCancel}>Cancel</button>
          <button
            onClick={() => onSubmit(project)}
            className="bg-black text-white rounded-md py-3 px-5"
          >
            Save
          </button>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="title" className="w-full uppercase font-bold">
            TITLE
          </label>
          <input
            id="title"
            type="text"
            value={project.title}
            placeholder="Enter Title"
            className="w-full bg-gray-200 p-3 border-b-2 border-black"
            onChange={() =>
              handleProjectFieldUpdate("title", event.target.value)
            }
          />
        </div>
        <div className="w-full">
          <label htmlFor="description" className="w-full uppercase font-bold">
            Description
          </label>
          <textarea
            id="description"
            type="text"
            value={project.description}
            placeholder="Enter Description"
            className="w-full bg-gray-200 p-3 border-b-2 border-black"
            onChange={() =>
              handleProjectFieldUpdate("description", event.target.value)
            }
          />
        </div>
        <div className="w-full">
          <label htmlFor="dueDate" className="w-full uppercase font-bold">
            DUE DATE
          </label>
          <input
            id="dueDate"
            type="date"
            value={project.dueDate}
            placeholder="Enter Title"
            className="w-full bg-gray-200 p-3 border-b-2 border-black"
            onChange={() =>
              handleProjectFieldUpdate("dueDate", event.target.value)
            }
          />
        </div>
      </form>
    </>
  );
}
