import React, { useEffect, useRef, useState } from 'react'
import styles from "./styles.css";
import { NavLink } from "react-router-dom";
import LogoImage from "./images/logo-housr.png";
import HeaderSearch from './header-search';

function Header() {


  // sticky Nav
  const [navBar, setNavBar] = useState(false);

  const navbarSticky = () => {
    if (window.scrollY >= 120) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }
  window.addEventListener('scroll', navbarSticky);

  // menu toggle
  const [toggleNav, setToggleNav] = useState(false);
  const ToggleNav = () => {
    setToggleNav(!toggleNav);
  } 
  
  // mobile menu dropdown
  const [toggleCategoryNav, setToggleCategoryNav] = useState(false);
  const ToggleCategoryNav = () => {
    setToggleCategoryNav(!toggleCategoryNav);
  }
  
  const [toggleLocationNav, setToggleLocationNav] = useState(false);
  const ToggleLocationNav = () => {
    setToggleLocationNav(!toggleLocationNav);
  }


  // add breakpoint class
  const headerNav = useRef(null);
  var screenWidth = window.innerWidth;

  useEffect(() => {
      if (screenWidth <= 600) {
        headerNav.current.classList.add("breakpoint-on");
      } else {
        headerNav.current.classList.remove("breakpoint-on");
      }
      return () => {};
  });

  return (
    <React.Fragment>
      <header className="header-area header-area-two">
          <div className={navBar ? 'header-navigation sticky' : 'header-navigation'} ref={headerNav}>
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
                              <div className={toggleNav ? "nav-menu float-right menu-on" : "nav-menu float-right"}>
                                  <div className="navbar-close" onClick={ToggleNav}><i className="ti-close" /></div>
                                  <nav className={navBar ? 'main-menu hide' : 'main-menu'}>
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
                                          <li className="menu-item has-children"><a href={void(0)} >Category</a>
                                              <ul className={toggleCategoryNav ? "sub-menu open" : "sub-menu"}>
                                                  <li className="menu-item"><NavLink to="/housr-coliving">Housr Co-living</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/housr-homes">Housr Homes</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/stay-abode">StayAbode by Housr</NavLink></li>
                                              </ul>
                                            <span className="dd-trigger" onClick={ToggleCategoryNav}><i className="ti-arrow-down"></i></span>
                                          </li>
                                          <li className="menu-item has-children"><a href={void(0)} >Locations</a>
                                              <ul className={toggleLocationNav ? "sub-menu open" : "sub-menu"}>
                                                  <li className="menu-item"><NavLink to="/">Gurgaon</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">Hyderabad</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">Pune</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">Banglore</NavLink></li>
                                                  <li className="menu-item"><NavLink to="/">Coming Soon</NavLink></li>
                                              </ul>
                                            <span className="dd-trigger" onClick={ToggleLocationNav}><i className="ti-arrow-down"></i></span>
                                          </li>
                                          <li className="menu-item">
                                            <NavLink className="nav-link" to="/housr-way">Housr Way</NavLink>
                                          </li>
                                          <li className="menu-item">
                                            <NavLink className="nav-link" to="/offers">Offers</NavLink>
                                          </li>
                                          <li className="menu-item">
                                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
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
                                          <div className={toggleNav ? "navbar-toggler active" : "navbar-toggler"} onClick={ToggleNav}>
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
      {!toggleNav ? <HeaderSearch /> : ''}
      

    </React.Fragment>
  );
}

export default Header;
