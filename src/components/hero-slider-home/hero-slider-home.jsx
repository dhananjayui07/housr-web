import React from "react";
import "./styles.css";
import StayAbode from "./images/stay-abode.png";
import Slider from "react-slick";
import SlideOne from "./images/slide01.jpeg";
import SlideTwo from "./images/slide02.jpeg";
import SlideThree from "./images/slide03.jpeg";

function HeroSliderHome() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
    };
  return (
    <React.Fragment>
      
        <div className="slider-home">
            <Slider {...settings}>
                <div className="slide-item">
                    <img className="slide-banner" src={SlideOne} alt="HOUSR CO-LIVING" />
                    <div className="slide-content">
                        <h2 className="pcol">HOUSR CO-LIVING</h2>
                        <p>
                            Fully Furnished
                            and Managed Studios <br />
                            for single working professionals
                        </p>
                        <span className="pcol"><em>#LetsLiveBetter</em></span>
                    </div>
                </div>
                <div className="slide-item">
                    <img className="slide-banner" src={SlideTwo} alt="HOUSR HOMES" />
                    <div className="slide-content">
                        <h2 className="pcol">HOUSR HOMES</h2>
                        <p>
                            Fully Furnished
                            and Managed Residences <br />
                            for individuals & small families
                        </p>
                        <span className="pcol"><em>#HassleFreeLiving</em></span>
                    </div>
                </div>
                <div className="slide-item">
                    <img className="slide-banner" src={SlideThree} alt="Stay-Abode" />
                    <div className="slide-content">
                        <h2 className="pcol"><img src={StayAbode} alt="Stay-Abode" /></h2>
                        <p>
                            Healthy, Hygienic and Happy Community <br />
                            Living in Bangalore
                        </p>
                        <span className="pcol"><em>#TechEnabledLiving</em></span>
                    </div>
                </div>
            </Slider>
        </div>
    </React.Fragment>
  );
}

export default HeroSliderHome;