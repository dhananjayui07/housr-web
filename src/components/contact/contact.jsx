import React from "react";
import ClientCarousel from "../client-carousel/client-carousel";
import Newsletter from "../newsletter/newsletter";
import styles from "./styles.css";

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact() {

  return (
    <React.Fragment>
      <section className="contact-page-map">
          <div className="map-box">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDUcDTk9cm5RXbRK7Y_5_hPjtxVIvqqRoc" }}
              defaultZoom= {16}
              defaultCenter={{lat: 28.451007, lng: 77.098228}}
            >
              <AnyReactComponent
                lat={28.451007}
                lng={77.098228}
                text="Housr Pvt. Ltd."
              />
            </GoogleMapReact>
          </div>
      </section>
      <section className="contact-section pt-50 pb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-10">
                    <div className="section-title section-title-left mb-50">
                        <span className="sub-title">Contact Us</span>
                        <h2>How Can We Help You</h2>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                    <div className="contact-wrapper-one mb-30 wow fadeInRight">
                        <div className="contact-form">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
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
                                            <textarea className="form_control" placeholder="Your Message" name="message" />
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
                <div className="col-lg-6">
                    <div className="contact-information-list">
                        <div className="information-item mb-30 wow fadeInUp">
                            <div className="icon">
                                <i className="ti-location-pin"></i>
                            </div>
                            <div className="info">
                                <h5>Address</h5>
                                <p>Housr Technologies Private Limited<br />
                                Level 5, We Work Cabin No. 05B123, Two Horizon Centre,<br />
                                Golf Course Road, Sector 43, Gurgaon, Haryana</p>
                            </div>
                        </div>
                        <div className="information-item mb-30 wow fadeInUp">
                            <div className="icon">
                                <i className="ti-email"></i>
                            </div>
                            <div className="info">
                                <h5>For Media queries, write to</h5>
                                <p><a href="mailto:pr@housr.in">pr@housr.in</a></p>
                            </div>
                        </div>
                        <div className="information-item mb-30 wow fadeInUp">
                            <div className="icon">
                                <i className="ti-email"></i>
                            </div>
                            <div className="info">
                                <h5>For Careers, write to</h5>
                                <p><a href="mailto:hr@housr.in">hr@housr.in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <section class="amenities-bg pt-50 pb-50" />
    <Newsletter />
    <ClientCarousel />
  </React.Fragment>
  );
}

export default Contact;