import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="myNav">
      <ul className="navLinks">
        <li className="li">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="li">
          <Link to="/magnify" className="link">
            Magnify
          </Link>
        </li>
        <li className="li">
          <Link to="/subscribe" className="link">
            Subscribe
          </Link>
        </li>
        <li className="li">
          <Link to="/cats" className="link">
            data
          </Link>
        </li>
        <li className="li">
          <Link to="/contact" className="link">
            Contact US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
