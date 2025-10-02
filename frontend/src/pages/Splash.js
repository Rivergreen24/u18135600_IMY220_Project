import React from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

//get the login and signup comps

const Splash =()=>{
    return(
        <div className="splash-page">
            <h1 className="splash-title">Welcome to ALYXX</h1>
            <div className="auth-forms">
                <LoginForm />
                <SignUpForm />
            </div>
        </div>
    )
}

export default Splash;