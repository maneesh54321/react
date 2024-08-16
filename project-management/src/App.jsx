import { useState } from "react";
import AddProject from "./components/AddProject";
import Project from "./components/Project";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProject from "./components/NoProject";

const initialProjects = [
  {
    projectId: 1,
    title: "Learning React",
    dueDate: new Date(2024, 11, 29),
    description: `Learn React from the group up
  
Start with the basics, finish with advanced knowledge.`,
  },
  {
    projectId: 2,
    title: "Learn Java",
    description: "Learn basics\n\nLearn advanced concepts",
    dueDate: new Date("2024-10-01"),
  },
];

const initialTasks = [
  { projectId: 1, task: "Learn the basics", id: 1 },
  { projectId: 1, task: "Learn advanced concepts", id: 2 },
];

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: initialProjects,
    tasks: initialTasks,
  });
  const [addingProject, setAddingProject] = useState(false);

  function handleSelect(projectId) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleAddProject() {
    setAddingProject(true);
  }

  function handleAddProjectCancel() {
    setAddingProject(false);
  }

  function handleAddNewProject(project) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        projects: [
          ...prevProjectsState.projects,
          { ...project, projectId: Math.random() },
        ],
      };
    });
    setAddingProject(false);
  }

  function handleDelete(projectId) {
    setProjectsState((prevProjectsState) => {
      let updatedProjects = [...prevProjectsState.projects];
      updatedProjects = updatedProjects.filter(
        (project) => project.projectId === projectId,
      );
      return {
        ...prevProjectsState,
        projects: updatedProjects,
      };
    });
    setSelectedProjectId(undefined);
  }

  function handleAddTask(newTask) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        tasks: [
          ...prevProjectsState.tasks,
          {
            projectId: prevProjectsState.selectedProjectId,
            task: newTask,
            id: Math.random(),
          },
        ],
      };
    });
  }

  function handleDeleteTask(projectId, taskId) {
    setProjectsState((prevProjectsState) => {
      let updatedTasks = [...prevProjectsState.tasks];
      const idx = updatedTasks.findIndex(
        (task) => task.projectId === projectId && task.id === taskId,
      );
      updatedTasks.splice(idx, 1);
      return {
        ...prevProjectsState,
        tasks: updatedTasks,
      };
    });
  }

  return (
    <main className="flex h-screen gap-8">
      <div className="w-1/3 md:w-72">
        <ProjectSidebar
          projects={projectsState.projects}
          onSelectProject={handleSelect}
          onAddProject={handleAddProject}
          selectedProjectIndex={projectsState.selectedProjectId}
        />
      </div>
      <div className="flex-1 px-20 pt-20">
        {addingProject ? (
          <AddProject
            onCancel={handleAddProjectCancel}
            onSubmit={handleAddNewProject}
          />
        ) : projectsState.selectedProjectId ? (
          <Project
            index={projectsState.selectedProjectId}
            project={projectsState.projects.find(
              (project) =>
                project.projectId === projectsState.selectedProjectId,
            )}
            onDelete={() => handleDelete(projectsState.selectedProjectId)}
            tasks={projectsState.tasks.filter(
              (task) => task.projectId === projectsState.selectedProjectId,
            )}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
          />
        ) : (
          <NoProject onCreateProject={handleAddProject} />
        )}
      </div>
    </main>
  );
}

export default App;
