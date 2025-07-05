'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';

export default function UserReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Kiran Rao",
      role: "IT Professional",
      review: "I was totally blank after the car accident near Gachibowli. The opposite driver called some people and started blaming me, saying they'll go to the police. I felt safe only when my lawyer from Medence arrived at the spot. He handled everything — the crowd, the cops, even helped me file my insurance claim right then. I don't think I could've managed it without him.",
      rating: 5
    },
    {
      name: "Rahul Srivatasvan",
      role: "IT Professional",
      review: "I was about to buy a flat when a close friend told me to get the documents checked. I used Medence's service — their lawyer found a legal issue that could have landed me in serious trouble. Just that one review saved me lakhs. I guess it is smart to have legal support before problems begin.",
      rating: 5
    },
    {
      name: "Zubair Khan",
      role: "Business Owner",
      review: "An Innova car crashed into my new bike and he was so arrogant at the moment. He refused to pay for my damages when the mistake was clearly his. My personal lawyer from Medence helped me file the third party insurance with minimal effort. Honestly, I didn't realise these claims could be so simple with the right legal support.",
      rating: 5
    },
    {
      name: "G.Sneha",
      role: "Government Service",
      review: "I was so tired with other divorce lawyers' money extracting business. Medence Legal is such a relief here. The trust with my personal lawyer is also very warm. I know someone powerful has your back at hard times.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="user-reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            Satisfied Clients
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the valuable feedback and testimonials from our satisfied clients about their experiences with us
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto shadow-2xl">
                    <div className="flex items-center mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                      "{review.review}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                        <User className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg">{review.name}</h4>
                        <p className="text-gray-300 text-sm sm:text-base">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300"
            >
              <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300"
            >
              <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-fadeInUp">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="animate-slideInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#0ADB5C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg sm:text-xl">1</span>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Choose Your Plan</h4>
              <p className="text-sm sm:text-base text-gray-600">Select from our affordable legal subscription plans</p>
            </div>
            <div className="animate-slideInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#0ADB5C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg sm:text-xl">2</span>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Get Matched</h4>
              <p className="text-sm sm:text-base text-gray-600">We match you with the perfect lawyer for your needs</p>
            </div>
            <div className="animate-slideInUp" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#0ADB5C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg sm:text-xl">3</span>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Get Support</h4>
              <p className="text-sm sm:text-base text-gray-600">Receive ongoing legal support whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}