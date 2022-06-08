import React from "react";
import PropTypes from "prop-types";
import PropertyCard from "../property-card/property-card";
import "./styles.css";
import SectionHeader from "../shared/section-header/section-header";

function NearbyProjects({ hasBackground = false, nearbyDetail }) {
  return (
    <React.Fragment>
      <section
        className={
          hasBackground
            ? "listing-grid-area pt-115 pb-75 bg_cover background-bg"
            : "listing-grid-area pt-115 pb-75"
        }
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <SectionHeader text="Nearby" subtext="Housr Properties" />
              </div>
            </div>
          </div>
          <div className="property-row row wow fadeInDown">
            {nearbyDetail.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 col-xs-12 px-0">
                  <PropertyCard
                    imgPath={item.image_url}
                    categorytext={item.vector_name}
                    propertyName={item.building_name}
                    cityText={item.city}
                    id={item.building_section_id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

NearbyProjects.propTypes = {
  hasBackground: PropTypes.bool,
};

export default NearbyProjects;
