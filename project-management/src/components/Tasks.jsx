import { useRef } from "react";

export default function Tasks({ tasks }) {
  const newTask = useRef();

  function handleAddTask() {
    console.log(`adding task "${newTask.current.value}"`);
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start border-t-2 mt-4 py-4 gap-6">
        <h1 className="text-4xl font-bold">Tasks</h1>
        <div className="flex justify-start items-center gap-5">
          <input ref={newTask} type="text" className="bg-gray-200 p-2 w-96" />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        {tasks && tasks.length > 0 ? (
          <ul className="bg-gray-100 flex flex-col gap-4 p-5 w-full">
            {tasks.map((task, index) => (
              <li key={index} className="flex justify-between">
                <span>{task}</span>
                <button>Clear</button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}
