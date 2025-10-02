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
        <div className="project-container">
            <h2 className="page-title">Project Page</h2>
            <Header />

            <h3 className="project-id">Project Page for user {id}</h3>

            <section className="project-section">
                <ProjectComp projectData={projectData} />
            </section>

            <section className="project-section">
                <Files files={dummyFiles} />
            </section>

            <section className="project-section">
                <Messages messages={dummyMessages} />
            </section>

            <section className="project-section">
                <EditProject />
            </section>
            <p>These changes are beign made</p>


        </div>
    )
}

export default Project; 