import React from 'react'
import LogoImg from "../Assets/logoidentiko.png";
import "./Navbar.css"
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <section>
      <div className="nav">
        <img src={LogoImg} alt="logo" className="nav-list" />

        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <Link to="/change-password">Change Password</Link>
          </div>
          <div className="dropdown--content">
            {/* <Link to="/">Logout</Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar