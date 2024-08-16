import Button from "./Button";

export default function SidePanel({ projects, onSelect, onAddProject }) {
  return (
    <aside className="flex h-full flex-col items-start justify-start gap-10 bg-black px-10 pt-20 text-white">
      <h1 className="text-2xl uppercase">Your Projects</h1>
      <ul className="flex w-full flex-col gap-4">
        {projects.map((project, idx) => (
          <li
            key={idx}
            className="cursor-pointer p-3 text-xl transition-colors ease-in-out hover:bg-zinc-800"
            onClick={() => onSelect(idx)}
          >
            {project.title}
          </li>
        ))}
      </ul>
      <Button onClick={onAddProject}>+ Add Project</Button>
    </aside>
  );
}
