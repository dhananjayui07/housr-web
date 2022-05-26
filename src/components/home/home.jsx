import React from "react";
// import "./styles.css";
import AmenitiesHome from "../amenities-home/amenities-home";
import ClientCarousel from "../client-carousel/client-carousel";
import HousrWay from "../housr-way/housr-way";
import MostSearchedProjects from "../most-searched-projects/most-searched-projects";
// import NewLaunchedProjects from "../new-launched-projects/new-launched-projects";
import Newsletter from "../newsletter/newsletter";
import Testimonials from "../testimonials/testimonials";
import UpcomingProjects from "../upcoming-projects/upcoming-projects";
import { WOW } from "wowjs";
import HeroSliderHome from "../hero-slider-home/hero-slider-home";
// import PremiumProjects from "../premium-projects/premium-projects";


var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

function Home() {

  return (
    <React.Fragment>
      <HeroSliderHome />
      <MostSearchedProjects />
      {/* <PremiumProjects hasBackground /> */}
      {/* <NewLaunchedProjects /> */}
      <UpcomingProjects hasBackground />
      <HousrWay />
      <AmenitiesHome />
      <Testimonials />
      <Newsletter />
      <ClientCarousel />
    </React.Fragment>
    
  );
}

export default Home;
