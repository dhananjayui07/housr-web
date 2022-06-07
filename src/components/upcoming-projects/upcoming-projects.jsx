import React, { Component } from "react";
import PropTypes from "prop-types";
import PropertyCard from "../property-card/property-card";
import "./styles.css";
import SectionHeader from "../shared/section-header/section-header";
import axios from '../../axios/index';

class UpcomingProjects extends Component {
    constructor(props) {
        super(props);
        this.state = { upcomingPropertiesData: [], isDataLoaded: false }
    }
    componentDidMount() {
        axios.get('/building-listing')
            .then((res) => {
                this.setState({ upcomingPropertiesData: res.data.data.filtered_buildings.slice(0, 3), isDataLoaded: true })
            }).catch(err => console.error(err))
    }
    render() {
        const { upcomingPropertiesData, isDataLoaded } = this.state;
        if (!isDataLoaded) {
            return (
                <div className="text-center">
                    <p> Loading... </p>
                </div>
            )
        };
        return (
            <React.Fragment>
                <section className={this.props.hasBackground ? "listing-grid-area pt-115 pb-75 bg_cover background-bg" : "listing-grid-area pt-115 pb-75"}>
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
                                upcomingPropertiesData.map((item, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-xs-12 px-0">
                                            <PropertyCard
                                                key={index}
                                                imgPath={item.image_url}
                                                categorytext={item.vector_name}
                                                propertyName={item.building_name}
                                                cityText={item.area_name}
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
}

UpcomingProjects.propTypes = {
    hasBackground: PropTypes.bool
};

export default UpcomingProjects;