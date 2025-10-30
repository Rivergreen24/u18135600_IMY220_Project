
import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const Splash = () => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    // if (user) window.location.href = "/home";
  }, []);

  return (
    <div className="splash-wrapper">
      {/* PARALLAX BACKGROUND */}
      <div className="parallax-bg"></div>

      {/* HERO SECTION */}
      <section className="splash-hero">
        <p className="splash-tagline">Code. Commit. Control.</p>
        <p className="splash-info">
          Whether you're a <strong>solo developer</strong> or a <strong>large team</strong>, 
          ALYXX makes code versioning <strong>simple</strong> and <strong>reliable</strong>.
        </p>
      </section>

      {/* AUTH SECTION */}
      <section className="splash-auth">
        <div className="auth-container">
          <LoginForm />
          <SignUpForm />
        </div>
      </section>
    </div>
  );
};

export default Splash;