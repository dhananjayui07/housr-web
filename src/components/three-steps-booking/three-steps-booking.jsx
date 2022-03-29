import React from "react";
import styles from "./styles.css";

function ThreeStepsBooking() {

  return (
    <React.Fragment>
      <section class="work-process-area pt-50 pb-20">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title mb-20 wow fadeInUp">
                <h3 class="mb-1 rcol text-center">Book your Housr C-living in 3 easy steps</h3>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="work-process-wrapper">
                <div class="row single-process-step p-0 align-items-center">
                  <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="process-content-box wow fadeInLeft">
                      <div class="step-count"><span>01.</span><p>Step 01</p></div>
                      <div class="content">
                        <p>Select your city and explore the properties</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="process-content-box wow fadeInLeft">
                      <div class="step-count"><span>02.</span><p>Step 02</p></div>
                      <div class="content">
                        <p>Click on Book Now, fill in the booking form and pay the token amount</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="process-content-box wow fadeInLeft">
                      <div class="step-count"><span>03.</span><p>Step 03</p></div>
                      <div class="content">
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
