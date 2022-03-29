import React from 'react'
import styles from "./styles.css";

import Select from 'react-select'

const cityoptions = [
  { value: 'haryana', label: 'Haryana' },
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'pune', label: 'Pune' }
]
const categoryoptions = [
  { value: 'coliving', label: 'Housr Co-living' },
  { value: 'homes', label: 'Housr Homes' },
  { value: 'stayabode', label: 'StayAbode by Housr' }
]

function HeaderSearch() {
  return (
    <React.Fragment>
        <div className="hero-slider-wrapper">
            <div className="col-lg-6 col-md-8 col-sm-8 align-self-center">
                <div className="hero-content">
                    <div className="hero-search-wrapper wow fadeInUp" wow-data-delay="70ms">
                        <form>
                            <div className="row">
                                <div className="col-lg-5 col-md-4 col-sm-12 cityWrap">
                                    <div className="form_group">
                                        <Select className="head-select" options={cityoptions} />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-4 col-sm-12 categoryWrap">
                                    <div className="form_group">
                                        <Select options={categoryoptions} />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-12 searchWrap">
                                    <div className="form_group">
                                        <button className="main-btn ti-search"><span className="m-none">Search</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default HeaderSearch;
