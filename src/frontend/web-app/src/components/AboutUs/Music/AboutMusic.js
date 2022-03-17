import React, { forwardRef } from "react";
import img from "../../../assets/images/singer-img.png";

const AboutMusic = forwardRef((props, ref) => (
  <section id="about" ref={ref}>
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="cardo-font">Our Lastest Songs</h2>
          <hr className="text-center default-bg" />
          <h3 className="cardo-font default-color">
            Touching Heaven on Frequency
          </h3>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-6 pt-80 pb-30">
          <iframe
            title="soundcloud"
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/310071874&amp;color=1ec0ff&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
          ></iframe>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={img} alt="" />
        </div>
      </div>
    </div>
  </section>
));

export default AboutMusic;
