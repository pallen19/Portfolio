import React from "react";
import TechStack from "./TechStack";
import stackobjects from "./TechStack";

const ProjectCard = (props) => {
  return (
    
    <>
      <div className="projects">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <span>{props.image}</span>
      </div>
 </>
  );
};

export default ProjectCard;
