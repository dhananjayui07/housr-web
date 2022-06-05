import React from "react";
import AmenitiesHome from "../amenities-home/amenities-home";
import SectionHeader from "../shared/section-header/section-header";
import UpcomingProjects from "../upcoming-projects/upcoming-projects";
import "./styles.css";
import PropertyMap from "./images/property-location.png";
import Slider from "react-slick";
import PropertyImage1 from "./images/property-display.jpeg"
import PropertyImage2 from "./images/property-display.jpeg"
import PropertyImage3 from "./images/property-display.jpeg"
import PropertyImage4 from "./images/property-display.jpeg"
import PropertyImage5 from "./images/property-display.jpeg"


function PropertyDisplay() {
    const settings = {
        customPaging: function(i) {
            return (
              <button>
                <img src={PropertyImage1} alt="" />
              </button>
            );
        },
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
    };

    return(
        <React.Fragment>
            <section className="property-display-banner mt-80">
                <div className="property-display-banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="banner-content">
                                    <div>
                                        <h3>Coleman <span>Hebbal</span></h3>
                                        <p>Right in the heart of the bustling and buzzing Hebbal with cool common spaces to unwind</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 full-w">
                                <div className="contact-wrapper-one mb-50 mt-50 wow fadeInRight">
                                <div className="partners-form">
                                    <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="title-form-tab button-group">
                                                <button className="button active">Virtual tour</button>
                                                <button className="button ">live tour</button>
                                            </div>
                                            <div className="form_group">
                                                <input type="text" className="form_control" placeholder="Full Name" name="name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                            <input type="email" className="form_control" placeholder="Email" name="email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <input type="text" className="form_control" placeholder="Phone" name="phone" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <button className="main-btn">Book a tour</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="property-price-row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="price">
                                <div className="room-type">2BHK shared room</div>
                                <div className="range">Starting from</div>
                                <div className="amt">Rs. 9,500</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="price">
                                <div className="room-type">2BHK Private Room</div>
                                <div className="range">Starting from</div>
                                <div className="amt">Rs. 19,000</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="price">
                                <div className="room-type">2BHK Full Apartment</div>
                                <div className="range">Starting from</div>
                                <div className="amt">Rs. 38,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="property-image-slider">
                <div className="container">
                    <Slider {...settings}>
                        <div className="property-slide-img">
                            <img src={PropertyImage1} alt="" />
                        </div>
                        <div className="property-slide-img">
                            <img src={PropertyImage2} alt="" />
                        </div>
                        <div className="property-slide-img">
                            <img src={PropertyImage3} alt="" />
                        </div>
                        <div className="property-slide-img">
                            <img src={PropertyImage4} alt="" />
                        </div>
                        <div className="property-slide-img">
                            <img src={PropertyImage5} alt="" />
                        </div>
                    </Slider>
                </div>
            </section>
            <AmenitiesHome />
            <section className="property-location">
                <div className="container">
                    <div className="section-title section-title-left mb-75 wow fadeInUp text-center">
                        <SectionHeader text="Location" />
                        <p>No 44, Venkatagowda Layout, Dasarahalli main road, Dasarahalli village, hebbal, Banagalore-560092</p>
                    </div>
                    
                </div>
                <div className="map-image">
                    <img src={PropertyMap} alt="" />
                </div>
            </section>
            <UpcomingProjects />
        </React.Fragment>
    );
}

export default PropertyDisplay;