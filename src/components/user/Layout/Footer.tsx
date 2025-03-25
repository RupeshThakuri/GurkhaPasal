import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Gurkha Pasal</h3>
            <p className="text-sm">Your trusted destination for authentic Nepali products. We bring the best of Nepal's culture and tradition to your doorstep.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#ff7f2a]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#ff7f2a]">Contact</Link></li>
              <li><Link href="/shipping" className="hover:text-[#ff7f2a]">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-[#ff7f2a]">Returns</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-[#ff7f2a]">FAQ</Link></li>
              <li><Link href="/track-order" className="hover:text-[#ff7f2a]">Track Order</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#ff7f2a]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#ff7f2a]">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-[#ff7f2a]"><Facebook size={20} /></a>
              <a href="#" className="hover:text-[#ff7f2a]"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#ff7f2a]"><Twitter size={20} /></a>
            </div>
            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +977-1-4444444
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                info@gurkhapasal.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Gurkha Pasal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}