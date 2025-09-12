import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css";
import { ProjectList } from '../helpers/ProjectList';

function Projects() {
  return (
    <div className="projects">
      <h1 style={{marginBottom: "0px"}}>Projects</h1>
      <p style={{marginBottom: "40px"}}>A list of projects I've done in my spare time. Work from my internships is proprietary and thus will not be here.</p>
      <div className="projectList">
        {/* Replace this with a database call later */}
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects