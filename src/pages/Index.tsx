
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProductsAndServices from '../components/FeaturedProducts';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContactFloatingButton from '../components/ContactFloatingButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductsAndServices />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <ContactFloatingButton />
    </main>
  );
};

export default Index;
