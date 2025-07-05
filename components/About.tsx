'use client';

import { Users, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 animate-slideInLeft text-center lg:text-left">
            <div className="flex items-center mb-6">
              <div className="flex -space-x-2 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Medence Legal,
              <br />
              <span className="text-[#0ADB5C]">Your Personal Lawyer.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Instead of spending hefty fees when legal troubles arise, pay a small yearly fee 
              and get access to your personal lawyer. From resolving minor consumer 
              complaints to addressing major property disputes, your personal lawyer handles 
              it all, providing peace of mind and reliable support whenever you need it.
            </p>
          </div>

          {/* Right Content - Justice Image */}
          <div className="lg:w-1/2 animate-slideInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ADB5C] to-green-400 rounded-3xl transform -rotate-3 animate-pulse-slow"></div>
              <img 
                src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Lady Justice statue"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}