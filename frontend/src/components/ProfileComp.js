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

      <div className="profile-info">
        <h3 className="profile-username">{profileData.username}</h3>
        <p className="profile-bio">
          <strong>Bio:</strong> {profileData.bio || "No bio available"}
        </p>
        <p className="profile-email">
          <strong>Email:</strong> {profileData.email}
        </p>
      </div>
    </article>
  );
};

export default ProfileComp;