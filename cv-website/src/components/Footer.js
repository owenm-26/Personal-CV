import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <GithubIcon/>
            <LinkedInIcon />
        </div>
        <p> &copy; 2024 owenmariani.com</p>
    </div>
  )
}

export default Footer