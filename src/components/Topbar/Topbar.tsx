import React from "react";

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-4 shadow-md">
      {/* Left: Logo and Button */}
      <div className="flex items-center space-x-4">
        <img
          src="/logo.png"
          alt="ReiSearch Logo"
          className="h-8 object-contain"
        />
        <button className="bg-yellow-400 text-sm font-semibold text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition">
          Search by Transaction
        </button>
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 max-w-lg mx-4">
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-1">
          <img
            src="/home-icon.png"
            alt="Home"
            className="w-5 h-5 mr-2"
          />
          <input
            type="text"
            placeholder="Search for People or Properties..."
            className="w-full bg-transparent outline-none text-sm"
          />
          <svg
            className="w-5 h-5 text-gray-500 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Right: Icons and Profile */}
      <div className="flex items-center space-x-4">
        <img src="/wifi-icon.png" alt="WiFi" className="w-5 h-5" />
        <img src="/lightbulb-icon.png" alt="Idea" className="w-5 h-5" />
        <img src="/grid-icon.png" alt="Apps" className="w-5 h-5" />
        <div className="flex items-center space-x-2">
          <img
            src="/avatar.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">Abraham</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
