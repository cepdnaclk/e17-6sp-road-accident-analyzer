import React from "react";
import { Link } from "react-router-dom";
import dataGallery from "../../../data/Gallery/gallery-construction-data.json";

const GalleryConstruction = () => (
  <section className="pb-0">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="text-uppercase">FEATURED PROJECTS</h2>
          <hr className="text-center yellow-bg" />
        </div>
      </div>
      <div className="row mt-50">
        <div className="portfolio-container text-center">
          <ul id="portfolio-grid" className="three-column hover-two">
            {dataGallery.map((item) => (
              <li key={item.id} className="portfolio-item">
                <div className="portfolio photo-gallery">
                  <div className="dark-overlay"></div>
                  <img
                    src={require("../../../assets/images/" + item.image)}
                    alt=""
                  />
                  <div className="portfolio-wrap">
                    <div className="portfolio-description">
                      <h3 className="portfolio-title">{item.title}</h3>
                    </div>
                    <ul className="portfolio-details">
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/single-portfolio`}>View Project </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default GalleryConstruction;
