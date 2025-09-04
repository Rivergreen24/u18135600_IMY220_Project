import React from "react";
import ReactDom from "react-dom/client";

import { BrowserRouter, Routes, Route, Link  } from "react-router";

const Navbar =()=>{
    return(
        <nav>
            <ul>
                <li><Link to="/">Splash</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/project/0">Project</Link></li>
                <li><Link to="/profile/0">Profile</Link></li> 
            </ul>
        </nav>
    )
}

export default Navbar;