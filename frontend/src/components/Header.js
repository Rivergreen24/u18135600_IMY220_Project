import React from "react";
import ReactDom from "react-dom/client";

import { BrowserRouter, Routes, Route, Link  } from "react-router";

const Header =()=>{
    return(
        <nav>
            <ul>
                <li><Link to="/">Splash</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/project/1">Project</Link></li>
                <li><Link to="/profile/1">Profile</Link></li> 
            </ul>
        </nav>
    )
}

export default Header;