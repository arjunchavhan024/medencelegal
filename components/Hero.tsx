'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-[#FEF9C3] to-yellow-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 animate-slideInLeft text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Your Personal
              <br />
              <span className="text-blue-700">Lawyer</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Medence Legal - Your Family Doctor for all your Legal Needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#FEF9C3] text-blue-900 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-yellow-200 transition-colors duration-300 transform hover:scale-105">
                Check Prices
              </button>
              <button className="bg-transparent border-2 border-blue-900 text-blue-900 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>Book a Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Family Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-slideInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl transform rotate-3 animate-pulse-slow"></div>
              <img 
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Happy family with lawyer"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}