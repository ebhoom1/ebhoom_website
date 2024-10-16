import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* Optimized logo image */}
            <img
              src="/assets/images/logo.webp"
               alt="EBHOOM - Environmental Monitoring and Pollution Control Solutions"
              
              loading="eager" // Ensures quick rendering for LCP
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about" title="About Ebhoom Kochi">
                About
              </Link>
              <Link className="nav-link" to="/services" title="View our Services ">
                Services
              </Link>
              <Link className="nav-link" to="/products" title="View our product catalog">
                Products
              </Link>
              <Link className="nav-link" to="/store">
                Store <sup><span className="badge bg-secondary">New</span></sup>
              </Link>
              <Link className="nav-link" to="/blog" title="View our blogs">
                Blog
              </Link>
              <Link className="nav-link" to="/tpds">
                TPDS
              </Link>
              <Link className="nav-link" to="/careers" title="Check out our careers">
                Careers
              </Link>
              <Link className="nav-link" to="/contact" title="Contact us ">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
