import React from "react";
import ProjectPreview from "./ProjectPreview";


const Feed = ({projects}) => { 
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