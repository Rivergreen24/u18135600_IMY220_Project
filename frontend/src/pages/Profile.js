// pages/Profile.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProfileComp from "../components/ProfileComp";
import UserProjects from "../components/UserProjects";
import Friends from "../components/Friends";

const Profile = () => {
  const { id: userIdParam } = useParams();
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ username: "", bio: "" });

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = userIdParam || storedUser?.userId;

  const isOwnProfile = storedUser && storedUser.userId === userId;

  useEffect(() => {
    if (!userId) {
      window.location.href = "/";
      return;
    }

    const fetchUserData = async () => {
      try {
        const userRes = await fetch(`/api/users/${userId}`);
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();
        setUser(userData);

        // Pre-fill edit form
        setFormData({ username: userData.username, bio: userData.bio || "" });

        const allProjectsRes = await fetch(`/api/projects`);
        if (!allProjectsRes.ok) throw new Error("Failed to fetch projects");
        const allProjects = await allProjectsRes.json();

        const userCreatedProjects = allProjects.filter(
          (p) => p.owner === userData.userId
        );
        const userSavedProjects = allProjects.filter((p) =>
          userData.savedProjects.includes(p.projectId)
        );

        setProjects([...userCreatedProjects, ...userSavedProjects]);

        // Fetch friends
        const friendsData = [];
        for (let friendId of userData.friends) {
          const friendRes = await fetch(`/api/users/${friendId}`);
          if (friendRes.ok) {
            const friend = await friendRes.json();
            friendsData.push(friend);
          }
        }
        setFriends(friendsData);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = async () => {
    try {
        console.log("ahoy");
        
      const res = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
                console.log("Response status:", res.status);
      if (!res.ok) throw new Error("Failed to update profile");

      const updatedUser = await res.json();
      setUser(updatedUser);

      localStorage.setItem("user", JSON.stringify(updatedUser));
      setEditing(false);    
    } catch (err) {
      console.log(err.message);
    }
  };

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!user) return <p>No user found.</p>;

  return (
    <div className="profile-container">
      <Header />
      <h2 className="page-title">{user.username}'s Profile</h2>
      <ProfileComp profileData={user} />

      {isOwnProfile && !editing && (
        <button onClick={handleEditClick} className="edit-btn">
          Edit Profile
        </button>
      )}

      {editing && (
        <div className="edit-form">
          <h3>Edit Profile</h3>
          <label>
            Username:
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </label>

          <label>
            Bio:
            <textarea
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
            />
          </label>

          <div className="edit-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}

      <Friends friends={friends} />
      <UserProjects projects={projects} />
    </div>
  );
};

export default Profile;
