import React, { useEffect, useRef, useState } from 'react'
import "./styles.css";

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

    const [searchBar, setSearchBar] = useState(false);
    const searchbarSticky = () => {
        if (window.scrollY >= 120) {
            setSearchBar(true);
        } else {
            setSearchBar(false);
        }
    }
    window.addEventListener('scroll', searchbarSticky);

    // add breakpoint class
    const heroSearch = useRef(null);
    var screenWidth = window.innerWidth;

    useEffect(() => {
        if (screenWidth <= 600) {
            heroSearch.current.classList.add("breakpoint-on");
        } else {
            heroSearch.current.classList.remove("breakpoint-on");
        }
        return () => {};
    });

    
    

  return (
    <React.Fragment>
        <div className={searchBar ? 'hero-slider-wrapper sticky' : 'hero-slider-wrapper'} ref={heroSearch}>
            <div className="hero-content">
                <div className="hero-search-wrapper wow fadeInUp" wow-data-delay="70ms">
                    <form>
                        <div className="row">
                        <div className="cityWrap">
                            <div className="form_group">
                                <Select 
                                    classNamePrefix="head-select-search" 
                                    options={cityoptions} 
                                    placeholder="Search By City"
                                />
                            </div>
                        </div>
                        <div className="categoryWrap">
                            <div className="form_group">
                                <Select 
                                    classNamePrefix="head-select-search" 
                                    options={categoryoptions} 
                                    placeholder="Search By Category"
                                />
                            </div>
                        </div>
                        <div className="searchWrap">
                            <div className="form_group">
                            <button className="main-btn">Search<span className="ti-search"></span></button>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default HeaderSearch;
