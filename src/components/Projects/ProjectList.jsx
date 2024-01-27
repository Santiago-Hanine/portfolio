import React from 'react'

const projects = [
    {
        name: 'Bytebusters',
        description: 'A landing page created for a California company that provides computer repairing services. The website is built with Next.js and Tailwind CSS, and it is fully responsive and mobile-friendly.',
        img: './bytebusters.png',
        link: 'https://github.com/Santiago-Hanine/bytebusters',
    },
    {
        name: 'Shopi',
        description: 'I created a Shop Ecommerce where you can shop for a wide range of products with ease and speed. Enjoy a modern, responsive, and intuitive shopping experience.',
        img: './Shopi.webp',
        link:'https://github.com/Santiago-Hanine/Shop-Ecommerce',
    },
    {
        name: 'Portfolio ',
        description: 'My React and Vite-powered portfolio is a showcase of my web development expertise, where I have applied all my knowledge. It is a dynamic, fast, and interactive display of my skills and achievements.',
        img: './portfolio.webp',
        link:'https://github.com/Santiago-Hanine/portfolio',
    },

]

export const ProjectList = () => {
  return projects
}
