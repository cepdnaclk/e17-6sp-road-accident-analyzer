import React, { forwardRef } from "react";
import Icofont from "react-icofont";

const VideoMusic = forwardRef(({ toggler, setToggler }, ref) => (
  <section
    className="parallax-bg-13 fixed-bg"
    data-stellar-background-ratio="0.2"
    id="how"
    ref={ref}
  >
    <div className="overlay-bg"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-center offset-md-2 white-color music-event">
          <a
            className="video-play popup-youtube pt-50 pb-50"
            href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
            title=""
            onClick={(e) => {
              e.preventDefault();
              setToggler(!toggler);
            }}
          >
            <Icofont icon="ui-play" />
          </a>
        </div>
      </div>
    </div>
  </section>
));

export default VideoMusic;
