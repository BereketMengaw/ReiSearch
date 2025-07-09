import React from 'react';

const tabs = [
  { label: 'Shared', active: true },
  { label: 'Posted Properties', active: false },
  { label: 'Address Requests', active: false },
  { label: 'Offers', active: false },
  { label: 'View All', active: false },
  { label: 'My Folder', active: false },
];

const properties = [
  { id: 1, price: '$145,000', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
  { id: 2, price: '$341,482', image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80' },
  { id: 3, price: '$210,000', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80' },
  { id: 4, price: '$189,900', image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80' },
];

const PropertyList: React.FC = () => (
  <div className="w-full overflow-x-auto py-2 ml-[272px]">
    {/* Tabs Bar */}
    <div className="flex items-center gap-2 mb-2">
      {tabs.map((tab, idx) => (
        <button
          key={tab.label}
          className={`px-3 py-1 rounded font-medium text-xs border transition-all duration-150
            ${tab.active ? 'bg-blue-50 border-blue-500 text-blue-700 shadow' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100'}`}
        >
          {tab.label} <span className="ml-1 text-blue-500">0</span>
        </button>
      ))}
    </div>
    {/* Separator line */}
    <div className="w-full h-px bg-gray-400 mb-3" />
    {/* Property Cards */}
    <div className="flex flex-row gap-4 min-w-max">
      {properties.map((property) => (
        <div key={property.id} className="relative w-72 h-56 rounded-xl shadow bg-white flex-shrink-0">
          <img src={property.image} alt={property.price} className="w-full h-full object-cover rounded-xl" />
          <span className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs font-bold px-2 py-0.5 rounded">{property.price}</span>
          <span className="absolute top-2 right-2">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M6 4a4 4 0 0 1 4 4c0-2.21 1.79-4 4-4s4 1.79 4 4c0 5.25-8 12-8 12S2 9.25 2 8a4 4 0 0 1 4-4Z" stroke="#1976D2" strokeWidth="2" fill="#fff"/>
            </svg>
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default PropertyList; 