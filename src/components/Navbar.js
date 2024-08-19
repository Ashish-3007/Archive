import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={'/ARCHIVE.png'} alt="Logo" className="d-inline-block align-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar">
            <li className="nav-items">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" to="/explore">Explore</Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" to="/notification">Notifications</Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar