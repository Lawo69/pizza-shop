import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

const SidebarLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 min-h-screen flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default SidebarLayout;
