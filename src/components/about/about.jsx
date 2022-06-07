import React from "react";
import "./styles.css";
import BannerInnereLanding from "../banner-inner-landing/banner-inner-landing";
import BannerAbout from "./images/about-page.jpeg";
import Newsletter from "../newsletter/newsletter";
import ClientCarousel from "../client-carousel/client-carousel";
import SectionHeader from "../shared/section-header/section-header";
import IntroVideo from "../../img/brand-vedio-for-website.mp4";
import FoundingTeam from "../founding-team/founding-team";

import IconVision from "./images/vision.svg";
import IconMission from "./images/mission.svg";
import IconValues from "./images/values.svg";
import IconGoal from "./images/goal.svg";



function About() {
  return (
    <React.Fragment>
      <BannerInnereLanding imgSrc={BannerAbout} />
      <section className="about">
        <div className="pt-50 pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="section-title text-center mb-40 wow fadeInUp">
                  <h2 className="mb-1">About Us</h2>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 description-content-box">
                <p className="pb-15">Housr is a unique platform that offers the largest portfolio of co-living spaces and premium homes/apartments across prime locations close to working hubs.</p>
                <p>Our smartly designed spaces are fully furnished, managed and functional ranging from single rooms, studios, twin sharing rooms to full apartments. These spaces are conducive to the needs of today's technologically-savvy professionals. We cater to urban millennials, working professionals, bachelors, couples and small families.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video section */}
      <section className="intro-video">
        <div className="bg_cover pt-100 about-intro-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="about-page-video-section-header section-title text-center mb-60 wow fadeInUp">
                  <SectionHeader 
                    text="#LetsLiveBetter with Housr" 
                  />
                  <h4 className="mb-10 text-white font-weight-normal">When we say hassle-free living, we mean leaving no stone unturned to provide you with a free, easy, and luxurious lifestyle</h4>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12 embed-responsive embed-responsive-16by9">
                <video controls muted>
                  <source src={IntroVideo} type="video/mp4"/>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FoundingTeam />

      <section className="vision-part">
        <div className="container">
          <div className="row vision-wrap">
            <div className="col-lg-3 col-md-6 col-sm-12 text-center pb-40">
              <div className="content"> 
                <img src={IconVision} width="64px" className="mb-20" alt="" />
                <h4 className="pcol">OUR VISION</h4>
                <p>To chnage the Way Millennials Live.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center pb-40">
              <div className="content">
                <img src={IconMission} width="64px" className="mb-20" alt="" />
                <h4 className="pcol">OUR MISSION</h4>
                <p>To Bring Millennials together by providing them a truly exceptional living experience.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center pb-40">
              <div className="content">
                <img src={IconValues} width="64px" className="mb-20" alt="" />
                <h4 className="pcol">OUR VALUES</h4>
                <p>We Love People. We believe in people  over process and culture over profits.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center pb-40">
              <div className="content">
                <img src={IconGoal} width="64px" className="mb-20" alt="" />
                <h4 className="recent-post-list pcol">OUR GOAL</h4>
                <p>We want to provide people with places they would love to live at and to do this, we manage our spaces end-to-end, making customer service our top priority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <ClientCarousel />
    </React.Fragment>
  );
}

export default About;