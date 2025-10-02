import React from 'react';

const ProfilePreview = ({profile}) => {
  return (
    <article className="profile-card">
      <h3>{profile.name}</h3>
      <p>Bio: {profile.bio}</p>
    </article>
  );
};

export default ProfilePreview;