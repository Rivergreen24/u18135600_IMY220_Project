import React from "react";
import { Link } from "react-router";
import Navbar from "../components/navbar";
import { useParams } from "react-router";
import ProjectPreview from "../components/ProjectPreview";

//get the login and signup comps

const Project =()=>{
    const {id} = useParams() ;
    console.log(`Project ID: ${id}`);
    
    return(
        <div>
            <h2>Hello, this is the Project</h2>
            <Navbar/>
            <h3>Project Page for user {id}</h3>
        </div>
    )
}

export default Project;