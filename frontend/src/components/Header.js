import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/"; // redirect to splash/login page
    };

    return (
        <nav className="header-nav">
            <div className="container">
                <ul className="nav-list">
                    {user ? (
                        <>
                            <li className="nav-item">
                                <button onClick={handleLogout}>Log Out</button>
                            </li>
                            <li className="nav-item">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/profile/${user.userId}`}>Profile</Link>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link to="/">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
