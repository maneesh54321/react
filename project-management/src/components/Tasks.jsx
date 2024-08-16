import Button from "./Button";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <>
      <div className="mt-4 flex flex-col items-start justify-start gap-6 border-t-2 py-4">
        <h1 className="text-4xl font-bold">Tasks</h1>
        <NewTask onAdd={onAddTask} />
        {tasks && tasks.length > 0 ? (
          <ul className="flex w-full flex-col gap-4 bg-gray-100 p-5">
            {tasks.map((task, index) => (
              <li key={index} className="flex justify-between">
                <span>{task.task}</span>
                <Button
                  nobg
                  onClick={() => onDeleteTask(task.projectId, task.id)}
                >
                  Clear
                </Button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}
