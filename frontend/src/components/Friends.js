import React from 'react';
import ProfilePreview from '../components/ProfilePreview';
//add in dummy friends
const Friends = ({friends}) => {
  return (
    <section>
      <h2>Friends</h2>
      {friends.map((friend, index)=>(
        <ProfilePreview key={index} profile={friend}/>
      ))}
    </section>
  );
};

export default Friends;