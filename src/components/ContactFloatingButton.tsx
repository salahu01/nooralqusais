
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const ContactFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/', '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3 mb-4 items-end"
          >
            <Button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg"
            >
              Contact Us
            </Button>
            
            <Button
              onClick={redirectToInstagram}
              className="bg-gradient-to-tr from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-4 py-2 rounded-full shadow-lg"
            >
              <Instagram className="mr-2" size={18} />
              Instagram
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-blue-600 hover:bg-blue-700 h-14 w-14 rounded-full shadow-lg flex items-center justify-center text-white"
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1, 
          rotate: isOpen ? 180 : 0,
          y: isOpen ? 0 : [0, -10, 0]
        }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          duration: 0.2,
          y: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            repeatDelay: 0.5
          }
        }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default ContactFloatingButton;
