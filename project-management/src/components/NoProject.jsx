import projectImg from "../assets/no-projects.png";

export default function NoProject({ onCreateProject }) {
  return (
    <div className="flex flex-col gap-7 items-center">
      <img src={projectImg} alt="no-projects" className="w-28" />
      <h2 className="text-3xl text-zinc-500 font-bold">No Project Selected</h2>
      <p className="text-zinc-400 text-xl">
        Select a project or get started with a new one
      </p>
      <button
        className="bg-black/80 text-zinc-300 px-4 py-3 rounded-lg text-xl"
        onClick={onCreateProject}
      >
        Create new project
      </button>
    </div>
  );
}
