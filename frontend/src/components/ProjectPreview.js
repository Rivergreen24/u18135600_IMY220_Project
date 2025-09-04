import React from 'react';
//make this use passed down props
const ProjectPreview = ({project}) => {
  return (
    <article>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Contributors: {project.contributors.join(', ')}</p>
    </article>
  );
};

export default ProjectPreview;