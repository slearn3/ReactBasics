import NewProject from "./NewProject";
import ProjectSideBar from "./ProjectSidebar";
import NoProject from "./NoProject";
import React, { useState } from "react";
import SelectProject from "./SelectProject";

export default function ProjectManagement() {
    const [projectsState, setprojectsState] = useState({
        selectedProjetId: undefined,
        projects: [],
        tasks: []
    });

    function handleAddTask(text) { 
        setprojectsState(prevState => {
            const taskId = Math.random()
            const newTask = {
                text:text,
                projectId :prevState.selectedProjetId,
                id: taskId,

            }
            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask]
                
            }
        })
        
    }
    function handleDeleteTask(id) { 
        console.log(projectsState);
        setprojectsState(prevState => {
            return {
                ...prevState,
                //selectedProjetId: undefined,
                tasks: prevState.tasks.filter((task) => task.id !== id)
            }
        })
    }

    function handleSelectProject(id) {
        setprojectsState(prevState => {
            return {
                ...prevState,
                selectedProjetId: id,
            }
        })
    }
    function handleDeleteProject() {
        console.log(projectsState);
        setprojectsState(prevState => {
            return {
                ...prevState,
                selectedProjetId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjetId)
            }
        })
    }

    function handleStartAddProject() {
        setprojectsState(prevState => {
            return {
                ...prevState,
                selectedProjetId: null,
            }
        })
    }
    function handleCancleAddProject() {
        setprojectsState(prevState => {
            return {
                ...prevState,
                selectedProjetId: undefined,
            }
        })
    }
    function handleAddProject(projectData) {
        setprojectsState(prevState => {
            const projectId = Math.random()
            const newProject = {
                ...projectData,
                id: projectId,

            }
            return {
                ...prevState,
                selectedProjetId:undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }
    console.log(projectsState.projects)
    const selectProject = projectsState.projects.find(project => project.id === projectsState.selectedProjetId);
    //const selectTask = projectsState.tasks.find(task =>task.id === projectsState.selectedProjetId)
    let data = <SelectProject  project={selectProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} ></SelectProject>;

    if (projectsState.selectedProjetId === null) {
        data = <NewProject onAdd={handleAddProject} onCancle={handleCancleAddProject}></NewProject>
    } else if (projectsState.selectedProjetId === undefined) {
        data = <NoProject onStartAddProject={handleStartAddProject}></NoProject>
    }
    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <ProjectSideBar selectedProjectId={projectsState.selectedProjetId} onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} project={projectsState.projects}></ProjectSideBar>
                </div>
                <div className="col-sm-9">
                    {/* <NoProject onStartAddProject={handleStartAddProject}></NoProject> */}
                    {data}
                </div>

            </div>
        </main>
    )
}