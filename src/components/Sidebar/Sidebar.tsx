// @ts-nocheck
import { NavLink } from 'react-router-dom';
import React from 'react';
import Logo from '../../assets/logo-reisearch.jpg';

const navLinks = [
  { to: '/', label: 'Dashboard', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2" fill="#1976D2"/><rect x="14" y="3" width="7" height="7" rx="2" fill="#43A047"/><rect x="14" y="14" width="7" height="7" rx="2" fill="#FFB300"/><rect x="3" y="14" width="7" height="7" rx="2" fill="#039BE5"/></svg>
  ) },
  { to: '/rei-directory', label: 'REI Directory', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#1976D2"/><rect x="8" y="8" width="8" height="2" rx="1" fill="#fff"/><rect x="8" y="12" width="5" height="2" rx="1" fill="#fff"/></svg>
  ) },
  { to: '/feed', label: 'Feed', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#43A047"/><rect x="8" y="11" width="8" height="2" rx="1" fill="#fff"/></svg>
  ) },
  { to: '/profile', label: 'Profile', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#FFB300"/><rect x="6" y="16" width="12" height="4" rx="2" fill="#FFB300"/></svg>
  ) },
  { to: '/network', label: 'Network', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="7" cy="12" r="3" fill="#039BE5"/><circle cx="17" cy="12" r="3" fill="#1976D2"/><rect x="10" y="11" width="4" height="2" rx="1" fill="#B0BEC5"/></svg>
  ) },
  { to: '/home-dispo', label: 'HOME DISPO', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><polygon points="4,12 12,4 20,12 18,12 12,7 6,12" fill="#E53935"/><rect x="7" y="12" width="10" height="8" rx="2" fill="#B0C4D9"/></svg>
  ) },
  { to: '/properties', label: 'Properties', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="10" rx="2" fill="#43A047"/><rect x="8" y="12" width="8" height="2" rx="1" fill="#fff"/></svg>
  ) },
  { to: '/link-crm', label: 'Link CRM', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#8BC34A"/><rect x="8" y="8" width="8" height="2" rx="1" fill="#fff"/><rect x="8" y="12" width="5" height="2" rx="1" fill="#fff"/></svg>
  ) },
  { to: '/settings', label: 'Settings', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#B0BEC5"/><circle cx="12" cy="12" r="4" fill="#1976D2"/></svg>
  ) },
  { to: '/logout', label: 'Log Out', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2" fill="#E53935"/><path d="M16 12H8" stroke="#fff" strokeWidth="2"/></svg>
  ) },
];

const Sidebar: React.FC = () => (
  <aside className="bg-white text-gray-900 w-72 min-h-screen p-0 flex flex-col rounded-r-3xl shadow-xl border-r border-gray-200">
    {/* Top: Logo and yellow button */}
    <div className="flex flex-col items-center py-8 gap-4 border-b border-gray-100">
      <img src={Logo} alt="ReiSearch.com logo" className="h-12 w-auto object-contain" />
      <button className="bg-yellow-400 hover:bg-yellow-500 transition px-5 py-2 text-sm font-semibold text-gray-800 rounded-full shadow whitespace-nowrap" style={{fontSize:'1.1rem'}}>
        Staging / homedispo...
      </button>
    </div>
    {/* Navigation */}
    <nav className="flex-1 flex flex-col gap-1 mt-6 px-4">
      {navLinks.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition text-base hover:bg-blue-50 hover:text-blue-700 ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-800'}`
          }
          end
        >
          {link.icon}
          {link.label}
        </NavLink>
      ))}
    </nav>
    {/* Bottom section */}
    <div className="mt-auto flex flex-col gap-4 px-4 py-6 border-t border-gray-100">
      <button className="w-full bg-blue-50 text-blue-700 font-semibold py-2 rounded-lg hover:bg-blue-100 transition">Feedback</button>
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <svg viewBox="0 0 40 40" className="w-10 h-10">
            <circle cx="20" cy="20" r="18" fill="#E3F2FD" />
            <circle cx="20" cy="20" r="16" fill="none" stroke="#1976D2" strokeWidth="4" strokeDasharray="100" strokeDashoffset="40" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-bold text-blue-700 text-sm">60%</span>
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-700">Onboarding</div>
          <div className="text-xs text-gray-500">Complete Public Profile Information</div>
        </div>
      </div>
      <div className="bg-blue-50 text-blue-700 rounded-lg px-3 py-2 text-xs font-semibold flex flex-col gap-1">
        <span>Basic Plan</span>
        <span className="font-normal text-gray-500">You are on Free Plan. <a href="#" className="underline">See plans</a></span>
        <button className="text-xs text-blue-600 underline self-start mt-1">Upgrade Plan</button>
      </div>
    </div>
  </aside>
);

export default Sidebar; 