 import React, { useEffect } from 'react'
 import { useState } from 'react';
 import {Link, useLocation} from 'react-router-dom';
 import "../styles/Navbar.css";
 import ReorderIcon from "@mui/icons-material/Reorder";

 function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    //When a new page is chosen close the drop down menu
    useEffect(() =>{
        setExpandNavbar(false);
    },[location]);

   return (
     <div className='navbar' id= {expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button
            onClick={() => setExpandNavbar((prev) => !prev)}>
            <ReorderIcon/>
            </button>
        </div>
        <div className = 'links'>
            <Link to="Personal-CV/home">Home</Link>
            <Link to="Personal-CV/projects">Projects</Link>
            <Link to="Personal-CV/experience">Experience</Link>
        </div>
     </div>
   )
 }
 
 export default Navbar