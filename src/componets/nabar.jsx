import React from "react";
import { Link } from "react-router-dom";
import "../pejes/styles.css";
import logo from '../images/FB_IMG_1734937393360.jpg'

function Nav({ openModal }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand fw-bold text-start" to="/">
          <img
            src={logo}
            alt="Innovators Logo"
            className="img-fluid"
            height="150px"
            width="200px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/why">
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={openModal}>
                  Join Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
