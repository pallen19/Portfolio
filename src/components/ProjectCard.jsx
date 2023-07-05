import React from "react";
import TechStack from "./TechStack";
import stackobjects from "./TechStack";

const ProjectCard = (props) => {
  return (
    <>
      <div className="projects">
        <h1>{props.name}</h1>
        <span>{props.image}</span>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default ProjectCard;
