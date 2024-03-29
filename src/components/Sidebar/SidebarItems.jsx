import React from 'react'

export const SidebarItems = () => {
    const sidebarItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '#about'
        },
        {
            name: 'Projects',
            link: '#projects',
        },
        {
            name: 'Contact',
            link: '#contact',
            classname: true,
        },
    ]

    return sidebarItems;
}
