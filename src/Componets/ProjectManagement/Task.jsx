import Newtask from "./NewTask";

export default function Task({tasks,onAdd,onDelete}){
    return(
        <div className="taskInformation">
            <h5>Task Details</h5>
            <Newtask onAdd={onAdd}></Newtask>
            <div className="w-75">
                {tasks.length === 0 && (
                    <p>Project does Not have Task yet  </p>
                )}
                {tasks.length > 0 && (
                    <ul>
                        {tasks.map((task) =>(
                            <li className="d-flex justify-content-between" key={task.id}> <span> {task.text}</span>
                            <button className="btn btn-outline-danger" onClick={()=>onDelete(task.id)}> Clear </button>
                            
                             </li>
                         ))}
                    </ul>
                )
                
                }
                
            </div>
            
          
        </div>
    )
}