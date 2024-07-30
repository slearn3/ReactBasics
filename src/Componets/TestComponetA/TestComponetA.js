import  React from "react";
import { useState } from 'react';


function TestComponetA (props) {
    const[state, setStae] = useState("UseState Here");
    
    const[value, setValue] = useState(0);
    return(
<frameElement>
    <div className="container">
    <h5> Componets  </h5>
    <p> {props.Name} </p>
    <h3> {state} </h3>
    <h3> {value} </h3>
    <button onClick = {()=> setStae("SetState Here")} className="btn btn-outline-info me-2"> Change State </button>
    <button onClick = {()=> setValue(value+1)} className="btn btn-outline-primary me-2"> Increment </button>
    <button onClick = {()=> setValue(value-1)} className="btn btn-outline-warning me-2"> Decrement </button>
    <button onClick = {()=> setValue(0)} className="btn btn-outline-secondary me-2"> Reset </button>
    </div>
    
</frameElement>
    );
}

export default TestComponetA;