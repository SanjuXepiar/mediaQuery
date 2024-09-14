import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
      <Link to="/message">Message</Link>
    </section>
  );
};
