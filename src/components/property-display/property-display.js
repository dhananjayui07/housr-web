import React, { Component } from "react";
import SectionHeader from "../shared/section-header/section-header";
import "./styles.css";
import Slider from "react-slick";
import PropertyImage1 from "./images/property-display.jpeg";
import NearbyProjects from "../nearby-projects/nearby-projects";
import AmenitiesHousrHomes from "../amenities-housr-homes/amenities-housr-homes";
import { useParams } from "react-router-dom";
import axios from "../../axios/index";

const settings = {
  customPaging: function (i) {
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
  autoplay: true,
  slidesToScroll: 1,
};

class PropertyDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { propertyDetails: [], isDataLoaded: false };
  }
  componentDidMount() {
    const { id } = this.props.params;
    axios
      .get(`/building-detail/${id}`)
      .then((res) => {
        this.setState({
          propertyDetails: res.data.data,
          isDataLoaded: true,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { propertyDetails, isDataLoaded } = this.state;
    const { slider_images, other_homes, location } = propertyDetails;
    
    if (!isDataLoaded) {
      return (
        <div className="text-center">
          <p> Loading... </p>
        </div>
      );
    }
    return (
      <React.Fragment>
        <section className="property-display-banner mt-80">
          <div className="property-display-banner-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="banner-content">
                    <div>
                      <h3>
                        {propertyDetails.building_area}{" "}
                        <span>{propertyDetails.building_name}</span>
                      </h3>
                      <p>{propertyDetails.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 full-w">
                  <div className="contact-wrapper-one mb-50 mt-50 wow fadeInRight">
                    <div className="partners-form">
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            {/* <div className="title-form-tab button-group">
                                                <button className="button active">Virtual tour</button>
                                                <button className="button ">live tour</button>
                                            </div> */}
                            <h4 className="mb-35 title-form">Book a tour</h4>
                            <div className="form_group">
                              <input
                                type="text"
                                className="form_control"
                                placeholder="Full Name"
                                name="name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <input
                                type="email"
                                className="form_control"
                                placeholder="Email"
                                name="email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <input
                                type="text"
                                className="form_control"
                                placeholder="Phone"
                                name="phone"
                                required
                              />
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
              {slider_images.map((item, i) => {
                return (
                  <div className="property-slide-img" key={i}>
                    <img src={item.image_url} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>
        <AmenitiesHousrHomes />
        <section className="property-location">
          <div className="container">
            <div className="section-title section-title-left mb-75 wow fadeInUp text-center">
              <SectionHeader text="Location" />
              <p>{location.address}</p>
            </div>
          </div>
          <div className="map-image">
            <iframe
              src={`//maps.google.com/maps?q=${location.lat},${location.lon}&z=15&output=embed`}
              title="maps"
              loading="lazy"
              width="100%"
              height="360"
              style={{ border: "0" }}
            ></iframe>
          </div>
        </section>
        <NearbyProjects nearbyDetail={other_homes} />
      </React.Fragment>
    );
  }
}

// export default PropertyDisplay;
function WithRouter(props) {
  return <PropertyDisplay {...props} params={useParams()} />;
}
export default WithRouter;
