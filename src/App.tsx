import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import GreetingSection from './components/GreetingSection/GreetingSection';
import PropertySection from './components/PropertySection/PropertySection';
import RecommendationsBox from './components/RecommendationsBox/RecommendationsBox';
import ProfileStatusTiles from './components/ProfileStatusTiles/ProfileStatusTiles';
import PropertyList from './components/PropertyList/PropertyList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

const Placeholder = ({ title }: { title: string }) => (
  <div className="text-2xl font-bold text-center text-gray-400 mt-20">{title} Page</div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans flex flex-col transition-colors duration-300">
        {/* Topbar at the top */}
        <Topbar />
        {/* Content row: Sidebar, main content, and right sidebar */}
        <div className="flex flex-row flex-1 w-full pt-4">
          {/* Sidebar on the left, below Topbar */}
          <Sidebar />
          {/* Main content and right sidebar */}
          <div className="flex flex-row flex-1">
            {/* Main routed content */}
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/" element={
                  <>
                    <div className="flex flex-row gap-24 mb-4">
                      <GreetingSection />
                      <RecommendationsBox />
                    </div>
                    <PropertySection />
                    <PropertyList />
                  </>
                } />
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
            {/* Right sidebar: ProfileStatusTiles at the top */}
            <div className="flex flex-col items-end mt-0 ml-4" style={{minWidth: '260px'}}>
              <ProfileStatusTiles />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
