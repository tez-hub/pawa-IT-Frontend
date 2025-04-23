"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons for hamburger

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            TravelAI
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 transition">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
