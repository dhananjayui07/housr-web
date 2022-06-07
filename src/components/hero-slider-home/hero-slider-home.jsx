import React, { Component } from "react";
import "./styles.css";
// import StayAbode from "./images/stay-abode.png";
import Slider from "react-slick";
// import SlideOne from "./images/slide01.jpeg";
// import SlideTwo from "./images/slide02.jpeg";
// import SlideThree from "./images/slide03.jpeg";
import axios from '../../axios/index';
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
};
class HeroSliderHome extends Component {
    constructor(props) {
        super(props);
        this.state = { bannerData: [], isDataLoaded: false }
    }

    componentDidMount() {
        axios.get('/home')
            .then((res) => {
                this.setState({ bannerData: [res.data.data.home_page], isDataLoaded: true })
            }).catch(err => console.error(err))
    }

    render() {
        const { bannerData, isDataLoaded } = this.state;
        if (!isDataLoaded) {
            return (
                <div>
                    <h1> Loading... </h1>
                </div>
            )
        };
        return (<React.Fragment>
            <div className="slider-home">
                <Slider {...settings}>
                    {
                        bannerData.map((item, i) => {
                            return (
                                <div className="slide-item" key={i}>
                                    <img className="slide-banner" src={item.image_url} alt="HOUSR CO-LIVING" />
                                    <div className="slide-content">
                                        <h2 className="pcol">{item.title}</h2>
                                        <p>
                                            {item.description}
                                        </p>
                                        <span className="pcol"><em>#LetsLiveBetter</em></span>
                                    </div>
                                </div>
                            )
                        })}

                    {/* <div className="slide-item">
                        <img className="slide-banner" src={SlideTwo} alt="HOUSR HOMES" />
                        <div className="slide-content">
                            <h2 className="pcol">HOUSR HOMES</h2>
                            <p>
                                Fully Furnished
                                and Managed Residences <br />
                                for individuals & small families
                            </p>
                            <span className="pcol"><em>#HassleFreeLiving</em></span>
                        </div>
                    </div> */}
                    {/* <div className="slide-item">
                        <img className="slide-banner" src={SlideThree} alt="Stay-Abode" />
                        <div className="slide-content">
                            <h2 className="pcol"><img src={StayAbode} alt="Stay-Abode" /></h2>
                            <p>
                                Healthy, Hygienic and Happy Community <br />
                                Living in Bangalore
                            </p>
                            <span className="pcol"><em>#TechEnabledLiving</em></span>
                        </div>
                    </div> */}
                </Slider>
            </div>
        </React.Fragment>
        )
    }
}

export default HeroSliderHome;