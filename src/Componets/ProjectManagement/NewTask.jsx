import { useState } from "react"

export default function Newtask({onAdd}){
    const [enterdTask , setEnterdTask] = useState("");
    const [error, setError] = useState("");
 console.log(enterdTask);

 function handelChnage(event){
    setEnterdTask(event.target.value);
 }
 function handleClick(){

    if(enterdTask === ""){
        setError("Please enter Data here");
        return;
    }
    onAdd(enterdTask);
    setEnterdTask("");
 }

    return(
        <div className="d-flex">
            <div className="form-group w-75 me-2">
            <label> Task Deatils </label>
           
            <input type="text" onChange={handelChnage} value={enterdTask}  className="form-control"/>
          
            <span> {error} </span>
            
             </div>
            <div> <button onClick={handleClick} className="btn btn-outline-success mt-4"> Add Task  </button></div>
        </div>
    )
}