// @ts-nocheck
import { Link } from 'react-router-dom';
import React from 'react';

const Sidebar: React.FC = () => (
  <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col">
    <nav className="flex flex-col gap-4">
      <Link to="/" className="hover:text-blue-400">Dashboard</Link>
      <Link to="/feed" className="hover:text-blue-400">Feed</Link>
      <Link to="/profile" className="hover:text-blue-400">Profile</Link>
      <div>
        <span className="font-semibold">Network</span>
        <div className="ml-4 flex flex-col gap-2">
          <Link to="/network/properties" className="hover:text-blue-400">Properties</Link>
          <Link to="/network/link-crm" className="hover:text-blue-400">Link CRM</Link>
        </div>
      </div>
    </nav>
  </aside>
);

export default Sidebar; 