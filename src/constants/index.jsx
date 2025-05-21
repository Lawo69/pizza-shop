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

import { FaHome } from 'react-icons/fa';
import { FaBowlFood } from "react-icons/fa6";

export const menuItems = [
    {
        text: "Home",
        icon: <FaHome />,
        href: "/dashboard",
    },
    {
        text: "Items",
        icon: <FaBowlFood />,
        href: "/dashboard/item",
    }
]