import React from "react";
import { Link } from "react-router-dom";

import "./Header.css"; 
import unilogo from './unilogo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={unilogo}  alt="University Logo" />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      
    </header>
  );
};

export default Header;
