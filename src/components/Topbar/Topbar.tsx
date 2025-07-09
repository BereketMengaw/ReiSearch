import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu } from 'lucide-react';
import Logo from '../../assets/logo-reisearch.jpg';
import Img from "../../assets/bereket.jpg"

const ICON_SIZE = 28; // Reduced from 36

const Topbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="w-full h-18 bg-white shadow-sm px-1 sm:px-3 flex items-center justify-between rounded-b-lg fixed top-0 left-0 right-0 z-50"> {/* fixed topbar */}
      {/* Left: Logo and Search by Transaction Button */}
      <div className="flex items-center gap-4 min-w-fit ">
        {/* Logo image */}
        <img src={Logo} alt="ReiSearch.com logo" className="h-10 w-auto object-contain" /> {/* h-10 instead of h-14 */}
        <button className="hidden sm:inline bg-yellow-400 hover:bg-yellow-500 transition px-4 py-1.5 text-xs font-semibold text-white rounded-full shadow whitespace-nowrap ml-2" style={{fontSize:'1rem'}}>
          Staging / homedispo...
        </button>
      </div>
      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center mx-2 sm:mx-4">
        <div className="flex items-center bg-gray-100 rounded-full px-2 sm:px-3 py-0.5 w-full max-w-xs sm:max-w-md border border-gray-200">
          {/* Custom house icon only, matching screenshot */}
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <defs>
              <linearGradient id="houseGradient" x1="16" y1="8" x2="16" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6CA0C8" />
                <stop offset="1" stopColor="#B0C4D9" />
              </linearGradient>
            </defs>
            {/* Roof */}
            <polygon points="4,16 16,6 28,16 25.5,16 16,8 6.5,16" fill="#B71C1C" />
            <rect x="14" y="4" width="4" height="4" fill="#B71C1C" rx="1" />
            {/* House body */}
            <rect x="8" y="12" width="16" height="16" rx="3" fill="url(#houseGradient)" />
            {/* Windows */}
            <rect x="10" y="15" width="5" height="5" rx="1" fill="#43A047" stroke="#fff" strokeWidth="0.5" />
            <rect x="17" y="15" width="5" height="5" rx="1" fill="#E53935" stroke="#fff" strokeWidth="0.5" />
            <rect x="10" y="22" width="5" height="5" rx="1" fill="#FFB300" stroke="#fff" strokeWidth="0.5" />
            <rect x="17" y="22" width="5" height="5" rx="1" fill="#039BE5" stroke="#fff" strokeWidth="0.5" />
          </svg>
          <input
            type="text"
            placeholder="Search for People or Properties..."
            className="bg-transparent outline-none flex-1 text-gray-700 text-xs sm:text-sm"
            style={{ minWidth: 0 }}
            aria-label="Search for people or properties"
          />
          <Search className="w-4 h-4 text-gray-500 ml-2 cursor-pointer hover:text-gray-700 transition" aria-label="Initiate search" />
        </div>
      </div>
      {/* Right: Responsive icons and profile */}
      <div className="hidden md:flex items-center gap-6 min-w-fit"> {/* gap-6 instead of gap-8 */}
        {/* Chat bubble icon */}
        <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="24" height="16" rx="6" fill="#2196F3"/>
          <path d="M10 26c0-2 2-4 6-4s6 2 6 4" stroke="#1976D2" strokeWidth="2" fill="none"/>
          <ellipse cx="12" cy="14" rx="2" ry="2" fill="#fff"/>
          <ellipse cx="16" cy="14" rx="2" ry="2" fill="#fff"/>
          <ellipse cx="20" cy="14" rx="2" ry="2" fill="#fff"/>
        </svg>
        {/* Sticky note/comment icon */}
        <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="20" height="20" rx="4" fill="#8BC34A"/>
          <rect x="10" y="12" width="12" height="2.5" rx="1.25" fill="#fff"/>
          <rect x="10" y="17" width="8" height="2.5" rx="1.25" fill="#fff"/>
          <path d="M26 22v2a2 2 0 0 1-2 2h-2l4-4z" fill="#689F38"/>
        </svg>
        <span className="relative">
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28C18.2091 28 20 26.2091 20 24H12C12 26.2091 13.7909 28 16 28Z" fill="#FFB300"/>
            <path d="M24 20V14C24 9.58172 20.4183 6 16 6C11.5817 6 8 9.58172 8 14V20L6 22V24H26V22L24 20Z" fill="#FFEB3B" stroke="#FFB300" strokeWidth="2"/>
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 border-2 border-white" style={{fontSize:'0.85rem'}}>74</span>
        </span>
        <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2].map(row => (
            [0,1,2].map(col => (
              <circle key={row*3+col} cx={8+col*8} cy={8+row*8} r={3.5} fill={`#1976D2`} />
            ))
          ))}
        </svg>
        <button className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-lg border border-blue-500 bg-white hover:bg-blue-50 transition shadow-sm"> {/* gap-2, pr-4, py-1.5 */}
          <img src={Img} alt="User" className="w-8 h-8 rounded-md object-cover border border-blue-500" /> {/* w-8 h-8 */}
          <span className="font-bold text-blue-700 text-base">Bereket</span> {/* text-base */}
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L10 12L14 8" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      {/* Mobile/Tablet: Hamburger menu for right side */}
      <button className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition" onClick={() => setMenuOpen(v => !v)} aria-label="Open menu">
        <Menu className="w-6 h-6 text-blue-700" /> {/* w-6 h-6 */}
      </button>
      {/* Dropdown menu for mobile/tablet */}
      <div
        ref={menuRef}
        className={`md:hidden absolute right-4 top-16 w-60 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 ease-in-out z-30
          ${menuOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-2'}
        `}
        style={{boxShadow: '0 8px 32px 0 rgba(60,60,100,0.12)'}}>
        <div className="flex flex-col gap-3 p-3">
          <div className="flex items-center gap-3 justify-center">
            {/* Chat bubble icon */}
            <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="6" width="24" height="16" rx="6" fill="#2196F3"/>
              <path d="M10 26c0-2 2-4 6-4s6 2 6 4" stroke="#1976D2" strokeWidth="2" fill="none"/>
              <ellipse cx="12" cy="14" rx="2" ry="2" fill="#fff"/>
              <ellipse cx="16" cy="14" rx="2" ry="2" fill="#fff"/>
              <ellipse cx="20" cy="14" rx="2" ry="2" fill="#fff"/>
            </svg>
            {/* Sticky note/comment icon */}
            <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="20" height="20" rx="4" fill="#8BC34A"/>
              <rect x="10" y="12" width="12" height="2.5" rx="1.25" fill="#fff"/>
              <rect x="10" y="17" width="8" height="2.5" rx="1.25" fill="#fff"/>
              <path d="M26 22v2a2 2 0 0 1-2 2h-2l4-4z" fill="#689F38"/>
            </svg>
            <span className="relative">
              <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 28C18.2091 28 20 26.2091 20 24H12C12 26.2091 13.7909 28 16 28Z" fill="#FFB300"/>
                <path d="M24 20V14C24 9.58172 20.4183 6 16 6C11.5817 6 8 9.58172 8 14V20L6 22V24H26V22L24 20Z" fill="#FFEB3B" stroke="#FFB300" strokeWidth="2"/>
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 border-2 border-white" style={{fontSize:'0.85rem'}}>74</span>
            </span>
            <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[0,1,2].map(row => (
                [0,1,2].map(col => (
                  <circle key={row*3+col} cx={8+col*8} cy={8+row*8} r={3.5} fill={`#1976D2`} />
                ))
              ))}
            </svg>
          </div>
          <button className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-lg border border-blue-500 bg-white hover:bg-blue-50 transition shadow-sm">
            <img src={Img} alt="User" className="w-8 h-8 rounded-md object-cover border border-blue-500" />
            <span className="font-bold text-blue-700 text-base">Bereket</span>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L10 12L14 8" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
