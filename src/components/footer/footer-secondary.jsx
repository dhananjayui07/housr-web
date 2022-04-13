import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";
import Collapsible from 'react-collapsible';

function FooterSecondaryLandingPage() {
    return(
        <React.Fragment>
            <div className="footer-wrapper-one background-housr">
                <div className="footer-widget">
                    <div className="container ">
                        <div className="row pt-30">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p className="text-white"><strong>Housr</strong> offers fully furnished,managed and functional spaces on rent ranging from shared rooms, individual studios to full apartments for working professionals, students, couples, small families and urban millennials.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-40 wow fadeInUp" data-wow-delay="30ms">
                                    <ul className="categories-link">
                                        <li><NavLink to="/">About Us</NavLink></li>
                                        <li><NavLink to="/">Privacy Policy</NavLink></li>
                                        <li><NavLink to="/">Cancellation Policy </NavLink></li>
                                        <li><NavLink to="/">Payment Terms &amp; Conditions</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-40 wow fadeInUp" data-wow-delay="30ms">
                                    <ul className="categories-link">
                                        <li><NavLink to="/">Locations</NavLink></li>
                                        <li><NavLink to="/">Housr in News</NavLink></li>
                                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                                        <li><NavLink to="/partners">Partner with us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-wrapper-one footer-collapsible dark-black pt-60">
                <div className="footer-widget pb-30">
                    <div className="container container-desktop">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-40 wow fadeInUp" data-wow-delay="30ms">
                                    <Collapsible open={true} trigger="Rooms for rent in Gurgaon">
                                        {/* <h5 className="text-white font-weight-normal mb-20">Rooms for rent in Gurgaon </h5> */}
                                        <ul className="categories-link mb-20">
                                            <li><NavLink to="/">Housr Tulip, Sec-69, Sohna Road</NavLink></li>
                                            <li><NavLink to="/">Housr Malibu, Sec 47, Good Earth City Centre</NavLink></li>
                                            <li><NavLink to="/">Housr 49, Spaze IT park</NavLink></li>
                                            <li><NavLink to="/">Housr 38, Medanta Medicity</NavLink></li>
                                            <li><NavLink to="/">Housr 46, Unitech Cyber Park</NavLink></li>
                                            <li><NavLink to="/">Housr 51, Opposite Amity School</NavLink></li>
                                            <li><NavLink to="/">Housr 57, Huda Market</NavLink></li>
                                            <li><NavLink to="/">Housr 27, Galleria Market</NavLink></li>
                                            <li><NavLink to="/">Housr 43, Global Foyer, Golf Course Road</NavLink></li>
                                            <li><NavLink to="/">Housr 28, Golf Course Road</NavLink></li>
                                            <li><NavLink to="/">Housr 38, Opposite Ikea</NavLink></li>
                                            <li><NavLink to="/">Housr DLF Phase 1, Behind Mega Mall</NavLink></li>
                                            <li><NavLink to="/">Housr Suncity, Golf Course Road</NavLink></li>
                                        </ul>
                                    </Collapsible>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-40 wow fadeInUp" data-wow-delay="30ms">
                                    <Collapsible className="footer-collapsible" open={true} trigger="Homes/Apartments for Rent in Gurgaon">
                                        <ul className="categories-link mb-20">
                                            <li><NavLink to="/">Apartment for rent in Housr Homes, Sec 50, Hibiscus, Baani Square</NavLink></li>
                                            <li><NavLink to="/">Home for rent in Housr Homes, Sec 27, Galleria Market</NavLink></li>
                                        </ul>
                                    </Collapsible>
                                    <Collapsible className="footer-collapsible" open={true} trigger="1RK for rent in Gurgaon">
                                        <ul className="categories-link mb-20">
                                            <li><NavLink to="/">1RK for rent in Housr Suncity, Golf Course Road</NavLink></li>
                                            <li><NavLink to="/">1RK for rent in Housr Homes, Sec 27, Galleria Market</NavLink></li>
                                        </ul>
                                    </Collapsible>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-40 wow fadeInUp" data-wow-delay="30ms">
                                    <Collapsible className="footer-collapsible" open={true} trigger="Rooms for rent in Pune">
                                        <ul className="categories-link mb-20">
                                            <li><NavLink to="/">Room for rent in Tathawade</NavLink></li>
                                            <li><NavLink to="/">Room for rent in Balewadi</NavLink></li>
                                        </ul>
                                    </Collapsible>
                                    <Collapsible className="footer-collapsible" open={true} trigger="Rooms for rent in Hyderabad">
                                        <ul className="categories-link mb-20">
                                            <li><NavLink to="/">Room for rent in Q-city</NavLink></li>
                                            <li><NavLink to="/">Room for rent in Kondapur</NavLink></li>
                                        </ul>
                                    </Collapsible>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container container-mobile">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-20 wow fadeInUp" data-wow-delay="30ms">
                                    <Collapsible trigger="Rooms for rent in Gurgaon">
                                        {/* <h5 className="text-white font-weight-normal mb-20">Rooms for rent in Gurgaon </h5> */}
                                        <ul className="categories-link mb-20">
                                            <li><NavLink to="/">Housr Tulip, Sec-69, Sohna Road</NavLink></li>
                                            <li><NavLink to="/">Housr Malibu, Sec 47, Good Earth City Centre</NavLink></li>
                                            <li><NavLink to="/">Housr 49, Spaze IT park</NavLink></li>
                                            <li><NavLink to="/">Housr 38, Medanta Medicity</NavLink></li>
                                            <li><NavLink to="/">Housr 46, Unitech Cyber Park</NavLink></li>
                                            <li><NavLink to="/">Housr 51, Opposite Amity School</NavLink></li>
                                            <li><NavLink to="/">Housr 57, Huda Market</NavLink></li>
                                            <li><NavLink to="/">Housr 27, Galleria Market</NavLink></li>
                                            <li><NavLink to="/">Housr 43, Global Foyer, Golf Course Road</NavLink></li>
                                            <li><NavLink to="/">Housr 28, Golf Course Road</NavLink></li>
                                            <li><NavLink to="/">Housr 38, Opposite Ikea</NavLink></li>
                                            <li><NavLink to="/">Housr DLF Phase 1, Behind Mega Mall</NavLink></li>
                                            <li><NavLink to="/">Housr Suncity, Golf Course Road</NavLink></li>
                                        </ul>
                                    </Collapsible>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-40 wow fadeInUp" data-wow-delay="30ms">
                                    <div className="mb-20">
                                        <Collapsible className="footer-collapsible" trigger="Homes/Apartments for Rent in Gurgaon">
                                            <ul className="categories-link">
                                                <li><NavLink to="/">Apartment for rent in Housr Homes, Sec 50, Hibiscus, Baani Square</NavLink></li>
                                                <li><NavLink to="/">Home for rent in Housr Homes, Sec 27, Galleria Market</NavLink></li>
                                            </ul>
                                        </Collapsible>
                                    </div>
                                    <div className="mb-20">
                                        <Collapsible className="footer-collapsible" trigger="1RK for rent in Gurgaon">
                                            <ul className="categories-link">
                                                <li><NavLink to="/">1RK for rent in Housr Suncity, Golf Course Road</NavLink></li>
                                                <li><NavLink to="/">1RK for rent in Housr Homes, Sec 27, Galleria Market</NavLink></li>
                                            </ul>
                                        </Collapsible>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-40 wow fadeInUp" data-wow-delay="30ms">
                                    <div className="mb-20">
                                        <Collapsible className="footer-collapsible" trigger="Rooms for rent in Pune">
                                            <ul className="categories-link">
                                                <li><NavLink to="/">Room for rent in Tathawade</NavLink></li>
                                                <li><NavLink to="/">Room for rent in Balewadi</NavLink></li>
                                            </ul>
                                        </Collapsible>
                                    </div>
                                    <div className="mb-20">
                                        <Collapsible className="footer-collapsible" trigger="Rooms for rent in Hyderabad">
                                            <ul className="categories-link">
                                                <li><NavLink to="/">Room for rent in Q-city</NavLink></li>
                                                <li><NavLink to="/">Room for rent in Kondapur</NavLink></li>
                                            </ul>
                                        </Collapsible>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FooterSecondaryLandingPage;