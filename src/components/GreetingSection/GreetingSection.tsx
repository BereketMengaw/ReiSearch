import React from 'react';
import Bereket from "../../../src/assets/bereket.jpg";
import Logo from "../../assets/logo-reisearch.jpg";

const GreetingSection: React.FC = () => (
  <section className="w-full mt-10 max-w-3xl ml-[272px] grid grid-cols-3 grid-rows-5/2 gap-6 mb-4">
    {/* Top left: Greeting, progress, profile, button (spans 2 columns) */}
    <div className="col-span-2 mt-3 row-span-3/2 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow p-6 flex items-center gap-6 transition-colors duration-300">
   <div className="flex-1 flex flex-col justify-between h-full">
    <span className="text-gray-800 dark:text-gray-100 text-lg font-semibold mb-1">Hey, Bereket</span>
    <span className="text-3xl font-bold text-gray-900 dark:text-white mb-0.5">73%</span>
    <div className="w-full h-2 rounded-full bg-blue-100">
      <div className="h-2 rounded-full bg-blue-500" style={{ width: '73%' }}></div>
    </div>
    <button className="flex items-center gap-1 px-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition shadow w-fit">
      <svg width="14" height="14" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9" stroke="#fff" strokeWidth="2" fill="none" />
        <polygon points="8,6 14,10 8,14" fill="#fff" />
      </svg>
      Learn More
    </button>
  </div>
  <img src={Bereket} alt="Profile" className="w-28 h-28 rounded-xl object-cover " />
</div>


    {/* Top right: Public Info and Enable Notifications */}
    <div className="col-span-1 row-span-1 flex gap-3 min-w-[270px] mt-4">
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-xl shadow flex flex-col items-center justify-center p-2 transition-colors duration-300">
        <span className="text-yellow-400 text-base mb-1">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="#facc15" strokeWidth="2" fill="transparent" />
            <text x="12" y="16" textAnchor="middle" fontSize="12.5" fill="#facc15">i</text>
          </svg>
        </span>
        <span className="text-gray-700 dark:text-gray-100 text-xs font-medium">Public Info</span>
      </div>
      <div className="flex-1 bg-green-100 dark:bg-green-900 rounded-xl shadow flex flex-col items-center justify-center p-2 transition-colors duration-300">
        <span className="text-green-500 text-base mb-1">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 4a6 6 0 0 1 6 6v3.5l1.29 2.58A1 1 0 0 1 18.42 18H5.58a1 1 0 0 1-.87-1.42L6 13.5V10a6 6 0 0 1 6-6Z" fill="#b9fbc0" stroke="#43a047" strokeWidth="2"/><circle cx="12" cy="20" r="2" fill="#43a047"/></svg>
        </span>
        <span className="text-green-700 dark:text-green-200 text-xs font-medium">Enable Notifications</span>
      </div>
    </div>

    {/* bottom section */}


    <div className="col-span-2 row-span-1 bg-white dark:bg-gray-800 rounded-xl shadow p-3 flex gap-3 transition-colors duration-300">
      {/* Bottom left: Add Property */}

      
      <div className="flex-1 bg-purple-100 dark:bg-purple-900 rounded-xl shadow flex flex-col items-center justify-center p-3 min-w-[120px] transition-colors duration-300">
  <span className="text-purple-400 text-lg mb-2">
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      {/* Transparent inside, black ring */}
      <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="transparent" />
      {/* Plus sign */}
      <path d="M12 8v8M8 12h8" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </span>
  <span className="text-purple-700 dark:text-purple-200 text-xs font-semibold">Add Property</span>
</div>



      {/* Bottom center: REI Directory */}
      <div className="flex-1 bg-blue-100 dark:bg-blue-900 rounded-xl shadow flex flex-col items-center justify-center p-3 min-w-[120px] border border-blue-100 dark:border-blue-900 transition-colors duration-300 relative overflow-hidden">
        {/* Faded logo background */}
        <img src={Logo} alt="ReiSearch Logo" className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 object-contain opacity-20 pointer-events-none select-none" />
        {/* Foreground content */}
        <span className="relative z-10 text-gray-500 dark:text-gray-300  top-1/4 text-xs font-semibold py-6 block text-center">Explore ReiDirectory</span>
      </div>
      {/* Bottom right: Explore Messaging */}
      <div className="flex-1 bg-green-100 dark:bg-green-900 rounded-xl shadow flex flex-col items-center justify-center p-3 min-w-[120px] transition-colors duration-300">
        
        
        <span className="text-blue-600 text-lg mb-2">
          <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M29,16V28a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16a1,1,0,0,1,0,2H5V27H27V16a1,1,0,0,1,2,0Zm-18.54.13L22.29,4.29a3.83,3.83,0,0,1,5.42,5.42L15.87,21.54a1,1,0,0,1-.38.24L9.33,23.94A1,1,0,0,1,9,24a1,1,0,0,1-.94-1.33l2.16-6.16A1,1,0,0,1,10.46,16.13Zm.17,5.24,4-1.4L26.29,8.29a1.82,1.82,0,0,0-2.58-2.58L12,17.38Z" fill="#2563eb" className="dark:fill-blue-400"/>
          </svg>
        </span>

        <span className="text-blue-700 dark:text-blue-300 text-xs font-semibold">Explore Messaging</span>
      </div>
    </div>

    


    





  </section>
);

export default GreetingSection; 