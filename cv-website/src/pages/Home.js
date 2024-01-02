import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Owen Mariani</h2>
        <div className='prompt'>
          <p>A second year at Boston University passionate about Software Engineering and learning.</p>
          <a href="mailto: mariani.owen@gmail.com"><EmailIcon/></a>
          <a href ="https://www.linkedin.com/in/owen-mariani/"><LinkedInIcon/></a>
          <a href="https://github.com/owenm-26"><GithubIcon/></a>
        </div>
      </div>
      <div className='skills'>
         {/* <h1>Skills and Awards</h1> */}
         <ol className='list'>
          <li className='item'>
            <h2>Programming Languages</h2>
            <span> Python, Java, SQL, PySpark, C, Vim, Assembly, React.js, Node.js, HTML, CSS, JavaScript </span>
          </li>
          <li className='item'>
            <h2>Tools and Applications</h2>
            <span> Kubernetes, Docker, JupyterLab, Databricks, Snowflake, Google Bigquery, Firebase, MongoDB, Figma, Unity, VSCode, IntelliJ, Confluence, Google Suite </span>
          </li>
          <li className='item'>
            <h2>Awards</h2>
            <span> Eagle Scout, Black Belt, Boston University Dean’s List </span>
          </li>
         </ol>
      </div>
    </div>
  )
}

export default Home