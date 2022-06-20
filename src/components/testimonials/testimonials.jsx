import React, { Component } from "react";
import "./styles.css";

// images
// import Nitin from "./images/nitin.png";
// import Rohit from "./images/rohit-sharma.png";
// import Ritika from "./images/ritika.png";
import TestimonialCard from "./testimonial-card";
import Slider from "react-slick";
import SectionHeader from "../shared/section-header/section-header";
import axios from "../../axios/index";

// const TESTIMONIAL_DATA = [
//     {
//         ImageSrc: Nitin,
//         Name: "Nitin Singhal",
//         Designation: "Customer",
//         Text: "Housr has ensured that I get a homely feel away from home. I moved here post COVID and was very sceptical about cleanliness but it was so good to see the high end sanitisation drive by housekeeping staff each day."
//     },
//     {
//         ImageSrc: Rohit,
//         Name: "Rohit Sharma",
//         Designation: "Professional",
//         Text: "Staying at Housr is highly convenient. As I am a working professional, I don't get much time to clean my room and cook healthy food but all these problems are solved just under one roof."
//     },
//     {
//         ImageSrc: Ritika,
//         Name: "Ritika Garg",
//         Designation: "HR",
//         Text: "I moved in from Lucknow and never thought that the concept of co-living can be so fun and interesting. This place has an amazing setup , all the required amenities and diverse people to network with."
//     }
// ];
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = { testimonialData: [], isDataLoaded: false };
  }
  componentDidMount() {
    axios
      .get("/home")
      .then((res) => {
        this.setState({
          testimonialData: res.data.data.testimonials,
          isDataLoaded: true,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    const { testimonialData, isDataLoaded } = this.state;
    if (!isDataLoaded) {
      return (
        <div className="text-center">
          <p> Loading... </p>
        </div>
      );
    }
    return (
      <React.Fragment>
        <section className="testimonials_one">
          <div className="testimonial_one_map" />
          <div className="container-box">
            <div className="section-title text-center pb-50">
              <SectionHeader
                text="Our Testimonials"
                subtext="Our Happy Housr Clan"
              />
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="testimonials_one_carousel">
                  <Slider {...settings}>
                    {testimonialData.map((item, index) => {
                      return (
                        <TestimonialCard
                          key={index}
                          ImageSrc={item.image_url}
                          Text={item.description}
                          Name={item.name}
                          Designation={item.occupation}
                        />
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonials;
