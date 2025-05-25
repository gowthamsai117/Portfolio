// src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = [
  { id: '1', title: 'Project 1', description: 'Details about project 1', image: 'image1.jpg' },
  { id: '2', title: 'Project 2', description: 'Details about project 2', image: 'image2.jpg' },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
