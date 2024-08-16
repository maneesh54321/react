import { useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd }) {
  const [newTask, setNewTask] = useState("");

  function handleOnChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddClick() {
    onAdd(newTask);
    setNewTask("");
  }

  return (
    <div className="flex items-center justify-start gap-5">
      <input
        type="text"
        value={newTask}
        className="w-96 bg-gray-200 p-2"
        required
        onChange={handleOnChange}
      />
      <Button nobg onClick={handleAddClick}>
        Add Task
      </Button>
    </div>
  );
}
