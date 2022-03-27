import React from "react";
import styles from "./styles.css";


// icons
import Mediator from "./images/mediator.png";
import Support from "./images/24x7.png";
import Events from "./images/events.png";
import Food from "./images/food.png";
import FullyFurnished from "./images/fully-furnished.png";
import Housekeeping from "./images/housekeeping.png";
import SafeSecure from "./images/safe-secure.png";
import SmartLiving from "./images/smart-living.png";
import WashingMachine from "./images/washing-machine.png";
import Wifi from "./images/wifi.png";

function Amenities() {
    return(
        <section className="amenities-app">
            <div className="amenities-wrapper-one pt-100 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="amenities-content-box amenities-content-box-one">
                                <div className="section-title section-title-left mb-75 wow fadeInUp text-center">
                                    <h2 className="mb-1 rcol"> <span className="title-text-outline">Housr</span>Amenities</h2>
                                    <h3 className="sub-title mb-10 font-weight-normal">Everything you need to live better, Safer, Healthier</h3>
                                </div>
                                <div className="col-lg-12">
                                    <ul className="features-list-one ">
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Mediator} alt="" /></div>
                                            <div className="content">
                                                <h5>No Middlemen</h5>
                                                <p>No involvement of landlord or brokers, deal directly with Housr manager in case of any issues.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={FullyFurnished} alt="" /></div>
                                            <div className="content">
                                                <h5>Fully Furnished</h5>
                                                <p>Well Ventilated rooms with Balcony , Work from home compatible desks along with premium quality furniture and fitments.</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={SafeSecure} alt="" /></div>
                                            <div className="content">
                                                <h5>Fully Managed</h5>
                                                <p>Experience the luxury of no touch move-ins with virtual house tour , fully serviced rooms and 24*7 security.</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Housekeeping} alt="" /></div>
                                            <div className="content">
                                                <h5>Professional grade Housekeeping </h5>
                                                <p>The staff is professionally trained to provide no-contact housekeeping services and A- grade sanitisation. </p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={WashingMachine} alt="" /></div>
                                            <div className="content">
                                                <h5>Smart Laundry Services</h5>
                                                <p>Hassle free living with in-house laundry and dry cleaning services.</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Wifi} alt="" /></div>
                                            <div className="content">
                                                <h5>High Speed Internet</h5>
                                                <p>We offer high speed Wifi to make your life easier and happier.</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={SmartLiving} alt="" /></div>
                                            <div className="content">
                                                <h5>App Enabled Living</h5>
                                                <p>Making payment and raising tickets for maintenance is just a click away with Housr App.</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Food} alt="" /></div>
                                            <div className="content">
                                                <h5>Fresh Meal Facility </h5>
                                                <p>We have an in-house cloud kitchen and a common caffetteria wherein we offer healthy hygienic , fresh & gourmet breakfast and dinner made by the experienced chefs.</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Events} alt="" /></div>
                                            <div className="content">
                                                <h5>Engaging Community Events:</h5>
                                                <p>Be a part of the most entertaining and fun community events at Housr. Not only this, we also have an inhouse gaming zone and social areas for you to hob-nob.</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Support} alt="" /></div>
                                            <div className="content">
                                                <h5>24*7 On Site Support </h5>
                                                <p>Housr Resident Managers are available 24*7 within the property for any kind of urgent support.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Amenities;