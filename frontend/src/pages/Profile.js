import React from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import CreateProject from "../components/CreateProject";
import ProfileComp from "../components/ProfileComp";
import Friends from "../components/Friends";
import EditProfile from "../components/EditProfile";
import UserProjects from "../components/UserProjects";

function Profile() {
    const { id } = useParams(); // gets whatever comes after /profile/

    // Dummy data varying slightly by id (for Fix l)
    const dummyProfiles = {
        '1': { name: 'User One', bio: 'Bio for user 1' },
        '2': { name: 'User Two', bio: 'Bio for user 2' }
    };
    const profileData = dummyProfiles[id] || dummyProfiles['1']; // Default to 1 if id not found

    console.log(`Profile ID: ${id}`);
    const dummyProjects = [
        { title: `Project1 for ${profileData.name}`, description: 'Project1 desc', contributors: [profileData.name] },
        { title: `Project2 for ${profileData.name}`, description: 'Project2 desc', contributors: [profileData.name,"David"] },
    ];

    const dummyFriends = [
        { name: 'Jason', bio: 'Friend bio 1' },
        { name: 'Erik', bio: 'Friend bio 2' }   
    ];

    return (
        <div className="profile-container">

            <h2 className="page-title">Profile Page</h2>

                      <Header />  
            <h3 className="profile-id">Profile for user {id}</h3>

            <section className="profile-section">
                <ProfileComp profileData={profileData} />
            </section>

            <section className="profile-section">
                <EditProfile />
            </section>

            <section className="profile-section">
                <UserProjects projects={dummyProjects} />
            </section>

            <section className="profile-section">
                <Friends friends={dummyFriends} />
            </section>

            <section className="profile-section">
                <CreateProject />
            </section>
        </div>

    );
}

export default Profile;