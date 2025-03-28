'use client';

import React from 'react';
import { Trash2 } from 'lucide-react';
import { useWishlist } from '@/components/user/context/wishlistContext';
import { useCart } from '../context/CartContext';

export function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart, } = useCart();


  const handleAddToCart = (item: { id: number; name: string; price: number; image: string; discount: string }) => {
    const { id, name, price, image, discount } = item;
    addToCart({
      id,
      name,
      price,
      image,
      discount,
    });
  };


  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-8">Wishlist</h2>
        <div className="text-center py-12">
          <p className="text-gray-600">Your wishlist is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white p-2 rounded-lg shadow-md relative">
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-24 object-cover rounded-md"
            />

            {/* Discount Badge */}
            {item.discount && (
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {item.discount}
              </div>
            )}

            {/* Product Info */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-[#ff7f2a] font-bold mt-2">Rs. {item.price}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-4">
              {/* Add to Cart Button */}
              <button
                className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-md hover:bg-orange-600 transition-colors"
                onClick={() => handleAddToCart(item)}
              >
               
                Add to Cart
              </button>

              {/* Remove from Wishlist Button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
