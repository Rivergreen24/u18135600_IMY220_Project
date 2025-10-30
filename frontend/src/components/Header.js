// components/Header.jsx
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
    window.location.href = "/";
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Logo */}

        {/* Navigation */}
        <nav className="header-nav">
          {user ? (
            <>
              <Link to="/home" className="nav-link">Home</Link>
              <Link to={`/profile/${user.userId}`} className="nav-link">Profile</Link>
              <button onClick={handleLogout} className="nav-btn">Log Out</button>
            </>
          ) : (
            <Link to="/" className="nav-link">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;