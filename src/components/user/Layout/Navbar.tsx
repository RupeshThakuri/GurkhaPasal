'use client';

import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { CategoryMenu } from './CategoryMenu';

export function Navbar() {
  const { wishlistCount, cartCount } = useCart();
  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
      {/* Non-sticky Top Bar */}
      <div className="bg-[#ff9f5a] text-white px-4 py-1 text-sm">
        <div className="max-w-7xl mx-auto">
          Download Gurkha Pasal App | Customer Care
        </div>
      </div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 bg-white shadow-sm z-50 group">

        <div className="max-w-7xl mx-auto px-4 py-4 relative">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <Link href="/" className="text-2xl font-bold text-[#ff7f2a]">
              Gurkha Pasal
            </Link>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search in Gurkha Pasal"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff7f2a]"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>

            <div className="flex items-center gap-6">
              <Link href="/login" className="flex items-center gap-1 hover:text-[#ff7f2a]">
                <User size={20} />
                <span className="hidden md:inline">Login</span>
              </Link>
              <Link href="/user/wishlist" className="relative hover:text-[#ff7f2a]">
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ff7f2a] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link href="/user/cart" className="relative hover:text-[#ff7f2a]">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ff7f2a] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

            </div>
          </div>

          <nav className="flex items-center gap-4 md:gap-6 mt-4 text-sm overflow-x-auto pb-2">
            <div
              onMouseEnter={() => setShowCategories(true)}
            >
              <button className="flex items-center gap-1 hover:text-[#ff7f2a] whitespace-nowrap bg-gray-100 px-4 py-2 rounded-lg">
                <Menu size={18} />
                <span>Categories</span>
                <ChevronDown size={16} />
              </button>
              {showCategories && <CategoryMenu />}
            </div>
            <Link href="/category/traditional-wear" className="hover:text-[#ff7f2a] whitespace-nowrap">Traditional Wear</Link>
            <Link href="/category/handicrafts" className="hover:text-[#ff7f2a] whitespace-nowrap">Handicrafts</Link>
            <Link href="/category/spices" className="hover:text-[#ff7f2a] whitespace-nowrap">Spices</Link>
            <Link href="/category/tea-coffee" className="hover:text-[#ff7f2a] whitespace-nowrap">Tea & Coffee</Link>
            <Link href="/category/jewelry" className="hover:text-[#ff7f2a] whitespace-nowrap">Jewelry</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
