'use client';

import { useState } from 'react';
import { Shield, Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Shield className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-800">MEDENCE LEGAL</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-[#0ADB5C] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-[#0ADB5C] transition-colors duration-300 font-medium"
            >
              FAQs
            </button>
            <button 
              onClick={() => scrollToSection('medence-legal')}
              className="text-gray-700 hover:text-[#0ADB5C] transition-colors duration-300 font-medium"
            >
              Legal Plans
            </button>
            <button className="bg-[#0ADB5C] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center space-x-2 font-medium text-sm sm:text-base">
              <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Book A Call</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t animate-slideDown">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-[#0ADB5C] transition-colors duration-300 font-medium text-left text-sm sm:text-base"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-[#0ADB5C] transition-colors duration-300 font-medium text-left text-sm sm:text-base"
              >
                FAQs
              </button>
              <button 
                onClick={() => scrollToSection('medence-legal')}
                className="text-gray-700 hover:text-[#0ADB5C] transition-colors duration-300 font-medium text-left text-sm sm:text-base"
              >
                Legal Plans
              </button>
              <button className="bg-[#0ADB5C] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center space-x-2 font-medium w-fit text-sm sm:text-base">
                <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>Book A Call</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}