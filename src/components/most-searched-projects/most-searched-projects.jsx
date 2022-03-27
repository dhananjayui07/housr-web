import React from "react";
import Slider from "react-slick";
import PropertyCard from "../property-card/property-card";
import styles from "./styles.css";

import PropertyOne from "./images/listing-grid-1.jpeg";
import PropertyTwo from "./images/New1.jpeg";
import PropertyThree from "./images/New2.jpeg";

const SEARCHED_PROPERTIES_DATA = [
    {
        imgPath: PropertyOne,
        categorytext: "Homes",
        propertyName: "Housr Malibu Sec 47, Good Earth City Centre",
        cityText: "Gurgaon"
    },
    {
        imgPath: PropertyTwo,
        categorytext: "Co-Living",
        propertyName: "Housr Malibu Sec 47, Good Earth City Centre",
        cityText: "Gurgaon"
    },
    {
        imgPath: PropertyThree,
        categorytext: "Homes",
        propertyName: "Housr Malibu Sec 47, Good Earth City Centre",
        cityText: "Gurgaon"
    },
    {
        imgPath: PropertyOne,
        categorytext: "Co-Living",
        propertyName: "Housr Malibu Sec 47, Good Earth City Centre",
        cityText: "Gurgaon"
    },
    {
        imgPath: PropertyTwo,
        categorytext: "Homes",
        propertyName: "Housr Malibu Sec 47, Good Earth City Centre",
        cityText: "Gurgaon"
    },
    {
        imgPath: PropertyThree,
        categorytext: "Co-Living",
        propertyName: "Housr Malibu Sec 47, Good Earth City Centre",
        cityText: "Gurgaon"
    }
]


function MostSearchedProjects() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: false,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return(
        <React.Fragment>
            <section className="listing-grid-area pt-75 pb-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-60 wow fadeInUp">
                                <h2 className="mb-1 rcol"> <span className="title-text-outline font-weight-bolder">Most</span>Searched</h2>
                                <h3 className="sub-title mb-10 font-weight-normal">Housr Properties</h3>
                            </div>
                        </div>
                    </div>
                    <div className="listing-slider-one most-searched-slider wow fadeInDown">
                        <Slider {...settings}>
                            {
                                SEARCHED_PROPERTIES_DATA.map((item, index) => {
                                    return (
                                        <PropertyCard
                                            key={index}
                                            imgPath={item.imgPath}
                                            categorytext={item.categorytext}
                                            propertyName={item.propertyName}
                                            cityText={item.cityText}
                                        />
                                    );
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default MostSearchedProjects;