import { useState } from "react";
import AddProject from "./components/AddProject";
import Project from "./components/Project";
import SidePanel from "./components/SidePanel";
import NoProject from "./components/NoProject";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Learning React",
      dueDate: "Dec 29, 2024",
      description: `Learn React from the group up
    
        Start with the basics, finish with advanced knowledge.`,
      tasks: ["Learn the basics", "Learn advanced concepts"],
    },
  ]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const [addingProject, setAddingProject] = useState(false);

  function handleSelect(index) {
    setSelectedProjectIndex(index);
  }

  function handleAddProject() {
    setAddingProject(true);
  }

  function handleAddProjectCancel() {
    setAddingProject(false);
  }

  function handleAddNewProject(project) {
    setProjects((prevProjects) => {
      return [...prevProjects, project];
    });
    setAddingProject(false);
  }

  function handleDelete(index) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects.splice(index, 1);
      return updatedProjects;
    });
    setSelectedProjectIndex(-1);
  }

  return (
    <main className="flex h-screen gap-8">
      <div className="w-1/3 md:w-72">
        <SidePanel
          projects={projects}
          onSelect={handleSelect}
          onAddProject={handleAddProject}
        />
      </div>
      <div className="flex-1 px-20 pt-20">
        {addingProject ? (
          <AddProject
            onCancel={handleAddProjectCancel}
            onSubmit={handleAddNewProject}
          />
        ) : selectedProjectIndex >= 0 ? (
          <Project
            index={selectedProjectIndex}
            project={projects[selectedProjectIndex]}
            onDelete={() => handleDelete(selectedProjectIndex)}
          />
        ) : (
          <NoProject onCreateProject={handleAddProject} />
        )}
      </div>
    </main>
  );
}

export default App;
