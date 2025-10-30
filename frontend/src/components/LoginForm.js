import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Both fields are required.");
            return;
        }
        if (!isValidEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                // Store the user info including userId in localStorage
                const userWithId = {
                    userId: data.user.userId, // <- make sure backend returns this
                    username: data.user.username,
                    email: data.user.email
                };
                localStorage.setItem("user", JSON.stringify(userWithId));

                console.log("Login successful:", userWithId);
                navigate("/home");
            } else {
                setError(data.message || "Invalid login");
            }
        } catch (err) {
            console.error(err);
            setError("Error logging in: " + err.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="splash-button" type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
