import React from 'react'

const NavItem = ({ icon, text, href, isOpen, setIsOpen}) => {
  return (
    <div className='flex items-center gap-4 hover:text-gray-800 w-full cursor-pointer'>
        <a 
            href={href}
            onClick={() => setIsOpen((prev) => !prev)}
            data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
            data-tooltip-content={!isOpen ? text : undefined}
            className='text-xl py-1'>
                {icon}
        </a>

        {isOpen &&
            <div>{text}</div>
        }
    </div>
  )
}

export default NavItem
