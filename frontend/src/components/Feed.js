import React from "react";
import ProjectPreview from "./ProjectPreview";

const Feed = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <section className="feed">
        <h2>Feed</h2>
        <p>No projects to display.</p>
      </section>
    );
  }

  return (
    <section className="feed">
      <h2>Feed</h2>
      <div className="feed-grid">
        {projects.map((proj) => (
          <ProjectPreview key={proj._id || proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
