import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProjectComp from "../components/ProjectComp";
import Files from "../components/Files";
import Messages from "../components/Messages";
import EditProject from "../components/EditProject";

const Project = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      window.location.href = "/"; // redirect if not logged in
      return;
    }
    setUser(JSON.parse(storedUser));
  }, []);

  if (!user) return null;

  // For now, you can fetch project by id from backend later
  const dummyProject = { title: 'Project One', description: 'Description for project 1' };
  const dummyFiles = ['file1.txt', 'file2.js'];
  const dummyMessages = ['Check-in: Updated file1', 'Check-out: Reviewed changes'];

  return (
    <div className="project-container">
      <h2 className="page-title">Project Page</h2>
      <Header />
      <h3 className="project-id">Project Page for user {user.username}</h3>

      <ProjectComp projectData={dummyProject} />
      <Files files={dummyFiles} />
      <Messages messages={dummyMessages} />
      <EditProject />
    </div>
  );
};

export default Project;
