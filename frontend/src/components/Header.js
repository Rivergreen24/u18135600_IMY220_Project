import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";

const Header = () => {
    return (
        <nav className="header-nav">
            <div className="container">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Splash</Link></li>
                    <li className="nav-item"><Link to="/home">Home</Link></li>
                    <li className="nav-item"><Link to="/project/1">Project</Link></li>
                    <li className="nav-item"><Link to="/profile/1">Profile</Link></li>
                </ul>
            </div>

        </nav>
    )
}

export default Header;