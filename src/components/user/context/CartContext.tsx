'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  wishlistItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  addToWishlist: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartCount: number;
  wishlistCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    const storedWishlist = localStorage.getItem('wishlistItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(cartItemCount);
    const wishlistItemCount = wishlistItems.length;
    setWishlistCount(wishlistItemCount);
  }, [cartItems, wishlistItems]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const addToWishlist = (product: Omit<CartItem, 'quantity'>) => {
    setWishlistItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (!existingItem) {
        return [...prevItems, { ...product, quantity: 1 }];
      }
      return prevItems;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      wishlistItems,
      addToCart,
      addToWishlist,
      removeFromCart,
      removeFromWishlist,
      updateQuantity,
      cartCount,
      wishlistCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
