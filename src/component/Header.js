import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
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
      <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
