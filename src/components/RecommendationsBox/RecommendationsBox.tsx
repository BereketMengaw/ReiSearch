import React from 'react';

const RecommendationsBox: React.FC = () => (
  <section
    className="block lg:flex bg-white mt-4 md:mt-14 dark:bg-gray-800 rounded-lg shadow p-3 w-full lg:w-1/5 min-h-[60px] flex-col justify-between transition-colors duration-200 -ml-0 md:-ml-2 md:mt-4 md:mb-0 lg:mb-0 md:rounded-xl md:shadow md:p-3 md:w-full lg:mt-14 lg:rounded-lg lg:shadow lg:p-3 lg:w-1/5"
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="font-semibold text-xs text-gray-900 dark:text-gray-100">Make Connections</h3>
      <a href="#" className="text-[10px] text-blue-500 font-semibold hover:underline">Explore</a>
    </div>
    <div className="flex-1 flex ">
      <span className="text-[13px] text-gray-900 dark:text-gray-300 p-2">No recommendations at the moment .</span>
    </div>
  </section>
);

export default RecommendationsBox;
