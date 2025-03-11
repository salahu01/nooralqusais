
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Smartphone, Laptop, Tv, Headphones, Settings, MessageSquare, Shield, CloudLightning } from 'lucide-react';

type CategoryProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  type: 'product' | 'service';
  icon?: React.ReactNode;
};

const categories: CategoryProps[] = [
  // Products
  {
    id: 1,
    name: "Smartphones",
    description: "Latest flagship smartphones with cutting-edge features",
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=800&auto=format&fit=crop",
    type: "product",
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    id: 2,
    name: "Laptops",
    description: "Powerful laptops for professional and personal use",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop",
    type: "product",
    icon: <Laptop className="h-6 w-6" />
  },
  {
    id: 3,
    name: "Televisions",
    description: "High-definition TVs with smart features",
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&auto=format&fit=crop",
    type: "product",
    icon: <Tv className="h-6 w-6" />
  },
  {
    id: 4,
    name: "Accessories",
    description: "Headphones, speakers, and other electronic accessories",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop",
    type: "product",
    icon: <Headphones className="h-6 w-6" />
  },
  // Services
  {
    id: 5,
    name: "Repairs",
    description: "Expert repair services for all your electronic devices",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&auto=format&fit=crop",
    type: "service",
    icon: <Settings className="h-6 w-6" />
  },
  {
    id: 6,
    name: "Consultations",
    description: "Professional advice on tech purchases and setups",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop",
    type: "service",
    icon: <MessageSquare className="h-6 w-6" />
  },
  {
    id: 7,
    name: "Protection Plans",
    description: "Extended warranty and protection for your devices",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop",
    type: "service",
    icon: <Shield className="h-6 w-6" />
  },
  {
    id: 8,
    name: "Cloud Services",
    description: "Backup, storage, and sync services for your digital life",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
    type: "service",
    icon: <CloudLightning className="h-6 w-6" />
  },
];

const CategoryCard = ({ category }: { category: CategoryProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="hover-card overflow-hidden h-full flex flex-col group hover:shadow-md transition-all">
        <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
          <img 
            src={category.image} 
            alt={category.name} 
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="text-white bg-blue-500 p-2 rounded-full">
              {category.icon}
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            {category.name}
            <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
              {category.type === 'product' ? 'Product' : 'Service'}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600 text-sm">{category.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProductsAndServices = () => {
  const products = categories.filter(category => category.type === 'product');
  const services = categories.filter(category => category.type === 'service');

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
            Products & Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Explore our premium selection of products and services to find exactly what you need.
          </motion.p>
        </div>

        {/* Products Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;
