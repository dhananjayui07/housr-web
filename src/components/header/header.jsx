import React, { Component } from 'react'
import styles from "./styles.css";
import { NavLink } from "react-router-dom";
import LogoImage from "./images/logo-housr.png";

import Select from 'react-select'

const cityoptions = [
  { value: 'haryana', label: 'Haryana' },
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'pune', label: 'Pune' }
]
const categoryoptions = [
  { value: 'coliving', label: 'Housr Co-living' },
  { value: 'homes', label: 'Housr Homes' },
  { value: 'stayabode', label: 'StayAbode by Housr' }
]

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
                                          <li className="menu-item has-children"><a href="#">Locations</a>
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
                                          {/* <li className="menu-item">
                                            <NavLink className="nav-link" to="/">Blog</NavLink>
                                          </li> */}
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

      <div className="hero-slider-wrapper">
        <div className="col-lg-6 col-md-8 col-sm-8 align-self-center">
            <div className="hero-content">
                <div className="hero-search-wrapper wow fadeInUp" wow-data-delay="70ms">
                    <form>
                        <div className="row">
                            <div className="col-lg-5 col-md-4 col-sm-12 cityWrap">
                                <div className="form_group">
                                    <Select options={cityoptions} />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-4 col-sm-12 categoryWrap">
                                <div className="form_group">
                                    <Select options={categoryoptions} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 searchWrap">
                                <div className="form_group">
                                    <button className="main-btn ti-search"><span className="m-none">Search</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    </React.Fragment>
  );
}

export default Header;
