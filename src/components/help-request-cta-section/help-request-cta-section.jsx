import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";


function HelpRequestCtaSection() {
    return(
        <React.Fragment>
            <section className="intro-video">
                <div className="intro-wrapper-one bg_cover pt-50">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-50 wow fadeInUp">
                                    <h2 className="mb-1 rcol">We Can Help you Better</h2>
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