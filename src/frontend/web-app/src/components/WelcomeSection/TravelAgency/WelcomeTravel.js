import React from 'react';
import CounterTravel from '../../Counters/TravelAgency/CounterTravel';
import AboutTravel from '../../AboutUs/TravelAgency/AboutTravel';
import WelcomeItem from './WelcomeItem';

const WelcomeTravel = () => (
    <section className="pt-0 pb-0">
    <div className="section-content">
      <WelcomeItem />
      <CounterTravel />
      <AboutTravel />
    </div>
  </section>
);

export default WelcomeTravel;