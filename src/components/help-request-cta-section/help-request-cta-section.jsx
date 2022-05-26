import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";


function HelpRequestCtaSection() {
    return(
        <React.Fragment>
            <section className="intro-video housr-gradient">
                <div className="intro-wrapper-one bg_cover pt-50 bg-image-none">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-50 wow fadeInUp">
                                    <h2 className="mb-1 text-white">We’d Love to Talk More!</h2>
                                    <h4 className="mb-20 text-white font-weight-normal">Request a call back and our expert will reach out to you</h4>
                                    <span><NavLink to="/" className="main-btn">Request Call</NavLink></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default HelpRequestCtaSection;