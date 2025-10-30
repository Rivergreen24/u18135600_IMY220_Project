import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ projects }) => {
  if (!projects.length) return <p>No projects to show.</p>;

  return (
    <div className="feed-container">
      {projects.map((p) => (
        <div key={p.projectId} className="feed-card">
          <Link to={`/project/${p.projectId}`} className="feed-link">
            <h3>{p.name}</h3>
          </Link>
          <p>{p.description}</p>
          <div className="feed-meta">
            <span>Owner: {p.ownerName}</span>
            <span>Type: {p.type || "N/A"}</span>
            <span>Version: {p.version || "1.0"}</span>
          </div>
          {p.hashtags?.length > 0 && (
            <div className="hashtags">
              {p.hashtags.map((tag, i) => (
                <span key={i} className="hashtag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
