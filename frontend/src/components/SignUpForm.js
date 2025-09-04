import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSignup = async (e) => {
    e.preventDefault();

    //very basic varification, make changes to make it better
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);

        navigate("/profile/2");
      } else {
        setError("Signup failed (stubbed)");
      }
    } catch (err) {
      setError("Error signing up");
    }
  };

    return (
        <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  /></label>
            <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
            <label>Confirm Password: <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  /></label>
            {error && <p>{error}</p>}
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpForm;