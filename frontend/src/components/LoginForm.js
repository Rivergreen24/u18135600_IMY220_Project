import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // prevent page refresh

        //Basic validation before sending request, do more complex to make it look prettier later
        if (!email || !password) {
            setError("Both fields are required.");
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

        // clear any old error
        setError("");

        try {
            const response = await fetch("/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("token", data.token);
                console.log("stubbing complete");
                navigate('/home');
            } else {
                setError("Invalid login (stubbed)");
            }
        } catch (err) {
            console.log('Fetch error:', err);
            setError("Error logging in: " +err.message);
        }
    };


    return (
        <form onSubmit={handleLogin}>
            <h2>Login:</h2>
            <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
            {error && <p>{error}</p>}
            <button type="submit">Login</button>
        </form>
    )
}


export default LoginForm;