import React from "react";
import { Link } from "react-router";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import CreateProject from "../components/CreateProject";

function Profile() {
    const { id } = useParams(); // gets whatever comes after /profile/
    console.log(`Profile ID: ${id}`);
    return (
        <div>
            <h2>Hello, this is a Profile</h2>
            <Navbar/>
            <h3>Profile Page for user {id}</h3>
            <CreateProject/>
        </div>
        
    );
}

export default Profile;