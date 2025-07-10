import React from 'react';
import ExploreImg from '../../assets/Explore.jpg';
import PlayButton from '../ui/PlayButton';

const PropertySection: React.FC = () => (
  <section className="w-full max-w-6xl mx-auto ml-0 lg:ml-[272px] grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 mb-2 lg:mb-4 px-0 lg:px-0">
    {/* How to Add a Property */}
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow p-4 lg:p-6 flex flex-col min-h-[220px] lg:min-h-[260px] transition-colors duration-300 w-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">How to Add a Property</h3>
        <a href="#" className="text-sm text-blue-500 font-semibold hover:underline flex items-center"><PlayButton width={16} height={16} className="mr-1" /> Learn More</a>
      </div>
      <div className="flex flex-row items-center flex-1">
        <span className="text-5xl font-extrabold text-gray-200 dark:text-gray-700 mr-4 select-none">02</span>
        <div className="flex-1 flex flex-row items-center">
          <span className="text-xl text-gray-400 dark:text-gray-300 mr-2">&#8594;</span>
          <span className="text-gray-700 dark:text-gray-100 text-base font-medium">Add Property Details</span>
        </div>
        {/* Faint table image placeholder */}
        <div className="w-32 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg ml-4 opacity-70 border border-gray-200 dark:border-gray-700" />
      </div>
      <a href="#" className="mt-6 text-sm text-blue-500 font-semibold hover:underline flex items-center"><PlayButton width={16} height={16} className="mr-1" /> Learn More</a>
    </div>
    {/* Add New Property */}
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow p-4 lg:p-6 flex flex-col min-h-[220px] lg:min-h-[260px] transition-colors duration-300 w-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Add New Property</h3>
        <a href="#" className="text-sm text-blue-500 font-semibold hover:underline flex items-center"><PlayButton width={16} height={16} className="mr-1" /> Learn More</a>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl flex flex-col items-center justify-center w-full h-36 transition-colors duration-300">
          <span className="text-gray-400 dark:text-gray-300 mb-2">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" stroke="#d1d5db" strokeWidth="2" fill="#f9fafb" />
              <path d="M12 8v8M8 12h8" stroke="#a0aec0" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-gray-800 dark:text-gray-100 text-lg font-bold">Upload Property</span>
        </div>
      </div>
    </div>

    {/* Expand Your Network (with Explore image) */}
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow p-4 lg:p-6 flex flex-col min-h-[220px] lg:min-h-[260px] transition-colors duration-300 w-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Expand Your Network</h3>
        <a href="#" className="text-sm text-blue-500 font-semibold hover:underline flex items-center"><PlayButton width={16} height={16} className="mr-1" /> Learn More</a>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <img src={ExploreImg} alt="Explore REI Directory" className="w-full h-36 object-cover rounded-xl" />
      </div>
    </div>
  </section>
);

export default PropertySection; 