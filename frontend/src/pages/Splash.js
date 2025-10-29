import React, { useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

//get the login and signup comps

const Splash = () => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    // if (user) {
    //   // User already logged in, redirect to Home
    //   window.location.href = "/home";
    // }
  }, []);
    return (
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