

import React from "react";
import { ProductCard } from "../Layout/components/ProductCard";

import Link from 'next/link';





// Sample categories




const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Traditional Dhaka Topi",
    price: 1200,
    image: '/Image/User/cod.png',
    description: "Authentic Nepali Dhaka Topi, handcrafted with traditional patterns.",
    discount: "20% Off"
  },
  {
    id: 2,
    name: "Handmade Pashmina Shawl",
    price: 3500,
    image: '/Image/User/b2.jpeg',
    description: "Premium quality pashmina shawl made from 100% cashmere wool.",
    discount: "20% Off"
  },
  {
    id: 3,
    name: "Himalayan Rock Salt",
    price: 450,
    image: '/Image/User/b3.jpeg',
    description: "Pure Himalayan pink salt, rich in minerals and natural flavor.",
    discount: "20% Off"
  },
  {
    id: 4,
    name: "Organic Nepal Tea",
    price: 850,
    image: '/Image/User/b4.jpeg',
    description: "Premium organic black tea from the hills of Nepal.",
    discount: "20% Off"
  },
  {
    id: 5,
    name: "Organic Nepal Tea",
    price: 850,
    image: '/Image/User/b4.jpeg',
    description: "Premium organic black tea from the hills of Nepal.",
    discount: "20% Off"
  },
  {
    id: 6,
    name: "Organic Nepal Tea",
    price: 850,
    image: '/Image/User/b4.jpeg',
    description: "Premium organic black tea from the hills of Nepal.",
    discount: "20% Off"
  },
  {
    id: 7,
    name: "Organic Nepal Tea",
    price: 850,
    image: '/Image/User/b4.jpeg',
    description: "Premium organic black tea from the hills of Nepal.",
    discount: "20% Off"
  },
  {
    id: 8,
    name: "Organic Nepal Tea",
    price: 850,
    image: '/Image/User/b4.jpeg',
    description: "Premium organic black tea from the hills of Nepal.",
    discount: "20% Off"
  },
  {
    id: 9,
    name: "Organic Nepal Tea",
    price: 850,
    image: '/Image/User/b4.jpeg',
    description: "Premium organic black tea from the hills of Nepal.",
    discount: "20% Off"
  },


];




const categories = [
  "Breast Pump Accessories",
  "Vinegar & Cooking Wine",
  "Phone Cases",
  "Convertible",
  "Telescopes",
  "Canned",
  "Kids Bookshelves & Shelving",
  "Toilet Paper",
  "Hoodies & Sweatshirts",
  "Polishers",
  "Ergonomic Accessories",
  "Bathroom Lighting",
];

// Sample products
const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `Rs. ${Math.floor(Math.random() * 1000) + 500}`,
}));

// Card component


const CategoryShow: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 px-4"    >
      <div className="flex min-h-screen bg-white">
        {/* Left Sidebar Menu */}


        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Flash Sale Section */}
          <section className="mb-6">
            <h1 className="text-2xl font-bold">Flash Sale</h1>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl text-orange-500">On Sale</h1>
              <Link href="/user/productlist" >
                See All Categories
              </Link>

            </div>


            <div className="grid grid-cols-5 gap-4">
              {FEATURED_PRODUCTS.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Categories</h1>
              <button className="text-blue-600 hover:underline">See All Categorie</button>
            </div>

            <div className="grid grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-white text-center">
                  <div className="h-16 bg-gray-300 mb-2 flex items-center justify-center text-gray-500">Image</div>
                  {category}
                </div>
              ))}
            </div>
          </section>


          {/* Just For You Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Just For You</h2>
            <div className="grid grid-cols-5 gap-4" >
              {FEATURED_PRODUCTS.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

          </section>
        </main>
      </div>
    </div>

  );
};

export default CategoryShow;
