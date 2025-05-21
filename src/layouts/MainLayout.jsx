import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const NavbarLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto pt-10 px-6"><Outlet/></div>
      </main>
    </div>
  );
}

export default NavbarLayout;
