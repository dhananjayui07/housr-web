import React from 'react'
import styles from "./styles.css";
import { NavLink } from "react-router-dom";
import LogoImage from "./images/logo-housr.png";
import HeaderSearch from './header-search';

function Header() {
  return (
    <React.Fragment>
      <header className="header-area header-area-two">
          <div className="header-navigation sticky">
              <div className="container-fluid">
                  <div className="primary-menu">
                      <div className="row align-items-center">
                          <div className="col-lg-2 col-5">
                              <div className="site-branding">
                                <NavLink className="brand-logo" to="/">
                                  <img src={LogoImage} width="120" alt="Brand Logo" />
                                </NavLink>
                              </div>
                          </div>
                          <div className="col-lg-7 col-2">
                              <div className="nav-menu float-right">
                                  <div className="navbar-close"><i className="ti-close" /></div>
                                  <nav className="main-menu">
                                      <ul>
                                          <li className="menu-item">
                                            <NavLink className="navbar-brand" to="/">
                                              Home
                                              <span className="sr-only">(current)</span>
                                            </NavLink>
                                          </li>
                                          <li className="menu-item">
                                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                                          </li>
                                          <li className="menu-item has-children"><NavLink to="/about">Category</NavLink>
                                              <ul className="sub-menu">
                                                  <li className="menu-item"><NavLink to="/">Housr Co-living</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">Housr Homes</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">StayAbode by Housr</NavLink></li>
                                              </ul>
                                          <span className="dd-trigger"><i className="ti-arrow-down"></i></span></li>
                                          <li className="menu-item has-children"><NavLink to="/about">Locations</NavLink>
                                              <ul className="sub-menu">
                                                  <li className="menu-item"><NavLink to="/">Gurgaon</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">Hyderabad</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">Pune</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">Banglore</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">Coming Soon</NavLink></li>
                                              </ul>
                                          <span className="dd-trigger"><i className="ti-arrow-down"></i></span></li>
                                          <li className="menu-item">
                                            <NavLink className="nav-link" to="/about">Housr Way</NavLink>
                                          </li>
                                          <li className="menu-item">
                                            <NavLink className="nav-link" to="/about">Offers</NavLink>
                                          </li>
                                          <li className="menu-item">
                                            <NavLink className="nav-link" to="/">Blog</NavLink>
                                          </li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                          <div className="col-lg-3 col-5">
                              <div className="header-right-nav">
                                  <ul className="d-flex align-items-center">
                                      <li className="hero-nav-btn"><span className="main-btn">Request Call</span></li>
                                      <li className="nav-toggle-btn">
                                          <div className="navbar-toggler">
                                              <span />
                                              <span />
                                              <span />
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
      <HeaderSearch />

    </React.Fragment>
  );
}

export default Header;
