import React from 'react'

export const SidebarItems = () => {
    const sidebarItems = [
        {
            name: 'Home',
            link: '#home'
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
            link: 'Rcontact',
            classname: true,
        },
    ]

    return sidebarItems;
}
