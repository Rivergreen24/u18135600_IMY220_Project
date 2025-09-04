import React from "react";
import { Link } from "react-router";
import Navbar from "../components/navbar";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

//get the login and signup comps

const Splash =()=>{
    return(
        <div>
            <h2>Hello, this is the splash kaboom!</h2>
            <LoginForm/>
            <SignUpForm/>
        </div>
    )
}

export default Splash;