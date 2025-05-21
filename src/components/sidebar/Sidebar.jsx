import React from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'
import { IoMdLogOut } from "react-icons/io";
import { Tooltip } from 'react-tooltip'
import { menuItems } from '../../constants/index'
import NavItem from './NavItem'

const Sidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(true);

    const handleSignOut = () => {
        localStorage.removeItem("user");
        navigate('/');
    };
  return (
    <div>
        <motion.div 
        initial={{ width: 60 }} 
        animate={{ width: isOpen ? 200 : 60 }}
        transition={{ duration: 0.4 }}
        className='bg-yellow-600 h-screen text-white p-4 flex flex-col gap-6'>
            <button onClick={() => setIsOpen((prev) => !prev)} className='text-xl mb-4'>
                <FaBars />
            </button>
            <nav className={`flex flex-col gap-5 h-full overflow-y-auto overflow-x-hidden ${!isOpen && 'no-scrollbar'}`}>
                {menuItems.map((item, index) => (
                    <NavItem
                        key={index}
                        text={item.text}
                        icon={item.icon}
                        href={item.href}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                ))}
            </nav>
            <div onClick={handleSignOut} className='flex items-center cursor-pointer hover:bg-yellow-700 px-2 py-3 rounded-xl gap-5 text-xl mb-4'>
                <IoMdLogOut /> <p className='text-sm lg:text-lg'>Logout</p>
            </div>
        </motion.div>
        {!isOpen && <Tooltip id="sidebar-tooltip" offset={40} />}
    </div>
  )
}

export default Sidebar
