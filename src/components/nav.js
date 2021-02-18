import React from "react";

const Nav = () => (
  <div className="main_menu">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <a
          className="navbar-brand logo_h"
          href="/"
          style={{ width: "200px", marginTop: "-50px" }}
        >
          <img src="/logo.svg" alt="" />
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar"></span> <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button> */}
        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div
          className="collapse navbar-collapse offset"
          id="navbarSupportedContent"
        >
          <ul className="nav navbar-nav menu_nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses">
                Courses
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li> */}

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="#" className="nav-link search" id="search">
                <i className="ti-search"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Nav;
