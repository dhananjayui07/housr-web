import React from "react";
import ReactDOM from "react-dom";
import "./slick/slick.css";
import "./slick/slick-theme.css";
import "./css/index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import HousrColiving from "./components/category/housr-coliving";
import HousrHomes from "./components/category/housr-homes";
import HousrStayAbode from "./components/category/housr-stay-abode";
import Partners from "./components/partners/partners";
import PropertyListing from "./components/property-listing/property-listing";
import PropertyDisplay from "./components/property-display/property-display";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/housr-coliving" element={<HousrColiving />} />
      <Route path="/housr-homes" element={<HousrHomes />} />
      <Route path="/stay-abode" element={<HousrStayAbode />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/property-listing" element={<PropertyListing />} />
      <Route
        path="/property-display/:id"
        element={<PropertyDisplay />}
        exact="true"
      />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
