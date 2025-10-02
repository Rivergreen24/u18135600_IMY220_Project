import React from "react";
import ProjectPreview from "./ProjectPreview";


const Feed = ({ projects }) => {
    return (
        <section className="feed">
            <h2>Feed</h2>
            <div className="feed-grid">
                {projects.map((proj, index) => (
                    <ProjectPreview key={index} project={proj} />
                ))}
            </div>
        </section>
    );
};


export default Feed;