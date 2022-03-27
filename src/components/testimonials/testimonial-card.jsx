import React from "react";
import styles from "./styles.css";
import PropTypes from "prop-types";

function TestimonialCard({ ImageSrc, Text, Name, Designation  }) {

    return (
        <React.Fragment>
            <div className="testimonials_one_single">
                <div className="shadow-box" />
                <div className="testimonials_one_image"> <img src={ImageSrc} alt={Name} /> </div>
                <div className="testimonials_one_text">
                    <div className="testimonials_one_text_box">
                        <p>{Text}</p>
                    </div>
                    <div className="testimonials_quote_icon"> <span className="icon-quotes-right"></span> </div>
                    <div className="customer_info">
                        <h3>{Name},<span>{Designation}</span></h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

TestimonialCard.propTypes = {
    ImageSrc: PropTypes.string,
    Text: PropTypes.string,
    Name: PropTypes.string,
    Designation: PropTypes.string
};

export default TestimonialCard