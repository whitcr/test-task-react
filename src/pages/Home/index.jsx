import React, { useEffect } from 'react';

import { Hero } from 'components/pageHome/Hero/Hero';
import { WhyUs } from 'components/pageHome/WhyUs/WhyUs';
import { Services } from 'components/pageHome/Services/Services';
import { Gallery } from 'components/pageHome/Gallery/Gallery';

export const Home = () => {
  useEffect(() => {
    document.title = 'Camping For You';
  }, []);

  return (
    <div className="landingPage">
      <Hero />
      <WhyUs />
      <Services />
      <Gallery />
    </div>
  );
};
