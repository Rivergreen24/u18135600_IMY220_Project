import React from 'react';
import ProjectPreview from '../components/ProjectPreview';
//add dummy code to do a map function
const UserProjects = ({projects}) => {
  return (
    <section>
      <h2>User Projects</h2>
      {projects.map((project, index) =>(
        <ProjectPreview key={index} project={project}/>
      ))}
    </section>
  );
};

export default UserProjects;