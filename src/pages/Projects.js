import React from "react";
import { NavBar } from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import PCards from "../components/PCards";

const Projects = () => {
  return (
    <>
      <NavBar />
    <div className="projectSection">Projects</div>
        <div className="cards">
          <h1 className="project_title">Portfolio</h1>
          <ProjectCard
            name="BUGGY"
            description="Utilizes .NET, C#, and HTML Agility Pack for Efficient Web Scraping of item prices from various retail websites.
            • Compiles and presents a comprehensive list of prices for the specified item across different websites.
            • Saves time and effort by consolidating price information from multiple platforms.
            "
          />
          <ProjectCard
            name="BEAN COUNTER"
            description="Collaborated on a Cloud-Based Accounting App, “Bitter Bean Accounting”, Utilizing React.JS and Figma for the front-end
            • Google’s NoSQL Firebase for the database, and AWS for back-end management and hosting
            • Employed Agile Methodology with 5 Sprints, emphasizing Role-based Access and Daily Stand-ups
            • Enabled role-based access for login and viewing managed accounts using AWS Cognito
            • Allow users to reset passwords with a random email code using AWS"
          />
          <ProjectCard
            name="COURAGE THE DISCORD BOT"
            description="The bot continuously scans for specific keywords or patterns.
            • When triggered, the bot responds instantly with predefined automated
            messages.
            • The bot can take various actions based on the message content.
            • Administrators can customize triggers, responses and actions.
            • Streamlines moderation efforts with real-time responses and actions
            • TECH STACK: DISCORD API, PYTHON"
          />

          <div className="p-32 ... ">
            
          <PCards/>
          </div>
        </div>  
    </>
  );
};

export default Projects;
