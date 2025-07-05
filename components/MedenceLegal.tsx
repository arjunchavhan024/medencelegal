'use client';

import { Shield, AlertTriangle } from 'lucide-react';

export default function MedenceLegal() {
  const comparisonData = [
    {
      criteria: "Price Tag",
      medence: "Only ₹125/month",
      others: "Expensive"
    },
    {
      criteria: "Price Clarity",
      medence: "Standard Pricing",
      others: "Uncertain & Hidden Pricing"
    },
    {
      criteria: "Quality",
      medence: "Avg. 19 Years of Experience",
      others: "Unsure of Quality"
    },
    {
      criteria: "Ease",
      medence: "Auto Case Updates",
      others: "Hassles & Runarounds"
    },
    {
      criteria: "Flexibility",
      medence: "Lawyer Replacement Option",
      others: "No Flexibility"
    }
  ];

  return (
    <section id="medence-legal" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            See the Clear Difference
          </h2>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden animate-slideInUp">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-x-auto">
            {/* Empty header cell */}
            <div className="p-4 sm:p-6 bg-white border-b md:border-b-0 md:border-r border-gray-200">
              <div className="h-12 sm:h-16 flex items-center justify-center">
                <span className="text-base sm:text-lg font-semibold text-gray-700">Comparison</span>
              </div>
            </div>

            {/* Medence Legal Header */}
            <div className="p-4 sm:p-6 bg-green-50 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="h-12 sm:h-16 flex items-center justify-center space-x-2 sm:space-x-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900 text-center">Medence Legal</span>
              </div>
            </div>

            {/* Others Header */}
            <div className="p-4 sm:p-6 bg-red-50 border-b md:border-b-0 border-gray-200">
              <div className="h-12 sm:h-16 flex items-center justify-center space-x-2 sm:space-x-3">
                <AlertTriangle className="w-6 sm:w-8 h-6 sm:h-8 text-red-500" />
                <span className="text-lg sm:text-xl font-bold text-gray-900 text-center">Other "Typical" Lawyers</span>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((row, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-200">
              {/* Criteria */}
              <div className="p-4 sm:p-6 bg-white border-b md:border-b-0 md:border-r border-gray-200">
                <div className="h-12 sm:h-16 flex items-center">
                  <span className="text-base sm:text-lg font-semibold text-gray-700">{row.criteria}</span>
                </div>
              </div>

              {/* Medence */}
              <div className="p-4 sm:p-6 bg-green-50 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="h-12 sm:h-16 flex items-center">
                  <span className="text-base sm:text-lg font-medium text-gray-900">{row.medence}</span>
                </div>
              </div>

              {/* Others */}
              <div className="p-4 sm:p-6 bg-red-50 border-b md:border-b-0 border-gray-200">
                <div className="h-12 sm:h-16 flex items-center">
                  <span className="text-base sm:text-lg font-medium text-gray-900">{row.others}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}