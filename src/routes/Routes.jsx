import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import CenteredLayout from '../layouts/CenteredLayout';
import SidebarLayout from '../layouts/SidebarLayout';

import Home from '../pages/home';
import Menu from '../pages/menu';
import About from '../pages/about';
import Contact from '../pages/contact';
import Gallery from '../pages/gallery';
import Cart from '../pages/cart';

import Login from '../pages/auth/login';

import Dashboard from '../pages/dashboard/Dashboard';
import Item from '../pages/dashboard/Item';

import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* All pages using the Navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* All pages without the Navbar */}
      <Route element={<CenteredLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Dashboard Pages */}
      <Route
        element={
          <ProtectedRoute>
            <SidebarLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/item" element={<Item />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
