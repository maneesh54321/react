import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";

function validate({ title, description, dueDate }) {
  if (!title || title.length === 0) return false;
  if (!description || description.length === 0) return false;
  if (!dueDate) return false;
  return true;
}

export default function AddProject({ onSubmit, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: new Date(dueDate.current.value),
    };

    // validate input
    const isValid = validate(project);
    if (isValid) {
      onSubmit(project);
    } else {
      modal.current.open();
    }
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-zinc-900">Invalid Input</h2>
        <p className="text-sm text-zinc-700">
          <span>This is a validation error message!!</span>
        </p>
      </Modal>
      <div className="flex flex-col items-center justify-start gap-6">
        <menu className="flex w-full items-center justify-end gap-6">
          <li>
            <Button nobg onClick={onCancel}>
              Cancel
            </Button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="rounded-md bg-black px-5 py-3 text-white"
            >
              Save
            </button>
          </li>
        </menu>
        <Input
          ref={title}
          label={"Title"}
          type="text"
          placeholder="Enter Title"
        />
        <Input
          ref={description}
          label={"Description"}
          textarea
          placeholder="Enter Description"
        />
        <Input ref={dueDate} label={"due date"} type="date" />
      </div>
    </>
  );
}
