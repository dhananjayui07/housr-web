import React from "react";
import styles from "./styles.css";
import StayAbode from "./images/stay-abode.png";

function HeroSliderHome() {
  return (
    <React.Fragment>
      <div className="fnc-slider example-slider">
        <div className="fnc-slider__slides">
            {/* Slide 1 */}
            <div className="fnc-slide fnc-slide-1 m--active-slide">
                <div className="fnc-slide__inner">
                    <div className="fnc-slide__mask-inner" />
                    <div className="fnc-slide__content col-lg-12">
                        <h2 className="fnc-slide__heading">
                            <div className="fnc-slide__heading-line"><span className="rcol">HOUSR CO-LIVING</span></div>
                            <div className="fnc-slide__heading-line sub-heading">
                                <span className="font-weight-normal rblack">
                                    Fully Furnished
                                    and Managed Studios <br />
                                    for single working professionals
                                </span>
                            </div>
                            <div className="fnc-slide__heading-line tags">
                                <span className="rcol font-weight-normal"><em>#LetsLiveBetter</em></span>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className="fnc-slide fnc-slide-2">
                <div className="fnc-slide__inner">
                    <div className="fnc-slide__mask-inner" />
                    <div className="fnc-slide__content col-lg-12">
                        <h2 className="fnc-slide__heading">
                            <div className="fnc-slide__heading-line"><span className="rcol">HOUSR HOMES</span></div>
                            <div className="fnc-slide__heading-line sub-heading">
                                <span className="font-weight-normal rblack">
                                    Fully Furnished
                                    and Managed Residences <br />
                                    for individuals & small families
                                </span>
                            </div>
                            <div className="fnc-slide__heading-line tags">
                                <span className="rcol font-weight-normal"><em>#HassleFreeLiving</em></span>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
            {/* slide 3 */}
            <div className="fnc-slide fnc-slide-3">
                <div className="fnc-slide__inner">
                    <div className="fnc-slide__mask-inner" />
                    <div className="fnc-slide__content col-lg-12">
                        <h2 className="fnc-slide__heading">
                            <div className="fnc-slide__heading-line">
                                <span className="rcol"> <img src={StayAbode} className="mb-10" alt="" /> </span>
                            </div>
                            <div className="fnc-slide__heading-line sub-heading">
                                <span className="font-weight-normal rblack">
                                    Healthy, Hygienic and Happy Community <br />
                                    Living in Bangalore
                                </span>
                            </div>
                            <div className="fnc-slide__heading-line tags">
                                <span className="rcol font-weight-normal"><em>#TechEnabledLiving</em></span>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
}

export default HeroSliderHome;