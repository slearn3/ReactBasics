import { Button } from "antd";
import Item from "antd/es/list/Item";
import React, { useState } from "react";
function RegistrationForm(props) {
    // const [state, setState] = useState({
    //     fName: "",
    //     lName: "",
    //     password: "",
    //     email: ""
    // })
    const [AllData,setAllData] = useState([]);
    const [Fname,setFname] = useState("");
    const [Lname,setLname] = useState("");
    const [email,setemail] = useState("");
    const [password,setPassword] = useState("");
    //console.log(state.fName, state.lName);
    //const myArray = [];
    const handleSubmit = (event) => {
        // console.log(Fname);
        // console.log(Lname);
        // console.log(email);
        
        var Temp=[];
        var obj={
            Fname:Fname,
            Lname:Lname,
            email:email
        };

        Temp.push(obj);
        setAllData(Temp);

        // alert();
         event.preventDefault();
          
    };
   //const myArray = ['Fname', 'Lname', 'email'];
   
   
    return (
        <div className="container">
            {/* <h1> {props.PartyName}</h1> */}
        {/* {
            myArray.map((reValues) => <p>{reValues} </p>)
        } */}
            <form>
                <div className="form-group">
                    <label className="form-label">First Name </label>
                    <input className="form-control" type="text" onChange={(e) => { setFname(e.target.value) }} />

                </div>
                <div className="form-group">
                    <label className="form-label">Last Name </label>
                    <input className="form-control" type="text" onChange={(e) => { setLname( e.target.value ) }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Email </label>
                    <input className="form-control" type="text" onChange={(e) => { setemail(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Password </label>
                    <input className="form-control" type="text" onChange={(e) => { setPassword( e.target.value ) }} />
                </div>

                <div className="form-group">
                    <Button className="form-control" type="primary" onClick={handleSubmit}  > Submit </Button>
                </div>

                <table className="table ">
                    <thead>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {AllData.map((Item,Index)=>{
                            return (
                                <tr>
                                    <td>{Item.Fname}</td>
                                    <td>{Item.Lname}</td>
                                    <td>{Item.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </form>
        </div>
    )
}
export default RegistrationForm;