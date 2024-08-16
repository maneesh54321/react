import Button from "./Button";
import Tasks from "./Tasks";

export default function Project({
  project,
  onDelete,
  tasks,
  onAddTask,
  onDeleteTask,
}) {
  const formattedDate = project.dueDate.toLocaleDateString({
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <Button nobg onClick={onDelete}>
            Delete
          </Button>
        </div>
        <div>
          <span className="text-xl text-zinc-500">{formattedDate}</span>
        </div>
        <div>
          <p className="whitespace-pre-wrap">{project.description}</p>
        </div>
        <Tasks
          tasks={tasks}
          onAddTask={onAddTask}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </>
  );
}
