import React from "react";
import "./styles.css";


// icons
import FullyFurnished from "./images/fully-furnished-pur.svg";
import Support from "./images/24x7-pur.svg";
import Mediator from "./images/mediator-pur.svg";
import Events from "./images/events-pur.svg";
import Food from "./images/food-pur.svg";
import Housekeeping from "./images/housekeeping-pur.svg";
import SafeSecure from "./images/safe-secure-pur.svg";
import SmartLiving from "./images/smart-living-pur.svg";
import WashingMachine from "./images/washing-machine-pur.svg";
import Wifi from "./images/wifi-pur.svg";

import SectionHeader from "../shared/section-header/section-header";
import Collapsible from "react-collapsible";

function AmenitiesHome() {
    return(
        <section className="amenities-app">
            <div className="amenities-wrapper-one pt-100 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="amenities-content-box amenities-content-box-one">
                                <div className="section-title section-title-left mb-75 wow fadeInUp text-center">
                                    <SectionHeader text="Housr Amenities" subtext="Everything you need to live better, Safer &amp; Healthier" />
                                </div>
                                <div className="col-lg-12">
                                    <ul className="features-list-one hide-mobile">
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={FullyFurnished} alt="" /></div>
                                            <div className="content">
                                                <h5>Fully Furnished</h5>
                                                <p>Well-ventilated rooms with balconies. Work-from-home compatible desks along with premium quality furniture & fitments                                                </p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={SafeSecure} alt="" /></div>
                                            <div className="content">
                                                <h5>Fully Managed</h5>
                                                <p>Experience the luxury of no-touch, with a virtual house tour, fully serviced rooms and 24*7 security</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Wifi} alt="" /></div>
                                            <div className="content">
                                                <h5>High Speed Internet</h5>
                                                <p>We offer high speed wifi to make your life easier and happier</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Housekeeping} alt="" /></div>
                                            <div className="content">
                                                <h5>Professional-Grade Housekeeping</h5>
                                                <p>The staff is professionally trained to provide no-contact housekeeping services and A-grade sanitisation</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={WashingMachine} alt="" /></div>
                                            <div className="content">
                                                <h5>Smart Laundry Services</h5>
                                                <p>Hassle free living with in-house laundry and dry cleaning services</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Food} alt="" /></div>
                                            <div className="content">
                                                <h5>Fresh Meal Facility</h5>
                                                <p>We have an in-house cloud kitchen, and a common cafeteria where we offer healthy, hygienic, fresh, gourmet breakfast & dinner meals made by experienced chefs</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={SmartLiving} alt="" /></div>
                                            <div className="content">
                                                <h5>App Enabled Living</h5>
                                                <p>Paying rent & raising tickets for maintenance is just a click away with the Housr app</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Events} alt="" /></div>
                                            <div className="content">
                                                <h5>Engaging Community Events</h5>
                                                <p>Be a part of the most entertaining and fun community events at Housr. Not only this, we also have an in-house gaming zone and social areas for you to hob-nob</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Support} alt="" /></div>
                                            <div className="content">
                                                <h5>24*7 On-site Support</h5>
                                                <p>Housr Resident Managers are available 24*7 within the property for any kind of urgent support</p>
                                            </div>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Mediator} alt="" /></div>
                                            <div className="content">
                                                <h5>No Middlemen</h5>
                                                <p>No involvement of landlord or brokers, deal directly with a Housr resident manager</p>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* mobile view */}
                                    <ul className="features-list-one show-mobile">
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={FullyFurnished} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="Fully Furnished">
                                                <p>Well-ventilated rooms with balconies. Work-from-home compatible desks along with premium quality furniture & fitments</p>
                                            </Collapsible>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={SafeSecure} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="Fully Managed">
                                                <p>Experience the luxury of no-touch, with a virtual house tour, fully serviced rooms and 24*7 security</p>
                                            </Collapsible>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Wifi} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="High Speed Internet">
                                                <p>We offer high speed wifi to make your life easier and happier</p>
                                            </Collapsible>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Housekeeping} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="Professional-Grade Housekeeping">
                                                <p>The staff is professionally trained to provide no-contact housekeeping services and A-grade sanitisation</p>
                                            </Collapsible>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={WashingMachine} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="Smart Laundry Services">
                                                <p>Hassle free living with in-house laundry and dry cleaning services</p>
                                            </Collapsible>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Food} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="Fresh Meal Facility">
                                                <p>We have an in-house cloud kitchen, and a common cafeteria where we offer healthy, hygienic, fresh, gourmet breakfast & dinner meals made by experienced chefs</p>
                                            </Collapsible>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={SmartLiving} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="App Enabled Living">
                                                <p>Paying rent & raising tickets for maintenance is just a click away with the Housr app</p>
                                            </Collapsible>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Events} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="Engaging Community Events">
                                                <p>Be a part of the most entertaining and fun community events at Housr. Not only this, we also have an in-house gaming zone and social areas for you to hob-nob</p>
                                            </Collapsible>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Support} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="24*7 On-site Support">
                                                <p>Housr Resident Managers are available 24*7 within the property for any kind of urgent support</p>
                                            </Collapsible>
                                        </li>
                                        <li className="list-item wow fadeInUp col-lg-4 float-left" data-wow-delay="10ms">
                                            <div className="icon"><img src={Mediator} alt="" /></div>
                                            <Collapsible className="content" openedClassName="content" triggerTagName="h5" trigger="No Middlemen">
                                                <p>No involvement of landlord or brokers, deal directly with a Housr resident manager</p>
                                            </Collapsible>
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
export default AmenitiesHome;