import React from 'react';

const ProfileComp = ({profileData}) => {
  return (
    <article>
      <h2>{profileData.name}'s Profile</h2>
      <p>Bio: {profileData.bio}</p>
    </article>
  );
};

export default ProfileComp;