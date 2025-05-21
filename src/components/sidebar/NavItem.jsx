import React from 'react'

const NavItem = ({ icon, text, href, isOpen, setIsOpen}) => {
  return (
    <div className='flex items-center gap-4 hover:text-gray-800 hover:bg-yellow-700 px-3 py-2 w-full cursor-pointer rounded-xl'>
        <a 
           
            onClick={() => setIsOpen((prev) => !prev)}
            data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
            data-tooltip-content={!isOpen ? text : undefined}
            className='text-xl py-1'>
                {icon}
        </a>

        {isOpen &&
            <a href={href}>{text}</a>
        }
    </div>
  )
}

export default NavItem
