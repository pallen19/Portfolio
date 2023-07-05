import React from "react";

const TechStack = () => {
  const Stack = [
    "CSS",
    "HTML",
    "ReactJS",
    "Node.js",
    "Java",
    "C++",
    "C#",
    "Python",
    "Git",
    "Bash",
    "Git",
    "Figma",
    "GitHub",
    "Figma",
  ];
  const stackObjects = Stack.map((stacks, i) => ({
    id: i,
    title: stacks,
  }));
  return (
    <div className="tech">
      <h1 className="tech-stack">Tech Stack</h1>

      <ul>
        {Stack.map((stacks, i) => (
          <li key={i}>{stacks}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
