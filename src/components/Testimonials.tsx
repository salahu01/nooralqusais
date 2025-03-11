
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

type TestimonialProps = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
};

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    role: "Business Owner",
    content: "Noor Al Suqeim has been my go-to electronics supplier for years. Their product knowledge and customer service are unmatched in Dubai.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Interior Designer",
    content: "I've equipped multiple client homes with smart systems from Noor Al Suqeim. The quality of their products and installation service is consistently excellent.",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammed Al Farsi",
    role: "Tech Enthusiast",
    content: "As someone who always wants the latest gadgets, I appreciate how Noor Al Suqeim consistently brings premium technology to Dubai before anyone else.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-medium"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Noor Al Suqeim.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 flex-grow mb-4">{testimonial.content}</p>
                  <div className="mt-auto">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
