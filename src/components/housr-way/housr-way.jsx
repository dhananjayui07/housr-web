import React from "react";
import styles from "./styles.css";
import IntroVideo from "../../img/brand-vedio-for-website.mp4";

function HousrWay() {
    return(
        <React.Fragment>
            <section className="intro-video">
                <div className="intro-wrapper-one bg_cover pt-115">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-55 wow fadeInUp">
                                    <h2 className="housr-way-title">Housr Way</h2>
                                    <h3 className="sub-title mb-10 font-weight-normal text-white">Make it happen, with Housr</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-8 embed-responsive embed-responsive-16by9">
                            <video controls muted>
                                <source src={IntroVideo} type="video/mp4"/>
                            </video>
                            </div>
                            <div className="col-lg-4">
                            <div className="intro-content-box pt-20 intro-content-box-one wow fadeInRight">
                                <h5>Choose your style of living</h5>
                                <p>A well furnished , functional and fully managed co-living and personalised home for everyone out there.</p>
                                <h5>We know what you want </h5>
                                <p>Free Wifi, Work from Home compatible desks , Fresh Meals, Laundry and Housekeeping.You name it , click on it and get it. </p>
                                <h5>Be who you want to be</h5>
                                <p>We love diversity. So come as you are, whoever you are. What you eat, who you love and who you worship doesn’t matter to us.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default HousrWay;