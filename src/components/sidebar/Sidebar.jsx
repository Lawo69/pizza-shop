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
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSignOut = () => {
        localStorage.removeItem("user");
        navigate('/');
    };
  return (
    <div>
        <motion.div 
        initial={{ width: 60 }} 
        animate={{ width: isOpen ? 240 : 60 }}
        transition={{ duration: 0.4 }}
        className='bg-yellow-600 h-screen text-white p-4 flex flex-col gap-6'>
            <button onClick={() => setIsOpen((prev) => !prev)} className='text-xl mb-4'>
                <FaBars />
            </button>
            <nav className={`flex flex-col gap-10 h-full overflow-y-auto ${!isOpen && 'no-scrollbar'}`}>
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
            <button onClick={handleSignOut} className='text-xl mb-4'>
                <IoMdLogOut />
            </button>
        </motion.div>
        {!isOpen && <Tooltip id="sidebar-tooltip" offset={40} />}
    </div>
  )
}

export default Sidebar
