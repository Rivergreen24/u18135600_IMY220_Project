import React from "react";
import { Link } from "react-router-dom";
import ProfilePreview from "./ProfilePreview";

const Friends = ({ friends }) => {
  if (!friends || friends.length === 0) return <p>No friends yet</p>;

  return (
    <section>
      <h2>Friends</h2>
      <div className="friends-list">
        {friends.map((friend) => (
          <Link key={friend.userId} to={`/profile/${friend.userId}`}>
            <ProfilePreview profile={friend} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Friends;
