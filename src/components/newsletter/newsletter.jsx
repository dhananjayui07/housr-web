import React from "react";
import "./styles.css";
import EmailIcon from "./images/email.png";

function Newsletter() {

    return (
      <React.Fragment>
        <section className="newsletter-area">
            <div className="container">
                <div className="newsletter-wrapper newsletter-wrapper-one bg_cover">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="newsletter-content-box-one wow fadeInLeft">
                                <div className="icon"><img src={EmailIcon} alt="" /></div>
                                <div className="content">
                                    <h2 className="title-text font-weight-normal">Subscribe to avail Special Offer
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="newsletter-form wow fadeInRight">
                                <div className="form_group">
                                    <input type="email" className="form_control" placeholder="Enter your Email ID" name="email" required />
                                    <i className="ti-location-pin" />
                                    <button className="main-btn">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
  
  export default Newsletter;
  