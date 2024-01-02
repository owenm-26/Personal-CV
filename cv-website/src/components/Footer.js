import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href= "https://www.instagram.com/owen_mariani?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"><InstagramIcon /></a>
            <a href="https://github.com/owenm-26"><GithubIcon/></a>
            <a href="https://www.linkedin.com/in/owen-mariani/"><LinkedInIcon /></a>
        </div>
        <p> &copy; 2024 owenmariani.com</p>
    </div>
  )
}

export default Footer