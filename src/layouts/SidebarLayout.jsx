import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

const SidebarLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 min-h-screen flex overflow-scroll p-5">
        <Outlet />
      </main>
    </div>
  );
}

export default SidebarLayout;
