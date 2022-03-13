import React, { forwardRef } from 'react';
import HeadingSection from '../HeadingSection/HeadingSection';

const Welcome = forwardRef(( {title, tagline, children}, ref ) => (
    <section ref={ref} className="first-ico-box" id="about">
    <div className="container">
      <div className="row">
          <HeadingSection title={title} tagline={tagline}>
          {children}
          </HeadingSection>
      </div>
    </div>
  </section>
));

export default Welcome;