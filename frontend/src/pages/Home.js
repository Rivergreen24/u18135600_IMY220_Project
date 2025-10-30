// pages/Home.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Feed from "../components/Feed";
import SearchInput from "../components/SearchInput";
import '../css/HomePage.css';


const Home = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [isLocal, setIsLocal] = useState(true); // Start on Local Feed

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const currentUserId = storedUser.userId;

  // Fetch current user and all projects
  useEffect(() => {
    if (!currentUserId) {
      window.location.href = "/login";
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch current user
        const userRes = await fetch(`/api/users/${currentUserId}`);
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();
        setUsername(userData.username);

        // Fetch all projects
        const projRes = await fetch("/api/projects");
        if (!projRes.ok) throw new Error("Failed to fetch projects");
        const allProjectsData = await projRes.json();

        const sorted = allProjectsData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setAllProjects(sorted);

        // Start with Local Feed
        filterLocalFeed(sorted, userData);
      } catch (err) {
        console.error(err);
        setError("Could not load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUserId]);

  // Re-filter when toggle changes
  useEffect(() => {
    if (!allProjects.length) return;

    const refreshAndFilter = async () => {
      try {
        const userRes = await fetch(`/api/users/${currentUserId}`);
        if (!userRes.ok) return;
        const userData = await userRes.json();

        if (isLocal) {
          filterLocalFeed(allProjects, userData);
        } else {
          setDisplayedProjects(allProjects);
        }
      } catch (e) {
        console.error("Failed to refresh user");
      }
    };

    refreshAndFilter();
  }, [isLocal, allProjects, currentUserId]);

  // Filter Local Feed
  const filterLocalFeed = (projects, userData) => {
    const created = projects.filter(p => p.owner === currentUserId);
    const saved = projects.filter(p =>
      (userData.savedProjects || []).includes(p.projectId)
    );
    const localProjects = [...created, ...saved];

    console.log("LOCAL FEED (from DB):", localProjects.map(p => p.projectId));

    setDisplayedProjects(localProjects);
  };

  // Fetch owner and contributors usernames
  useEffect(() => {
    if (!displayedProjects.length) return;

    const fetchUsernames = async () => {
      try {
        // Collect all unique user IDs (owners + members)
        const userIds = new Set();
        displayedProjects.forEach(p => {
          userIds.add(p.owner);
          (p.members || []).forEach(m => userIds.add(m));
        });

        const userMap = {};
        for (let id of userIds) {
          const res = await fetch(`/api/users/${id}`);
          if (res.ok) {
            const u = await res.json();
            userMap[id] = u.username;
          } else {
            userMap[id] = "Unknown";
          }
        }

        // Map usernames into each project
        setDisplayedProjects(prev =>
          prev.map(p => ({
            ...p,
            ownerName: userMap[p.owner] || "Unknown",
            membersData: (p.members || []).map(m => ({
              userId: m,
              username: userMap[m] || "Unknown"
            }))
          }))
        );
      } catch (err) {
        console.error("Failed to fetch usernames", err);
      }
    };

    fetchUsernames();
  }, [displayedProjects]);

  if (loading) return <p>Loading projects…</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="home-container">
      <Header />
      <h2 className="home-header">Home Page</h2>

      {/* SINGLE TOGGLE BUTTON */}
      
      {/* SEARCH BAR */}
      <SearchInput allProjects={allProjects} currentUserId={currentUserId} />
      <div style={{ textAlign: "center", margin: "1rem 0" }}>
        <button
          onClick={() => setIsLocal(prev => !prev)}
          className="btn btn-toggle"
        >
          {isLocal ? "Local Feed" : "Global Feed"}
        </button>
      </div>

      <Feed projects={displayedProjects} />
    </div>
  );
};

export default Home;
