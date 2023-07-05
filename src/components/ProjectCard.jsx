import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
    
    <h1>{props.name}</h1>
    <span>{props.image}</span>
    <p>{props.description}</p>
    </>
  )
}

export default ProjectCard