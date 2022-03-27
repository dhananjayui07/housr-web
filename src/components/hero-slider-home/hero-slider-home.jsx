import React from "react";
import styles from "./styles.css";

function HeroSliderHome() {
  return (
    <React.Fragment>
      <div className="fnc-slider example-slider">
        <div className="fnc-slider__slides">
            
            <div className="fnc-slide m--blend-green m--active-slide">
                <div className="fnc-slide__inner">
                    
                <div className="fnc-slide__mask-inner"></div>
              
                    <div className="fnc-slide__content col-lg-12">
                        <h2 className="fnc-slide__heading">
                            <div className="fnc-slide__heading-line"> <span className="rcol">HOUSR CO-LIVING</span> </div>
                            <div className="fnc-slide__heading-line sub-heading"> <span className="font-weight-normal rblack">Fully Furnished
                  and Managed Studios <br />
                  for single working professionals</span> </div>
                            <div className="fnc-slide__heading-line tags"> <span className="rcol font-weight-normal"><em>#LetsLiveBetter</em></span></div>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="fnc-slide m--blend-dark">
                <div className="fnc-slide__inner">
                <div className="fnc-slide__mask-inner"></div>
            
                    <div className="fnc-slide__content col-lg-12">
                        <h2 className="fnc-slide__heading">
                            <div className="fnc-slide__heading-line"> <span className="rcol">HOUSR HOMES</span> </div>
                            <div className="fnc-slide__heading-line sub-heading"> <span className="font-weight-normal rblack">Fully Furnished
                  and Managed Residences<br />
                  for individuals & small families</span> </div>
                            <div className="fnc-slide__heading-line tags"> <span className="rcol font-weight-normal"><em>#HassleFreeLiving</em></span></div>
                        </h2>
                    </div>
                </div>
            </div>
            
            <div className="fnc-slide m--blend-red">
                <div className="fnc-slide__inner">
                <div className="fnc-slide__mask-inner"></div>
            
                    <div className="fnc-slide__content col-lg-12">
                        <h2 className="fnc-slide__heading">
                            <div className="fnc-slide__heading-line"> <span className="rcol"> <img src="assets/images/stay-abode.png"
                    className="mb-10" /> </span> </div>
                            <div className="fnc-slide__heading-line sub-heading"> <span className="font-weight-normal rblack">Healthy,
                  Hygienic and Happy Community <br />
                  Living in Bangalore</span> </div>
                            <div className="fnc-slide__heading-line tags"> <span className="rcol font-weight-normal"><em>#TechEnabledLiving</em></span></div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        {/* <nav className="fnc-nav" style="display:none;">
            <div className="fnc-nav__bgs">
                <div className="fnc-nav__bg m--navbg-green m--active-nav-bg"></div>
                <div className="fnc-nav__bg m--navbg-dark"></div>
                <div className="fnc-nav__bg m--navbg-red"></div>
                <div className="fnc-nav__bg m--navbg-blue"></div>
            </div>
            <div className="fnc-nav__controls" style="line-height: 18px;">
                <button className="fnc-nav__control"></button>
                <button className="fnc-nav__control"></button>
                <button className="fnc-nav__control"></button>
            </div>
        </nav> */}
    </div>
    </React.Fragment>
  );
}

export default HeroSliderHome;