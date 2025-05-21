import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/home';
import Menu from '../pages/menu';
import About from '../pages/about';
import Contact from '../pages/contact';
import Gallery from '../pages/gallery';

const AppRoutes = () => {
  return (
    <Routes>
      {/* All pages using the Navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
