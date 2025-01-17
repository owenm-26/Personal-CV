import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";
import ToolsList from '../helpers/ToolsList';
import LanguagesList from '../helpers/LanguagesList';

function Home() {
  return (
    <div className="home">
      <div className="about">
        
        <h2>Owen Mariani</h2>
        <div className="prompt">
          <p>
            A junior at Boston University passionate about Software Engineering
            and learning.
          </p>
          <a href="mailto: mariani.owen@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://www.linkedin.com/in/owen-mariani/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/owenm-26">
            <GithubIcon />
          </a>
        </div>
      </div>

      <div className="pdf-preview">
   
             <h2>Resume</h2>
         
     
        <iframe
          src={`${process.env.PUBLIC_URL}/resume.pdf`}
          title="Resume"
          width="75%"
          height="500px"
          style={{ border: "1px solid #000" }}
        ></iframe>
      </div>

      <div className="skills">
        {/* <h1>Skills and Awards</h1> */}
        <ol className="list">

          
          <li className="item">
            <h2>Languages and Frameworks</h2>
            <LanguagesList />
            <span>
              {" "}
              Python, Java, JavaScript, React.js, Next.js, Flask, Git, Express,
              SQL, PySpark, C, Vim, Assembly, Node.js, HTML, CSS{" "}
            </span>
          </li>

          <li className="item">
            <h2>Tools and Applications</h2>
            <ToolsList />
            <span>
              {" "}
              Kubernetes, Docker, Prisma, PostgreSQL, GraphQL, Podman, Selenium,
              JupyterLab, Databricks, Snowflake, JIRA, Github, OR-Tools,
              Bigquery, Firebase, MongoDB, Figma, Unity, VSCode, IntelliJ,
              Confluence, Google Suite{" "}
            </span>
          </li>

          <li className="item">
            <h2>Topics</h2>
            <span>
              {" "}
              Algorithms, Databases, Cybersecurity, Application Architecture,
              Authentication & Authorization, Environment Secrets, UI Libraries,
              HTTP Protocols, Image Encoding, Tree Traversals, Sorting, Solvers
            </span>
          </li>

          <li className="item">
            <h2>Classes</h2>
            <span>
              Python, Data Structures (Java), Algorithms, Software Engineering,
              Web Development, Computer Systems, Linear Algebra, Probability,
              Discrete Math, Cybersecurity, Distributed Systems
            </span>
          </li>

          <li className="item">
            <h2>Awards</h2>
            <span>
              {" "}
              Eagle Scout, Black Belt, Boston University Dean’s List{" "}
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home