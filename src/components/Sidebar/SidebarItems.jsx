import React from 'react'

export const SidebarItems = () => {
    const sidebarItems = [
        {
            name: 'About Me',
            link: '#about'
        },
        {
            name: 'Skills',
            link: '#skills'
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
