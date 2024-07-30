import Input from "./Input";
import { useRef, useState } from "react";

export default function NewProject({onAdd,onCancle}){
    const [errarValue,seterrarValue] = useState("")
const title = useRef();
const description = useRef();
const dueDate = useRef();
//let title= useRef();
function handleSave(){
    const enterdTitle = title.current.value;
    const enterdDescription = description.current.value;
    const enterdDueDate = dueDate.current.value;

 if(enterdTitle==="" || enterdDescription === "" || enterdDueDate === ""){
seterrarValue("Please Enter  Data Here");
 } else {
    seterrarValue("Thank You")
 }

    onAdd({
        title: enterdTitle,
        description:enterdDescription,
        dueDate:enterdDueDate,
        errarValuetext:errarValue
    });
}



    return(
        <div>
            <div className="row"> 
            <div className="col-sm-6"> <span className={title === "" ? "text-danger":"text-success"}>{errarValue} </span> </div>
            <div className="col-sm-6 text-end">
                <button onClick={onCancle} className="btn btn-outline-dark me-3"> Clear </button>
                <button onClick={handleSave} className="btn btn-outline-primary"> save </button>
            </div>
             </div>

             <div className="row">
                <div className="col-sm-12">
                    <Input ref={title} type="text" label="Title"/>
                </div>
                <div className="col-sm-12">
                    <Input ref={description} textarea label="Description"/>
                </div>
                <div className="col-sm-12">
                    <Input ref={dueDate} type="Date" label="Due Date"/>
                </div>
             </div>

        </div>
    )
}