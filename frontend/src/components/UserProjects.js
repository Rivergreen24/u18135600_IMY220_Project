import React from 'react';
import { Link } from "react-router-dom";
import ProjectPreview from '../components/ProjectPreview';



const UserProjects = ({projects}) => {
  return (
    <section>
      <h2>User Projects</h2>
          {projects.map((p) => (
      <Link to={`/project/${p.projectId}`} key={p.projectId}>
        <ProjectPreview project={p} />
      </Link>
    ))}
    </section>
  );
};

export default UserProjects;