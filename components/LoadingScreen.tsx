'use client';

import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-[#0ADB5C] rounded-full animate-spin border-t-transparent mx-auto"></div>
        </div>

        {/* Company Name */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 animate-fadeInUp">
          MEDENCE LEGAL
        </h1>

        {/* Tagline */}
        <p className="text-lg text-gray-600 mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Your Personal Lawyer
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-[#0ADB5C] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#0ADB5C] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-[#0ADB5C] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Loading Text */}
        <p className="text-sm text-gray-500 mt-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          Loading your legal solutions...
        </p>
      </div>
    </div>
  );
}