export default function SidePanel({ projects, onSelect, onAddProject }) {
  return (
    <>
      <div className="flex px-10 pt-20 flex-col items-start justify-start bg-black h-full text-white gap-10">
        <h1 className="text-2xl uppercase">Your Projects</h1>
        <ul className="flex flex-col gap-4 w-full">
          {projects.map((project, idx) => (
            <li
              key={idx}
              className="cursor-pointer p-3 text-xl hover:bg-yellow-700 transition-colors ease-in-out"
              onClick={() => onSelect(idx)}
            >
              {project.title}
            </li>
          ))}
        </ul>
        <button
          className="py-2 px-4 rounded-md text-white bg-gray-600"
          onClick={onAddProject}
        >
          + Add Project
        </button>
      </div>
    </>
  );
}
