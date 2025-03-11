
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    "Authorized distributor of premium global brands",
    "Expert technical support and service",
    "Competitive pricing with flexible payment options",
    "Comprehensive warranty and after-sales service"
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
              Excellence in Electronics Since 2005
            </h2>
            <p className="text-gray-600 mb-6">
              Noor Al Suqeim Electronics and Mobile Phone Trading L.L.C is a premier provider of high-quality electronics in Dubai. With nearly two decades of experience, we've built a reputation for excellence, reliability, and customer satisfaction.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to provide our customers with cutting-edge technology products backed by exceptional service. We carefully select each item in our inventory to ensure it meets our rigorous standards for quality and performance.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
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
                src="/placeholder.svg" 
                alt="Our store" 
                className="object-cover w-2/3 h-2/3" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <p className="text-3xl font-bold text-blue-600 mb-1">18+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
