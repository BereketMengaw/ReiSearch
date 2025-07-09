import React from 'react';
import ExploreImg from '../../assets/Explore.jpg';

const playIcon = (
  <svg className="inline mr-1" width="16" height="16" fill="none" viewBox="0 0 20 20">
    <polygon points="5,3 17,10 5,17" fill="currentColor" />
  </svg>
);

const PropertySection: React.FC = () => (
  <section className="w-full max-w-7xl ml-[272px] grid grid-cols-3 gap-5 mb-4">
    {/* How to Add a Property */}
    <div className="relative bg-white rounded-xl shadow p-6 flex flex-col min-h-[320px]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-gray-900">How to Add a Property</h3>
        <a href="#" className="text-sm text-blue-500 font-semibold hover:underline flex items-center">{playIcon} Learn More</a>
      </div>
      <div className="flex flex-row items-center flex-1">
        <span className="text-5xl font-extrabold text-gray-200 mr-4 select-none">02</span>
        <div className="flex-1 flex flex-row items-center">
          <span className="text-xl text-gray-400 mr-2">&#8594;</span>
          <span className="text-gray-700 text-base font-medium">Add Property Details</span>
        </div>
        {/* Faint table image placeholder */}
        <div className="w-32 h-20 bg-gray-100 rounded-lg ml-4 opacity-70 border border-gray-200" />
      </div>
      <a href="#" className="mt-6 text-sm text-blue-500 font-semibold hover:underline flex items-center">{playIcon} Learn More</a>
    </div>
    {/* Add New Property */}
    <div className="relative bg-white rounded-xl shadow p-6 flex flex-col min-h-[260px]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-gray-900">Add New Property</h3>
        <a href="#" className="text-sm text-blue-500 font-semibold hover:underline flex items-center">{playIcon} Learn More</a>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center w-full h-36">
          <span className="text-gray-400 mb-2">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" stroke="#d1d5db" strokeWidth="2" fill="#f9fafb" />
              <path d="M12 8v8M8 12h8" stroke="#a0aec0" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-gray-800 text-lg font-bold">Upload Property</span>
        </div>
      </div>
    </div>

    {/* Expand Your Network (with Explore image) */}
    <div className="relative bg-white rounded-xl shadow p-6 flex flex-col min-h-[260px]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-gray-900">Expand Your Network</h3>
        <a href="#" className="text-sm text-blue-500 font-semibold hover:underline flex items-center">{playIcon} Learn More</a>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <img src={ExploreImg} alt="Explore REI Directory" className="w-full h-36 object-cover rounded-xl" />
      </div>
    </div>
  </section>
);

export default PropertySection; 