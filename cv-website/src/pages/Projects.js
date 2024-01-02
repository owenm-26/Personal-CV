import React from 'react'
import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css";
import { ProjectList } from '../helpers/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <h1>Personal Projects</h1>
      <div className='projectList'>
        {/* Replace this with a database call later */}
        {ProjectList.map((project, idx) =>
        {return <ProjectItem id = {idx} name = {project.name} image = {project.image}/>}
        )}
      </div>
    </div>
  )
}

export default Projects