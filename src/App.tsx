import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';

function Sidebar() {
  return (
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
}

function Topbar() {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">rei-dashboard</h1>
      <div className="flex items-center gap-4">
        {/* Add user/profile/settings icons here */}
      </div>
    </header>
  );
}

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

// Placeholder pages
function Dashboard() { return <div>Dashboard Home</div>; }
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
