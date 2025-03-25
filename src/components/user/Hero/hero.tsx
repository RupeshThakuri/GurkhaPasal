'use client';


import React from 'react'
import { Package } from 'lucide-react';
import { ProductCard } from  '@/components/user/Layout/components/ProductCard';


import BannerSection from './banner';



const FEATURED_PRODUCTS = [
    {
      id: 1,
      name: "Traditional Dhaka Topi",
      price: 1200,
      image: '/Image/User/b1.jpeg',
      description: "Authentic Nepali Dhaka Topi, handcrafted with traditional patterns."
    },
    {
      id: 2,
      name: "Handmade Pashmina Shawl",
      price: 3500,
      image: '/Image/User/b2.jpeg',
      description: "Premium quality pashmina shawl made from 100% cashmere wool."
    },
    {
      id: 3,
      name: "Himalayan Rock Salt",
      price: 450,
      image: '/Image/User/b3.jpeg',
      description: "Pure Himalayan pink salt, rich in minerals and natural flavor."
    },
    {
      id: 4,
      name: "Organic Nepal Tea",
      price: 850,
      image: '/Image/User/b4.jpeg',
      description: "Premium organic black tea from the hills of Nepal."
    }
  ];
  const images = [
    '/Image/User/b1.jpeg',
    '/Image/User/b2.jpeg',
    '/Image/User/b3.jpeg',
    '/Image/User/b4.jpeg',
    "/Image/User/b5.jpeg"

  ];

function Hero() {


 
  return (
    <div>
      {/* Hero Section */}
    < BannerSection />

      {/* Features */}
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
            <Package className="text-[#ff7f2a]" size={32} />
            <div>
              <h3 className="font-semibold">Free Delivery</h3>
              <p className="text-sm text-gray-600">On orders above Rs. 1000</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
            <Package className="text-[#ff7f2a]" size={32} />
            <div>
              <h3 className="font-semibold">Authentic Products</h3>
              <p className="text-sm text-gray-600">100% Genuine Items</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
            <Package className="text-[#ff7f2a]" size={32} />
            <div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-600">Multiple Payment Options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              title: "Traditional Wear",
              image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?auto=format&fit=crop&w=500&q=80"
            },
            {
              title: "Handicrafts",
              image: "https://images.unsplash.com/photo-1606902972004-c2a5207cbc71?auto=format&fit=crop&w=500&q=80"
            },
            {
              title: "Spices",
              image: "https://images.unsplash.com/photo-1596040033229-43babf81b71b?auto=format&fit=crop&w=500&q=80"
            },
            {
              title: "Tea & Coffee",
              image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80"
            }
          ].map((category, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero