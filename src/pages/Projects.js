import React from "react";
import { NavBar } from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <>
      <NavBar />
        <div className="cards">
          <h1 className="project_title">Portfolio</h1>
          <ProjectCard
            name="Bean Counter"
            description="Creating accounting software for an accountant agency
            Enabled role-based access for specific user logins and viewing managed accounts using
            AWS Cognito
            Allow users to reset passwords with a random emall code using AWS
            Cognito"
          />
          <ProjectCard
            name="Battle Ship"
            description="The idea for this project is to create the game battle ship from scratch and let the two computers automatically pick the position of their ships and then randomly shoot at the opponent's ship in which the program would let us know if we hit or missed and turn that cell on the board red. This communication between the two computers is done by using computer sockets. Once one of the ships are destroyed the program will let us know which computer won along with the score and ask if we want to play again or not."
          />
          <ProjectCard
            name="Color Picker"
            description="The program allows you to find the hexcode for any color that is available on your color screen just by hovering your mouse over that area using Java and JavaFX"
          />
        </div>  
    </>
  );
};

export default Projects;
