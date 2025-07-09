// @ts-nocheck
import { NavLink } from 'react-router-dom';
import React from 'react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navLinks = [
  { to: '/', label: 'Dashboard', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="6" fill="#f3f3f3"/><path d="M7 7h10v10H7z" fill="#222"/></svg>
  ) },
  { to: '/rei-directory', label: (
    <span className="font-bold text-blue-200  text-base tracking-tight">REI <span className="text-blue-600">Directory</span></span>
  ), icon: null },
  { to: '/feed', label: 'Feed', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="3" fill="#f3f3f3"/><rect x="7" y="8" width="10" height="2" rx="1" fill="#222"/><rect x="7" y="12" width="7" height="2" rx="1" fill="#222"/></svg>
  ) },
  { to: '/profile', label: 'Profile', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#f3f3f3"/><circle cx="12" cy="8" r="3" fill="#222"/><rect x="6" y="15" width="12" height="5" rx="2.5" fill="#f3f3f3"/><rect x="8" y="16" width="8" height="2" rx="1" fill="#222"/></svg>
  ) },
  { to: '/network', label: 'Network', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="7" cy="12" r="2.5" fill="#f3f3f3" stroke="#222" strokeWidth="1.5"/><circle cx="17" cy="12" r="2.5" fill="#f3f3f3" stroke="#222" strokeWidth="1.5"/><circle cx="12" cy="8" r="2.5" fill="#f3f3f3" stroke="#222" strokeWidth="1.5"/></svg>
  ), dropdown: true },
  { to: '/home-dispo', label: 'HOME DISPO', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M3 12L12 5l9 7" stroke="#222" strokeWidth="2"/><rect x="6" y="12" width="12" height="7" rx="2" fill="#f3f3f3" stroke="#222" strokeWidth="1.5"/></svg>
  ), dropdown: true },
  { to: '/properties', label: 'Properties', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M3 12L12 5l9 7" stroke="#222" strokeWidth="2"/><rect x="6" y="12" width="12" height="7" rx="2" fill="#f3f3f3" stroke="#222" strokeWidth="1.5"/></svg>
  ), dropdown: true },
  { to: '/link-crm', label: 'Link CRM', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M8 12a4 4 0 0 1 4-4h4a4 4 0 1 1 0 8h-4a4 4 0 1 1 0-8z" fill="#f3f3f3" stroke="#222" strokeWidth="1.5"/><path d="M8 12h8" stroke="#222" strokeWidth="1.5"/></svg>
  ) },
  { to: '/settings', label: 'Settings', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#f3f3f3" stroke="#222" strokeWidth="1.5"/><path d="M12 8v4l3 3" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ) },
  { to: '/logout', label: 'Log Out', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#f3f3f3"/><path d="M15 12H9" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 9l3 3-3 3" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ) },
];

const DropdownArrow = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 20 20" className="ml-auto"><path d="M6 8l4 4 4-4" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg>
);

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => (
  <>
    <aside className="hidden mt-10 md:flex fixed mt-15 mb-5 left-3 top-10 bottom-0 z-30 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-60 h-screen rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col justify-between p-0 ml-2 max-h-[calc(100vh-5rem)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="flex flex-col gap-1 pt-3 px-2">
        {/* REI Directory (standalone) */}
        {navLinks.slice(0, 2).map(link => (
          <NavLink
            key={typeof link.label === 'string' ? link.to : link.to + '-label'}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition text-base hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-300 ${isActive ? 'bg-blue-100 text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-white'}`
            }
            end
          >
            {link.icon}
            {link.label}
            {link.dropdown && <DropdownArrow />}
          </NavLink>
        ))}
        {/* Grouped nav options below REI Directory */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl mt-1 mb-3 py-1 px-1 flex flex-col gap-0.5 transition-colors duration-300">
          {navLinks.slice(2).map(link => (
            <NavLink
              key={typeof link.label === 'string' ? link.to : link.to + '-label'}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition text-sm hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-300 ${isActive ? 'bg-blue-100 text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-white'}`
              }
              end
            >
              {link.icon && React.cloneElement(link.icon, { width: 18, height: 18 })}
              {link.label}
              {link.dropdown && <DropdownArrow />}
            </NavLink>
          ))}
        </div>
      </nav>
      {/* Feedback and bottom section grouped */}
      <div className="flex flex-col gap-2 px-3 pb-2 mb-2">
        <div className="mb-1">
          <button className="w-full flex items-center gap-2 bg-blue-50 dark:bg-blue-900 text-gray-700 dark:text-gray-200 font-medium py-2 px-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition text-base border border-blue-100 dark:border-blue-900">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16l-8-4-8 4V4z" stroke="#888" strokeWidth="1.5" fill="none"/></svg>
            Feedback
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {/* Onboarding card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-100 dark:border-gray-800 p-3 flex flex-col gap-2 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <span className="text-blue-700 font-bold text-base">Onboarding</span>
              <span className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <circle cx="20" cy="20" r="18" fill="#fff" stroke="#E3F2FD" strokeWidth="2" />
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#1976D2" strokeWidth="4" strokeDasharray="100.53" strokeDashoffset="10.05" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-blue-700">90%</span>
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 mt-1 cursor-pointer transition-colors duration-300">
              <span className="text-sm text-gray-800 font-medium">Complete <span className="font-bold">Public Profile</span> Information</span>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#1976D2" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
          </div>
          {/* Basic Plan card */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl px-4 py-3 flex flex-col gap-1 mt-1 transition-colors duration-300">
            <span className="text-blue-400 font-bold text-base">Basic Plan</span>
            <span className="text-gray-700 dark:text-gray-200 text-sm">You are on Free Plan. Consider upgrading</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold text-gray-800 dark:text-gray-100 text-sm">Upgrade Plan</span>
              <button className="text-blue-500 dark:text-blue-300 text-sm underline font-medium ml-1">Dismiss</button>
            </div>
          </div>
        </div>
        {/* Footer links */}
        <div className="px-1 pt-2 pb-1 text-xs">
          <div className="flex flex-wrap gap-2 mb-1">
            <a href="#" className="hover:underline text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Support</a>
            <span className="text-blue-400 dark:text-blue-300">·</span>
            <a href="#" className="hover:underline text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Privacy</a>
            <span className="text-blue-400 dark:text-blue-300">·</span>
            <a href="#" className="hover:underline text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Terms</a>
          </div>
          <div className="text-gray-700 dark:text-gray-300">Copyright © 2025 · <a href="#" className="hover:underline text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">REICB</a></div>
        </div>
      </div>
    </aside>
    {/* Mobile slide-in sidebar */}
    <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${sidebarOpen ? 'block' : 'pointer-events-none'}`} style={{zIndex: 1000}}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setSidebarOpen(false)}
        style={{zIndex: 1001}}
      />
      {/* Sidebar panel */}
      <aside className={`absolute top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{zIndex: 1002}}>
        <button className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 text-2xl" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">&times;</button>
        {/* Navigation (reuse existing nav) */}
        <nav className="flex flex-col gap-1 pt-3 px-2 mt-10">
          {/* REI Directory (standalone) */}
          {navLinks.slice(0, 2).map(link => (
            <NavLink
              key={typeof link.label === 'string' ? link.to : link.to + '-label'}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition text-base hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-300 ${isActive ? 'bg-blue-100 text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-white'}`
              }
              end
              onClick={() => setSidebarOpen(false)}
            >
              {link.icon}
              {link.label}
              {link.dropdown && <DropdownArrow />}
            </NavLink>
          ))}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl mt-1 mb-3 py-1 px-1 flex flex-col gap-0.5 transition-colors duration-300">
            {navLinks.slice(2).map(link => (
              <NavLink
                key={typeof link.label === 'string' ? link.to : link.to + '-label'}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition text-sm hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-300 ${isActive ? 'bg-blue-100 text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-white'}`
                }
                end
                onClick={() => setSidebarOpen(false)}
              >
                {link.icon && React.cloneElement(link.icon, { width: 18, height: 18 })}
                {link.label}
                {link.dropdown && <DropdownArrow />}
              </NavLink>
            ))}
      </div>
    </nav>
  </aside>
    </div>
  </>
);

export default Sidebar; 