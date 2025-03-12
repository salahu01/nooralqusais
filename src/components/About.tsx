
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { CheckCircle2, Instagram, MapPin, ExternalLink } from 'lucide-react';

const About = () => {
  const features = [
    "Wide range of smartphones, tablets, and electronics",
    "Quality products from top global brands",
    "Consistently competitive pricing",
    "Fast delivery across U.A.E",
    "Intelligent product filtering system",
    "Complete product information and support"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Your Trusted Electronics Partner in Dubai
            </h2>
            <p className="text-gray-600 mb-6">
              MobileShop gives you a chance to quickly and easily find the device you want and have it delivered to your home in no time, regardless of your location, as long as it is in one of the countries of the U.A.E.
            </p>
            <p className="text-gray-600 mb-8">
              We have been in the business for quite a while now, and in that time we have not only managed to make close relationships with numerous partners, but also to recognize what people need. At MobileShop you will find quality products from top brands at consistently low prices.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <img 
                src="/lovable-uploads/8abea463-fa23-4cd7-84cc-4c6617b45e66.png" 
                alt="Noor Al Suqeim Logo" 
                className="object-contain w-4/5 h-4/5 rounded-xl" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex flex-col space-y-3">
                <a 
                  href="https://www.instagram.com/nooralsuqeim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Follow us on Instagram</span>
                </a>
                <a 
                  href="https://2gis.ae/dubai/firm/70000001089098033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Find us on 2GIS Maps</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
