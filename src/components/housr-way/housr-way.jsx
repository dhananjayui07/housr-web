import React from "react";
import styles from "./styles.css";
import IntroVideo from "./images/brand-vedio-for-website.mp4";

function HousrWay() {
    return(
        <React.Fragment>
            <section className="intro-video">
                <div className="intro-wrapper-one bg_cover pt-115">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-60 wow fadeInUp">
                                    <h2 className="housr-way-title"> <span className="title-text-outline">Housr</span>Way</h2>
                                    <h3 className="sub-title mb-10 font-weight-normal text-white">Make it happen, with Housr</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-8 embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={IntroVideo} />
                            </div>
                            <div className="col-lg-4">
                                <div className="intro-content-box intro-content-box-one wow fadeInRight pl-20 pt-30">
                                    <h5>Choose your style of living</h5>
                                    <p>An innovative way of living for urban millennials who like to live , laugh, work & eat together . A well furnished , functional and fully managed co-living and personalised home for everyone out there.</p>
                                    <h5>We know what you want </h5>
                                    <p>Free Wifi, SmartTv, Work from Home compatible desks , Fresh and Healthy Meals , Laundry and Housekeeping.You name it , click on it and get it. How comforting it can be?</p>
                                    <h5>Be who you want to be</h5>
                                    <p>We love diversity. So come as you are, whoever you are. What you eat, who you love and who you worship doesn’t matter to us. At Housr, no judgements are passed.</p>
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