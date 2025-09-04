import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Splash from "./pages/Splash";    
import Project from "./pages/Project";
import Navish from "./components/navish";
import Profile from "./pages/Profile";



export const App = () => {

    return (
        <BrowserRouter>
            <div>
                <h1>ALYXX</h1>
            </div>
            <Routes>
                <Route path="/" element={<><Navish/><Splash/></>}/>
                <Route path="/home" element={<><Home/></>}/>
                {/* this is the dynamic ones */}
                <Route path="/project/:id" element={<Project/>}/> 
                <Route path="/profile/:id" element={<Profile/>}/>
            </Routes>


        </BrowserRouter>

    );
}
















// function Home() {
//     return <h1>Home</h1>
// }


// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }
            // <nav>
            //     <Link to="/">Home</Link> 
            //     <Link to="/about">About</Link> 
            //     <Link to="/contact">Contact</Link>
            // </nav>

            // {/* Routes */}
            // <Routes>
            //     <Route path="/" element={<Home />} />
            //     <Route path="/about" element={<About />} />
            //     <Route path="/contact" element={<Contact />} />
            // </Routes>
