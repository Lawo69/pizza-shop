export const navItems = [
    {
        label: "Menu", href: "/menu",
    },
    {
        label: "About Us", href: "/about",
    },
    {
        label: "Contact Us", href: "/contact",
    },
    {
        label: "Gallery", href: "/Gallery",
    }
]

import { FaHome, FaUser, FaEnvelope, FaBlog, FaProjectDiagram } from 'react-icons/fa';

export const menuItems = [
    {
        text: "Home",
        icon: <FaHome />,
        href: "/",
    },  
    {
        text: "About",
        icon: <FaUser />,
        href: "/about",
    },
    {
        text: "Contact",
        icon: <FaEnvelope />,
        href: "/contact",
    },
    {
        text: "Blog",
        icon: <FaBlog />,
        href: "/blog",
    },
    {
        text: "Projects",
        icon: <FaProjectDiagram />,
        href: "/projects",
    }
]