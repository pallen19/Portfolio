import React from "react";
import { NavBar } from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import PCards from "../components/PCards";

const Projects = () => {
  return (
    <>
      <NavBar />
    <div className="projectSection font-bold text-lg">Projects</div>
        <div className="cards">
          <h1 className="project_title">Portfolio</h1>
          {/* <ProjectCard
            name="Bean Counter"
            description="Collaborated on a cloud-based accounting app, Bitter Bean Accounting, 
            utilizing React.JS and Figma for the front-end, Google's NoSQL Firebase for the database,
             and AWS for back-end management and hosting. Employed Agile methodology with 5 sprints,
              emphasizing role-based access and daily stand-ups.
            "
          />
          <ProjectCard
            name="Battle Ship"
            description="The idea for this project is to create the game battle ship from scratch and let the two computers automatically pick the position of their ships and then randomly shoot at the opponent's ship in which the program would let us know if we hit or missed and turn that cell on the board red. This communication between the two computers is done by using computer sockets. Once one of the ships are destroyed the program will let us know which computer won along with the score and ask if we want to play again or not."
          />
          <ProjectCard
            name="Color Picker"
            description="The program allows you to find the hexcode for any color that is available on your color screen just by hovering your mouse over that area using Java and JavaFX"
          /> */}

          <div className="p-32 ... ">
            
          <PCards/>
          </div>
        </div>  
    </>
  );
};

export default Projects;
