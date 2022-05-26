import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function PropertyCard({ imgPath, categorytext, propertyName, cityText  }) {
    return(
        <React.Fragment>
            <div className="listing-item listing-grid-item-two pb-20">
                <div className="listing-thumbnail"> <img src={imgPath} width="100%" alt={propertyName} /> 
                    <span className="featured-btn">{categorytext}</span>
                </div>
                <div className="listing-content">
                    <h3 className="title font-weight-normal"><a href="https://www.google.com/" target="_blank" rel="noreferrer">{propertyName}</a></h3>
                    <p>
                        <span><i className="ti-location-pin" /> {cityText}</span> 
                        <span className="float-right"><NavLink to="/" className="btn-link"><i className="ti-share" /> Share</NavLink></span>
                    </p>
                    {/* <p className="border-top pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum...</p> */}
                    <p className="price-listing">
                        <span>Twin Sharing Starting @ <strong className="float-right">Rs. 10,499</strong></span>
                        <span>Solo Room starting @ <strong className="float-right">Rs. 18,499</strong></span>
                    </p>
                    <div className="listing-meta">
                        <ul>
                            <li><span><NavLink to="/" className="btn-link"><i className="ti-direction-alt" /> Direction</NavLink> </span></li>
                            <li><span className="btn btn-danger"><i className="ti-hand-point-right text-white" /><NavLink to="/">Book Now</NavLink></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

PropertyCard.propTypes = {
    imgPath: PropTypes.string,
    categorytext: PropTypes.string,
    propertyName: PropTypes.string,
    cityText: PropTypes.string 
};

export default PropertyCard;