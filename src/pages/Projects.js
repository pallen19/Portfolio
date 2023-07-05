import React from "react";
import { NavBar } from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <>
      <NavBar />
      <h1>Portfolio</h1>
        <div className="cards">
          <ProjectCard
            name="Bean Counter"
            description="This is an accounting software that was built to store businesses expenses and calculate their balance sheets"
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
