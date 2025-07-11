import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../button/Button";

import logo from '/assets/logo.png';
import { navItems } from '../../constants';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/');
    setMobileDrawerOpen(false);
  };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg'>
      <div className="container px-4 mx-auto relative text-sm">
        <div className='flex justify-between items-center'>
          <a href='/' className="flex items-center flex-shrink-0">
            <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
            <span className='text-xl tracking-tight'>Pizza Shop</span>
          </a>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className='hidden lg:flex justify-center space-x-5 items-center'>
            {user ? (
              <Button type="button" variant='secondary' onClick={handleSignOut}>
                Sign Out
              </Button>
            ) : (
              <Button type="button" variant='secondary' onClick={() => navigate('/login')}>
                Sign In
              </Button>
            )}
            <a href="/cart" className='bg-yellow-600 hover:bg-yellow-700 transition-all text-white py-3 px-3 rounded-full'>
              <FaCartShopping />
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-4 text-center'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='flex space-x-6 mt-4'>
              {user ? (
                <Button type="button" variant='secondary' onClick={handleSignOut}>
                  Sign Out
                </Button>
              ) : (
                <Button type="button" variant='secondary' onClick={() => navigate('/login')}>
                  Sign In
                </Button>
              )}
              <Button type="button" variant='primary' onClick={() => navigate('/cart')}>
                Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
