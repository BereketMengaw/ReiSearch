import React from 'react';
import Bereket from "../../../src/assets/bereket.jpg";

const GreetingSection: React.FC = () => (
  <section className="w-full max-w-3xl ml-[272px] grid grid-cols-3 grid-rows-2 gap-6 mb-4">
    {/* Top left: Greeting, progress, profile, button (spans 2 columns) */}
    <div className="col-span-2 row-span-1 bg-white rounded-xl shadow p-3 flex items-center gap-3">
      <div className="flex-1">
        <span className="text-gray-700 text-sm font-bold">Hey, <span className="font-bold">Bereket</span></span>
        <div className="flex items-center mt-1 mb-1">
          <span className="text-base font-bold mr-2">73%</span>
          <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: '73%' }}></div>
          </div>
        </div>
        <button className="mt-2 px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-semibold shadow hover:bg-blue-700 transition">Learn More</button>
      </div>
      <img src={Bereket} alt="Profile" className="w-24 h-24 rounded-xl object-cover border-2 border-white shadow" />
    </div>

    {/* Top right: Public Info and Enable Notifications */}
    <div className="col-span-1 row-span-1 flex gap-3 min-w-[270px]">
      <div className="flex-1 bg-gray-100 rounded-xl shadow flex flex-col items-center justify-center p-2">
        <span className="text-gray-500 text-base mb-1">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bbb" strokeWidth="2" fill="#f7f7f7"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#bbb">i</text></svg>
        </span>
        <span className="text-gray-700 text-xs font-medium">Public Info</span>
      </div>
      <div className="flex-1 bg-green-100 rounded-xl shadow flex flex-col items-center justify-center p-2">
        <span className="text-green-500 text-base mb-1">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 4a6 6 0 0 1 6 6v3.5l1.29 2.58A1 1 0 0 1 18.42 18H5.58a1 1 0 0 1-.87-1.42L6 13.5V10a6 6 0 0 1 6-6Z" fill="#b9fbc0" stroke="#43a047" strokeWidth="2"/><circle cx="12" cy="20" r="2" fill="#43a047"/></svg>
        </span>
        <span className="text-green-700 text-xs font-medium">Enable Notifications</span>
      </div>
    </div>

    {/* bottom section */}


    <div className="col-span-2 row-span-1 bg-white rounded-xl shadow p-3 flex gap-3">
      {/* Bottom left: Add Property */}
      <div className="flex-1 bg-purple-100 rounded-xl shadow flex flex-col items-center justify-center p-3 min-w-[120px]">
        <span className="text-purple-400 text-lg mb-2">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#ede9fe"/>
            <path d="M12 8v8M8 12h8" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="text-purple-700 text-xs font-semibold">Add Property</span>
      </div>
      {/* Bottom center: REI Directory */}
      <div className="flex-1 bg-blue-100 rounded-xl shadow flex flex-col items-center justify-center p-3 min-w-[120px] border border-blue-100">
        <span className="text-blue-700 text-base mb-1 font-bold">REI Directory</span>
        <span className="text-gray-500 text-xs">Explore ReiDirectory</span>
      </div>
      {/* Bottom right: Explore Messaging */}
      <div className="flex-1 bg-green-100 rounded-xl shadow flex flex-col items-center justify-center p-3 min-w-[120px]">
        <span className="text-green-500 text-lg mb-2">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="4" fill="#b9fbc0"/>
            <path d="M8 12h8M12 8v8" stroke="#43a047" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="text-green-700 text-xs font-semibold">Explore Messaging</span>
      </div>
    </div>

    


    





  </section>
);

export default GreetingSection; 