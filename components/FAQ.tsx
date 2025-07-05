'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Medence Legal?",
      answer: "Medence Legal is your personal lawyer service that provides affordable, ongoing legal support through a subscription model. Instead of paying expensive fees when legal issues arise, you pay a small monthly fee and have access to experienced lawyers whenever you need them."
    },
    {
      question: "How does the subscription work?",
      answer: "For just ₹125/month, you get access to your personal lawyer who can help with various legal matters including property disputes, consumer complaints, contract reviews, and more. You'll receive regular updates and can contact your lawyer whenever needed."
    },
    {
      question: "What types of legal issues can you help with?",
      answer: "Our lawyers can assist with a wide range of legal matters including property disputes, consumer complaints, contract reviews, family law issues, employment matters, and more. If we can't handle your specific case, we'll refer you to a specialist."
    },
    {
      question: "How experienced are your lawyers?",
      answer: "Our lawyers have an average of 19 years of experience across diverse legal fields. We carefully handpick legal professionals with proven track records and match you with the lawyer best suited for your specific needs."
    },
    {
      question: "Can I change my lawyer if needed?",
      answer: "Yes, we offer lawyer replacement options if you're not satisfied with your current match. We want to ensure you have the best possible lawyer-client relationship for your legal needs."
    },
    {
      question: "Is there 24/7 support available?",
      answer: "Yes, we provide 24/7 customer support for all your queries. You'll receive timely updates and proactive communication, with accessible help whenever and wherever you need it."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Find answers to common questions about our legal services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 sm:w-6 h-5 sm:h-6 text-[#0ADB5C] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-8 pb-4 sm:pb-6 animate-slideDown">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}