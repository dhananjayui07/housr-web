import React from "react";
import "./styles.css";

function ThreeStepsBooking() {

  return (
    <React.Fragment>
      <section className="work-process-area pt-50 pb-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title mb-20 wow fadeInUp">
                <h3 className="mb-1 text-center">Book your Housr C-living in 3 easy steps</h3>
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
                        <p>Select your city and explore the properties</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count"><span>02.</span><p>Step 02</p></div>
                      <div className="content">
                        <p>Click on Book Now, fill in the booking form and pay the token amount</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count"><span>03.</span><p>Step 03</p></div>
                      <div className="content">
                        <p>Housr representative will call you to guide with the Move-in procedure</p>
                      </div>
                    </div>
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

export default ThreeStepsBooking;
