
import React, { useState } from 'react';
import { BarChart3, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const HistogramFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHistogram = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="glass-panel rounded-lg p-5 mb-4 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Analytics Overview</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleHistogram}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-md p-3">
                <div className="text-sm font-medium mb-2">Product Category Popularity</div>
                <div className="flex items-end h-32 gap-2">
                  {[65, 40, 75, 30, 50].map((height, index) => (
                    <div 
                      key={index}
                      className="flex-1 bg-blue-500 rounded-t hover:bg-blue-600 transition-all cursor-pointer"
                      style={{ height: `${height}%` }}
                      title={`Category ${index + 1}: ${height}%`}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Smartphones</span>
                  <span>Laptops</span>
                  <span>TVs</span>
                  <span>Audio</span>
                  <span>Accessories</span>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-md p-3">
                <div className="text-sm font-medium mb-2">Monthly Sales (Last 6 Months)</div>
                <div className="flex items-end h-32 gap-2">
                  {[35, 45, 40, 60, 55, 70].map((height, index) => (
                    <div 
                      key={index}
                      className="flex-1 bg-green-500 rounded-t hover:bg-green-600 transition-all cursor-pointer"
                      style={{ height: `${height}%` }}
                      title={`Month ${index + 1}: ${height}k AED`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-5 text-xs text-gray-500">
              Sample data visualization
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={toggleHistogram}
          className="rounded-full h-14 w-14 shadow-lg"
          size="icon"
        >
          <BarChart3 className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HistogramFAB;
