import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

// Main App component to render the Topbar and Sidebar
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-row">
      {/* Sidebar on the left */}
      <Sidebar />
      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* The Topbar component */}
        <Topbar />
        {/* Main routed content placeholder */}
        <main className="flex-1 p-4">
          {/* TODO: Add <Outlet /> or routed pages here */}
        </main>
      </div>
    </div>
  );
};

export default App;
