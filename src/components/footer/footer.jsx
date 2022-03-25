import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";

function Footer() {
  return (
    <div className="dark-black fixed-bottom">
      <div className="footer-widget">
          <div className="copyright-area">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-4">
                          <div className="copyright-text">
                              <p>Copyright &copy; 2022. All rights reserved to <span>Housr</span></p>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="copyright-link text-center">
                              <h5 className="text-white">Follow Us</h5>
                              <ul className="social-link">
                                <li><NavLink to="/"><i className="ti-facebook"></i></NavLink></li>
                                <li><NavLink to="/"><i className="ti-twitter-alt"></i></NavLink></li>
                                <li><NavLink to="/"><i className="ti-pinterest"></i></NavLink></li>
                                <li><NavLink to="/"><i className="ti-instagram"></i></NavLink></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="copyright-link">
                              <ul>
                                <li><NavLink to="/">Terms & Conditions</NavLink></li>
                                <li><NavLink to="/">Services</NavLink></li>
                                <li><NavLink to="/">Career</NavLink></li>
                              </ul>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;