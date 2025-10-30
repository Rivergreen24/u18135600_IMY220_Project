// components/ProfileComp.jsx
import React from "react";

const ProfileComp = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <article className="profile-main-card">
            <img
        src={profileData.profileImage || "/images/placeholder.png"}
        alt={`${profileData.username}'s avatar`}
        className="profile-main-avatar"
      />
      <h2>{profileData.username}'s Profile</h2>
      <p><strong>Bio:</strong> {profileData.bio || "No bio available"}</p>
      <p><strong>Email:</strong> {profileData.email}</p>
    </article>
  );
};

export default ProfileComp;
