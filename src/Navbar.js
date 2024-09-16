import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section className="navbarContainer">
      <div className="navbarLogo">
        <h1>Logo</h1>
      </div>
      <div className="navbarLinks">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/profile" className="link">
          Profile
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/message" className="link">
          Message
        </Link>
      </div>
      {/* some code for the toggle button for the navlinks in small screens  */}
    </section>
  );
};
