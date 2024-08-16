import projectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ onCreateProject }) {
  return (
    <div className="flex flex-col items-center gap-7">
      <img src={projectImg} alt="no-projects" className="w-28" />
      <h2 className="text-3xl font-bold text-zinc-500">No Project Selected</h2>
      <p className="text-xl text-zinc-400">
        Select a project or get started with a new one
      </p>
      <Button onClick={onCreateProject}>Create new project</Button>
    </div>
  );
}
