import React from "react";
import ReactDom from "react-dom/client";

import { BrowserRouter, Routes, Route, Link  } from "react-router";

const Navbar =()=>{
    return(
        <nav>
            <Link to="/">Splash</Link>
            <Link to="/home">Home</Link>
            <Link to="/project">Project</Link>
        </nav>
    )
}

export default Navbar;