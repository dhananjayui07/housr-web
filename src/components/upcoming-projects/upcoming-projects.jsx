import React from "react";
import PropTypes from "prop-types";
import PropertyCard from "../property-card/property-card";
import "./styles.css";

import PropertyOne from "./images/listing-grid-1.jpeg";
import PropertyTwo from "./images/New1.jpeg";
import PropertyThree from "./images/New2.jpeg";
import SectionHeader from "../shared/section-header/section-header";

const UPCOMING_PROPERTIES_DATA = [
    {
        id: 1,
        imgPath: PropertyOne,
        categorytext: "Homes",
        propertyName: "Housr Malibu Sec 47, Good Earth City Centre",
        cityText: "Gurgaon"
    },
    {
        id: 2,
        imgPath: PropertyTwo,
        categorytext: "Co-Living",
        propertyName: "Housr Malibu Sec 47, Good Earth City Centre",
        cityText: "Gurgaon"
    },
    {
        id: 3,
        imgPath: PropertyThree,
        categorytext: "Homes",
        propertyName: "Housr Malibu Sec 47, Good Earth City Centre",
        cityText: "Gurgaon"
    }
]


function UpcomingProjects({ hasBackground= false }) {

    return(
        <React.Fragment>
            <section className={ hasBackground ? "listing-grid-area pt-115 pb-75 bg_cover background-bg" : "listing-grid-area pt-115 pb-75"}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-60 wow fadeInUp">
                                <SectionHeader text="Upcoming" subtext="Housr Properties" />
                            </div>
                        </div>
                    </div>
                    <div className="property-row row wow fadeInDown">
                        {
                            UPCOMING_PROPERTIES_DATA.map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-xs-12 px-0">
                                        <PropertyCard
                                            imgPath={item.imgPath}
                                            categorytext={item.categorytext}
                                            propertyName={item.propertyName}
                                            cityText={item.cityText}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

UpcomingProjects.propTypes = {
    hasBackground: PropTypes.bool
};

export default UpcomingProjects;