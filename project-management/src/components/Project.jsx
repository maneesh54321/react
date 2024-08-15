import Tasks from "./Tasks";

export default function Project({ project, onDelete }) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <button onClick={onDelete}>Delete</button>
        </div>
        <div>
          <span className="text-zinc-500 text-xl">{project.dueDate}</span>
        </div>
        <div>
          <p>{project.description}</p>
        </div>
        <Tasks tasks={project.tasks} />
      </div>
    </>
  );
}
