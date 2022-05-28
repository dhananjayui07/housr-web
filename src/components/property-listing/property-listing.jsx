import React, { useState } from "react";
import "./styles.css";

import Newsletter from "../newsletter/newsletter";
import ClientCarousel from "../client-carousel/client-carousel";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PropertyCard from "../property-card/property-card";

import PropertyOne from "./images/listing-grid-1.jpeg";
import PropertyTwo from "./images/New1.jpeg";
import PropertyThree from "./images/New2.jpeg";

const GURGAON_LISTING_DATA = [
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

const cityoptionslisting = [
  { value: 'haryana', label: 'Haryana' },
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'pune', label: 'Pune' }
]
const categoryoptionslisting = [
  { value: 'coliving', label: 'Housr Co-living' },
  { value: 'homes', label: 'Housr Homes' },
  { value: 'stayabode', label: 'StayAbode by Housr' }
]
const pricerangelisting = [
  { value: '0-10,000', label: '0-10,000' },
  { value: '10,000-20,000', label: '10,000-20,000' },
  { value: '20,000-30,000', label: '20,000-30,000' },
  { value: '30,000+', label: '30,000+' }
]

function PropertyListing() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <React.Fragment>
      
      <div className="property-listing-header-strip">
        <div className="container">
          <h3 className="listing-title">Gurgaon Properties</h3>
          <div className="property-listing-filter-wrap">
            <div className="show-filter-listing">
              <p>Filter <span class="ti-filter"></span></p>
            </div>
            <form>
                <div className="cityWrap">
                    <div className="form_group">
                        <Select 
                            classNamePrefix="head-select-search" 
                            options={cityoptionslisting} 
                            placeholder="Select City"
                        />
                    </div>
                </div>
                <div className="categoryWrap">
                    <div className="form_group">
                        <Select 
                            classNamePrefix="head-select-search" 
                            options={categoryoptionslisting} 
                            placeholder="Property Type"
                        />
                    </div>
                </div>
                <div className="listing-datepicker">
                  <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                  <i class="ti-calendar" />
                </div>
                <div className="categoryWrap">
                    <div className="form_group">
                        <Select 
                            classNamePrefix="head-select-search" 
                            options={pricerangelisting} 
                            placeholder="Price"
                        />
                    </div>
                </div>
                <div className="searchButtonWrap">
                    <div className="form_group">
                      <button className="main-btn">Search</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
      <div className="listing-wrapper">
        <div className="container">
          <div className="row">
            {
                GURGAON_LISTING_DATA.map((item, index) => {
                    return (
                      <div key={index} className="col-lg-4">
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
      </div>
      <section class="amenities-bg pt-50 pb-50"></section>
      <Newsletter />
      <ClientCarousel />
    </React.Fragment>
  );
}

export default PropertyListing;