import React, { Component } from "react";
import "./styles.css";

import Newsletter from "../newsletter/newsletter";
import ClientCarousel from "../client-carousel/client-carousel";
// import Select from "react-select";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PropertyCard from "../property-card/property-card";
import { useLocation } from "react-router-dom";
import axios from "../../axios/index";

// const cityoptionslisting = [
//   { value: "haryana", label: "Haryana" },
//   { value: "hyderabad", label: "Hyderabad" },
//   { value: "pune", label: "Pune" },
// ];
// const categoryoptionslisting = [
//   { value: "coliving", label: "Housr Co-living" },
//   { value: "homes", label: "Housr Homes" },
//   { value: "stayabode", label: "StayAbode by Housr" },
// ];
// const pricerangelisting = [
//   { value: "0-10,000", label: "0-10,000" },
//   { value: "10,000-20,000", label: "10,000-20,000" },
//   { value: "20,000-30,000", label: "20,000-30,000" },
//   { value: "30,000+", label: "30,000+" },
// ];

class PropertyListing extends Component {
  // const [startDate, setStartDate] = useState(new Date());
  constructor(props) {
    super(props);
    this.state = { propertyList: [], isDataLoaded: false };
  }
  componentDidMount() {
    const { city, category } = this.props;

    const url =
      city && category
        ? `/building-search?city=${city}&property_type=${category}`
        : `/building-search`;
    this.fetchData(url);
  }
  componentDidUpdate = async (prevProps) => {
    const { city, category } = prevProps;
    const newCity = this.props.city;
    const newCategory = this.props.category;
    if (city !== newCity || category !== newCategory) {
      const url = `/building-search?city=${newCity}&property_type=${newCategory}`;
      await this.fetchData(url);
    }
  };

  fetchData = async (url) => {
    await axios
      .get(url)
      .then((res) => {
        this.setState({
          propertyList: res.data.data,
          isDataLoaded: true,
        });
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { propertyList, isDataLoaded } = this.state;

    if (!isDataLoaded) {
      return (
        <div className="text-center">
          <p> Loading... </p>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="property-listing-header-strip">
          <div className="container">
            <h3 className="listing-title">Gurgaon Properties</h3>
            <div className="property-listing-filter-wrap">
              <div className="show-filter-listing">
                <p>
                  Filter <span class="ti-filter"></span>
                </p>
              </div>
              {/* <form>
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
            </form> */}
            </div>
          </div>
        </div>
        <div className="listing-wrapper">
          <div className="container">
            <div className="row">
              {propertyList.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4">
                    <PropertyCard
                      imgPath={item.image_url}
                      categorytext={item.property_type}
                      propertyName={item.building_name}
                      cityText={item.city}
                      id={item.building_section_id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <section class="amenities-bg pt-50 pb-50"></section>
        <Newsletter />
        <ClientCarousel />
      </React.Fragment>
    );
  }
}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function WithRouter(props) {
  let query = useQuery();
  const params = { city: query.get("city"), category: query.get("category") };
  return <PropertyListing {...props} {...params} />;
}
export default WithRouter;
