import React from "react";
import "./styles.css";

import AmenitiesHousrHomes from "../amenities-housr-homes/amenities-housr-homes";
import MostSearchedProjects from "../most-searched-projects/most-searched-projects";
import NewLaunchedProjects from "../new-launched-projects/new-launched-projects";
import Newsletter from "../newsletter/newsletter";
import UpcomingProjects from "../upcoming-projects/upcoming-projects";
import PremiumProjects from "../premium-projects/premium-projects";
import HelpRequestCtaSection from "../help-request-cta-section/help-request-cta-section";
import BannerInnereLanding from "../banner-inner-landing/banner-inner-landing";
import BannerHomes from "./images/homes.jpeg";
import ThreeStepsBooking from "../three-steps-booking/three-steps-booking";
import ClientCarousel from "../client-carousel/client-carousel";


function HousrHomes() {

  return (
    <React.Fragment>
      <BannerInnereLanding imgSrc={BannerHomes} />
      <section className="coliving">
        <div className="pt-40 pb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-30 wow fadeInUp">
                  <h2>Housr Homes</h2>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 description-content-box">
                <p className="pb-15 text-center">Fully furnished and managed 1,2 & 3 BHK residences across prime locations close to working hubs and commercial spaces. HH ensures your living in a new city is completely hassle free with high safety standards and premium services.These are specifically designed to cater to couples, small families, bachelors and urban millennials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AmenitiesHousrHomes />
      <ThreeStepsBooking />
      <MostSearchedProjects hasBackground />
      <PremiumProjects />
      <NewLaunchedProjects hasBackground />
      <UpcomingProjects />
      <HelpRequestCtaSection />
      <Newsletter />
      <ClientCarousel />
    </React.Fragment>
    
  );
}

export default HousrHomes;
