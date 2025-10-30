import React from 'react';

const ProjectComp = ({ projectData }) => {
  return (
    <article className='project-card'>
      <h2>{projectData.name || projectData.title}</h2>
      <p>{projectData.description}</p>
      <p><strong>Status:</strong> {projectData.status || "Unknown"}</p>
      <p>
        <strong>Members:</strong>{" "}
        {(projectData.members && projectData.members.join(", ")) || "No members"}
      </p>
    </article>
  );
};

export default ProjectComp;
