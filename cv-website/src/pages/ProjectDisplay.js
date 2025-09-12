import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];
    return (
      <div className="project">
        <h1>{project.name}</h1>
        <img
          src={project.image}
          alt="project display"
          style={{ maxHeight: "50vh", width: "auto" }}
        />
        <p style={{marginBottom: "0px"}}>
  <b>Skills:</b> {project.skills}
</p>
<p style={{marginTop: "0px"}}>
  {project.deployed_url !== "" && (
    <>
      {" "}
      <b>Deployed Url:</b> <a href={project.deployed_url}>{project.deployed_url}</a>
    </>
  )}
</p>

        <div style={{ cursor: "pointer" }}>
          <a href={project.url}>
            <GitHubIcon />
          </a>
        </div>
      </div>
    );
}

export default ProjectDisplay;