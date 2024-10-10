import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src="/assets/images/logo.png" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link class="nav-link " aria-current="page" to="/">
                Home
              </Link>
              <Link class="nav-link" to="/about">
                About
              </Link>
              <Link class="nav-link" to="/services">
                Services
              </Link>
              <Link class="nav-link" to="/products">
                Products
              </Link>
              <Link class="nav-link" to="/store">
                Store <sup><span class="badge bg-secondary">New</span></sup>
              </Link>
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
             
                <Link class="nav-link" to="/tpds">
                TPDS
                </Link>
              <Link class="nav-link" to="/careers">
                Careers
              </Link>
              <Link class="nav-link" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
