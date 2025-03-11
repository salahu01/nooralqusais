
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import Map from './Map';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-medium"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Have questions about our products or services? We're here to help. Reach out to us through any of the channels below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Our Location</p>
                    <p className="text-gray-600">Jumeirah - Umm Suqeim 2, Dubai, U.A.E</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Phone Numbers</p>
                    <p className="text-gray-600">+971 50 308 4007</p>
                    <p className="text-gray-600">+971 56 776 1003</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email Address</p>
                    <p className="text-gray-600">nooralsuqeim@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <Map />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
