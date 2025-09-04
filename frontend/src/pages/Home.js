import React from "react";
import { Link } from "react-router";
import Navbar from "../components/navbar";
import Feed from "../components/Feed";
import SearchInput from "../components/SearchInput";

const dummyFeedProjects = [
  {title: "Awesome Project", description: "This is a dummy project description.", contributors: ["Alice",'Peter'] },
  {title: "Another Cool Project", description: "More dummy content for testing.", contributors: ["Bob"] },
  {title: "Third Project", description: "Even more dummy data.", contributors: ["Charlie"] }
];

const Home =()=>{
    return(
        <div>
            <h2>Home Page</h2>
            <Navbar/>
            <SearchInput/>
            <Feed projects={dummyFeedProjects}/>
        </div>
    )
}

export default Home;