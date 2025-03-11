
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

type ProductProps = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
};

const products: ProductProps[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: "AED 5,299",
    image: "https://images.unsplash.com/photo-1695048133142-1a7e07a4a5c7?w=800&auto=format&fit=crop",
    category: "Smartphones"
  },
  {
    id: 2,
    name: "MacBook Pro M3 Max",
    price: "AED 8,999",
    image: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=800&auto=format&fit=crop",
    category: "MacBooks"
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: "AED 4,899",
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=800&auto=format&fit=crop",
    category: "Smartphones"
  },
  {
    id: 4,
    name: "LG OLED C4 65\"",
    price: "AED 6,499",
    image: "https://images.unsplash.com/photo-1593784991095-a205069533cd?w=800&auto=format&fit=crop",
    category: "Televisions"
  },
  {
    id: 5,
    name: "Apple Watch Ultra 2",
    price: "AED 3,399",
    image: "https://images.unsplash.com/photo-1566889730762-fd67d27b1efd?w=800&auto=format&fit=crop",
    category: "Others"
  }
];

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="hover-card overflow-hidden h-full flex flex-col">
        <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-full"
          />
          <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded-full">
            {product.category}
          </span>
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2 text-lg">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturedProducts = () => {
  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-medium"
          >
            Our Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Explore our premium selection of the latest smartphones, MacBooks, televisions, and more.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
