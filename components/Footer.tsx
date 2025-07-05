'use client';

import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold">MEDENCE LEGAL</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md text-sm sm:text-base">
                Your personal lawyer service providing affordable, ongoing legal support. 
                From minor disputes to major legal matters, we're here to help you navigate 
                the legal system with confidence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0ADB5C] transition-colors duration-300">
                  <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0ADB5C] transition-colors duration-300">
                  <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0ADB5C] transition-colors duration-300">
                  <LinkedIn className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0ADB5C] transition-colors duration-300">
                  <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-[#0ADB5C] transition-colors duration-300 text-sm sm:text-base">About Us</a></li>
                <li><a href="#why-choose-us" className="text-gray-400 hover:text-[#0ADB5C] transition-colors duration-300 text-sm sm:text-base">Why Choose Us</a></li>
                <li><a href="#medence-legal" className="text-gray-400 hover:text-[#0ADB5C] transition-colors duration-300 text-sm sm:text-base">Legal Plans</a></li>
                <li><a href="#user-reviews" className="text-gray-400 hover:text-[#0ADB5C] transition-colors duration-300 text-sm sm:text-base">Testimonials</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-[#0ADB5C] transition-colors duration-300 text-sm sm:text-base">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-[#0ADB5C] mt-1" />
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                    <p className="text-white text-sm sm:text-base">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-[#0ADB5C] mt-1" />
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <p className="text-white text-sm sm:text-base">info@medenceLegal.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-[#0ADB5C] mt-1" />
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Address</p>
                    <p className="text-white text-sm sm:text-base">123 Legal Street, Law City, LC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Medence Legal. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#0ADB5C] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0ADB5C] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0ADB5C] text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}