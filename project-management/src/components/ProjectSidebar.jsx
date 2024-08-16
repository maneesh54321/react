import Button from "./Button";

export default function ProjectSidebar({
  projects,
  onSelectProject,
  onAddProject,
  selectedProjectId,
}) {
  return (
    <aside className="flex h-full flex-col items-start justify-start gap-10 bg-black px-10 pt-20 text-white">
      <h1 className="text-2xl uppercase">Your Projects</h1>
      <ul className="flex w-full flex-col gap-4">
        {projects.map((project, idx) => (
          <li
            key={idx}
            className={
              "cursor-pointer rounded-md p-3 text-xl text-stone-400 transition-colors ease-in-out hover:bg-zinc-700" +
              (project.projectId === selectedProjectId
                ? " bg-zinc-800 text-stone-200"
                : "")
            }
            onClick={() => onSelectProject(project.projectId)}
          >
            {project.title}
          </li>
        ))}
      </ul>
      <Button onClick={onAddProject}>+ Add Project</Button>
    </aside>
  );
}
