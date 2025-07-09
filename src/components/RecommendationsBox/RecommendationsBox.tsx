import React from 'react';

const RecommendationsBox: React.FC = () => (
  <section className="bg-white rounded-xl shadow p-4 w-1/2 min-h-[120px] flex flex-col">
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-semibold text-sm text-gray-900">Make More Connections</h3>
      <a href="#" className="text-xs text-blue-500 font-semibold hover:underline">Explore More</a>
    </div>
    <span className="text-xs text-gray-500 mt-2">No recommendations available at the moment.</span>
  </section>
);

export default RecommendationsBox; 