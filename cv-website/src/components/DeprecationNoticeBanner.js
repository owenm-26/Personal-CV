import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function DeprecationNoticeBanner() {
  return (
    <div style={{ backgroundColor: "#9f0909ff", color: "white", width: "100vw", height: "5vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <b>Notice:</b>  This website is no longer being updated. Enjoy a look back into my college self :)
    </div>
  )
}

export default DeprecationNoticeBanner