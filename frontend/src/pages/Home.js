import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Feed from "../components/Feed";
import SearchInput from "../components/SearchInput";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.username);
    }

    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError("Could not load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="home-container">
      <h2 className="home-header">Home Page</h2>
      <Header />
      
      {/* Welcome message */}
      {username && <p>Welcome, {username}!</p>}

      <SearchInput />
      <Feed projects={projects} />
    </div>
  );
};

export default Home;
