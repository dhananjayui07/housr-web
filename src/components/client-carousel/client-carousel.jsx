import React from "react";
import Slider from "react-slick";
import styles from "./styles.css";

// clients icons
import Client1 from "./images/01.png";
import Client2 from "./images/02.png";
import Client3 from "./images/03.png";
import Client4 from "./images/04.png";
import Client5 from "./images/05.png";
import Client6 from "./images/06.png";
import Client7 from "./images/07.png";
import { NavLink } from "react-router-dom";

function ClientCarousel() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return(
        <React.Fragment>
            <section className="client-area pt-20">
                <div className="client-wrapper-one pb-20">
                    <div className="container">
                        <div className="client-slider-one wow fadeInDown">
                            <Slider {...settings}>
                                <div className="client-item">
                                    <div className="client-img">
                                        <NavLink to="/"><img src={Client1} width="70" alt="Client" /></NavLink>
                                    </div>
                                </div>
                                <div className="client-item">
                                    <div className="client-img">
                                        <NavLink to="/"><img src={Client2} width="130" alt="Client" /></NavLink>
                                    </div>
                                </div>
                                <div className="client-item">
                                    <div className="client-img">
                                        <NavLink to="/"><img src={Client3} width="180" alt="Client" /></NavLink>
                                    </div>
                                </div>
                                <div className="client-item">
                                    <div className="client-img">
                                        <NavLink to="/"><img src={Client4} width="130" alt="Client" /></NavLink>
                                    </div>
                                </div>
                                <div className="client-item">
                                    <div className="client-img">
                                        <NavLink to="/"><img src={Client5} width="130" alt="Client" /></NavLink>
                                    </div>
                                </div>
                                <div className="client-item">
                                    <div className="client-img">
                                        <NavLink to="/"><img src={Client6} width="130" alt="Client" /></NavLink>
                                    </div>
                                </div>
                                <div className="client-item">
                                    <div className="client-img">
                                        <NavLink to="/"><img src={Client7} width="130" alt="Client" /></NavLink>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ClientCarousel;