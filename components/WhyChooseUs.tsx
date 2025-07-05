'use client';

import { DollarSign, Award, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Affordable Legal Solutions",
      icon: DollarSign,
      description: "Access premium legal services without stretching your budget.",
      items: [
        "Flexible plans to suit various financial needs.",
        "Transparent pricing with no hidden charges.",
        "Quality legal support at an unbeatable value."
      ],
      bgColor: "bg-purple-200",
      textColor: "text-purple-900",
      iconBg: "bg-purple-500"
    },
    {
      title: "Expert and Personalized Support",
      icon: Award,
      description: "Experience unmatched service from seasoned legal professionals tailored to your needs.",
      items: [
        "Handpicked lawyers with expertise across diverse legal fields.",
        "Personalized matching to ensure the best lawyer-client fit.",
        "Comprehensive solutions designed around your unique requirements."
      ],
      bgColor: "bg-green-200",
      textColor: "text-green-900",
      iconBg: "bg-green-500"
    },
    {
      title: "Always Here for You",
      icon: Clock,
      description: "Count on Medence for round-the-clock assistance and guidance.",
      items: [
        "24/7 customer support for all your queries.",
        "Timely updates and proactive communication.",
        "Accessible help whenever and wherever you need it."
      ],
      bgColor: "bg-yellow-200",
      textColor: "text-yellow-900",
      iconBg: "bg-yellow-500"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
            Why choose us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bgColor} p-6 sm:p-8 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-slideInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`${feature.iconBg} w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              
              <h3 className={`text-xl sm:text-2xl font-bold ${feature.textColor} mb-4`}>
                {feature.title}
              </h3>
              
              <p className={`${feature.textColor} mb-4 sm:mb-6 opacity-80 text-sm sm:text-base`}>
                {feature.description}
              </p>
              
              <ul className="space-y-2 sm:space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={`flex items-start space-x-2 sm:space-x-3 ${feature.textColor}`}>
                    <div className="w-2 h-2 bg-current rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}