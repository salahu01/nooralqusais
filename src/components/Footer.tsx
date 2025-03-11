
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/861ba417-4dc8-49a5-8a47-a391f014e90b.png" 
                alt="Noor Al Suqeim Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold text-white">Noor Al Suqeim</span>
                <span className="text-xs text-gray-400">Electronics and Mobile Phone Trading L.L.C</span>
              </div>
            </div>
            <p className="mb-6">
              Your trusted provider of premium electronics and mobile phones in Dubai since 2005.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-700"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5 bg-blue-500 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Products', 'About', 'Support', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Product Categories</h3>
            <ul className="space-y-4">
              {['Smartphones', 'Laptops', 'Televisions', 'Audio', 'Accessories'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#products`} 
                    className="hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest products and exclusive offers.</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-blue-500 hover:bg-blue-600">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Noor Al Suqeim. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
