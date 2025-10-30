import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Splash from "./pages/Splash";    
import Project from "./pages/Project";
import Profile from "./pages/Profile";
// import Logo from "./assets/Logo.png"



export const App = () => {

    return (
        <BrowserRouter>
            <div className="app-title">
                
                <img src="/assets/Logo.png" alt="logo" className="Logo" /><h1>ALYXX</h1>
            </div>
            <Routes>
                <Route path="/" element={<><Splash/></>}/>
                <Route path="/home" element={<><Home/></>}/>
                {/* this is the dynamic ones */}
                <Route path="/project/:id" element={<Project/>}/> 
                <Route path="/profile/:id" element={<Profile/>}/>
            </Routes>


        </BrowserRouter>

    );
}
