import React from "react";
import "./styles.css";
import Select from 'react-select'
import Newsletter from "../newsletter/newsletter";
import ClientCarousel from "../client-carousel/client-carousel";

import LongTerm from "./images/long-term-pur.png";
import Sanitization from "./images/sanitization-pur.svg";
import Competitive from "./images/competitive-pur.svg";
import SectionHeader from "../shared/section-header/section-header";


const cityoptions = [
  { value: 'haryana', label: 'Haryana' },
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'pune', label: 'Pune' }
]

function Partners() {
  return (
    <React.Fragment>
      <section className="partners-banner mt-80">
        <div className="container">
          <div className="row contact-wrapper-one">
            <div className="col-lg-7 col-md-7 col-sm-12 p-hide"></div>
              <div className="col-lg-5 col-md-5 col-sm-12 full-w">
                <div className="contact-wrapper-one mb-50 mt-50 wow fadeInRight">
                  <div className="partners-form">
                    <form>
                      <div className="row">
                          <div className="col-lg-12">
                            <h4 className="mb-35 title-form">Partner with us</h4>
                            <div className="form_group">
                                <input type="text" className="form_control" placeholder="First Name" name="name" required />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                                <input type="text" className="form_control" placeholder="Phone" name="phone" required />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <input type="email" className="form_control" placeholder="Email" name="email" required />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <Select 
                                  classNamePrefix="partner-select-city" 
                                  options={cityoptions} 
                                  placeholder="Select City"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                              <div className="form_group">
                                  <button className="main-btn">Send Message</button>
                              </div>
                          </div>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start why Partner Section */}
      <section className="why">
        <div className="pt-70 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-40 wow fadeInUp">
                  <SectionHeader text="Why Partner with Housr?" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 description-content-box text-center">
                <img src={LongTerm} className="pb-20 mt-20 why-partner-icons" alt="" />
                <h4 className="mb-10">Long Term Lock-in Period</h4>
                <p>Housr Provides a lock-in period of minimum 1 year. Regular tenant search won't be a problem now.</p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 description-content-box text-center">
                <img src={Sanitization} className="pb-20 mt-20" alt="" />
                <h4 className="mb-10">Upkeep and maintenance</h4>
                <p>We promise regular upkeep, sanitisation and high maintenance of the property. From white wah to plumbing, we have got it covered.</p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 description-content-box text-center">
                <img src={Competitive} className="pb-20 mt-20" alt="" />
                <h4 className="mb-10">Competitive Rental value</h4>
                <p>Don't worry about the rental value. Housr ensures to provid at par and cometitive market prices to the property owners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* how it works */}
      <section className="work-process-area pt-70 pb-80 amenities-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-20">
              <div className="section-title text-center mb-20 wow fadeInUp">
                <SectionHeader text="How it works" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="work-process-wrapper">
                <div className="row single-process-step p-0 align-items-center">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count"><span>01.</span><p>Step 01</p></div>
                      <div className="content">
                        <h5 className="pcol">Share Property Details</h5>
                        <p>Fill in all the mandatory information, our sales team will further get in touch with you to schedule a property visit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count"><span>02.</span><p>Step 02</p></div>
                      <div className="content">
                      <h5 className="pcol">Review Proposal</h5>
                        <p>After a visit, carried out by our design & sales team, we'll share a proposal and further steps to convert the facility into a Housr property.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count"><span>03.</span><p>Step 03</p></div>
                      <div className="content">
                      <h5 className="pcol">Sign up with Housr</h5>
                        <p>Once you sign up with Housr, our design and sales team will take control of the management, maintenance and marketing of the property.</p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Partners;