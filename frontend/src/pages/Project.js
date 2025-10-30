import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Files from "../components/Files";
import Messages from "../components/Messages";
import EditProject from "../components/EditProject";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [contributorsData, setContributorsData] = useState([]);
  const [activeTab, setActiveTab] = useState("files");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  useEffect(() => {
    if (!project?.owner) return;
    const fetchOwner = async () => {
      try {
        const res = await fetch(`/api/users/${project.owner}`);
        if (res.ok) {
          const data = await res.json();
          setOwnerName(data.username);
        }
      } catch (err) {
        setOwnerName("Unknown");
      }
    };
    fetchOwner();
  }, [project?.owner]);

  useEffect(() => {
    if (!project?.members?.length) {
      setContributorsData([]);
      return;
    }
    const fetchContributors = async () => {
      const data = [];
      for (let uid of project.members) {
        try {
          const res = await fetch(`/api/users/${uid}`);
          if (res.ok) {
            const u = await res.json();
            data.push(u);
          } else {
            data.push({ userId: uid, username: "Unknown" });
          }
        } catch {
          data.push({ userId: uid, username: "Unknown" });
        }
      }
      setContributorsData(data);
    };
    fetchContributors();
  }, [project?.members]);

  const isOwner = currentUser?.userId === project?.owner;

  const handleRemoveMember = async (userId) => {
    if (!isOwner) return alert("Only owner can remove members");
    if (!confirm("Remove this member?")) return;

    try {
      await fetch(`/api/projects/${id}/members`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const res = await fetch(`/api/projects/${id}`);
      const data = await res.json();
      setProject(data);
    } finally {
      // optional: 
    }
  };

  const handleTransferOwnership = async (newOwnerId) => {
    if (!isOwner) return alert("Only owner can transfer");
    if (!confirm("Transfer ownership?")) return;

    try {
      await fetch(`/api/projects/${id}/owner`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newOwnerId }),
      });

      const res = await fetch(`/api/projects/${id}`);
      const data = await res.json();
      setProject(data);
      alert("Ownership transferred!");
    } catch (err) {
      console.error("Failed to transfer ownership", err);
    }
  };

  const handleDeleteProject = async () => {
    if (!isOwner) return alert("Only owner can delete");
    if (!confirm("Delete this project permanently?")) return;

    try {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      navigate("/");
    } catch (err) {
      console.error("Failed to delete project", err);
    }
  };

  const isMember = project?.members?.includes(currentUser?.userId);

  const handleAddMember = async () => {
    if (!isMember && !isOwner) return alert("Only members/owner can add");
    const friendId = prompt("Enter friend userId:");
    if (!friendId) return;

    try {
      await fetch(`/api/projects/${id}/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: friendId }),
      });

      const res = await fetch(`/api/projects/${id}`);
      const data = await res.json();
      setProject(data);
    } catch (err) {
      console.error("Failed to add member", err);
    }
  };

  if (loading) return <p>Loading project...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!project) return <p>Project not found.</p>;

  return (

    <>
      <Header />

      <div className="project-container">

        <h2 className="page-title">{project.name}</h2>
        <div className="project-id">ID: {project.projectId}</div>

        {/* Description */}
        <div className="project-section">
          <p>{project.description}</p>
          <div>
            {project.hashtags?.map((tag, i) => (
              <span key={i} className="hashtag">#{tag}</span>
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="info-grid">
          <div className="info-card">
            <h3>Project Info</h3>

            <p>
              <strong>Owner:</strong>{" "}
              <Link to={`/profile/${project.owner}`} className="link">
                {ownerName}
              </Link>
            </p>

            <p>
              <strong>Contributors:</strong>{" "}
              {contributorsData.length > 0 ? (
                contributorsData.map((u, i) => (
                  <span key={u.userId}>
                    <Link to={`/profile/${u.userId}`} className="link">
                      {u.username}
                    </Link>
                    {i < contributorsData.length - 1 && ", "}
                    {isOwner && (
                      <button
                        onClick={() => handleRemoveMember(u.userId)}
                        className="remove-btn"
                        title="Remove"
                      >
                        x
                      </button>
                    )}
                  </span>
                ))
              ) : (
                "None"
              )}
              {isMember && (
                <button onClick={handleAddMember} className="add-btn">
                  + Add Friend
                </button>
              )}
            </p>

            <p><strong>Type:</strong> {project.type || "N/A"}</p>
            <p><strong>Version:</strong> {project.version || "1.0"}</p>
            <p><strong>Created:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="status-badge">
                {project.status === "checked_in" ? "Checked In" : "Checked Out"}
              </span>
            </p>

            {/* Owner Controls */}
            {isOwner && (
              <div className="owner-controls" style={{ marginTop: "1rem" }}>
                <button onClick={handleDeleteProject} className="delete-btn">
                  Delete Project
                </button>
                <select
                  onChange={(e) => handleTransferOwnership(e.target.value)}
                  defaultValue=""
                  style={{ marginLeft: "0.5rem" }}
                >
                  <option value="" disabled>Transfer Ownership...</option>
                  {contributorsData.map((u) => (
                    <option key={u.userId} value={u.userId}>
                      {u.username}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="image-card">
            {project.image ? (
              <img src={project.image} alt={project.name} className="project-image" />
            ) : (
              <div className="no-image">No Image</div>
            )}
          </div>
        </div>

        <div className="tab-container">
          <div className="tab-nav">
            <button
              className={`tab-button ${activeTab === "files" ? "active" : ""}`}
              onClick={() => setActiveTab("files")}
            >
              Files ({(project.files || []).length})
            </button>
            <button
              className={`tab-button ${activeTab === "messages" ? "active" : ""}`}
              onClick={() => setActiveTab("messages")}
            >
              Check-ins ({(project.checkins || []).length})
            </button>

            {/* ONLY SHOW DISCUSSION TAB TO MEMBERS */}
            {(isMember || isOwner) && (
              <button
                className={`tab-button ${activeTab === "discussion" ? "active" : ""}`}
                onClick={() => setActiveTab("discussion")}
              >
                Discussion ({(project.discussion || []).length})
              </button>
            )}
          </div>

          <div className="tab-content">
            {activeTab === "files" && (
              <Files
                files={project.files || []}
                projectId={id}
                isMember={isMember || isOwner}
                onUpdate={(updatedProject) => setProject(updatedProject)}
              />
            )}
            {activeTab === "messages" && (
              <div className="messages-log">
                <Messages messages={project.checkins || []} />
              </div>
            )}

            {/* ONLY SHOW DISCUSSION CONTENT TO MEMBERS */}
            {(isMember || isOwner) && activeTab === "discussion" && (
              <div className="discussion-section">
                <Messages
                  messages={project.discussion || []}
                  projectId={id}
                  isMember={isMember || isOwner}
                  onUpdate={(updated) => setProject(updated)}
                />
              </div>
            )}
          </div>

          
        </div>

        {/* Edit Project */}
        {(isOwner || isMember) && (
          <div className="edit-section">
            <EditProject
              project={project}
              onUpdate={(updated) => setProject(updated)}
            />
          </div>
        )}
      </div>
    </>

  );
};

export default Project;