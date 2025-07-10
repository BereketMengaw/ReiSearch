import React from 'react';

const RecommendationsBox: React.FC = () => (
  <section className="hidden lg:flex bg-white mt-14 dark:bg-gray-800 rounded-lg shadow p-3 w-full lg:w-1/5 min-h-[60px] flex-col justify-between transition-colors duration-200 -ml-2">
    <div className="flex justify-between items-center mb-2">
      <h3 className="font-semibold text-xs text-gray-900 dark:text-gray-100">Make Connections</h3>
      <a href="#" className="text-[10px] text-blue-500 font-semibold hover:underline">Explore</a>
    </div>
    <div className="flex-1 flex ">
      <span className="text-[11px] text-gray-500 dark:text-gray-300 p-12">No recommendations yet.</span>
    </div>
  </section>
);

export default RecommendationsBox;
