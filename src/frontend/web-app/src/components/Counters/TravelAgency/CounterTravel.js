import React from 'react';

const CounterTravel = () => (
    <section className="dark-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-3 counter text-center col-sm-6"> <i className="icofont icofont-sea-plane red-icon font-40px"></i>
              <h2 className="count white-color font-700">560</h2>
              <h3>Tours</h3>
            </div>
            <div className="col-md-3 counter text-center col-sm-6"> <i className="icofont icofont-google-map red-icon font-40px"></i>
              <h2 className="count white-color font-700">230</h2>
              <h3>Destinations</h3>
            </div>
            <div className="col-md-3 counter text-center col-sm-6"> <i className="icofont icofont-hotel red-icon font-40px"></i>
              <h2 className="count white-color font-700">102</h2>
              <h3>Hotels</h3>
            </div>
            <div className="col-md-3 counter text-center col-sm-6"> <i className="icofont icofont-travelling red-icon font-40px"></i>
              <h2 className="count white-color font-700">780</h2>
              <h3>Tourists</h3>
            </div>
          </div>
        </div>
      </section>
);

export default CounterTravel;