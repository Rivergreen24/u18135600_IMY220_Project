import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProfileComp from "../components/ProfileComp";
import UserProjects from "../components/UserProjects";
import EditProfile from "../components/EditProfile";
import Friends from "../components/Friends";
import CreateProject from "../components/CreateProject";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      window.location.href = "/"; // redirect if not logged in
      return;
    }
    setUser(JSON.parse(storedUser));
  }, []);

  if (!user) return null;

  const dummyProjects = [
    { title: `Project1 for ${user.username}`, description: 'Project1 desc', contributors: [user.username] },
    { title: `Project2 for ${user.username}`, description: 'Project2 desc', contributors: [user.username,"David"] },
  ];

  const dummyFriends = [
    { name: 'Jason', bio: 'Friend bio 1' },
    { name: 'Erik', bio: 'Friend bio 2' }   
  ];

  return (
    <div className="profile-container">
      <h2 className="page-title">Profile Page</h2>
      <Header />
      <ProfileComp profileData={user} />
      <EditProfile />
      <UserProjects projects={dummyProjects} />
      <Friends friends={dummyFriends} />
      <CreateProject />
    </div>
  );
};

export default Profile;
