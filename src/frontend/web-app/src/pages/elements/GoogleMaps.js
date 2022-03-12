import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleContact from "../../components/PageTitle/PageTitleWidget";
import Map from "../../components/Maps/Map";
import FooterOne from "../../components/Footer/FooterOne";

const GoogleMaps = () => (
  <Loader>
    <HeaderOne />
    <PageTitleContact title="Google Maps" />
    <section className="pb-0 map-section">
      <Map classAppend="wide" />
    </section>
    <section className="map-section">
      <div className="container">
        <Map classAppend="wide" />
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default GoogleMaps;
