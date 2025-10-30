import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import ProjectComp from "../components/ProjectComp";
import Files from "../components/Files";
import Messages from "../components/Messages";
import EditProject from "../components/EditProject";

const Project = () => {
  const { id } = useParams(); // projectId
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p>Loading project...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-container">
      <Header />
      <h2 className="page-title">{project.name}</h2>

      <section className="project-section">
        <ProjectComp projectData={project} />
      </section>

      <section className="project-section">
        <Files files={project.files || []} />
      </section>

      <section className="project-section">
        <Messages messages={project.messages || []} />
      </section>

      <section className="project-section">
        <EditProject project={project} />
      </section>
    </div>
  );
};

export default Project;
