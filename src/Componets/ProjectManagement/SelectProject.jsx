import React from "react"
import Task from "./Task"

export default function SelectProject({project,onDelete,onDeleteTask,onAddTask,tasks}){
    return(
        <div>
       <div className="TitleSection"> 
       <div className="d-flex justify-content-between">
        <div>
       <h5 className="mb-0"> {project.title} </h5>
       <p className="mb-0 fs-12 text-secondary"> Date : <span>{project.dueDate}</span></p>
       </div>
       <div> <button onClick={onDelete} className="btn btn-outline-danger"> Delete </button> </div>
       </div>
        </div>
        <div className="descriptionSection my-3">
            <p> {project.description} </p>
            {/* <p>{project.dueDate}</p> */}
        </div>
        <div className="task-section">
            <Task onDelete={onDeleteTask} onAdd={onAddTask} tasks={tasks}></Task>
        </div>
        </div>
    )
}