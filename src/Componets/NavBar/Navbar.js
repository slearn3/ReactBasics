import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navGationBar } from "../../Config/NavgationConfig.ts";
import logo from "../../Assets/images/logo.jpg";
import profile from "../../Assets/images/profile.jpg";


function NavBar(props) {
  const [prName, setprName] = useState("Abiel Joshua Joseph");
  //setprName("Abiel Joshua Joseph");
  // function activeClassHandel(activeClass){
  //   var elems = document.querySelectorAll(".nav-link");

  //   for (let elem of elems) {
  //       elem.classList.remove('active');
  //   }

  //   document.getElementById(activeClass).classList.add("active");

  // }
  const [activeClass, setActiveClass] = useState('');

  const activeClassHandel = (newActiveClass) => {
    setActiveClass(newActiveClass);
  };

  return (
    <div>
      <div class="navBrand-profile">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" data-themekey="#" />
        </a>
        <span class="navbar-text"><div class="nav-item "><a class="nav-link" href="#" id="navbarDropdown" role="button">
          <img class="rounded-circle" width="30" height="30" src={profile} alt="" data-themekey="#" />
        </a>
          <div><span class="d-block text-dark font-family-medium"> {prName} </span><small class="fs-12 text-center text-secondary"> Admin </small></div>
        </div>
        </span>
      </div>
      <ul className="navbar-nav me-auto flex-column pt-7">
        {/* <li className="nav-item">
          <Link className="nav-link" to={"/ProjectManagement"}>Project Management</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/TestComponetA"}>Test ComponetA</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/TestComponetB"}>Test ComponetB</Link>
        </li> */}
        {
          navGationBar.map((navItem) => (
            <li className="nav-item">
              <Link onClick={()=>activeClassHandel(navItem.Name)} className={`nav-link ${activeClass === navItem.Name ? 'active' : ''}`} id={navItem.link} to={navItem.link} >{navItem.Name}</Link>
            </li>
          ))


        }
        <li className="nav-item">
          <Link className="nav-link" to={"/RegistrationForm"}> Registration Form</Link>
        </li>
      </ul>

    </div>
  );
}
export default NavBar;