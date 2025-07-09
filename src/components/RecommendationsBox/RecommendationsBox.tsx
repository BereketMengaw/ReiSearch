import React from 'react';

const RecommendationsBox: React.FC = () => (
  <section className="bg-white mt-6 md:mt-14 dark:bg-gray-800 rounded-xl shadow p-3 md:p-4 w-full md:w-1/2 max-w-full min-h-[120px] flex flex-col transition-colors duration-300">
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">Make More Connections</h3>
      <a href="#" className="text-xs text-blue-500 font-semibold hover:underline">Explore More</a>
    </div>
    <span className="text-xs text-gray-500 dark:text-gray-300 mt-2">No recommendations available at the moment.</span>
  </section>
);

export default RecommendationsBox; 