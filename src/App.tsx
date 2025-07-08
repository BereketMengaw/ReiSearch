import Sidebar from './components/Sidebar/Sidebar';
import GreetingSection from './components/GreetingSection/GreetingSection';
import ProfileStatusTiles from './components/ProfileStatusTiles/ProfileStatusTiles';
import RecommendationsBox from './components/RecommendationsBox/RecommendationsBox';
import ChecklistProgress from './components/ChecklistProgress/ChecklistProgress';
import PropertySection from './components/PropertySection/PropertySection';
import Topbar from './components/Topbar/Topbar';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 bg-gray-50 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <GreetingSection />
      <ProfileStatusTiles />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 flex flex-col gap-4">
          <RecommendationsBox />
          <ChecklistProgress />
        </div>
        <div className="flex flex-col gap-4">
          <PropertySection />
        </div>
      </div>
    </div>
  );
}

function Feed() { return <div>Feed Page</div>; }
function Profile() { return <div>Profile Page</div>; }
function Network() { return <div>Network Overview</div>; }
function Properties() { return <div>Network Properties</div>; }
function LinkCRM() { return <div>Network Link CRM</div>; }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="network" element={<Network />} />
          <Route path="network/properties" element={<Properties />} />
          <Route path="network/link-crm" element={<LinkCRM />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
