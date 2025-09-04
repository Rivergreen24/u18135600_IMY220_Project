import React from "react";
import ProjectPreview from "./ProjectPreview";

const projects = [
  {name: "Awesome Project", description: "This is a dummy project description.", contributors: ["Alice",'Peter'] },
  {name: "Another Cool Project", description: "More dummy content for testing.", contributors: ["Bob"] },
  {name: "Third Project", description: "Even more dummy data.", contributors: ["Charlie"] }
];

const Feed = (props) => { //make changes so that this can be used for things being passed down
    // const projectList = props.projects; // get projects from props
    return (
        <section>
        <h2>Feed</h2>
        {projects.map((proj,index) => (
            <ProjectPreview key={index} project={proj} />
        ))}
        </section>
    );
};


export default Feed;