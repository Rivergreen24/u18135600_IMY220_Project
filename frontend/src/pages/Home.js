import React from "react";
import { Link } from "react-router";
import Navbar from "../components/navbar";
import Feed from "../components/Feed";

const Home =()=>{
    return(
        <div>
            <h2>Hello, this is the home page I think</h2>
            <Navbar/>
            <Feed/>
        </div>
    )
}

export default Home;