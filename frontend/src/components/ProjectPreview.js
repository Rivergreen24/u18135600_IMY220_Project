import React from 'react';

const ProjectPreview = ({ project }) => {
  // Get contributors from checkins, or empty array if undefined
  const contributors = project.checkins?.map(c => c.user) || [];

  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>
        <strong>Contributors:</strong>{" "}
        {project.members?.join(", ") || "No contributors"}
      </p>
      <p><strong>Status:</strong> {project.status || "Unknown"}</p>
    </div>
  );
};

export default ProjectPreview;
