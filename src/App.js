import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'; // Import useState directly
import TestComponetA from './Componets/TestComponetA/TestComponetA';
import TestComponetB from './Componets/TestComponetB/TestComponetB';
import BjpParty from './Componets/BJP/BjpParty';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Componets/NavBar/Navbar';
import '../src/Assets/css/bootstrap.min.css'
import '../src/Assets/css/custom.css'
import TdpParty from './Componets/TDP/TdpParty';
import YsrcpParty from './Componets/YSRCP/YsrcpParty';
import IncParty from './Componets/INC/IncParty';
import TopNav from './Componets/TopNav/TopNav';
import RegistrationForm from './Componets/RegistrationForm/RegistrationForm';
import ProjectManagement from './Componets/ProjectManagement/ProjectManagement';




function App(props) {
  const [number, setNumber] = useState("Use State"); // Fix typo here

  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);



  useEffect(() => {
    setNumber("100");
  }, []); // Add empty dependency array for useEffect to run once

  return (
    <div className="reactBasic-Project">
      {/* Commented out header section */}
      {/* {message} */}
<div className='leftSection'>
      <NavBar className=""></NavBar>
      </div>

<div className='rightBodySection'>
  <TopNav > </TopNav>
      <Routes>
        <Route path='/ProjectManagement' element={<ProjectManagement  />} />
        <Route path='/TestComponetA' element={<TestComponetA Name="pass the data from parent to child" />} />
        <Route path='/TestComponetB' element={<TestComponetB Name="Test ComponetB" />} />
        <Route path='/BJP' element={<BjpParty PartyName="BJP" />} />
        <Route path='/TDP' element={<TdpParty PartyName="TDP" />} />
        <Route path='/YSRCP' element={<YsrcpParty PartyName="YSRCP" />} />
        <Route path='/INC' element={<IncParty PartyName="Indian National Congress" />} />
        <Route path='/RegistrationForm' element={<RegistrationForm PartyName="Registration Form" />} />
        

      </Routes>
 </div>

 <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
 
    </div>
  );
}

export default App;
