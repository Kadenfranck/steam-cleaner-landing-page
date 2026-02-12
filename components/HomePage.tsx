
import React from 'react';
import Hero from './Hero';
import Pricing from './Pricing';
import ValueAdd from './ValueAdd';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';
import CallToAction from './CallToAction';

const HomePage: React.FC = () => {
  const heroImageUrl = 'hero-clean-carpet.jpg';

  return (
    <>
      <Hero imageUrl={heroImageUrl} isLoading={false} />
      <Pricing />
      <ValueAdd />
      <Testimonials />
      <HowItWorks />
      <CallToAction />
    </>
  );
};

export default HomePage;
