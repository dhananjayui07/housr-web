import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

function BannerInnereLanding({ imgSrc }) {
    return(
        <React.Fragment>
            <section className="inner-banners">
                <div className="container-fluid">
                    <div className="row description-wrapper"> <img src={imgSrc} alt="" /> </div>
                </div>
            </section>
        </React.Fragment>
    );
}
BannerInnereLanding.propTypes = {
    imgSrc: PropTypes.string
};
export default BannerInnereLanding;