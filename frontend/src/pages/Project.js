import React from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import { useParams } from "react-router";
import ProjectPreview from "../components/ProjectPreview";
import ProjectComp from "../components/ProjectComp";
import Files from "../components/Files";
import Messages from "../components/Messages";
import EditProfile from "../components/EditProfile";
import EditProject from "../components/EditProject";


const Project = () => {
    const { id } = useParams();
    console.log(`Project ID: ${id}`);

    const dummyProjects = {
        '1': { title: 'Project One', description: 'Description for project 1' },
        '2': { title: 'Project Two', description: 'Description for project 2' }
    };
    const projectData = dummyProjects[id] || dummyProjects['1']; // Default to 1 if id not found

    const dummyFiles = ['file1.txt', 'file2.js'];

    const dummyMessages = ['Check-in: Updated file1', 'Check-out: Reviewed changes'];


    return (
        <div>
            <h2>Project Page</h2>
            <Header />
            <h3>Project Page for user {id}</h3>
            <ProjectComp  projectData={projectData}/>
            <Files files={dummyFiles}/>
            <Messages messges={dummyMessages}/>
            <EditProject/>

        </div>
    )
}

export default Project;