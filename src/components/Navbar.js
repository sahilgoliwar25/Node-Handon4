import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navi-container">
      <div className="navi-items">
        <Link className="nav-links" to="/">
          Home
        </Link>
        <div className="user-signup">
          <Link className="nav-links" to="/login">
            Login
          </Link>
          <Link className="nav-links" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
