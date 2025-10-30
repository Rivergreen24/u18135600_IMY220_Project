import React from 'react';
const ProfilePreview = ({ profile }) => {
  return (
    <article className="profile-card">
      <img
        src={profile.profileImage || "/images/placeholder.png"}
        alt={`${profile.username}'s avatar`}
        className="profile-avatar"
      />
      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>
    </article>
  );
};

export default ProfilePreview;
