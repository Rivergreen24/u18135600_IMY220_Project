import React from 'react';

const ProjectPreview = ({ project }) => {
  // Get contributors from checkins, or empty array if undefined
  const contributors = project.checkins?.map(c => c.user) || [];

  return (
    <article className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p className="contributors">
        Contributors: {contributors.length > 0 ? contributors.join(', ') : 'None'}
      </p>
    </article>
  );
};

export default ProjectPreview;
