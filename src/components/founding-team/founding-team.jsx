import React from "react";
import "./styles.css";

import Deepak from "./images/deepak.jpeg";
import Kalpesh from "./images/kalpesh.jpeg";
import SectionHeader from "../shared/section-header/section-header";

function FoundingTeam() {
    return(
        <React.Fragment>
            <section className="team-area">
                <div className="container pb-150">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 pb-10">
                            <div className="section-title text-center pt-60 wow fadeInUp">
                                <SectionHeader text="Founding Team" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="features-img wow fadeInLeft">
                                <img className="team-image" src={Deepak} width="100%" alt="Deepak" />
                            </div>
                            <div className="features-content-box features-content-box-one">
                                <h3 className="pt-20 text-center">Deepak Anand</h3>
                                <h5 className="text-center mb-2">CO-FOUNDER &amp; CEO, HOUSR</h5>
                                <p className="text-center mb-10">Deepak Anand is an alumnus of  INSEAD  and has worked in leadership roles at Real Estate Private Equity Funds, HT Media and HSBC.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="features-img wow fadeInLeft">
                                <img className="team-image" src={Kalpesh} width="100%" alt="Kalpesh" />
                            </div>
                            <div className="features-content-box features-content-box-one">
                                <h3 className="pt-20 text-center">Kalpesh Mehta</h3>
                                <h5 className="text-center mb-2">CO-FOUNDER, HOUSR</h5>
                                <p className="text-center">Kalpesh Mehta is the alumnus of The University of Texas and The Wharton School. He holds tremendous experience in real estate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default FoundingTeam;