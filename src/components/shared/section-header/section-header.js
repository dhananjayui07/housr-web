import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function SectionHeader({ text, subtext }) {
    return(
        <React.Fragment>
            <h2 className={"section-heading-text"}>{text}</h2>
            {subtext && (<h3 className={"section-heading-sub-text pcol"}>{subtext}</h3>)}
        </React.Fragment>
    );
}

SectionHeader.propTypes = {
    text: PropTypes.string,
    subText: PropTypes.string
};

export default SectionHeader;