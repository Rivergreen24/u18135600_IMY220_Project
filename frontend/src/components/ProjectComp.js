import React from 'react';
//add dummy data
const ProjectComp = ({projectData}) => {
  return (
    <article>
      <h2>{projectData.title}</h2>
      <p>Description: {projectData.description}</p>
    </article>
  );
};

export default ProjectComp;