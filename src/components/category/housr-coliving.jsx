import React from "react";
import "./styles.css";

import ClientCarousel from "../client-carousel/client-carousel";
import MostSearchedProjects from "../most-searched-projects/most-searched-projects";
import NewLaunchedProjects from "../new-launched-projects/new-launched-projects";
import Newsletter from "../newsletter/newsletter";
import UpcomingProjects from "../upcoming-projects/upcoming-projects";
import AmenitiesColiving from "../amenities-coliving/amenities-coliving";
import PremiumProjects from "../premium-projects/premium-projects";
import HelpRequestCtaSection from "../help-request-cta-section/help-request-cta-section";
import BannerInnereLanding from "../banner-inner-landing/banner-inner-landing";
import BannerColiving from "./images/co-living.jpeg";
import ThreeStepsBooking from "../three-steps-booking/three-steps-booking";


function HousrColiving() {

  return (
    <React.Fragment>
      <BannerInnereLanding imgSrc={BannerColiving} />
      <section className="coliving">
        <div className="pt-40 pb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-30 wow fadeInUp">
                  <h2 className="rcol">Housr Co-living</h2>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 description-content-box">
                <p className="pb-15 text-center">Housr has the largest portfolio of fully aggregated co-living properties in India. The company provides Single Rooms, Studios and Twin Sharing accommodations that are fully furnished and serviced for working professionals and students.Through full-stack operations and with the use of cutting-edge technology, Housr delivers a community living experience never seen or experienced in the country before. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AmenitiesColiving />
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

export default HousrColiving;
