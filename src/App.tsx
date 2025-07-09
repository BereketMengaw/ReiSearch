import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

const Placeholder = ({ title }: { title: string }) => (
  <div className="text-2xl font-bold text-center text-gray-400 mt-20">{title} Page</div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans flex flex-col ml-10">
        {/* Topbar at the top */}
        <Topbar />
        {/* Content row: Sidebar and main content */}
        <div className="flex flex-row flex-1 w-full pt-4">
          {/* Sidebar on the left, below Topbar */}
          <Sidebar />
          {/* Main routed content */}
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Placeholder title="Dashboard" />} />
              <Route path="/rei-directory" element={<Placeholder title="REI Directory" />} />
              <Route path="/feed" element={<Placeholder title="Feed" />} />
              <Route path="/profile" element={<Placeholder title="Profile" />} />
              <Route path="/network" element={<Placeholder title="Network" />} />
              <Route path="/home-dispo" element={<Placeholder title="HOME DISPO" />} />
              <Route path="/properties" element={<Placeholder title="Properties" />} />
              <Route path="/link-crm" element={<Placeholder title="Link CRM" />} />
              <Route path="/settings" element={<Placeholder title="Settings" />} />
              <Route path="/logout" element={<Placeholder title="Log Out" />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
