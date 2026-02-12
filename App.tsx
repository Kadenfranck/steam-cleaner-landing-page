
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import ValueAdd from './components/ValueAdd';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  const heroImageUrl = 'hero-clean-carpet.jpg';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero imageUrl={heroImageUrl} isLoading={false} />
        <Pricing />
        <ValueAdd />
        <Testimonials />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
